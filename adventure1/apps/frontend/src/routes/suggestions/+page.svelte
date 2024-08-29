<script lang="ts">
	import { Button, Tag, SortDropdown, UpVoteButton } from "@tech-challenge/ui-components";
	import type { Feedback } from "@prisma/client";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { fetchFeedbacks } from "$lib/requests/feedback";
  let feedbacks: Feedback[] = [];
  let activeFilter = 'All';
  let allFeedBacks: Feedback[] =[];

  const filters = ['All', 'UI', 'UX', 'Enhancement', 'Bug',  'Feature'];

  const gotoCreate = ()=>{
    console.log("Creating nav");
    goto('/feedback/create')
  }

  const filterData = (filterStr: string)=>{
    
    activeFilter = filterStr;
    if (activeFilter === 'All') return  feedbacks = allFeedBacks;
    console.log("Filtering data");

    feedbacks = allFeedBacks.filter(feedback => feedback.category === activeFilter);
    feedbacks = feedbacks;
  }

  onMount(async () => {
		feedbacks = await fetchFeedbacks();
    allFeedBacks = feedbacks;
		console.log(feedbacks);
	});

</script>
<svelte:head>
    <title>Frontend Mentor Feedback Board</title>
</svelte:head>

<div class="min-h-screen bg-gray-100 p-6">
    <!-- Main Container -->
    <div class="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-3 gap-6">
      <!-- Sidebar -->
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6 rounded-lg shadow-md">
          <h1 class="text-xl font-bold mt-10">Frontend Mentor</h1>
          <p class="text-sm opacity-75">Feedback Board</p>
        </div>
        
        <!-- Filters -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-lg font-semibold mb-4">Filters</h2>
          <div class="space-y-2">

          {#each filters as filter}
        <span class="mr-2">  <Tag active="{filter === activeFilter}" label="{filter}" on:click={()=>{filterData(filter)}}></Tag></span>
          {/each}
           
           
          </div>
        </div>
        
        <!-- Roadmap -->
        <div class="bg-white p-4 rounded-lg shadow-md">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Roadmap</h2>
            <a href="/roadmap" class="text-blue-600 text-sm font-medium">View</a>
          </div>
          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-orange-500">● Planned</span>
              <span class="font-bold text-gray-700">{allFeedBacks.filter(feedback => feedback.status == 'Planned').length}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-purple-500">● In-Progress</span>
              <span class="font-bold text-gray-700">{allFeedBacks.filter(feedback => feedback.status == 'In-Progress').length}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-green-500">● Live</span>
              <span class="font-bold text-gray-700">{allFeedBacks.filter(feedback => feedback.status == 'Live').length}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Suggestions List -->
      <div class="col-span-2 space-y-6 ">
        <div class="flex justify-between items-center py-3 px-4 rounded-lg bg-gray-900 text-white">
            <!-- Container for the icon and title -->
            <div class="flex items-center space-x-3">
              <img src="bulb.png" alt="" class="h-6 w-6"> <!-- Adjust the size as needed -->
              <h2 class="text-xl font-bold">{feedbacks.length} Suggestions</h2>
            </div>
            
            <div class="flex space-x-4 items-center">
              <div class="relative">
                <SortDropdown></SortDropdown>
              </div>
              <Button on:click="{gotoCreate}" label="+ Add Feedback"></Button>
            </div>
          </div>
          
        
        <!-- Suggestion Cards -->
        <div class="space-y-4">
          <!-- Suggestion Card -->
        {#each feedbacks as feedback}
        <div class="bg-white p-4 rounded-lg shadow-md flex justify-between items-start">
          <div class="flex items-start space-x-4">
            <div class="flex flex-col items-center">
              <UpVoteButton count={feedback.upvotes || 0}></UpVoteButton>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">{feedback.title}</h3>
              <p class="text-gray-600 mb-2">{feedback.description}</p>
              <span class="bg-gray-100 text-blue-600 text-sm font-medium py-1 px-3 rounded">{feedback.category}</span>
            </div>
          </div>
          <div class="text-gray-500 text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2s8 3.582 8 8zM8 8H4a6 6 0 0010.661 3.27l-3.707-3.707A1 1 0 008 8zm4 4a1 1 0 00.293-.707L8.707 8A1 1 0 108 9.414l3.707 3.707A1 1 0 0012 12z"/>
            </svg>
            2
          </div>
        </div>
        
        {/each}
  
          <!-- Repeat for other suggestion cards... -->
        </div>
      </div>
    </div>
  </div>
  