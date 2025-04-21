import { models, model, Schema } from 'mongoose';
import { IUser } from '@/interfaces';
import { title, description } from '@/utility';
import TypeModel from './type.model';
import DocumentModel from './document.model';
import AddressModel from './address.model';
import { logChangeStream } from "./IMHelper";


const schema = new Schema<IUser>({
    name: title, description,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    dateOfBirth: { type: Date, required: true },
    gender: { ref: TypeModel, type: Schema.Types.ObjectId },
    role: { ref: TypeModel, type: Schema.Types.ObjectId },
    dp: { ref: DocumentModel, type: Schema.Types.ObjectId },
    address: { ref: AddressModel, type: Schema.Types.ObjectId },
    contacts: [{ ref: TypeModel, type: Schema.Types.ObjectId }],
    documents: [{ ref: DocumentModel, type: Schema.Types.ObjectId }],
    emergencyContact: description,
}, {
    timestamps: true,
    methods: {},
    statics: {},
    query: {},
    virtuals: {},
});


const Model = models?.Users || model<IUser>('Users', schema);
Model.watch().on('change', logChangeStream)

export default Model