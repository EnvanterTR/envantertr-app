"use client"
import { useState, useEffect } from 'react'
export default function Admin({ params }: { params: { subdomain: string } }) {
  const [assets, setAssets] = useState<any[]>([])
  const [form, setForm] = useState({ name: '', tag: '', category: 'Laptop', location: '' })
  const load = async () => {
    const r = await fetch('/api/assets?subdomain='+params.subdomain)
    const j = await r.json(); setAssets(j)
  }
  useEffect(()=>{load()},[])
  const add = async () => {
    await fetch('/api/assets', { method:'POST', body: JSON.stringify({...form, subdomain: params.subdomain}), headers:{'Content-Type':'application/json'} })
    setForm({ name:'', tag:'', category:'Laptop', location:'' }); load()
  }
  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',color:'white',padding:24}}>
      <h1>{params.subdomain} - Envanter Yonetimi</h1>
      <div style={{background:'#111',padding:16,borderRadius:12,border:'1px solid #222',marginTop:16,display:'flex',gap:8,flexWrap:'wrap'}}>
        <input placeholder="Ad (MacBook Pro)" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{padding:10,borderRadius:8,background:'#000',border:'1px solid #333',color:'white'}}/>
        <input placeholder="Etiket (ENV-001)" value={form.tag} onChange={e=>setForm({...form,tag:e.target.value})} style={{padding:10,borderRadius:8,background:'#000',border:'1px solid #333',color:'white'}}/>
        <select value={form.category} onChange={e=>setForm({...form,category:e.target.value})} style={{padding:10,borderRadius:8,background:'#000',border:'1px solid #333',color:'white'}}><option>Laptop</option><option>Monitor</option><option>Telefon</option><option>Yazici</option><option>Diger</option></select>
        <input placeholder="Lokasyon" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} style={{padding:10,borderRadius:8,background:'#000',border:'1px solid #333',color:'white'}}/>
        <button onClick={add} style={{background:'#7c3aed',padding:'10px 16px',borderRadius:8,border:0,color:'white',fontWeight:700}}>Ekle</button>
      </div>
      <table style={{width:'100%',marginTop:24,borderCollapse:'collapse'}}>
        <thead><tr style={{opacity:0.6,textAlign:'left'}}><th>Etiket</th><th>Ad</th><th>Kategori</th><th>Durum</th><th>QR</th></tr></thead>
        <tbody>
          {assets.map(a=><tr key={a.id} style={{borderTop:'1px solid #222'}}><td>{a.tag}</td><td>{a.name}</td><td>{a.category}</td><td>{a.status}</td><td><a href={'/api/qr?tag='+a.tag} target="_blank" style={{color:'#a78bfa'}}>QR</a></td></tr>)}
        </tbody>
      </table>
    </div>
  )
}
