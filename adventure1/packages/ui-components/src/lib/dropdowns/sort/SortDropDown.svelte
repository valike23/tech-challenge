<script lang="ts">
    export let selected: string = "Most Upvotes";
    export let options = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"];
    export let isOpen: boolean = false;
  
    function toggleDropdown() {
      isOpen = !isOpen;
    }
  
    function selectOption(option: string) {
      selected = option;
      isOpen = false;
    }
  </script>
  
  <div class="relative inline-block text-left">
    <button
      class="inline-flex items-center justify-between w-56 px-4 py-2 text-sm text-white 
             bg-gray-900 rounded-lg hover:bg-blue_gray-700 whitespace-nowrap"
      on:click={toggleDropdown}
    >
      <span class="mr-2">Sort by :</span>
      <span class="font-semibold">{selected}</span>
      {#if isOpen}
        <svg
          class="w-3 h-3 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      {:else}
        <svg
          class="w-3 h-3 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 15l-7-7-7 7"
          ></path>
        </svg>
      {/if}
    </button>
  
    {#if isOpen}
      <div
        class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-300 
               divide-y divide-gray-100 rounded-md shadow-lg"
      >
        {#each options as option}
          <div
            class="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 
                   hover:text-blue-500"
            on:click={() => selectOption(option)}
          >
            {option}
          </div>
        {/each}
      </div>
    {/if}
  </div>
  