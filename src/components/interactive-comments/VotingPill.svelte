<script>
  import { createEventDispatcher } from "svelte";
  export let count = 0;
  const dispatch = createEventDispatcher();
</script>

<div class="vote-container">
  <div class="inner">
    <button type="button" on:click={() => dispatch("upvote")}>
      <img src="/interactive-comments/images/icon-plus.svg" alt="Upvote" />
    </button>
    <span class="counter">{count}</span>
    <button type="button" on:click={() => dispatch("downvote")}>
      <img src="/interactive-comments/images/icon-minus.svg" alt="Downvote" />
    </button>
  </div>
</div>

<style type="text/css">
  .vote-container {
    display: inline-block;
    align-items: center;
    color: var(--moderate-blue);
    background-color: var(--light-gray);
    border-radius: 0.5rem;
    padding: 0.4rem;
  }

  .inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .counter {
    font-weight: var(--font-weight-medium);
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    .inner {
      flex-direction: column;
    }
  }
</style>
