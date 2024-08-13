import type { RequestHandler } from '@sveltejs/kit';
import prisma from '../../../lib/config/prisma-client';

export const GET: RequestHandler = async () => {
	try {
		const posts = await prisma.post.findMany({
			include: {
				author: true
			}
		});
		return new Response(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), { status: 500 });
	}
};
