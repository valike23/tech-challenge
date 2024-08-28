<script lang="ts">
	
	import { Button } from '@tech-challenge/ui-components';
	import { onMount } from 'svelte';
	import { fetchPosts, type PostWithAuthor } from '../lib/requests/get-posts';

	let posts: PostWithAuthor[] = [];

	onMount(async () => {
		posts = await fetchPosts();
		console.log(posts);
	});
</script>

<div class="flex flex-col items-center h-screen gap-4 p-10">
	<h1 class="text-2xl font-bold">Welcome to the Tellimer Fullstack Assignments</h1>
	<h3 class="text-lg font-medium">A starter projects with a few things wired up already!</h3>
	<div class="flex flex-col gap-2">
	   <!-- This button is imported from the ui-components package -->
		<Button variant="danger" label="Good lucksjwdnwjndjw!" />
	</div>
	{#if posts.length > 0}
    <ul class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each posts as post}
        <li class="bg-white shadow-md rounded-lg p-6 flex flex-col">
          <h2 class="text-xl font-semibold mb-2">{post.title}</h2>
          <p class="text-gray-700 mb-4">{post.content}</p>
          <p class="text-gray-500">Author: {post?.author?.name || 'Unknown'}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No posts available.</p>
  {/if}
</div>
