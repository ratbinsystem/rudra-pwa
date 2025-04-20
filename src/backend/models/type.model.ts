import { IType } from "@/interfaces";
import { model, models, Schema } from "mongoose";
import { title, description } from "@/utility";
import { logChangeStream } from "./IMHelper";


const schema = new Schema<IType>({
    title, description,
    cat: {
        type: String,
        required: true,
    },
    subCat: String,
    subSubCat: String,
}, {
    timestamps: true,
    methods: {},
    statics: {},
    query: {},
    virtuals: {},
});

const Model = models.Types || model<IType>('Types', schema);
Model.watch().on('change', logChangeStream)

export default Model