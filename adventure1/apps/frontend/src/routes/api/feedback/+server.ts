// src/routes/api/feedbacks/+server.ts
import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';

const prisma = new PrismaClient();

export async function POST({ request }) {
    const { title, description, category } = await request.json();

    const newFeedback = await prisma.feedback.create({
        data: {
            title,
            description,
            category,
        },
    });

    return json(newFeedback);
}

export async function GET() {
    const feedbacks = await prisma.feedback.findMany({
        where: { status: "suggestion" }, 
        include: {
            comments: true,
        },
    });

    return json(feedbacks);
}

export async function PATCH({ request, params }) {
    const { id } = params as never;
    const { title, description, category, status } = await request.json();

    const updatedFeedback = await prisma.feedback.update({
        where: { id: Number(id) },
        data: { title, description, category, status },
    });

    return json(updatedFeedback);
}

export async function DELETE({ params }) {
    const { id } = params as never;

    await prisma.feedback.delete({
        where: { id: Number(id) },
    });

    return json({ message: 'Feedback deleted successfully' });
}