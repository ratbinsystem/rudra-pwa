import { IType } from "@/interfaces";
import TypeModel from "../models/type.model";

const types: IType[] = [
    // roles
    {
        title: 'ADMIN',
        cat: 'Role',
        subCat: 'ADMIN',
        description: '',
    },
    {
        title: 'USER',
        cat: 'Role',
        subCat: 'USER',
        description: '',
    },
    // address
    {
        title: 'HOME',
        cat: 'Address',
        subCat: 'HOME',
        description: '',
    },

    {
        title: 'OFFICE',
        cat: 'Address',
        subCat: 'OFFICE',
        description: '',
    },
    {
        title: 'OTHER',
        cat: 'Address',
        subCat: 'OTHER',
        description: '',
    },
    // gender
    {
        title: 'Male',
        cat: 'Gender',
        subCat: 'Male',
        description: '',
    },
    {
        title: 'Female',
        cat: 'Gender',
        subCat: 'Female',
        description: '',
    },
    // blog type
    {
        title: 'Simple Squad',
        cat: 'Blog',
        subCat: 'Leg',
        subSubCat: 'Squad',
        description: '',
    },
    {
        title: 'Weighted Squad',
        cat: 'Blog',
        subCat: 'Leg',
        subSubCat: 'Squad',
        description: '',
    },
    {
        title: 'Chest Press',
        cat: 'Blog',
        subCat: 'Chest',
        subSubCat: 'Chest',
        description: '',
    },
    {
        title: 'Incline Chest Press',
        cat: 'Blog',
        subCat: 'Chest',
        subSubCat: 'Chest',
        description: '',
    },
    {
        title: 'Decline Chest Press',
        cat: 'Blog',
        subCat: 'Chest',
        subSubCat: 'Chest',
        description: '',
    },
    {
        title: 'Shoulder Press',
        cat: 'Blog',
        subCat: 'Shoulder',
        subSubCat: 'Shoulder',
        description: '',
    },
    {
        title: 'Lateral Raise',
        cat: 'Blog',
        subCat: 'Shoulder',
        subSubCat: 'Lateral',
        description: '',
    },
    {
        title: 'Front Raise',
        cat: 'Blog',
        subCat: 'Shoulder',
        subSubCat: 'Front',
        description: '',
    },
    {
        title: 'Bicep Curl',
        cat: 'Blog',
        subCat: 'Arm',
        subSubCat: 'Bicep',
        description: '',
    },
    {
        title: 'Tricep Extension',
        cat: 'Blog',
        subCat: 'Arm',
        subSubCat: 'Tricep',
        description: '',
    },
    {
        title: 'Tricep Dips',
        cat: 'Blog',
        subCat: 'Arm',
        subSubCat: 'Tricep',
        description: '',
    },
    {
        title: 'Lunges',
        cat: 'Blog',
        subCat: 'Leg',
        subSubCat: 'thigh',
        description: '',
    },
    {
        title: 'Deadlifts',
        cat: 'Blog',
        subCat: 'Leg',
        subSubCat: 'Leg',
        description: '',
    },
    {
        title: 'Leg Press',
        cat: 'Blog',
        subCat: 'Leg',
        subSubCat: 'Leg',
        description: '',
    },
    {
        title: 'Plank',
        cat: 'Blog',
        subCat: 'Core',
        subSubCat: 'Core',
        description: '',
    },
    {
        title: 'Crunches',
        cat: 'Blog',
        subCat: 'Core',
        subSubCat: 'Core',
        description: '',
    },
    {
        title: 'Russian Twists',
        cat: 'Blog',
        subCat: 'Core',
        subSubCat: 'Core',
        description: '',
    },


    // documentTypes
    {
        title: 'logo',
        cat: 'Document',
        subCat: 'icon',
        description: '',
    },
    {
        title: 'cover',
        cat: 'Document',
        subCat: 'photo',
        description: '',
    },
    // organisationTypes
    {
        title: 'GOVERNMENT',
        cat: 'Organisation',
        subCat: 'GOVERNMENT',
        description: '',
    },
    {
        title: 'PRIVATE',
        cat: 'Organisation',
        subCat: 'PRIVATE',
        description: '',
    },
    {
        title: 'NGO',
        cat: 'Organisation',
        subCat: 'NGO',
        description: '',
    },
    {
        title: 'TRUST',
        cat: 'Organisation',
        subCat: 'TRUST',
        description: '',
    },
    {
        title: 'SOCIETY',
        cat: 'Organisation',
        subCat: 'SOCIETY',
        description: '',
    },
    {
        title: 'CLUB',
        cat: 'Organisation',
        subCat: 'CLUB',
        description: '',
    },
    {
        title: 'ASSOCIATION',
        cat: 'Organisation',
        subCat: 'ASSOCIATION',
        description: '',
    },
    {
        title: 'FIRM',
        cat: 'Organisation',
        subCat: 'FIRM',
        description: '',
    },
    {
        title: 'COMPANY',
        cat: 'Organisation',
        subCat: 'COMPANY',
        description: '',
    },
    {
        title: 'PARTNERSHIP',
        cat: 'Organisation',
        subCat: 'PARTNERSHIP',
        description: '',
    },
    {
        title: 'SOLEPROPRIETORSHIP',
        cat: 'Organisation',
        subCat: 'SOLEPROPRIETORSHIP',
        description: '',
    },
    {
        title: 'COOPERATIVE',
        cat: 'Organisation',
        subCat: 'COOPERATIVE',
        description: '',
    },

    // contactTypes
    {
        title: 'MOBILE',
        cat: 'Contact',
        subCat: 'MOBILE',
        subSubCat: 'PHONE',
        description: '',
    },
    {
        title: 'MOBILE',
        cat: 'Contact',
        subCat: 'MOBILE',
        subSubCat: 'WHATSAPP',
        description: '',
    },
    {
        title: 'MOBILE',
        cat: 'Contact',
        subCat: 'MOBILE',
        subSubCat: 'ALL',
        description: '',
    },
    {
        title: 'MOBILE',
        cat: 'Contact',
        subCat: 'MOBILE',
        subSubCat: 'ALTERNATE',
        description: '',
    },
    {
        title: 'EMAIL',
        cat: 'Contact',
        subCat: 'EMAIL',
        description: '',
    },
    {
        title: 'WEBSITE',
        cat: 'Contact',
        subCat: 'WEBSITE',
        description: '',
    },
    {
        title: 'FACEBOOK',
        cat: 'Contact',
        subCat: 'FACEBOOK',
        description: '',
    },
    {
        title: 'TWITTER',
        cat: 'Contact',
        subCat: 'TWITTER',
        description: '',
    },
    {
        title: 'LINKEDIN',
        cat: 'Contact',
        subCat: 'LINKEDIN',
        description: '',
    },
    {
        title: 'INSTAGRAM',
        cat: 'Contact',
        subCat: 'INSTAGRAM',
        description: '',
    },
    {
        title: 'TELEGRAM',
        cat: 'Contact',
        subCat: 'TELEGRAM',
        description: '',
    },
    {
        title: 'YOUTUBE',
        cat: 'Contact',
        subCat: 'YOUTUBE',
        description: '',
    },
    // tags
    {
        title: 'UPSE',
        cat: 'Tag',
        subCat: 'UPSE',
        description: '',
    },
    {
        title: 'SSC',
        cat: 'Tag',
        subCat: 'SSC',
        description: '',
    },
    {
        title: 'BANK',
        cat: 'Tag',
        subCat: 'BANK',
        description: '',
    },
    {
        title: 'RAILWAY',
        cat: 'Tag',
        subCat: 'RAILWAY',
        description: '',
    },
    {
        title: 'DEFENCE',
        cat: 'Tag',
        subCat: 'DEFENCE',
        description: '',
    },
    {
        title: 'POLICE',
        cat: 'Tag',
        subCat: 'POLICE',
        description: '',
    },
    {
        title: 'TEACHER',
        cat: 'Tag',
        subCat: 'TEACHER',
        description: '',
    },
    {
        title: 'ENGINEER',
        cat: 'Tag',
        subCat: 'ENGINEER',
        description: '',
    },
    {
        title: 'DOCTOR',
        cat: 'Tag',
        subCat: 'DOCTOR',
        description: '',
    },
    {
        title: 'LAWYER',
        cat: 'Tag',
        subCat: 'LAWYER',
        description: '',
    },
    {
        title: 'ACCOUNTANT',
        cat: 'Tag',
        subCat: 'ACCOUNTANT',
        description: '',
    },
    {
        title: 'ARCHITECT',
        cat: 'Tag',
        subCat: 'ARCHITECT',
        description: '',
    },
    {
        title: 'FARMER',
        cat: 'Tag',
        subCat: 'FARMER',
        description: '',
    },
    {
        title: 'STUDENT',
        cat: 'Tag',
        subCat: 'STUDENT',
        description: '',
    },
    {
        title: 'BUSINESSMAN',
        cat: 'Tag',
        subCat: 'BUSINESSMAN',
        description: '',
    }
]

export const typeSeed = async (): Promise<IType[]> => {
    const model = await TypeModel.insertMany(types);
    return model;
}
