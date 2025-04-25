import dbConnect from "@/backend/db";
import { Model } from "mongoose";
import { NextResponse } from "next/server";

/**
 * Generates a standardized API response in Next.js
 * @param success - Indicates whether the request was successful
 * @param message - Descriptive message for the response
 * @param status - HTTP status code
 * @param data - Payload for successful responses
 * @param error - Error details for failed responses
 * @returns NextResponse JSON object
 */
export default function apiResponse<T = unknown>(
    status: number,
    message: string,
    data?: T,
    error?: string | Record<string, unknown> | typeof Error
) {
    return new NextResponse(
        JSON.stringify({ message, data, error }),
        {
            status,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}

// export const getModelById = async <T>(model: Model<T>, id: string) => {
//     try {
//         await dbConnect();
//         const blog = await model.findById(id)
//         if (!blog) {
//             return apiResponse(404, "Type not found", null);
//         }
//         return apiResponse(200, "Type fetched successfully", blog);
//     }
//     catch (error) {
//         return apiResponse(500, "Internal server error", null, error instanceof Error ? error.message : String(error));
//     }
// }


export const getModelById = async<T>(model: Model<T>, id: string, populateArray:
    {
        path: string,
        select: string,
    }[]) => {
    let returnable: { status: number, message: string, data: T | null, error: null | string | typeof Error } = {
        status: 0,
        message: "",
        data: null,
        error: null
    }
    try {
        await dbConnect();
        const blog = await model.findById(id).populate(populateArray)
        if (!blog) {
            returnable = { status: 404, message: `${model.modelName} not found`, data: null, error: null }
        }
        returnable = { status: 200, message: `${model.modelName} fetched successfully`, data: blog, error: null }
    }
    catch (error) {
        returnable = { status: 500, message: "Internal server error", data: null, error: error instanceof Error ? error.message : String(error) }
    }
    return returnable
}