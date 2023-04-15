<script>
  /** @type string */
  export let href;
</script>

<a {href} {...$$restProps}>
  <slot />
</a>

<style>
  a {
    display: inline-block;
    text-decoration: none;
    padding: 0.8rem 1.6rem;
    background-color: var(--white);
    box-shadow: 0 0 8px -4px #858585;
    border-radius: 2px;
    color: var(--very-dark-blue);
  }

  a :global(i) {
    margin-right: 0.5rem;
  }

  :global(.dark-mode) a {
    background-color: var(--dark-blue);
    box-shadow: 0 0 8px -4px black;
    color: var(--white);
  }
</style>
