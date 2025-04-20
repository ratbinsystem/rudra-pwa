import { faker } from '@faker-js/faker';
import typeModal from '../models/type.model';
import Model from '../models/address.model';

const seed = async () => {
    const types = await typeModal.findOne({ cat: 'Contact' });

    const newModel = await Model.create({
        address: faker.location.streetAddress(),
        type: types._id,
        zip: faker.location.zipCode(),
        isActive: faker.datatype.boolean(),
        isPrimary: faker.datatype.boolean(),
        isPublic: faker.datatype.boolean(),
        isVerified: faker.datatype.boolean(),
    })
    return newModel;
}
export default seed;