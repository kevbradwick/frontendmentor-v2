<script>
	import CommentInput from '$components/interactive-comments/CommentInput.svelte';
	import Comment from '$components/interactive-comments/Comment.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container">
	{#each data.data.comments as comment}
		<Comment
			content={comment.content}
			createdAt={comment.createdAt}
			vote={comment.score}
			username={comment.user.username}
			id={comment.id}
		/>
		{#if comment.replies.length > 0}
			<div class="replies">
				{#each comment.replies as reply}
					<Comment
						content={reply.content}
						createdAt={reply.createdAt}
						vote={reply.score}
						username={reply.user.username}
						id={reply.id}
					/>
				{/each}
			</div>
		{/if}
	{/each}

	<CommentInput authorName={data.data.currentUser.username} />
</div>

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
