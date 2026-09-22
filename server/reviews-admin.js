// Owner tool for moderating customer reviews. Run inside the server folder:
//
//   node reviews-admin.js list              show reviews waiting for approval
//   node reviews-admin.js list all          show every review
//   node reviews-admin.js approve RV-XXXXXX put a review on the website
//   node reviews-admin.js reject  RV-XXXXXX hide a review (kept in the file)
//   node reviews-admin.js delete  RV-XXXXXX remove a review completely
//
// The server doesn't need to be restarted. Changes show up straight away.

import { listReviews, setReviewStatus, deleteReview } from "./reviewStore.js";

const [command, arg] = process.argv.slice(2);

function show(list) {
  if (list.length === 0) {
    console.log("No reviews to show.");
    return;
  }
  for (const r of list) {
    console.log("------------------------------------------------------");
    console.log(`${r.id}   [${r.status}]   ${r.createdAt.slice(0, 16).replace("T", " ")}`);
    console.log(`${r.name}  ·  ${r.category}`);
    console.log(`"${r.headline}"`);
    console.log(r.quote);
  }
  console.log("------------------------------------------------------");
  console.log(`${list.length} review${list.length === 1 ? "" : "s"}.`);
}

switch (command) {
  case "list":
    show(listReviews(arg === "all" ? undefined : "pending"));
    break;

  case "approve":
  case "reject": {
    if (!arg) {
      console.log(`Usage: node reviews-admin.js ${command} RV-XXXXXX`);
      break;
    }
    const updated = setReviewStatus(arg, command === "approve" ? "approved" : "rejected");
    console.log(updated ? `${updated.id} is now ${updated.status}.` : `No review found with id ${arg}.`);
    break;
  }

  case "delete": {
    if (!arg) {
      console.log("Usage: node reviews-admin.js delete RV-XXXXXX");
      break;
    }
    console.log(deleteReview(arg) ? `${arg} deleted.` : `No review found with id ${arg}.`);
    break;
  }

  default:
    console.log("Commands: list | list all | approve <id> | reject <id> | delete <id>");
}