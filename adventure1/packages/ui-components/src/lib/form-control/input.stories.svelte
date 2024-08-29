<script lang="ts">
    import Input from './Input.svelte';
  
    export default {
      title: 'Input',
      component: Input,
    };
  
    let filledValue = "Lorem ipsum dolor";
  </script>
  
  <div class="storybook-container">
    <h3>Text Field - Default</h3>
    <Input placeholder="Placeholder" />
  
    <h3>Text Field - Filled</h3>
    <Input value={filledValue} />
  
    <h3>Text Field - Active</h3>
    <Input value={filledValue} isActive={true} />
  
    <h3>Text Field - Error</h3>
    <Input placeholder="Placeholder" error="Can’t be empty" />
  </div>
  
  <style>
    .storybook-container {
      display: flex;
      gap: 20px;
      justify-content: space-between;
    }
  </style>
  