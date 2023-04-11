<script>
  /** @type String */
  export let username;
  export let withUsername = false;
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
    <p>{username}</p>
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
      padding: 0;
      margin: 0;
    }
  </style>
