<script>
	export let comment = '';
	export let authorName = 'amyrobson';
</script>

<div class="container">
	<div class="comment-body">
		<textarea class="comment-input" placeholder="Add a comment..." rows="6" bind:value={comment} />
	</div>

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

	<div class="comment-actions">
		<button type="submit">send</button>
	</div>
</div>

<style type="text/css">
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		background-color: var(--white);
		border-radius: 0.35rem;
		padding: 1rem;
	}

	.comment-body {
		flex: 1;
		flex-basis: 100%;
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
		padding: 0.9rem 1.7rem;
		border-radius: 0.5rem;
		text-transform: uppercase;
	}

	@media screen and (min-width: 768px) {
		.container {
			align-items: start;
		}

		.comment-author {
			order: 1;
		}

		.comment-body {
			flex-basis: auto;
			order: 2;
		}

		.comment-actions {
			order: 3;
		}
	}
</style>
