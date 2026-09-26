import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  const rootDomain = process.env.ROOT_DOMAIN || 'envantertr.com'
  let subdomain = ''
  if (host.includes(rootDomain)) {
    subdomain = host.replace('.'+rootDomain,'').replace(':'+(process.env.PORT||'3000'),'').split(':')[0]
    if (subdomain === rootDomain || subdomain === 'www' || subdomain.includes('localhost') || host.includes('169.58')) subdomain = ''
  }
  if (!subdomain && req.nextUrl.searchParams.get('subdomain')) subdomain = req.nextUrl.searchParams.get('subdomain')!
  const url = req.nextUrl.clone()
  if (subdomain && subdomain !== '' && subdomain !== 'envantertr' && !url.pathname.startsWith('/_next') && !url.pathname.startsWith('/api')) {
    url.pathname = '/'+subdomain+url.pathname
    const res = NextResponse.rewrite(url)
    res.headers.set('x-tenant-subdomain', subdomain)
    return res
  }
  const res = NextResponse.next()
  if (subdomain) res.headers.set('x-tenant-subdomain', subdomain)
  return res
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] }
