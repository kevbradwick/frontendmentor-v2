<script>
	import IconDelete from './IconDelete.svelte';
	import IconReply from './IconReply.svelte';
	import IconEdit from './IconEdit.svelte';
	import { createEventDispatcher } from 'svelte';

	export let withDelete = false;
	export let withReply = false;
  export let withEdit = false;

	const dispatch = createEventDispatcher();
</script>

<div class="container">
	{#if withDelete}
		<button type="button" class="delete" on:click|self={() => dispatch('delete')}>
			<IconDelete />
			Delete
		</button>
	{/if}

	{#if withReply}
		<button type="button" class="reply" on:click|self={() => dispatch('reply')}>
			<IconReply />
			Reply
		</button>
	{/if}
  
  {#if withEdit}
		<button type="button" class="edit" on:click|self={() => dispatch('edit')}>
			<IconEdit />
			Edit
		</button>
	{/if}
</div>

<style type="text/css">
	.container {
		display: flex;
		gap: 1rem;
	}

	button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4rem;
		border: none;
		background: transparent;
		cursor: pointer;
		color: var(--moderate-blue);
		font-weight: var(--font-weight-bold);
		line-height: 10px;
		transition: opacity 200ms ease-in-out;
	}

	button:hover {
		opacity: 0.5;
	}

	.delete {
		color: var(--soft-red);
	}
</style>
