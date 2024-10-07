import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,) {

    // Search Pearams
    const param = req.nextUrl.searchParams
    const type = param.get('type') as 'layout' | 'page' | null
    const path = param.get('path')

    const types = ["layout", "page"]

    // Check Type
    if (type !== null && !types.includes(type)) {
        return NextResponse.json({
            status: 400,
            title: `پارامتر type باید 'layout' یا 'page' باشد`,
            detail: `پارامتر type باید 'layout' یا 'page' باشد`,
        }, {
            status: 400
        })
    }

    // Check Path
    if (!path) {
        return NextResponse.json({
            status: 400,
            title: "لطفا path را ارسال کنید.",
            detail: "لطفا path را ارسال کنید.",
        }, {
            status: 400
        })
    }

    revalidatePath(path, type || "page")

    return NextResponse.json({
        status: 200,
        title: `آدرس '${path} با موفقیت مجدد ساخته شد.'`,
        detail: `آدرس '${path} با موفقیت مجدد ساخته شد.'`,
    }, {
        status: 200
    })
}