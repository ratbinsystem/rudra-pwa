import mongoose, { Schema, model } from "mongoose";
import { logChangeStream } from "./IMHelper";
import {title, description} from "@/utility";
const schema = new Schema({
  title,
  description,
  type: { type: Schema.Types.ObjectId, ref: 'Type' },
  isActive: { type: Boolean, default: true },
  isPrimary: { type: Boolean, default: false },
  isPublic: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
}, { timestamps: true })

const Model = mongoose.models.Contact || model('Contact', schema);
Model.watch().on('change', logChangeStream)

export default Model