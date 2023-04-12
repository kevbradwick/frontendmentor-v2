<script>
	import VotingPill from './VotingPill.svelte';
	import Author from './Author.svelte';
	import EditOptions from './EditOptions.svelte';
  import CommentInput from './CommentInput.svelte';
	import { createEventDispatcher } from 'svelte';
	import { currentUser, votes } from '$lib/stores/interactive-comments';

	/** @type String */
	export let content = '';
	export let createdAt = '';
	export let vote = 0;
	export let username = '';
	/** @type Number */
	export let commentId;

  let editing = false;

	const dispatch = createEventDispatcher();

	const handleUpvote = () => {
		// @ts-ignore
		const voteCounts = $votes[commentId] || { up: 0, down: 0 };
		if (voteCounts.up) {
			return;
		}
		voteCounts.up = 1;
		voteCounts.down = 0;
		vote++;
		votes.update((v) => ({ ...v, [commentId]: voteCounts }));
	};

	const handleDownvote = () => {
		// @ts-ignore
		const voteCounts = $votes[commentId] || { up: 0, down: 0 };
		if (voteCounts.down) {
			return;
		}
		voteCounts.down = 1;
		voteCounts.up = 0;
		vote--;
		votes.update((v) => ({ ...v, [commentId]: voteCounts }));
	};
</script>

<div class="container">
	<div class="voting-container">
		<VotingPill count={vote} on:upvote={handleUpvote} on:downvote={handleDownvote} />
	</div>

	<div class="author-container">
		<Author {username} withUsername />
		<p>{createdAt}</p>
	</div>

	<div class="edit-container">
		<EditOptions
			withDelete={$currentUser == username}
			withReply={$currentUser != username}
      withEdit={$currentUser == username}
			on:reply={() => dispatch('reply')}
			on:delete={() => dispatch('delete')}
			on:edit={() => editing = true}
		/>
	</div>

	<div class="comment-container" class:editing>
    {#if editing}
      <textarea bind:value={content} rows="6"></textarea>
      <button on:click={() => editing = false}>Update</button>
    {:else}
      <p>{content}</p>
    {/if}

	</div>
</div>

<style type="text/css">
	.container {
		background-color: var(--white);
		border-radius: 0.5rem;
		padding: 1.5rem;
		display: grid;
		grid-template: repeat(3, auto) / repeat(2, auto);
		grid-template-areas:
			'a a'
			'b b'
			'c d';
		gap: 1rem;
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
	.comment-container {
		grid-area: b;
	}

	.comment-container p {
		margin: 0;
		padding: 0;
		line-height: 1.4rem;
	}

  .comment-container.editing {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: end;
    align-items: end;
  }

  .comment-container.editing textarea {
    width: 100%;
    resize: none;
    background-color: var(--white);
		border-radius: 0.5rem;
		border: 1px solid var(--light-gray);
		padding: 1rem;
		color: var(--gray-blue);
  }

  .comment-container.editing button {
    display: inline-block;
		border: none;
		color: var(--white);
		background-color: var(--moderate-blue);
		padding: 0.8rem 1.7rem;
		line-height: 1.2;
		border-radius: 0.5rem;
		text-transform: uppercase;
	}

	@media screen and (min-width: 768px) {
		.container {
			grid-template: repeat(2, auto) / repeat(3, auto);
			grid-template-areas:
				'a b c'
				'a d d';
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
		.comment-container {
			grid-area: d;
		}
	}
</style>
