
import { models, model, Schema } from 'mongoose';
import { IBlog } from '@/interfaces';
import { title, description, markdown } from '@/utility';
import TypeModel from './type.model';
import UserModel from './user.model';
import { logChangeStream } from "./IMHelper";
import documentModel from './document.model';

const schema = new Schema<IBlog>({
  title, description,
  markdown: {
    type: String,
    required: true,
    minlength: markdown.minlength,
    maxlength: markdown.maxlength
  },
  type: { ref: TypeModel, type: Schema.Types.ObjectId },
  tags: [{ ref: TypeModel, type: Schema.Types.ObjectId }],
  seos: String,
  createdBy: { ref: UserModel, type: Schema.Types.ObjectId } ,
  thumbnail: {ref: documentModel, type: Schema.Types.ObjectId},
  documents: [{ ref: documentModel, type: Schema.Types.ObjectId }],

}, {
  timestamps: true,
  methods: {},
  statics: {},
  query: {},
  virtuals: {},
});

const Model = models.Blogs || model<IBlog>('Blogs', schema);
Model.watch().on('change', logChangeStream)

export default Model