import { models, model, Schema } from 'mongoose';
import TypeModel from './type.model';
import { logChangeStream } from "./IMHelper";
import { IDocument } from '@/interfaces';
import { title, description } from '@/utility';

const schema = new Schema<IDocument>({
  name: title,
  description,
  type: { ref: TypeModel, type: Schema.Types.ObjectId },
  uri: {
    type: String,
    required: true
  },
  format: {
    type: String,
    required: true
  },
}, {
  timestamps: true,
  methods: {},
  statics: {},
  query: {},
  virtuals: {},
});


const Model = models.Documents || model<IDocument>('Documents', schema);
Model.watch().on('change', logChangeStream)
export default Model