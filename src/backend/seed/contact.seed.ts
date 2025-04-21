import { faker } from '@faker-js/faker';
import typeModal from '../models/type.model';
import model from '../models/contact.model';
const seed = async () => {
    const types = await typeModal.findOne({ cat: 'Contact' });
    const newModel = await model.create({
        title: faker.lorem.words({ min: 2, max: 5 }),
        description: faker.lorem.lines({ min: 3, max: 8 }),
        type: types._id,
        isActive: faker.datatype.boolean(),
        isPrimary: faker.datatype.boolean(),
        isPublic: faker.datatype.boolean(),
        isVerified: faker.datatype.boolean(),
    })
    return newModel;
}

export default seed;