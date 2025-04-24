import rudraResponse from "@api/utility";

export function GET() {
    return rudraResponse(200, "Hello from API Route", null);
}