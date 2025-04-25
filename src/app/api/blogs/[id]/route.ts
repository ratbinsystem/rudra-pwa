import BlogModel from "@/backend/models/blog.model";
import { IBlog } from "@/interfaces";
import rudraResponse, { getModelById } from "@api/utility";


export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { status, message, data, error } = await getModelById<IBlog>(BlogModel, (await params).id, [{path: 'thumbnail', select: 'uri'}, {path: 'tags', select: 'title'}])
    return rudraResponse(status, message, data, error ?? undefined)
}
