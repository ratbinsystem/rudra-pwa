import { IUser } from '@/interfaces';
import { faker } from '@faker-js/faker';
import TypeModel from '../models/type.model';
import UserModel from '../models/user.model';
import { seedMany } from './seeder';
import { getRandomNumber } from '@/utility';
import addressSeed from './address.seed';
import documentSeed from './document.seed';
import contactSeed from './contact.seed';
import membershipSeed from './membership.seed';
import _ from 'lodash';

export const userSeed = async (): Promise<IUser[]> => {
  const getRoles = await TypeModel.find({ cat: 'Role' });
  const roleAdmin = getRoles.filter((role) => role.subCat === 'ADMIN')[0];
  const roleUser = getRoles.filter((role) => role.subCat === 'USER')[0];
  const genders = await TypeModel.find({ cat: 'Gender' });
  const gender = genders[(Math.floor(Math.random() * genders.length))]
  const adminProfile = await documentSeed();
  const usewrProfile = await documentSeed();
  const address = await addressSeed();

  const model = await UserModel.insertMany([{
    name: 'Rahul',
    email: 'rahul.adsps@gmail.com',
    password: 'admin',
    dateOfBirth: faker.date.past(),
    gender: gender._id,
    role: roleAdmin._id,
    dp: adminProfile._id,
    description: faker.lorem.paragraph(2),
    contacts: (await seedMany(getRandomNumber(2, 5), contactSeed)).map(item => item._id),
    address: address._id,
    documents: (await seedMany(getRandomNumber(2, 5), documentSeed)).map(item => item._id),
    emergencyContact: `name: ${faker.person.firstName()} ${faker.person.lastName()}, phone: ${faker.phone.number({ style: 'human' })}, address: ${faker.location.streetAddress()}`,
    memberships: _.map((await seedMany(getRandomNumber(2, 5), membershipSeed)), '_id'),
  },
  {
    name: faker.name.fullName(gender.title),
    email: 'user',
    password: 'user',
    dateOfBirth: faker.date.past(),
    gender: gender._id,
    role: roleUser._id,
    dp: usewrProfile._id,
    description: faker.lorem.paragraph(2),
    contacts: (await seedMany(getRandomNumber(2, 5), contactSeed)).map(item => item._id),
    addresses: (await seedMany(getRandomNumber(2, 5), addressSeed)).map(item => item._id),
    documents: (await seedMany(getRandomNumber(2, 5), documentSeed)).map(item => item._id),
    emergencyContact: `name: ${faker.person.firstName()} ${faker.person.lastName()}, phone: ${faker.phone.number({ style: 'human' })}, address: ${faker.location.streetAddress()}`,
    memberships: _.map((await seedMany(getRandomNumber(2, 5), membershipSeed)), '_id'),
  }
  ]);

  return model;

}
export default userSeed;
