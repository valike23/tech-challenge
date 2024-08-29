<script lang="ts">
  export let selected: string = "Feature";
  export let options = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  export let isOpen: boolean = false;

  function toggleDropdown() {
      isOpen = !isOpen;
  }

  function selectOption(option: string) {
      selected = option;
      isOpen = false;
  }
</script>

<div class="relative text-left w-full"> <!-- Changed w-48 to w-full for full width -->
  <button
      class="flex justify-between items-center w-full px-4 py-2 text-sm text-blue_gray-700 
             bg-gray-50 border rounded-lg hover:border-blue-500 active:border-blue-500 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
      on:click={toggleDropdown}
  >
      <span>{selected}</span>
      <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="{isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}"
          ></path>
      </svg>
  </button>

  {#if isOpen}
      <div
          class="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg 
                 z-10"
      >
          {#each options as option}
              <!-- svelte-ignore a11y_click_events_have_key_events -->
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <div
                  class="cursor-pointer px-4 py-2 text-sm text-blue_gray-700 hover:bg-blue-100 
                         hover:text-blue-500 flex justify-between"
                  on:click={() => selectOption(option)}
              >
                  {option}
                  {#if selected === option}
                      <svg
                          class="w-4 h-4 text-purple-a700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                          ></path>
                      </svg>
                  {/if}
              </div>
          {/each}
      </div>
  {/if}
</div>

<style>
  .relative {
      width: 100%; /* Ensure the container takes up 100% of the width */
  }
</style>
