<script>
	import VotingPill from '$components/interactive-comments/VotingPill.svelte';

	export let content = '';
	export let createdAt = '';
	export let vote = 0;
	export let username = '';
	export let id = -1;
</script>

<div class="container">
	<VotingPill count={vote} />
	<p>{content}</p>
</div>

<style type="text/css">
	.container {
		background-color: var(--white);
		border-radius: 0.35rem;
		padding: 1rem;
	}
</style>
