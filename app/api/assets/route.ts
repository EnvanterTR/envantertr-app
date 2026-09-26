import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
export async function GET(req: NextRequest) {
  const subdomain = req.nextUrl.searchParams.get('subdomain') || ''
  if (!subdomain) return NextResponse.json([])
  const tenant = await prisma.tenant.findUnique({ where: { subdomain } })
  if (!tenant) return NextResponse.json([])
  const assets = await prisma.asset.findMany({ where: { tenantId: tenant.id }, orderBy: { createdAt: 'desc' } })
  return NextResponse.json(assets)
}
export async function POST(req: NextRequest) {
  const body = await req.json()
  const { subdomain, name, tag, category, location } = body
  let tenant = await prisma.tenant.findUnique({ where: { subdomain } })
  if (!tenant) tenant = await prisma.tenant.create({ data: { subdomain, name: subdomain+' Envanter' } })
  const asset = await prisma.asset.create({ data: { tenantId: tenant.id, name, tag, category, location, status: 'available' } })
  return NextResponse.json(asset)
}
