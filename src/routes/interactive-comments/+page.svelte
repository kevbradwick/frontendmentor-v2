<script>
// @ts-nocheck

  import Comment from "$components/interactive-comments/Comment.svelte";
  import { comments } from "$lib/stores/interactive-comments";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let repliesVisible = false;
  onMount(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        repliesVisible = true;
      }, 200);
    });
  });
</script>

<main>
  <div class="container">
    {#each $comments as comment}
      {#if comment.replies.length > 0 && repliesVisible}
        <Comment {comment} withReply={() => comment.id == 2}>
          <div class="replies" transition:fade>
            {#each comment.replies as reply}
              {#if reply.replies.length > 0 && repliesVisible}
                <Comment comment={reply}>
                  <div class="replies" transition:fade>
                    {#each reply.replies as r}
                      <Comment comment={r} />
                    {/each}
                  </div>
                </Comment>
              {:else}
                <Comment comment={reply} />
              {/if}
            {/each}
          </div>
        </Comment>
      {:else}
        <Comment {comment} />
      {/if}
    {/each}
  </div>
</main>


<svelte:head>
  <title>Interactive Comments</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
    rel="stylesheet"
  />

  <link
    rel="stylesheet"
    href="//cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link rel="stylesheet" type="text/css" href="/interactive-comments/style.css" media="screen" />
</svelte:head>

<style type="text/css">
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }

  .replies {
    display: flex;
    padding-left: 12px;
    flex-direction: column;
    gap: 20px;
    border-left: 1px solid var(--light-gray-blue);
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    .container {
      width: 768px;
      margin: 3rem auto;
    }

    .replies {
      margin-left: 38px;
      padding-left: 36px;
    }
  }
</style>
