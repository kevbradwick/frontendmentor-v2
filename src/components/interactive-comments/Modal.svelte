<script>
	import { createEventDispatcher } from 'svelte';

	/** @type String */
	export let title;
	/** @type String */
	export let confirmLabel;
	/** @type String */
	export let cancelLabel;
	export let visible = false;

	const dispatch = createEventDispatcher();

	const onCancel = () => {
		visible = false;
		dispatch('cancel');
	};

	const onConfirm = () => {
		visible = false;
		dispatch('confirm');
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="container" on:click|self={onCancel} class:visible>
	<div class="modal">
		<div class="modal-header">
			<h2>{title}</h2>
		</div>
		<div class="modal-body">
			<slot />
		</div>
		<div class="modal-footer">
			<button class="cancel" on:click|self={onCancel}>{cancelLabel}</button>
			<button class="confirm" on:click|self={onConfirm}>{confirmLabel}</button>
		</div>
	</div>
</div>

<style type="text/css">
	.container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: none;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}

	.visible {
		display: flex;
	}

	.modal {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		background-color: var(--white);
		padding: 2rem;
		border-radius: 0.7rem;
		max-width: 400px;
	}

	.modal-header h2 {
		padding: 0;
		margin: 0;
		font-weight: var(--font-weight-medium);
		color: var(--dark-blue);
	}

	.modal-body {
		line-height: 1.5rem;
	}

	.modal-footer {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	button {
		border: none;
		background-color: var(--gray-blue);
		color: white;
		padding: 1rem 2rem;
		display: inline-block;
		line-height: 1.5rem;
		border-radius: 0.5rem;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 200ms;
	}

	button:hover {
		opacity: 0.6;
	}

	.confirm {
		background-color: var(--soft-red);
	}
</style>
