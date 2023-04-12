import _data from "$data/interactive-comments/data.json";
import { currentUser, comments } from "$lib/stores/interactive-comments";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  /** @type InteractiveComments.Data */
  const data = _data;

  currentUser.set(data.currentUser);
  comments.set(data.comments);
  return {};
}
