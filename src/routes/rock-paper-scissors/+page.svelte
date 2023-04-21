<script>
  import ScorePanel from "$components/rock-paper-scissors/ScorePanel.svelte";
  import Tile from "$components/rock-paper-scissors/Tile.svelte";
</script>

<ScorePanel />

<div class="tile">
  <Tile type="rock" />
  <Tile type="paper" />
  <Tile type="scissors" />
  <Tile type="lizard" />
  <Tile type="spock" />
</div>

<style>
  .tile {
    background-size: 300px;
  }
</style>
