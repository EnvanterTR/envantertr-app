import Link from 'next/link'
export default function Home() {
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#0a0a0a',color:'white',padding:40}}>
      <h1 style={{fontSize:48,fontWeight:900}}>EnvanterTR</h1>
      <p style={{opacity:0.7,maxWidth:600,textAlign:'center',marginTop:12}}>Her musteri icin otomatik dukkan: <b>ahmet.envantertr.com</b>, <b>mehmet.envantertr.com</b> gibi sinirsiz subdomain. %100 size ait, MIT lisansli.</p>
      <div style={{display:'flex',gap:12,marginTop:24}}>
        <Link href="/admin" style={{background:'#7c3aed',padding:'12px 20px',borderRadius:10,color:'white',textDecoration:'none',fontWeight:700}}>Demo Dukkan Ac</Link>
      </div>
      <div style={{marginTop:40,background:'#111',padding:20,borderRadius:12,border:'1px solid #222',maxWidth:700,width:'100%'}}>
        <h3>DNS Ayari (Tek Seferlik)</h3>
        <code style={{display:'block',background:'#000',padding:12,borderRadius:8,marginTop:8}}>A  *.envantertr.com  - 169.58.53.189<br/>A  envantertr.com  - 169.58.53.189</code>
      </div>
    </div>
  )
}
