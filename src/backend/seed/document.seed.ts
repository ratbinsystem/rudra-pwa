import { faker } from '@faker-js/faker';
import chalk from 'chalk';
import TypeModel from '../models/type.model';
import DocumentModel from '../models/document.model';

const documentSeed = async () => {
  const types = await TypeModel.find({ cat: 'Document' });
  const type = types[Math.floor(Math.random() * types.length)]._id;

  const model = await DocumentModel.create({
    name: faker.lorem.words(1),
    description: faker.lorem.paragraphs(2),
    type: type,
    uri: faker.image.url(),
    format: faker.system.commonFileExt(),
  });

  return model;
}

export default documentSeed;