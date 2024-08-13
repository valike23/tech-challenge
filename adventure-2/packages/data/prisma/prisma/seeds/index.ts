const { PrismaClient } = require("@prisma/client");
const { users, posts } = require("./data.js");

const prisma = new PrismaClient();

const load = async () => {
  try {
    // Delete existing records
    await prisma.post.deleteMany();
    console.log("Deleted records in post table");

    await prisma.user.deleteMany();
    console.log("Deleted records in user table");

    // Reset auto-increment values
    await prisma.$queryRaw`DELETE FROM sqlite_sequence WHERE name = 'Post'`;
    console.log("Reset post auto increment to 1");

    await prisma.$queryRaw`DELETE FROM sqlite_sequence WHERE name = 'User'`;
    console.log("Reset user auto increment to 1");

    // Create new records
    for (const user of users) {
      await prisma.user.create({
        data: user,
      });
    }
    console.log("Added user data");

    for (const post of posts) {
      await prisma.post.create({
        data: post,
      });
    }
    console.log("Added post data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
