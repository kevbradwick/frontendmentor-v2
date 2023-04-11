<script>
	import VotingPill from '$components/interactive-comments/VotingPill.svelte';
  import Author from '$components/interactive-comments/Author.svelte';

	export let content = '';
	export let createdAt = '';
	export let vote = 0;
	export let username = '';
	export let id = -1;
</script>

<div class="container">
  <div class="voting-container">
    <VotingPill count={vote} />
  </div>

  <div class="author-container">
    <Author username={username} withUsername />
  </div>

  <div class="edit-container">
    Edits
  </div>

  <div class="comment-container">
    <p>{content}</p>
  </div>
</div>

<style type="text/css">
	.container {
		background-color: var(--white);
		border-radius: 0.35rem;
		padding: 1rem;
    display: grid;
    grid-template: repeat(3, auto) / repeat(2, auto);
    grid-template-areas:
      "a a"
      "b b"
      "c d";
    gap: 1rem;
	}

  .voting-container {
    grid-area: c;
  }

  .author-container {
    grid-area: a;
  }

  .edit-container {
    grid-area: d;
  }

  .comment-container {
    grid-area: b;
  }

  @media screen and (min-width: 768px) {
    .container {
      grid-template: repeat(2, auto) / repeat(3, auto);
      grid-template-areas:
        "a b c"
        "a d d";
    }

    .voting-container { grid-area: a; }
    .author-container { grid-area: b; }
    .edit-container { grid-area: c; }
    .comment-container { grid-area: d; }
  }
</style>
