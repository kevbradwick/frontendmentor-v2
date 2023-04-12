<script>
  import VotingPill from "./VotingPill.svelte";
  import Author from "./Author.svelte";
  import EditOptions from "./EditOptions.svelte";
  import Modal from "./Modal.svelte";
  import Reply from "./CommentReply.svelte";
  import { currentUser, comments } from "$lib/stores/interactive-comments";

  /** @type InteractiveComments.Comment | InteractiveComments.Reply comment */
  export let comment;

  let confirmDelete = false;
  export let editing = false;
  let replying = false;
  export let withReply = false;

  /** @param {CustomEvent<InteractiveComments.ReplyEvent>} event */
  const saveReply = (event) => {
    if (!event.detail.content) {
      replying = false;
      return;
    }

    const id = Math.floor(Math.random() * 100000) + 100;
    const replyingTo = comment.user.username;
    const content = event.detail.content;
    const score = 0;
    const user = $currentUser;
    const createdAt = "now";
    /** @type InteractiveComments.Reply[] */
    const replies = [];

    /** @type InteractiveComments.Reply reply */
    const reply = { id, replyingTo, score, content, user, createdAt, replies };

    // update comment in store
    comments.update((allComments) => {
      allComments.forEach((c) => {
        if (c.id === comment.id) {
          c.replies.push(reply);
          return;
        }
        c.replies.forEach((r) => {
          if (r.id === comment.id) {
            r.replies.push(reply);
            return;
          }
        });
      });
      return allComments;
    });

    replying = false;
  };

  const deleteComment = () => {
    comments.update((all) => {
      /** @type InteractiveComments.Comment[] */
      const newComments = [];
      all.forEach((c) => {
        if (c.id === comment.id) {
          console.log(`Removed comment ${comment.id}`);
          return;
        }
        if (c.replies.length > 0) {
          c.replies = c.replies.filter((r) => r.id !== comment.id);
        }
        newComments.push(c);
      });
      return newComments;
    });
    confirmDelete = false;
  };

  /** @param {String} direction */
  const handleVote = (direction) => {
    return () => {
      if (direction === "up") {
        comment.score++;
      } else {
        comment.score--;
      }
    };
  };
</script>

<svelte:body on:click|self={() => (replying = false)} />

<div class="container">
  <div class="comment-container">
    <div class="voting-container">
      <VotingPill
        count={comment.score}
        on:upvote={handleVote("up")}
        on:downvote={handleVote("down")}
      />
    </div>

    <div class="author-container">
      <Author username={comment.user.username} withUsername />
      <p>{comment.createdAt}</p>
    </div>

    <div class="edit-container">
      <EditOptions
        withDelete={$currentUser.username == comment.user.username}
        withReply={$currentUser.username != comment.user.username}
        withEdit={$currentUser.username == comment.user.username}
        on:reply={() => (replying = true)}
        on:delete={() => (confirmDelete = true)}
        on:edit={() => (editing = true)}
      />
    </div>

    <div class="content-container" class:editing>
      {#if editing}
        <textarea bind:value={comment.content} on:blur={() => (editing = false)} rows="5" />
        <button on:click={() => (editing = false)}>Update</button>
      {:else}
        <p>{comment.content}</p>
      {/if}
    </div>
  </div>

  <slot />

  {#if replying || withReply}
    <div class="comment-reply">
      <Reply on:save={saveReply} />
    </div>
  {/if}
</div>

{#if confirmDelete}
  <Modal
    title="Delete comment"
    confirmLabel="Yes, Delete"
    cancelLabel="No, Cancel"
    on:cancel={() => (confirmDelete = false)}
    on:confirm={deleteComment}
  >
    <p>Are you sure you want to delete this comment?</p>
  </Modal>
{/if}

<style type="text/css">
  .comment-container {
    background-color: var(--white);
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: grid;
    grid-template: repeat(3, auto) / repeat(2, auto);
    grid-template-areas:
      "a a"
      "b b"
      "c d";
    gap: 1rem;
  }

  .comment-reply {
    margin-top: 20px;
  }

  .voting-container {
    grid-area: c;
  }

  .author-container {
    grid-area: a;
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }
  .author-container p {
    margin: 0;
    padding: 0;
    color: var(--gray-blue);
    opacity: 0.7;
  }
  .edit-container {
    grid-area: d;
    justify-self: end;
  }
  .content-container {
    grid-area: b;
  }

  .content-container p {
    margin: 0;
    padding: 0;
    line-height: 1.4rem;
  }

  .content-container.editing {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: end;
    align-items: end;
  }

  .content-container.editing textarea {
    width: 100%;
    resize: none;
    background-color: var(--white);
    border-radius: 0.5rem;
    border: 1px solid var(--light-gray);
    padding: 1rem;
    color: var(--gray-blue);
  }

  .content-container.editing button {
    display: inline-block;
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

  .content-container.editing button:hover {
    opacity: 0.6;
  }

  @media screen and (min-width: 768px) {
    .comment-container {
      grid-template: repeat(2, auto) / 36px repeat(2, auto);
      grid-template-areas:
        "a b c"
        "a d d";
    }

    .voting-container {
      grid-area: a;
      width: 36px;
    }
    .author-container {
      grid-area: b;
    }
    .edit-container {
      grid-area: c;
    }
    .content-container {
      grid-area: d;
    }
  }
</style>
