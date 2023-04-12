// @ts-nocheck
import data from '$data/interactive-comments/data.json';
import { currentUser, comments } from '$lib/stores/interactive-comments';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	currentUser.set(data.currentUser.username);
	comments.set(data.comments);
	return {};
}
