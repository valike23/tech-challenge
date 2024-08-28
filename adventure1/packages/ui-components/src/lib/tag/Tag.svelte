<script lang="ts">
    export let label: string = "UX";
    export let active: boolean = false;
  </script>
  
  <span
    class="inline-block px-3 py-1 rounded-full text-xs font-semibold 
           transition-colors duration-300 
           {active ? 'bg-blue-300 text-white' : 'bg-blue-100 text-blue_gray-700'} 
           hover:bg-blue-300 hover:text-white"
  >
    {label}
  </span>
  