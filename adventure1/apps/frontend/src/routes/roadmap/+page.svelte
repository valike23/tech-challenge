<script lang="ts">
	import { goto } from "$app/navigation";
	import type { Feedback } from "@prisma/client";
	import { Button, Tag, UpVoteButton } from "@tech-challenge/ui-components";
	import { fetchFeedbacks } from "$lib/requests/feedback";
	import { onMount } from "svelte";
    let plannedFeedback: Feedback[] = [];
    let progressFeedback: Feedback[] = [];
    let liveFeedback: Feedback[] = [];
    let allFeedBacks: Feedback[] =[];

    const gotoCreate = ()=>{
    console.log("Creating nav");
    goto('/feedback/create')
  }

  const goback = ()=>{
    history.back();
  }

  onMount(async () => {
		allFeedBacks = await fetchFeedbacks();
        plannedFeedback = allFeedBacks.filter(f => f.status === "Planned");
        progressFeedback = allFeedBacks.filter(f => f.status === "In Progress");
        liveFeedback = allFeedBacks.filter(f => f.status === "Live");
  
	});

</script>
<div class="min-h-screen bg-gray-100 p-6">

    <div class="flex justify-between items-center mb-6">
     <Button variant="go-back" label="go back"></Button>
     <Button on:click="{gotoCreate}" variant="primary" label="+ Add Feedback"></Button>
    </div>
  
   
    <h2 class="text-2xl font-bold mb-6">Roadmap</h2>
  

    <div class="grid  grid-cols-3 md:grid-cols-1 gap-6">
   
      <div>
        <h3 class="text-lg font-semibold mb-2">Planned ({plannedFeedback.length})</h3>
        <p class="text-gray-500 mb-4">Ideas prioritized for research</p>
  
  
       {#each plannedFeedback as feed}
       <div class="bg-white p-4 rounded-lg shadow-lg mb-4 border-t-4 border-orange-300">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-orange-500">Planned</span>
        </div>
        <h4 class="font-bold text-gray-900">{feed.title}</h4>
        <p class="text-gray-600 text-sm mb-4">{feed.description}</p>
        <div class="flex justify-between text-sm">
          <Tag label="{feed.category}" active={true}></Tag>
         
        </div>
        <div class="flex justify-between mt-3">
            <UpVoteButton count={feed.upvotes}></UpVoteButton>
        </div>
      </div>
       {/each}
  
   
      </div>
  
      <!-- In Progress -->
      <div>
        <h3 class="text-lg font-semibold mb-2">In-Progress ({progressFeedback.length})</h3>
        <p class="text-gray-500 mb-4">Currently being developed</p>
  
        <!-- In Progress Card 1 -->
        <div class="bg-white p-4 rounded-lg shadow-lg mb-4 border-t-4 border-purple-300">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-purple-500">In Progress</span>
            <span class="text-xs bg-blue-100 text-blue-700 py-1 px-2 rounded">Feature</span>
          </div>
          <h4 class="font-bold text-gray-900">One-click portfolio generation</h4>
          <p class="text-gray-600 text-sm mb-4">Add ability to create professional looking portfolio from profile.</p>
          <div class="flex justify-between text-gray-500 text-sm">
            <span>🔼 62</span>
            <span>💬 1</span>
          </div>
        </div>
  
   
      </div>
  
   
      <div>
        <h3 class="text-lg font-semibold mb-2">Live ({liveFeedback.length})</h3>
        <p class="text-gray-500 mb-4">Released features</p>
  
        <div class="bg-white p-4 rounded-lg shadow-lg border-t-4 border-blue-300">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold text-blue-500">Live</span>
            <span class="text-xs bg-purple-100 text-purple-700 py-1 px-2 rounded">Enhancement</span>
          </div>
          <h4 class="font-bold text-gray-900">Add micro-interactions</h4>
          <p class="text-gray-600 text-sm mb-4">Small animations at specific points can add delight.</p>
          <div class="flex justify-between text-gray-500 text-sm">
            <span>🔼 71</span>
            <span>💬 2</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  