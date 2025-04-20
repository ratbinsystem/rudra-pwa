import { IBlog } from "@/interfaces";
import { faker } from '@faker-js/faker';
import _ from 'lodash';
import BlogModel from "../models/blog.model";
import { getRandomNumber, MARKDOWN } from "@/utility";
import { seedMany } from "./seeder";
import documentSeed from "./document.seed";
import TypeModel from "../models/type.model";

export const blogSeed = async (): Promise<IBlog> => {
  const getTypes = await TypeModel.find({});
  const type = _.sample(getTypes.filter((type) => type.cat === 'Blog'));
  const tags = _.sampleSize(getTypes.filter((type) => type.cat === 'Tag' ), getRandomNumber(2, 5));
  const model = await BlogModel.create({
    title: faker.lorem.words(5),
    description: faker.lorem.words(30),
    markdown: MARKDOWN,
    type: type._id,
    tags: tags.map(item => item._id),
    seos: faker.lorem.words(5),
    thumbnail: (await documentSeed())._id,
    documents: (await seedMany(getRandomNumber(2, 5), documentSeed)).map(item => item._id),
    rows: getRandomNumber(1, 3),
    columns: getRandomNumber(1, 3),
  });
  return model;
}

export default blogSeed;