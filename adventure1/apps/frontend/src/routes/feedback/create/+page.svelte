<script lang="ts">
	import { Input, DropDown, Button } from "@tech-challenge/ui-components";
  import {type  Feedback } from '@prisma/client';

  
  let feedback: Partial<Feedback>  = {description: '', title: '', category: '' }
  let feedbackTitle = "";
  let category = "Feature";
  let feedbackDetail = "";
  
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];
</script>

<div class="min-h-screen flex justify-center items-center bg-gray-100 p-4">
  <Button variant="go-back" label="go back"></Button>
  <div class="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
    <!-- Plus Icon -->
    <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-600 p-3 rounded-full">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
      </svg>
    </div>

    <h2 class="text-xl font-bold mb-6">Create New Feedback</h2>
   <div class="mb-4">
    <p style="font-family: jost;"><strong>FeedBack Title</strong></p>
    <p><small>Add a short, descriptive headline</small></p>
    <Input
      placeholder="Add a short, descriptive headline"
      bind:value={feedback.title}
      
    />
   </div>
<div class="mb-4">
  <p style="font-family: jost;"><strong>Category</strong></p>
  <p><small>Choose a category for your feedback</small></p>
  <DropDown
      options={categories}
      bind:selected={feedback.category}
    />
</div>


  <div>
    <p style="font-family: jost;"><strong>Feedback Details</strong></p>
  <p><small>Include any specific comments on what should be improved, added, etc.</small></p>
    <Input
    placeholder="Include any specific comments on what should be improved, added, etc."
    multiline={true}
    bind:value={feedback.description}
  />
  </div>

    <div class="mt-6 flex justify-between">
      <Button label="Cancel" variant="secondary"></Button>
      <Button label="Add Feedback" variant="primary"></Button>
    </div>
  </div>
</div>
