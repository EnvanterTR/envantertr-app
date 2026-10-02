import Link from 'next/link'

export default function SignupPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#f8fafc' }}>
      <style>{`
        .input-field {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: all .15s;
          background: #fff;
        }
        .input-field:focus {
          border-color: #dc2626;
          box-shadow: 0 0 0 3px rgba(220,38,38,0.1);
        }
        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          box-shadow: 0 8px 20px rgba(220,38,38,0.3);
          transition: transform .15s;
        }
        .submit-btn:hover { transform: translateY(-1px); }
        .plan-option {
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          cursor: pointer;
          transition: all .15s;
          text-align: center;
          background: #fff;
        }
        .plan-option:hover { border-color: #cbd5e1; }
        .plan-option.selected { border-color: #dc2626; background: #fef2f2; }
      `}</style>

      <div style={{ flex: 1, background: 'linear-gradient(135deg, #0f172a, #334155)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, position: 'relative', overflow: 'hidden' }} className="hide-mobile">
        <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, background: 'rgba(220,38,38,0.3)', borderRadius: '50%', filter: 'blur(100px)' }} />
        <div style={{ position: 'relative', color: '#fff', maxWidth: 400 }}>
          <div style={{ fontSize: 48, marginBottom: 24 }}>🚀</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 16 }}>
            14 gün ücretsiz deneme
          </h2>
          <p style={{ fontSize: 15, opacity: 0.75, lineHeight: 1.7, marginBottom: 32 }}>
            Kredi kartı gerekmez. Saniyeler içinde hesabınızı oluşturun ve envanterinizi yönetmeye başlayın.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
              <span style={{ width: 24, height: 24, background: 'rgba(16,185,129,0.2)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900 }}>✓</span>
              Kurulum gerektirmez
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
              <span style={{ width: 24, height: 24, background: 'rgba(16,185,129,0.2)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900 }}>✓</span>
              Size özel subdomain
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
              <span style={{ width: 24, height: 24, background: 'rgba(16,185,129,0.2)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900 }}>✓</span>
              Anında kullanmaya başlayın
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ width: '100%', maxWidth: 460 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 32 }}>
            <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #dc2626, #b91c1c)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 20, boxShadow: '0 4px 12px rgba(220,38,38,0.3)' }}>E</div>
            <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px', color: '#0f172a' }}>
              Envanter<span style={{ color: '#dc2626' }}>TR</span>
            </span>
          </Link>

          <h1 style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-1px', color: '#0f172a', marginBottom: 8 }}>Hesap oluştur</h1>
          <p style={{ color: '#64748b', fontSize: 14, marginBottom: 32 }}>14 gün ücretsiz deneme — kredi kartı gerekmez.</p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>Firma Adı *</label>
              <input type="text" placeholder="Örn: ABC Teknoloji A.Ş." className="input-field" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>Yetkili Adı *</label>
              <input type="text" placeholder="Adınız Soyadınız" className="input-field" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>E-posta *</label>
              <input type="email" placeholder="ornek@sirket.com" className="input-field" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>Şifre *</label>
              <input type="password" placeholder="En az 8 karakter" className="input-field" />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>Subdomain *</label>
              <div style={{ display: 'flex', alignItems: 'stretch' }}>
                <input type="text" placeholder="firmaadi" className="input-field" style={{ borderRadius: '12px 0 0 12px', borderRight: 0 }} />
                <div style={{ padding: '14px 16px', background: '#f1f5f9', border: '1px solid #e2e8f0', borderLeft: 0, borderRadius: '0 12px 12px 0', fontSize: 14, color: '#64748b', display: 'flex', alignItems: 'center', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  .envantertr.com
                </div>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 10 }}>Plan Seçin</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                <div className="plan-option">
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#64748b', marginBottom: 4 }}>BAŞLANGIÇ</div>
                  <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.5px', color: '#0f172a' }}>₺499</div>
                  <div style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>3 kullanıcı</div>
                </div>
                <div className="plan-option selected">
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#dc2626', marginBottom: 4 }}>PROFESYONEL</div>
                  <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.5px', color: '#dc2626' }}>₺1.999</div>
                  <div style={{ fontSize: 11, color: '#dc2626', marginTop: 4 }}>50 kullanıcı</div>
                </div>
                <div className="plan-option">
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#64748b', marginBottom: 4 }}>KURUMSAL</div>
                  <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.5px', color: '#0f172a' }}>₺2.499</div>
                  <div style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>Sınırsız</div>
                </div>
              </div>
            </div>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#64748b', cursor: 'pointer', marginTop: 4 }}>
              <input type="checkbox" style={{ marginTop: 3 }} />
              <span><b>Kullanım Şartları</b> ve <b>KVKK Aydınlatma Metni</b>'ni okudum, kabul ediyorum.</span>
            </label>

            <button type="submit" className="submit-btn" style={{ marginTop: 8 }}>
              Ücretsiz Hesap Oluştur
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: '#64748b' }}>
            Zaten hesabınız var mı? <Link href="/login" style={{ color: '#dc2626', fontWeight: 600, textDecoration: 'none' }}>Giriş yapın</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
