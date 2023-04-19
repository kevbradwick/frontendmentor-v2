<script>
  import Logo from "$components/news-homepage/Logo.svelte";
  import NavMenu from "$components/news-homepage/NavMenu.svelte";
  import HeroArticle from "$components/news-homepage/HeroArticle.svelte";
  import Article from "$components/news-homepage/Article.svelte";
</script>

<div class="container">
  <header>
    <Logo />
    <NavMenu />
  </header>

  <main>
    <HeroArticle />
    <div class="news-items">
      <h1>news items</h1>
    </div>
    <div class="articles">
      <Article image="image-retro-pcs.jpg" number="01" title="Reviving Retro PCs">
        What happens when old PCs are given modern upgrades?
      </Article>
      <Article image="image-top-laptops.jpg" number="02" title="Top 10 Laptops of 2022">
        Our best picks for various needs and budgets.
      </Article>
      <Article image="image-gaming-growth.jpg" number="03" title="The Growth of Gaming">
        How the pandemic has sparked fresh opportunities
      </Article>
    </div>
  </main>
</div>

<style>
  .container {
    margin-top: 2.5rem;
    padding: 0 1.5rem;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  main {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }

  main .articles {
    display: grid;
    gap: 2rem;
  }

  @media screen and (min-width: 768px) {
    .container {
      margin: 4rem auto;
      max-width: 1240px;
    }

    main {
      grid-template: repeat(2, auto) / repeat(3, 1fr);
      grid-template-areas:
        "hero hero list"
        "articles articles articles";
      margin-top: 5rem;
    }

    main .news-items {
      grid-area: list;
    }

    main :global(.hero) {
      grid-area: hero;
    }

    main .articles {
      grid-area: articles;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
  }
</style>
