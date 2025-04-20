import mongoose, { Schema, model } from "mongoose";
import { logChangeStream } from "./IMHelper";
import  typeModel  from "./type.model";
import { description } from "@/utility";
const schema = new Schema({
    address: description,
    type: { ref: typeModel, type: Schema.Types.ObjectId },
    zip: {
        type: String,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true,
    },
    isPrimary: {
        type: Boolean,
        default: true,
    },
    isPublic: {
        type: Boolean,
        required: false,
    },
    isVerified: {
        type: Boolean,
        required: false,
    },
}, { timestamps: true })

const Model = mongoose.models.Addresss || model('Addresss', schema);
Model.watch().on('change', logChangeStream)

export default Model