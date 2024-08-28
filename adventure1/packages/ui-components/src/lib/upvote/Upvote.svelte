<script lang="ts">
    export let count: number = 99;
    export let active: boolean = false;
  
    function toggleActive() {
      active = !active;
      if (active) {
        count++;
      } else {
        count--;
      }
    }
  </script>
  
  <button
    class="flex flex-col items-center justify-center w-8 h-10 rounded-lg font-bold text-xs 
           transition-colors duration-300 
           {active ? 'bg-blue-300 text-white' : 'bg-blue-200 text-blue_gray-700'} 
           hover:bg-blue-300"
    on:click={toggleActive}
  >
    <svg
      class="w-4 h-4"
      fill="none"
      stroke={active ? 'currentColor' : '#3a4374'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 15l7-7 7 7"
      ></path>
    </svg>
    <span>{count}</span>
  </button>
  