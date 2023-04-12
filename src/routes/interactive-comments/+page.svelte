<script>
	import CommentInput from '$components/interactive-comments/CommentInput.svelte';
	import Comment from '$components/interactive-comments/Comment.svelte';
	import Modal from '$components/interactive-comments/Modal.svelte';
	import { comments } from '$lib/stores/interactive-comments';


  let displayModal = false;
  let commentBeingDeleted = 0;

  /**
   * @param {Number} commentId
   */
  const onDelete = (commentId) => () => {
    commentBeingDeleted = commentId;
    displayModal = true;
  }

  const onDeleteConfirm = () => {
    const newComments = $comments.map((comment) => {
      const replies = comment.replies.filter((/** @type Comment */ reply) => reply.id !== commentBeingDeleted);
      if (comment.id == commentBeingDeleted) {
        return null;
      }
      return {
        ...comment,
        replies,
      };
    });
    // @ts-ignore
    comments.set(newComments);
  }
</script>

<div class="container">
	{#each $comments as comment}
		<Comment
			content={comment.content}
			createdAt={comment.createdAt}
			vote={comment.score}
			username={comment.user.username}
      on:delete={() => displayModal = true}
      commentId={comment.id}
		/>
		{#if comment.replies.length > 0}
			<div class="replies">
				{#each comment.replies as reply}
					<Comment
						content={reply.content}
						createdAt={reply.createdAt}
						vote={reply.score}
						username={reply.user.username}
            on:delete={onDelete(reply.id)}
            commentId={reply.id}
					/>
				{/each}
			</div>
		{/if}
	{/each}

	<CommentInput />
</div>

<Modal
	title="Delete comment"
	confirmLabel="Yes, Delete"
	cancelLabel="No, Cancel"
	bind:visible={displayModal}
  on:confirm={onDeleteConfirm}
>
	<p>
		Are you sure you want to delete this comment? This will remove the command and can't be undone.
	</p>
</Modal>

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
	}

	@media screen and (min-width: 768px) {
		.container {
			width: 768px;
			margin: 1rem auto;
		}

		.replies {
			margin-left: 38px;
			padding-left: 36px;
		}
	}
</style>
