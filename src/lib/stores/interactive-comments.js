import { writable } from 'svelte/store';

export const currentUser = writable('');

export const votes = writable({});

export const comments = writable([]);