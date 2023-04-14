<script>
  let amount = "";
  let customValue = "0";
  $: customHasFocus = amount === "custom";
  $: {
    if (customHasFocus) {
      setTimeout(() => {
        const input = document.getElementById("tip7");
        if (input) {
          input.focus();
        }
      }, 30);
    }
  }
</script>

<div class="container">
  <ul>
    <li>
      <input type="radio" id="tip1" name="tip" value="5" bind:group={amount} />
      <label for="tip1">5%</label>
    </li>
    <li>
      <input type="radio" id="tip2" name="tip" value="10" bind:group={amount} />
      <label for="tip2">10%</label>
    </li>
    <li>
      <input type="radio" id="tip3" name="tip" value="15" bind:group={amount} />
      <label for="tip3">15%</label>
    </li>
  </ul>

  <ul>
    <li>
      <input type="radio" id="tip4" name="tip" value="25" bind:group={amount} />
      <label for="tip4">25%</label>
    </li>
    <li>
      <input type="radio" id="tip5" name="tip" value="50" bind:group={amount} />
      <label for="tip5">50%</label>
    </li>
    <li class:custom={amount === "custom"} class:focus={customHasFocus}>
      {#if amount === "custom"}
        <span
          on:click={() => {
            customHasFocus = true;
          }}
          on:keydown={() => (customHasFocus = true)}
        >
          <input
            type="text"
            id="tip7"
            name="custom-tip"
            size="5"
            bind:value={customValue}
            on:focus={() => (customHasFocus = true)}
            on:blur={() => (customHasFocus = false)}
          />
        </span>
      {:else}
        <input type="radio" id="tip6" name="tip" value="custom" bind:group={amount} />
        <label for="tip6">Custom</label>
      {/if}
    </li>
  </ul>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  .custom span {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    background-color: var(--very-light-gray-cyan);
    padding-right: 10px;
    border-radius: 0.35rem;
  }

  span:focus-within {
    border: 3px solid var(--strong-cyan);
  }

  input[type="radio"] {
    display: none;
  }

  label {
    display: block;
    background-color: var(--very-dark-cyan);
    color: var(--very-light-gray-cyan);
    cursor: pointer;
    text-align: center;
    padding: 12px 0;
    border-radius: 0.35rem;
    font-size: 1.5rem;
    font-weight: var(--font-weight-bold);
    transition: background-color 0.2s ease;
  }

  label:hover {
    background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
  }

  input[type="radio"]:checked + label {
    background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
  }

  input[value="custom"] + label {
    background-color: var(--very-light-gray-cyan);
    color: var(--dark-gray-cyan);
  }

  input[type="text"] {
    width: auto;
    background-color: var(--very-light-gray-cyan);
    color: var(--dark-gray-cyan);
    border: none;
    border-radius: 0.35rem;
    text-align: right;
    font-weight: var(--font-weight-bold);
    font-size: 1.5rem;
  }

  input[type="text"]:focus {
    outline: none;
  }
</style>
