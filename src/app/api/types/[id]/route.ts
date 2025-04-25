import TypeModel from "@/backend/models/type.model";
import { IType } from "@/interfaces";
import rudraResponse, { getModelById } from "@api/utility";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const {status, message, data, error} = await getModelById<IType>(TypeModel, (await params).id,[])
    return rudraResponse(status, message, data, error ?? undefined)
}
