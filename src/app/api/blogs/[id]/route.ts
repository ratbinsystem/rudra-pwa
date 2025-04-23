import dbConnect from "@/backend/db";
import BlogModel from "@/backend/models/blog.model";
import rudraResponse from "@api/utility";


export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        await dbConnect();
        const blog = await BlogModel.findById(id)
        if (!blog) {
            return rudraResponse(404, "Blog not found", null);
        }
        return rudraResponse(200, "Blog fetched successfully", blog);
    }
    catch (error) {
        return rudraResponse(500, "Internal server error", null, error instanceof Error ? error.message : String(error));
    }
}
