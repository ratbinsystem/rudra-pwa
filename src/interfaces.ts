import mongoose, { Schema } from "mongoose";

interface mongooseDefaults {
  readonly _id?: mongoose.Types.ObjectId | string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
  deletedBy?: mongoose.Types.ObjectId
  createdBy?: IUser
}

export type Enum = Record<string | number, string | number>
export interface IPin extends mongooseDefaults {
  state: string,
  district: string,
}


export interface IType extends mongooseDefaults {
  title: string,
  cat: string,
  subCat?: string,
  subSubCat?: string,
  description?: string
}

export interface IUser extends mongooseDefaults {
  name: string,
  email: string,
  password: string,
  dateOfBirth: Date,
  gender: mongoose.Types.ObjectId,
  role: mongoose.Types.ObjectId | IType | string,
  dp: mongoose.Types.ObjectId | IDocument | string
  description: string,
  contacts: [mongoose.Types.ObjectId | IContact | string],
  address: mongoose.Types.ObjectId | IAddress | string,
  documents: [mongoose.Types.ObjectId | IDocument | string],
  emergencyContact: string,
}


export interface IContact extends mongooseDefaults {
  type: Schema.Types.ObjectId | string | IType,
  value: string,
  description: string,
  isActive: boolean;
  isPrimary: boolean;
  isPublic: boolean;
  isVerified: boolean;
}

export interface IAddress extends mongooseDefaults {
  type: Schema.Types.ObjectId | string | IType;
  address: string;
  state: string;
  district: string;
  zip: string | IPin | Schema.Types.ObjectId;
  isActive: boolean;
  isPrimary: boolean;
  isPublic: boolean;
  isVerified: boolean;
}

export interface IDocument extends mongooseDefaults {
  name: string;
  description: string;
  type: Schema.Types.ObjectId;
  uri: string;
  format: string;
}

export interface IBlog extends mongooseDefaults {
  _id: mongoose.Types.ObjectId;
  title: string;
  description: string;
  markdown: string;
  type: Schema.Types.ObjectId | IType;
  seos: string;
  tags: [Schema.Types.ObjectId | IType];
  thumbnail: Schema.Types.ObjectId | IDocument;
  documents: [Schema.Types.ObjectId | IDocument];
  rows: number;
  columns: number;
}

export interface StringDictionary {
  [key: string]: string;
}

export interface IMembership extends mongooseDefaults {

}