import type { Feedback } from "@prisma/client";


export async function fetchFeedbacks(): Promise<Feedback[]> {
	let feedbacks: Feedback[] = [];

	try {
		const response = await fetch('/api/feedback');
		if (response.ok) {
			feedbacks = await response.json();
		} else {
			console.error('Failed to fetch feedbacks');
		}
	} catch (error) {
		console.error('An error occurred while fetching feedbacks:', error);
	}

	return feedbacks;
}

export async function addFeedBack(data: Partial<Feedback>): Promise<Feedback> {
    try {
        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const feedback = await response.json();
            return feedback;
        } else {
            console.error('Failed to add feedback');
            throw new Error('Failed to add feedback');
        }
    } catch (error) {
        console.error('An error occurred while adding feedback:', error);
        throw error;
    }
}


