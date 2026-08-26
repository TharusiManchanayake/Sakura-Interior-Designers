import { useParams, Link } from "react-router-dom";
import { rooms, portfolioItems } from "../../data/portfolioData";

export default function ByRoom() {
  const { slug } = useParams();
  const room = rooms.find((r) => r.slug === slug);
  const items = portfolioItems.filter((item) => item.room === slug);

  if (!room) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-2xl">Room not found.</p>
        <Link to="/portfolio" className="text-blushDark underline">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-sm uppercase tracking-widest text-blushDark mb-2">By Room</p>
      <h1 className="text-4xl font-bold mb-10">{room.name}</h1>

      {items.length === 0 ? (
        <p className="text-stone-600">
          No projects added for this room yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id}>
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-sm text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}