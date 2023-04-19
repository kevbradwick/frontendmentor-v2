<script>
  /** @type string */
  export let image;
  export let imageAlt = "";
  /** @type string */
  export let number;
  /** @type string */
  export let title;
</script>

<div class="container">
  <a href="/news-homepage">
    <img src={`/news-homepage/images/${image}`} alt={imageAlt} />
  </a>
  <div class="info">
    <span class="number">{number}</span>
    <h3><a href="/news-homepage">{title}</a></h3>
    <p><slot /></p>
  </div>
</div>

<style>
  .container {
    display: flex;
    gap: 1.5rem;
  }

  img {
    width: 120px;
    object-fit: cover;
  }

  .number {
    font-weight: var(--font-weight-extra-bold);
    font-size: 2rem;
    color: rgb(182, 182, 182);
  }

  h3 {
    margin: 0.9rem 0;
    font-size: 1.3rem;
  }

  p {
    color: var(--grayish-blue);
    line-height: 1.7rem;
  }
</style>
