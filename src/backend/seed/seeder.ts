import mongoose, { connect } from 'mongoose';
import blogSeed from "./blog.seed";
import { typeSeed } from "./type.seed";
import userSeed from './user.seed';



const env = process.argv[2] || 'dev'; // dev, prod
const numberOfBlog = process.argv[3] || '30'; // dev, prod
const dbPath = 'mongodb+srv://rahuladsps:pAgtj2052@cluster0.np6sy.mongodb.net';
connect(`${dbPath}/rudra_${env}?retryWrites=true&w=majority&appName=srhCluster`).then(() => {
  const seed = async () => {
    await typeSeed();
    await userSeed();
    for (let index = 0; index < Number(numberOfBlog); index++) {
      await blogSeed();
    }
    process.exit(0)
  }
  seed();
});

// npm run seed dev all 10 10 

export const seedMany = async (count: number, seeder: () => Promise<mongoose.Document>) => {
  const models = [];
  for (let i = 0; i < count; i++) {
    const model = await seeder();
    models.push(model);
  }
  return models;
}