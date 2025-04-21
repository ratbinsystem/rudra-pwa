import mongoose, { Schema, model } from "mongoose";
import { logChangeStream } from "./IMHelper";
import {description} from "@/utility"

const schema = new Schema({
    type: { type: Schema.Types.ObjectId, ref: 'Type' },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    description,
    paid: String,
    isActive: { type: Boolean, default: true },
}, { timestamps: true })

const Model = mongoose.models.Membership || model('Membership', schema);
Model.watch().on('change', logChangeStream)

export default Model    