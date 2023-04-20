<script>
  import Logo from "./Logo.svelte";

  export let score = 0;
</script>

<section>
  <Logo />
  <div class="score">
    <div class="title">SCORE</div>
    <p>{score}</p>
  </div>
</section>

<style>
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 3px solid var(--header-outline);
    border-radius: 1rem;
    padding: 1rem 1.2rem;
  }

  .score {
    background-color: white;
    border-radius: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 3rem;
  }
  .title {
    color: var(--score-text);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
  }
  .score p {
    font-weight: var(--font-weight-bold);
    color: var(--dark-text);
    font-size: 4rem;
    margin: 0;
    padding: 0;
    text-align: center;
    line-height: 1;
  }
</style>
