<script>
	import VotingPill from './VotingPill.svelte';
  import Author from './Author.svelte';
  import EditOptions from './EditOptions.svelte';

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
    <p>{createdAt}</p>
  </div>

  <div class="edit-container">
    <EditOptions withDelete/>
  </div>

  <div class="comment-container">
    <p>{content}</p>
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
      "a a"
      "b b"
      "c d";
    gap: 1rem;
	}

  .voting-container { grid-area: c; }
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
  .comment-container { grid-area: b; }

  .comment-container p {
    margin: 0;
    padding: 0;
    line-height: 1.4rem;
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
