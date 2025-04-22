import dbConnect from "@/backend/db";
import BlogModel from "@/backend/models/blog.model";

interface props {
    params: Promise<{ id: string }>;
}
export default async function GET({ params }: props) {
    await dbConnect();
    const id = (await params).id;
    const res = await BlogModel.findById(id);
    if (!res) {
        return new Response("Blog not found", { status: 404 });
    }
    return new Response(JSON.stringify(res), { status: 200 });
}