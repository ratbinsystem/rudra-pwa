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
    error?: string | Record<string, any>
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