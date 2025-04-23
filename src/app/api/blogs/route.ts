import dbConnect from "@/backend/db";
import BlogModel from "@/backend/models/blog.model";
import rudraResponse from "@api/utility";
import { NextRequest } from "next/server";
import TypeModel from "@/backend/models/type.model";
import ApiFeatures from "@api/apiFeature";
import { z } from "zod";
import { title, description, markdown } from '@/utility';

export async function GET(
    req: NextRequest
) {
    try {
        const { title,
            subCat, subSubCat, createdBy } = Object.fromEntries(req.nextUrl.searchParams);
        let filterCriteria = {};
        const blogType = await TypeModel.findOne({ cat: 'Blog', title: { $eq: title }, subCat: { $eq: subCat }, subSubCat: { $eq: subSubCat }, isActive: true });
        filterCriteria = blogType ? { type: blogType._id } : {};

        if (createdBy) {
            filterCriteria = { createdBy };
        }
        const feature = new ApiFeatures(BlogModel.find(filterCriteria), Object.fromEntries(req.nextUrl.searchParams))
        await dbConnect();
        const blogs = await feature.sort().paginate().select().exec();
        return rudraResponse(200, "Blogs fetched successfully", blogs);
    }
    catch (error) {
        return rudraResponse(500, "Internal server error", null, error instanceof Error ? error.message : String(error));
    }
}

export async function POST(req: NextRequest) {
    const schema = z.object({
        title: z.string({
            invalid_type_error: 'Invalid Title',
            required_error: 'Title is required',
        }).min(title.minlength, { message: `Title should be at leat of ${title.minlength} chars` }).max(title.maxlength, { message: `Maxlength of title ${title.maxlength}` }),
        description: z.string({
            invalid_type_error: 'Invalid Description',
            required_error: 'Description is required',
        }).max(description.maxlength, { message: `Maxlength of description ${description.maxlength}` }),
        markdown: z.string({
            invalid_type_error: 'Invalid Markdown',
            required_error: 'Markdown is required',
        }).min(markdown.minlength, { message: `Markdown should be at least of ${markdown.minlength} chars` }).max(markdown.maxlength, { message: `Maxlength of markdown ${markdown.maxlength}` }),
        type: z.string({
            invalid_type_error: 'Invalid Type',
            required_error: 'Type is required',
        }),
        tags: z.array(z.string()).optional(),
        seos: z.string().min(10).optional(),
        rows: z.number().optional(),
        columns: z.number().optional(),
        thumbnail: z.string().optional(),
        documents: z.array(z.string()).optional(),
    })

    try {
        const body = await req.json();

        const validatedFields = schema.safeParse(body);
        if (!validatedFields.success) {
            const errors = validatedFields.error.issues.map((issue) => {
                return {
                    field: issue.path[0],
                    message: issue.message,
                };
            });
            return rudraResponse(400, "Validation error", null,errors);
        }

        await dbConnect();
        const blog = await BlogModel.create(body);
        return rudraResponse(201, "Blog created successfully", blog);
    }
    catch (error) {
        return rudraResponse(500, "Internal server error", null, error instanceof Error ? error.message : String(error));
    }
}
