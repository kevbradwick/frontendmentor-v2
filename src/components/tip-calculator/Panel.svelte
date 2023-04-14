<div>
  <slot />
</div>

<style type="text/css">
  div {
    --radius: 2rem;

    background-color: var(--white);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    padding: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    div {
      border-radius: 2rem;
    }
  }
</style>
