import Link from 'next/link'

const features = [
  { icon: '📦', title: 'Demirbaş Takibi', desc: 'Laptop, monitör, telefon — tüm donanımınızı tek merkezden takip edin.' },
  { icon: '🔐', title: 'Lisans Yönetimi', desc: 'Yazılım lisanslarını, koltukları ve bitiş tarihlerini takip edin.' },
  { icon: '👤', title: 'Zimmet Sistemi', desc: 'Kime ne verildi? Dijital imza, PDF zimmet formu, otomatik e-posta.' },
  { icon: '📱', title: 'QR & Barkod', desc: 'Otomatik etiket üretimi. Kamerayla okut, sayımı 10 kat hızlandır.' },
  { icon: '🔌', title: 'MDM & ERP', desc: 'Intune, Jamf, Logo, Netsis ile iki yönlü senkronizasyon.' },
  { icon: '📊', title: 'Raporlama', desc: 'Canlı dashboard, kategori dağılımı, maliyet analizi.' },
  { icon: '🌍', title: 'Çoklu Dil', desc: 'Global şirketler için hazır. 55+ dil, çoklu para birimi.' },
  { icon: '🎨', title: 'Whitelabel', desc: 'Kendi logonuz, kendi renginiz. Sistem sizin markanız gibi.' },
  { icon: '🔒', title: 'SSO & LDAP', desc: 'Google, Azure AD, Okta, SAML, SCIM desteği.' },
]

