import {NextMiddleware, NextRequest, NextResponse} from "next/server";

const queryParamAllowList = new Set(['a', 'b', 'c'])

const middleware: NextMiddleware = (req: NextRequest) => {
    let url = req.nextUrl;
    if (url.pathname === '/') {
        console.log('[middleware] incoming request', url)
        const queryParams = Array.from(url.searchParams.keys())

        queryParams.forEach((k) => {
            if (!queryParamAllowList.has(k)) {
                url.searchParams.delete(k)
            }
        })

        console.log('[middleware] rewriting request', url)

        return NextResponse.rewrite(url)
    }

    return NextResponse.next()
}

export default middleware
