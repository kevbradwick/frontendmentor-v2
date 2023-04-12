<script>
  import { currentUser } from "$lib/stores/interactive-comments";
  /** @type String */
  export let username;
  export let withUsername = false;

  $: isCurrentUser = $currentUser === username;
</script>

<div class="comment-author">
  <div class="author-image">
    <picture>
      <source
        srcset={`/interactive-comments/images/avatars/image-${username}.webp`}
        type="image/webp"
      />
      <source
        srcset={`/interactive-comments/images/avatars/image-${username}.png`}
        type="image/png"
      />
    </picture>
    <img src={`/interactive-comments/images/avatars/image-${username}.png`} alt="Author" />
  </div>

  {#if withUsername}
    <p>
      {username}{#if isCurrentUser} <span>you</span>{/if}
    </p>
  {/if}
</div>

<style type="text/css">
  .comment-author {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 36px;
    height: 36px;
  }

  p {
    font-weight: var(--font-weight-medium);
    color: var(--dark-blue);
    padding: 0;
    margin: 0;
  }

  p span {
    display: inline-block;
    margin-left: 8px;
    background-color: var(--moderate-blue);
    color: var(--white);
    padding: 0.15rem 0.5rem;
    border-radius: 0.2rem;
  }
</style>
