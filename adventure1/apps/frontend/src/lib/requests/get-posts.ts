import type { Post } from '@prisma/client';

export interface PostWithAuthor extends Post {
	author: {
		name: string;
	} | null;
}

export async function fetchPosts(): Promise<PostWithAuthor[]> {
	let posts: PostWithAuthor[] = [];

	try {
		const response = await fetch('/api/posts');
		if (response.ok) {
			posts = await response.json();
		} else {
			console.error('Failed to fetch posts');
		}
	} catch (error) {
		console.error('An error occurred while fetching posts:', error);
	}

	return posts;
}
