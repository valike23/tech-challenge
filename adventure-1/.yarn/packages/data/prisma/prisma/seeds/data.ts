import { User, Post } from "@prisma/client";

type UserSeed = Omit<User, "id">;
type PostSeed = Omit<Post, "id">;

export const users: UserSeed[] = [
  {
    email: "alice@prisma.io",
    name: "Alice",
  },
  {
    email: "bob@prisma.io",
    name: "Bob",
  },
  {
    email: "charlie@prisma.io",
    name: "Charlie",
  },
  {
    email: "dave@prisma.io",
    name: "Dave",
  },
  {
    email: "eve@prisma.io",
    name: "Eve",
  },
  {
    email: "frank@prisma.io",
    name: "Frank",
  },
  {
    email: "grace@prisma.io",
    name: "Grace",
  },
  {
    email: "heidi@prisma.io",
    name: "Heidi",
  },
  {
    email: "ivan@prisma.io",
    name: "Ivan",
  },
  {
    email: "judy@prisma.io",
    name: "Judy",
  },
];

export const posts: PostSeed[] = [
  {
    title: "Hello World",
    content: "This is my first post",
    published: true,
    authorId: 1, // Assuming Alice's ID will be 1
  },
  {
    title: "Prisma is awesome",
    content: "Prisma makes database interactions easy",
    published: false,
    authorId: 2, // Assuming Bob's ID will be 2
  },
  {
    title: "Typescript with Prisma",
    content: "Using TypeScript with Prisma is great",
    published: true,
    authorId: 3, // Assuming Charlie's ID will be 3
  },
  {
    title: "Database Seeding",
    content: "Seeding databases with Prisma is straightforward",
    published: true,
    authorId: 4, // Assuming Dave's ID will be 4
  },
  {
    title: "Advanced Prisma",
    content: "Exploring advanced features of Prisma",
    published: false,
    authorId: 5, // Assuming Eve's ID will be 5
  },
  {
    title: "Prisma and GraphQL",
    content: "Integrating Prisma with GraphQL",
    published: true,
    authorId: 6, // Assuming Frank's ID will be 6
  },
  {
    title: "Prisma with Next.js",
    content: "Using Prisma with Next.js for full-stack development",
    published: true,
    authorId: 7, // Assuming Grace's ID will be 7
  },
  {
    title: "Prisma Migrations",
    content: "Managing database schema changes with Prisma Migrations",
    published: false,
    authorId: 8, // Assuming Heidi's ID will be 8
  },
  {
    title: "Prisma and REST APIs",
    content: "Building REST APIs with Prisma",
    published: true,
    authorId: 9, // Assuming Ivan's ID will be 9
  },
  {
    title: "Prisma Performance",
    content: "Optimizing performance with Prisma",
    published: false,
    authorId: 10, // Assuming Judy's ID will be 10
  },
  {
    title: "Prisma and Docker",
    content: "Using Prisma with Docker for containerized development",
    published: true,
    authorId: 1, // Assuming Alice's ID will be 1
  },
  {
    title: "Prisma and CI/CD",
    content: "Integrating Prisma with CI/CD pipelines",
    published: false,
    authorId: 2, // Assuming Bob's ID will be 2
  },
  {
    title: "Prisma and Serverless",
    content: "Deploying Prisma with serverless architectures",
    published: true,
    authorId: 3, // Assuming Charlie's ID will be 3
  },
  {
    title: "Prisma and Microservices",
    content: "Using Prisma in a microservices architecture",
    published: true,
    authorId: 4, // Assuming Dave's ID will be 4
  },
  {
    title: "Prisma and Authentication",
    content: "Implementing authentication with Prisma",
    published: false,
    authorId: 5, // Assuming Eve's ID will be 5
  },
  {
    title: "Prisma and Authorization",
    content: "Implementing authorization with Prisma",
    published: true,
    authorId: 6, // Assuming Frank's ID will be 6
  },
];
