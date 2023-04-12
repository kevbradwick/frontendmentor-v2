import { writable } from "svelte/store";

/** @type InteractiveComments.User _currentUser */
const _currentUser = {
  username: "anonymous",
  image: {
    png: "--",
    webp: "--"
  }
};

export const currentUser = writable(_currentUser);

export const votes = writable({});

/** @type InteractiveComments.Comment[] _comments */
const _comments = [];

export const comments = writable(_comments);
