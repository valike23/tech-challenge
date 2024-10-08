![preview](https://github.com/user-attachments/assets/40215a49-d8ae-4196-8dc7-006fdab35c49)

## Welcome! 👋

Welcome to the Product Feedback App technical assignment. This challenge will help you showcase your skills by building a realistic project that can be a valuable addition to your portfolio.

**To complete this challenge, you need a strong understanding of HTML, CSS, TypeScript, SvelteKit, SQL, and Node.js.**

## The Challenge

Your task is to build a product feedback application using the provided design files. You will receive a starter repository with a SvelteKit app, a Storybook component library, and two data packages. Additionally, you will get environment variables to connect to a Neon Postgres database or use a local SQLite database, along with the Figma design and challenge files.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Create, read, update, and delete product feedback requests.
- Receive form validations when trying to create/edit feedback requests.
- Sort suggestions by most/least upvotes and most/least comments.
- Filter suggestions by category.
- Add comments and replies to a product feedback request.
- Upvote product feedback requests.
- Persist the data using SQLite.

### Expected Behavior

- **Suggestions Page**: Only show product feedback requests with a status of `suggestion`.
- **Roadmap**:
  - Display feedback requests with a status of `planned`, `in-progress`, or `live`.
  - Organize columns by upvote totals.
- **Creating a Product Request**:
  - Assign a new ID that increments the current highest product request ID by 1.
  - Set the default status for new feedback to `suggestion`.
- **Editing Feedback**:
  - Move feedback through the roadmap based on status updates (`planned`/`in-progress`/`live`).
- **Add Comments/Replies**:
  - Populate user data for new comments or replies using data from the `currentUser` object in the `data.json` file.
  - Limit comments/replies to 250 characters.

### Nice to Have

- Accessibility: Ensure correct navigation through the page and components using the tab key.
- API integration testing using Jest or Vitest.
- CI/CD deployments to Vercel and backend deployment.

## Project Setup

1. **Clone the Repository**: Start by cloning or forking the provided starter repository.
2. **Environment Setup**: Use the provided environment variables to connect to the Neon Postgres database.
3. **Design Files**: We will send you the Figma design and challenge files via email.
4. **Component Library**: Utilize the Storybook component library to build your UI components and integrate them into the app.

## Running the Project Locally

- **Environment Requirements**: Node 20.x, Yarn 4.x, Git, Figma.

### Commands to Run the Project

- `yarn install` at the root
- `yarn frontend:start` - starts the frontend project
- `yarn frontend:build` - builds the frontend project
- `yarn frontend:preview` - previews the frontend project
- `yarn storybook:build` - builds the Storybook project
- `yarn storybook:start` - starts the Storybook project
- `yarn components:build` - builds the Storybook project (same as storybook:build)
- `yarn components:start` - starts the Storybook project (same as storybook:start)
- `yarn data:generate` - generates Prisma client
- `yarn data:seed` - seeds the database with some starting data
- `yarn data:migrate` - runs Prisma migrations

## Building Your Project

1. **Build Components**: Create the components as per the pixel-perfect design using Figma, Svelte, and TypeScript.
2. **Implement Functionality**: Ensure the app functions as described in the challenge requirements. Use Node.js and TypeScript for server-side with a backend stack of your choosing.
3. **Commit and Submit**: Commit your code to the forked public repository and inform us when you are done.
4. **Bonus**: Deploy both backend and frontend (not a requirement).

## Submitting Your Solution

1. **Deployment**: If you deploy your application then provide a link to the live application.
2. **Repository**: Commit your code to your public GitHub repository, again provide a link to the repository.
3. **Notification**: Let us know when your project is complete and share the repository link..

## Technologies We Use

Here's a list of technologies we use. Feel free to choose something that we already use or your preferred backend stack and hosting provider.

1. SvelteKit
2. TypeGraphQL
3. Prisma ORM
4. Kysely (Query builder)
5. Postgres
6. AWS Lambda
7. Koa/Express
8. Tailwind
9. Pulumi
10. SQL
11. Zod validation
12. SQLite
13. Vercel
14. EC2
15. S3
16. RDS
17. Nitric
18. Docker

## Support

For any questions or feedback, please reach out to your Tellimer contact.
🚀

