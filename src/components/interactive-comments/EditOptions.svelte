<script>
  import IconDelete from "./IconDelete.svelte";
  import IconEdit from "./IconEdit.svelte";

  export let withDelete = false;
</script>

<div class="container">
  {#if withDelete}
  <button type="button" class="delete">
    <IconDelete />
    Delete
  </button>
  {/if}

  <button type="button" class="edit">
    <IconEdit />
    Edit
  </button>
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
