<script>
  import { createEventDispatcher } from "svelte";
  import { currentUser } from "$lib/stores/interactive-comments";
  import Author from "./Author.svelte";

  let content = "";
  export let buttonText = "Reply";

  const dispatch = createEventDispatcher();
</script>

<div class="container">
  <div class="comment-body">
    <textarea class="comment-input" placeholder="Add a comment..." rows="6" bind:value={content} />
  </div>

  <div class="comment-author">
    <Author username={$currentUser.username} />
  </div>

  <div class="comment-actions">
    <button type="submit" on:click={() => dispatch("save", { content })}>{buttonText}</button>
  </div>
</div>

<style type="text/css">
  .container {
    display: grid;
    grid-template: auto / repeat(2, auto);
    grid-template-areas:
      "a a"
      "b c";
    gap: 0.7rem;
    background-color: var(--white);
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .comment-author {
    grid-area: b;
  }
  .comment-actions {
    justify-self: end;
    grid-area: c;
  }
  .comment-body {
    grid-area: a;
  }

  textarea {
    background-color: var(--white);
    border-radius: 0.5rem;
    border: 1px solid var(--light-gray);
    padding: 1rem;
    color: var(--gray-blue);
    width: 100%;
  }

  textarea:focus {
    outline: none;
    border-color: var(--moderate-blue);
  }

  button {
    border: none;
    color: var(--white);
    background-color: var(--moderate-blue);
    padding: 0.8rem 1.7rem;
    line-height: 1.2;
    border-radius: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
  }

  button:hover {
    opacity: 0.6;
  }

  @media screen and (min-width: 768px) {
    .container {
      grid-template: auto / 36px auto min-content;
      grid-template-areas: "b a c";
    }

    .comment-author {
      grid-area: b;
    }

    .comment-body {
      grid-area: a;
    }

    .comment-actions {
      grid-area: c;
    }
  }
</style>
