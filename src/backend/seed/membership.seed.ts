import { faker } from '@faker-js/faker';
import typesModel from '../models/type.model';
import model from '../models/membership.model';
import _ from 'lodash';
const seed = async () => {
    const types = await typesModel.find({ cat: 'Membership' });
    const newModel = await model.create({
        startDate: faker.date.past(),
        endDate: faker.date.future(),
        description: faker.lorem.paragraph(),
        paid: faker.finance.amount(),
        isActive: faker.datatype.boolean(),
        type: _.sample(types)._id,
    })
    return newModel;
}

export default seed;