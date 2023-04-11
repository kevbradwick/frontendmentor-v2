import { writable } from 'svelte/store';

// triggered when the user wants to delete a comment
export const onDeleteComment = writable(0);

// triggered when the user wants to edit a comment
export const onEditComment = writable(0);

export const currentUser = writable('');
