import {NextMiddleware, NextRequest, NextResponse} from "next/server";

const queryParamAllowList = new Set(['a', 'b', 'c'])

// Any request with a pathname matching this regexp will NOT be subject to the query param filters
const pathnameDenyList = /(\.(ico|jpeg|jpg|png|woff|woff2|svg|txt|js|css|map)$)|(^\/api)/i

const middleware: NextMiddleware = (req: NextRequest) => {
    let url = req.nextUrl.clone()
    if (!pathnameDenyList.test(url.pathname)) {
        console.log('[middleware] incoming request', req.nextUrl.toString())
        const queryParams = Array.from(url.searchParams.keys())

        queryParams.forEach((k) => {
            if (!queryParamAllowList.has(k)) {
                url.searchParams.delete(k)
            }
        })

        console.log('[middleware] rewriting request', url.toString())

        return NextResponse.rewrite(url)
    }

    return NextResponse.next()
}

export default middleware