const plans = [
  { name: 'Başlangıç', price: '499', features: ['50 demirbaş', '3 kullanıcı', '5 GB disk', 'QR kod & barkod', 'PDF zimmet formu'], missing: ['LDAP / SSO', 'API erişimi'], featured: false },
  { name: 'Standart', price: '999', features: ['500 demirbaş', '20 kullanıcı', '50 GB disk', 'QR kod & barkod', 'PDF zimmet formu', 'LDAP / SSO'], missing: ['API erişimi'], featured: false },
  { name: 'Profesyonel', price: '1.999', features: ['2.000 demirbaş', '50 kullanıcı', '250 GB disk', 'QR kod & barkod', 'PDF zimmet formu', 'LDAP / SSO / SCIM', 'API erişimi'], missing: [], featured: true },
  { name: 'Kurumsal', price: '2.499', features: ['Sınırsız demirbaş', 'Sınırsız kullanıcı', '1 TB disk', 'QR kod & barkod', 'PDF zimmet formu', 'LDAP / SSO / SCIM', 'API + MDM'], missing: [], featured: false },
]

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a' }}>
      <style>{`
        * { box-sizing: border-box; }
        .nav-link { text-decoration: none; color: #475569; font-size: 14px; font-weight: 500; }
        .nav-link:hover { color: #0f172a; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: linear-gradient(135deg, #dc2626, #b91c1c); color: #fff; font-weight: 600; border-radius: 12px; text-decoration: none; box-shadow: 0 10px 25px rgba(220,38,38,0.3); transition: transform .15s; }
        .btn-primary:hover { transform: translateY(-2px); }
        .btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: #fff; border: 1px solid #e2e8f0; color: #334155; font-weight: 600; border-radius: 12px; text-decoration: none; }
        .feature-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px; transition: all .2s; }
        .feature-card:hover { transform: translateY(-4px); border-color: #dc2626; box-shadow: 0 20px 40px rgba(15,23,42,0.08); }
        .plan-card { background: #fff; border: 2px solid #e2e8f0; border-radius: 16px; padding: 28px; position: relative; transition: all .2s; }
        .plan-card:hover { transform: translateY(-4px); }
        .plan-featured { border-color: #dc2626; box-shadow: 0 20px 40px rgba(220,38,38,0.1); }
        @media (max-width: 768px) {
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 36px !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #dc2626, #b91c1c)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 18, boxShadow: '0 4px 12px rgba(220,38,38,0.3)' }}>E</div>
            <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.5px', color: '#0f172a' }}>
              Envanter<span style={{ color: '#dc2626' }}>TR</span>
            </span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hide-mobile">
            <a href="#features" className="nav-link">Özellikler</a>
            <a href="#pricing" className="nav-link">Fiyatlar</a>
            <a href="#demo" className="nav-link">Demo</a>
            <a href="#contact" className="nav-link">İletişim</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/login" style={{ textDecoration: 'none', color: '#334155', fontSize: 14, fontWeight: 600, padding: '8px 16px' }}>Giriş Yap</Link>
            <Link href="/signup" className="btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>Ücretsiz Dene</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top, rgba(220,38,38,0.08), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          <h1 className="hero-title" style={{ fontSize: 56, fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.05, marginBottom: 24, color: '#0f172a' }}>
            Şirket envanteriniz<br />artık <span style={{ color: '#dc2626' }}>tek yerde</span>.
          </h1>
          <p style={{ fontSize: 18, color: '#64748b', maxWidth: 640, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Donanım, yazılım lisansı ve zimmet kayıtlarınızı bulut tabanlı modern bir panelde yönetin.
            Kurulum yok, sunucu yok — saniyeler içinde başlayın.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <Link href="/signup" className="btn-primary" style={{ padding: '14px 32px', fontSize: 15 }}>
              Ücretsiz Dene →
            </Link>
            <button className="btn-ghost" style={{ padding: '14px 32px', fontSize: 15, cursor: 'pointer', fontFamily: 'inherit' }}>
              Demo İzle
            </button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 24, fontSize: 14, color: '#64748b' }}>
            <span>✓ Kredi kartı gerekmez</span>
            <span>✓ Kurulum ücretsiz</span>
            <span>✓ İstediğiniz an iptal</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1150, margin: '0 auto', textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 38, fontWeight: 900, letterSpacing: '-1px', marginBottom: 12, color: '#0f172a' }}>Envanter yönetiminde yeni standart</h2>
          <p style={{ color: '#64748b', fontSize: 16 }}>Kurumsal güç, modern arayüz</p>
        </div>
        <div className="grid-3" style={{ maxWidth: 1150, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, color: '#0f172a' }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1150, margin: '0 auto', textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 38, fontWeight: 900, letterSpacing: '-1px', marginBottom: 12, color: '#0f172a' }}>Şeffaf fiyatlandırma</h2>
          <p style={{ color: '#64748b', fontSize: 16 }}>Gizli ücret yok, taahhüt yok. İstediğiniz an iptal edin.</p>
        </div>
        <div className="grid-4" style={{ maxWidth: 1150, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {plans.map((p) => (
            <div key={p.name} className={`plan-card ${p.featured ? 'plan-featured' : ''}`}>
              {p.featured && (
                <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #dc2626, #b91c1c)', color: '#fff', fontSize: 10, fontWeight: 900, padding: '4px 12px', borderRadius: 20, letterSpacing: 1 }}>POPÜLER</div>
              )}
              <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 4, color: '#0f172a' }}>{p.name}</h3>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 30, fontWeight: 900, letterSpacing: '-1px', color: '#0f172a' }}>₺{p.price}</span>
                <span style={{ fontSize: 14, color: '#64748b' }}>/ay</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#334155', padding: '6px 0' }}>
                    <span style={{ color: '#10b981', fontWeight: 900, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
                {p.missing.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#94a3b8', textDecoration: 'line-through', padding: '6px 0' }}>
                    <span style={{ flexShrink: 0 }}>×</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                style={{
                  display: 'block', textAlign: 'center', padding: '12px', borderRadius: 12, fontWeight: 600, fontSize: 14, textDecoration: 'none',
                  background: p.featured ? 'linear-gradient(135deg, #dc2626, #b91c1c)' : '#fff',
                  color: p.featured ? '#fff' : '#334155',
                  border: p.featured ? 'none' : '1px solid #e2e8f0',
                  boxShadow: p.featured ? '0 8px 20px rgba(220,38,38,0.3)' : 'none',
                }}
              >
                Başla
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="demo" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', background: 'linear-gradient(135deg, #0f172a, #334155)', borderRadius: 24, padding: 64, textAlign: 'center', color: '#fff', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -96, right: -96, width: 384, height: 384, background: 'rgba(220,38,38,0.3)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 16 }}>Bugün başlayın,<br />14 gün ücretsiz.</h2>
            <p style={{ fontSize: 17, opacity: 0.75, marginBottom: 32, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Kredi kartı gerekmiyor. Kurulum ücretsiz, istediğiniz an iptal edebilirsiniz.
            </p>
            <Link href="/signup" className="btn-primary" style={{ padding: '16px 36px', fontSize: 15, position: 'relative' }}>
              Hemen Başla →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ borderTop: '1px solid #e2e8f0', padding: '40px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1150, margin: '0 auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, fontSize: 14, color: '#64748b' }}>
          <div>© 2026 EnvanterTR — Tüm hakları saklıdır.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Hakkımızda</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>İletişim</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>KVKK</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Gizlilik</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
