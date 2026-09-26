import { prisma } from '@/lib/db'
import Link from 'next/link'
export default async function TenantHome({ params }: { params: { subdomain: string } }) {
  const subdomain = params.subdomain
  let tenant = await prisma.tenant.findUnique({ where: { subdomain } }).catch(()=>null)
  if (!tenant) { tenant = await prisma.tenant.create({ data: { subdomain, name: subdomain+' Envanter' } }).catch(()=>null) }
  const assets = tenant ? await prisma.asset.findMany({ where: { tenantId: tenant.id }, take: 5, orderBy: { createdAt: 'desc' } }).catch(()=>[]) : []
  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',color:'white'}}>
      <header style={{padding:'16px 24px',borderBottom:'1px solid #222',display:'flex',justifyContent:'space-between'}}>
        <b>{subdomain}.envantertr.com</b>
        <Link href={'/'+subdomain+'/admin'} style={{background:'#7c3aed',padding:'8px 14px',borderRadius:8,color:'white',textDecoration:'none'}}>Yonetim</Link>
      </header>
      <main style={{padding:32}}>
        <h1>Hos geldin, {subdomain}!</h1>
        <div style={{marginTop:24,display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:16}}>
          {assets?.map((a:any)=><div key={a.id} style={{background:'#111',border:'1px solid #222',padding:16,borderRadius:12}}><b>{a.name}</b><br/><small>{a.tag} - {a.status}</small></div>)}
          {(!assets || assets.length===0) && <div style={{opacity:0.5}}>Henuz demirbas yok. Yonetimden ekle.</div>}
        </div>
      </main>
    </div>
  )
}
