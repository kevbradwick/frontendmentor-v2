import data from '$data/interactive-comments/data.json';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		data
	};
}
