import { NextRequest, NextResponse } from 'next/server'
export async function GET(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get('tag') || ''
  const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='200' height='200' fill='white'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='14'>"+tag+"</text></svg>"
  return new NextResponse(svg, { headers: { 'Content-Type': 'image/svg+xml' } })
}
