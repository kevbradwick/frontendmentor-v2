<script>
</script>

<div class="hero">
  <div class="image">
    <a href="/news-homepage">
      <picture>
        <source media="(min-width: 768px)" srcset="/news-homepage/images/image-web-3-desktop.jpg" />
        <source media="(max-width: 768px)" srcset="/news-homepage/images/image-web-3-mobile.jpg" />
        <img src="/news-homepage/images/image-web-3-mobile.jpg" alt="" />
      </picture>
    </a>
  </div>

  <div class="content">
    <h1><a href="/news-homepage">The Bright Future of Web 3.0?</a></h1>
    <div class="summary">
      <p class="summary">
        We dive into the next evolution of the web that claims to put the power of the platforms
        back into the hands of the people. But is it really fulfilling its promise?
      </p>
      <p class="read-more"><a href="/news-homepage">Read More</a></p>
    </div>
  </div>
</div>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  img {
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .content h1 {
    margin: 0;
    font-size: 3.6rem;
    font-weight: var(--font-weight-extra-bold);
    line-height: 3.6rem;
  }

  .content p.summary {
    color: var(--grayish-blue);
    line-height: 1.7rem;
    margin: 0 0 1.5rem 0;
  }

  .content p.read-more {
    padding: 0;
    margin: 0;
  }

  .content p a {
    display: inline-block;
    background-color: var(--soft-red);
    color: var(--off-white);
    text-transform: uppercase;
    font-weight: var(--font-weight-bold);
    letter-spacing: 0.3rem;
    padding: 1rem 2rem;
    transition: all 0.2 ease-in;
  }

  .summary {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content p a:hover {
    background-color: var(--very-dark-blue);
  }

  @media screen and (min-width: 768px) {
    .content {
      flex-direction: row;
    }

    .content h1,
    .content .summary {
      flex: 50%;
    }
  }
</style>
