<script>
  export let comment = "";
  export let authorName = "amyrobson";
</script>

<div class="container">
  <div class="comment-author">
    <picture>
      <source
        srcset={`/interactive-comments/images/avatars/image-${authorName}.webp`}
        type="image/webp"
      />
      <source
        srcset={`/interactive-comments/images/avatars/image-${authorName}.png`}
        type="image/png"
      />
    </picture>
    <img src={`/interactive-comments/images/avatars/image-${authorName}.png`} alt="Author" />
  </div>

  <div class="comment-body">
    <textarea
      class="comment-input"
      placeholder="Write a comment..."
      bind:value={comment}
    ></textarea>
  </div>

  <div class="comment-actions">
    <button type="submit">send</button>
  </div>
</div>

<style type="text/css">
  .container {
    background-color: var(--white);
    border-radius: 0.35rem;
    padding: 0.5rem;
  }

  textarea {
    background-color: var(--white);
    border-radius: 0.5rem;
    border: 1px solid var(--light-gray);
    padding: 1rem;
    color: var(--gray-blue);
  }

  button {
    border: none;
    color: var(--white);
    background-color: var(--moderate-blue);
    padding: 0.9rem 1.7rem;
    border-radius: 0.5rem;
    text-transform: uppercase;
  }
</style>
