import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { STYLES, QUIZ_ROOMS, imageFor, roomImage } from "../data/styleQuizData";

/* Which style-scoring questions to ask, in order. Each one (except "mood")
   pulls its photo for a style from the matching folder + suffix, e.g.
   folder "q3" + suffix "material" looks for "<slug>material.jpg". */
const QUESTIONS = [
  { id: "q1", folder: "q1", suffix: "", type: "image", prompt: "Which room feels most like you?" },
  { id: "q2", type: "palette", prompt: "Which colour palette are you drawn to?" },
  { id: "q3", folder: "q3", suffix: "material", type: "image", prompt: "Which materials feel right for your home?" },
  { id: "q4", folder: "q4", suffix: "bed", type: "image", prompt: "Which bedroom would help you switch off?" },
  { id: "q5", folder: "q5", suffix: "furniture", type: "image", prompt: "Which furniture shapes catch your eye?" },
  { id: "q6", folder: "q6", suffix: "decor", type: "image", prompt: "Which small detail would you add to a room?" },
  { id: "q7", type: "mood", prompt: "Which words feel like home to you?" },
];

const TOTAL_STEPS = QUESTIONS.length + 1; // + the room question

function computeScores(selections) {
  const scores = Object.fromEntries(STYLES.map((s) => [s.slug, 0]));
  for (const set of Object.values(selections)) {
    for (const slug of set) {
      if (slug in scores) scores[slug] += 1;
    }
  }
  return scores;
}

function topStyles(selections) {
  const scores = computeScores(selections);
  const ranked = STYLES.map((s) => ({ ...s, score: scores[s.slug] }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);
  return { primary: ranked[0] ?? null, secondary: ranked[1] ?? null };
}

/* One selectable card. Renders a photo, a colour palette, or a plain word,
   depending on the question type. */
function OptionCard({ type, name, image, colors, selected, onClick }) {
  const base =
    "relative text-left border rounded-sm overflow-hidden transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal";
  const border = selected ? "border-charcoal ring-2 ring-charcoal" : "border-stone hover:border-charcoal";

  if (type === "mood") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={selected}
        className={`${base} ${border} px-5 py-4 text-center`}
      >
        <span className="text-sm font-semibold">{name}</span>
      </button>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-pressed={selected} className={`${base} ${border}`}>
      {selected && (
        <span className="absolute top-2 right-2 z-10 w-5 h-5 rounded-full bg-charcoal text-cream text-xs flex items-center justify-center">
          ✓
        </span>
      )}

      {type === "palette" ? (
        <div className="p-3">
          <div className="flex h-14 rounded-sm overflow-hidden mb-2">
            {colors.map((c) => (
              <span key={c.hex} className="flex-1" style={{ backgroundColor: c.hex }} title={c.name} />
            ))}
          </div>
          <p className="text-xs font-medium text-center">{name}</p>
        </div>
      ) : (
        <>
          <div className="aspect-square bg-stone">
            <img src={image} alt={name} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs font-medium text-center py-2">{name}</p>
        </>
      )}
    </button>
  );
}

