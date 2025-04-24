import rudraResponse from "@api/utility";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
    return rudraResponse(200, "Hello from API Route", null);
}