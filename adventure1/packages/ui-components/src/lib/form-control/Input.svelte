<script lang="ts">
  export let value: string = "";
  export let placeholder: string = "Placeholder";
  export let error: string = "";
  export let isActive: boolean = false;
  export let multiline: boolean = false; 

  function handleInput(event: Event) {
    value = (event.target as HTMLInputElement).value;
    isActive = value.length > 0;
  }
</script>

<div class="form-control">
  {#if multiline}
    <textarea
      bind:value
      placeholder={placeholder}
      class={`input ${isActive ? 'active' : ''} ${error ? 'error' : ''}`}
      on:input={handleInput}
    ></textarea>
  {:else}
    <input
      type="text"
      bind:value
      placeholder={placeholder}
      class={`input ${isActive ? 'active' : ''} ${error ? 'error' : ''}`}
      on:input={handleInput}
    />
  {/if}
  {#if error}
    <span class="error-text">{error}</span>
  {/if}
</div>

<style>
  .form-control {
    width: 100%;
    margin-bottom: 16px;
  }

  .input {
    width: 100%;
    padding: 12px 16px;
    font-size: 16px;
    border: 2px solid #dfe3fa;
    border-radius: 8px;
    background-color: #f9f9fc;
    color: #373f68;
    transition: border-color 0.3s ease;
    resize: none; /* prevents textarea resizing */
  }

  .input::placeholder {
    color: #647196;
  }

  .input:hover,
  .input.active,
  .input:focus {
    border-color: #4661e6;
  }

  .input.error {
    border-color: #d73737;
  }

  .error-text {
    color: #d73737;
    font-size: 14px;
    margin-top: 4px;
  }
</style>