export default function FindMyStyle() {
  const [step, setStep] = useState(-1); // -1 intro, 0..6 questions, 7 room, 8 result
  const [selections, setSelections] = useState({}); // { q1: Set([...]), ... }
  const [room, setRoom] = useState(null);

  const { primary, secondary } = useMemo(() => topStyles(selections), [selections]);

  function toggle(qid, slug) {
    setSelections((prev) => {
      const set = new Set(prev[qid] ?? []);
      set.has(slug) ? set.delete(slug) : set.add(slug);
      return { ...prev, [qid]: set };
    });
  }

  function restart() {
    setSelections({});
    setRoom(null);
    setStep(-1);
  }

  const hasAnySelection = Object.values(selections).some((set) => set.size > 0);

  /* ---------- Intro ---------- */
  if (step === -1) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-blushDark mb-2">Find My Style</p>
        <h1 className="text-4xl font-bold mb-4">Not sure what your style is?</h1>
        <p className="text-stone-600 mb-10">
          Answer a few quick questions about the rooms, colours and details you're drawn to,
          and we'll match you with the interior style that fits you best. Pick as many as you
          like on each question, it takes about 2 minutes.
        </p>
        <button
          type="button"
          onClick={() => setStep(0)}
          className="bg-charcoal text-cream px-8 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors"
        >
          Start the quiz
        </button>
      </div>
    );
  }

  /* ---------- Result ---------- */
  if (step === TOTAL_STEPS) {
    if (!primary) {
      return (
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">We need a little more to go on</h1>
          <p className="text-stone-600 mb-8">
            You didn't pick anything on the way through, go back and choose whatever catches
            your eye, even just a few, and we'll work out your style from there.
          </p>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors"
          >
            Back to the quiz
          </button>
        </div>
      );
    }

    const heroImg = imageFor("q1", primary.slug);
    const portfolioHref = primary.sitePortfolioSlug
      ? `/portfolio/style/${primary.sitePortfolioSlug}`
      : "/portfolio";

    return (
      <div>
        {heroImg && (
          <div className="aspect-[12/5] w-full overflow-hidden">
            <img src={heroImg} alt={primary.name} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-widest text-blushDark mb-2">Your style is</p>
          <h1 className="text-4xl font-bold mb-2">{primary.name}</h1>
          <p className="text-xl text-blushDark mb-6">{primary.mood}</p>

          {secondary && (
            <p className="text-stone-600 mb-8">
              With a touch of <span className="font-semibold">{secondary.name}</span> ({secondary.mood})
            </p>
          )}

          <div className="flex justify-center h-10 rounded-sm overflow-hidden mb-2 max-w-xs mx-auto">
            {primary.colors.map((c) => (
              <span key={c.hex} className="flex-1" style={{ backgroundColor: c.hex }} title={c.name} />
            ))}
          </div>
          <p className="text-xs text-stone-500 mb-10">
            {primary.colors.map((c) => c.name).join(" · ")}
          </p>

          {room && (
            <p className="text-stone-700 mb-10">
              Designing a {QUIZ_ROOMS.find((r) => r.slug === room)?.name.toLowerCase()}? {primary.name}{" "}
              is a great place to start.
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              to={portfolioHref}
              className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors"
            >
              See {primary.name} projects
            </Link>
            <Link
              to="/booking"
              className="border border-charcoal px-6 py-3 text-sm uppercase tracking-wide hover:bg-charcoal hover:text-cream transition-colors"
            >
              Book a consultation
            </Link>
          </div>

          <button type="button" onClick={restart} className="text-sm underline text-stone-600 hover:text-blushDark">
            Retake the quiz
          </button>
        </div>
      </div>
    );
  }

  /* ---------- Room question (practical, single choice) ---------- */
  if (step === QUESTIONS.length) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="w-full h-1.5 bg-stone rounded-full mb-10">
          <div
            className="h-full bg-blushDark rounded-full transition-all"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center">Which room are you designing right now?</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {QUIZ_ROOMS.map((r) => {
            const img = roomImage(r.slug);
            if (!img) return null;
            return (
              <OptionCard
                key={r.slug}
                type="image"
                name={r.name}
                image={img}
                selected={room === r.slug}
                onClick={() => setRoom(room === r.slug ? null : r.slug)}
              />
            );
          })}
        </div>

        <div className="flex justify-between items-center">
          <button type="button" onClick={() => setStep(step - 1)} className="text-sm underline text-stone-600">
            ← Back
          </button>
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors"
          >
            See my style
          </button>
        </div>
      </div>
    );
  }

  /* ---------- Scored questions ---------- */
  const q = QUESTIONS[step];
  const selected = selections[q.id] ?? new Set();

  const options = STYLES.map((s) => ({
    slug: s.slug,
    name: s.name,
    colors: s.colors,
    word: s.mood,
    image: q.type === "image" ? imageFor(q.folder, s.slug, q.suffix) : null,
  })).filter((o) => q.type !== "image" || o.image);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="w-full h-1.5 bg-stone rounded-full mb-10">
        <div
          className="h-full bg-blushDark rounded-full transition-all"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      <h2 className="text-2xl font-bold mb-2 text-center">{q.prompt}</h2>
      <p className="text-sm text-stone-500 mb-8 text-center">Select as many as you like.</p>

      <div
        className={`grid gap-3 mb-10 ${
          q.type === "mood"
            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
            : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        }`}
      >
        {options.map((o) => (
          <OptionCard
            key={o.slug}
            type={q.type}
            name={q.type === "mood" ? o.word : o.name}
            image={o.image}
            colors={o.colors}
            selected={selected.has(o.slug)}
            onClick={() => toggle(q.id, o.slug)}
          />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="text-sm underline text-stone-600"
        >
          {step === 0 ? "← Start over" : "← Back"}
        </button>
        <button
          type="button"
          onClick={() => setStep(step + 1)}
          className="bg-charcoal text-cream px-6 py-3 text-sm uppercase tracking-wide hover:bg-blushDark transition-colors"
        >
          Next
        </button>
      </div>

      {!hasAnySelection && step === QUESTIONS.length - 1 && (
        <p className="text-xs text-stone-500 text-center mt-4">
          Tip: pick at least a few things you like across the quiz so we can find your style.
        </p>
      )}
    </div>
  );
}