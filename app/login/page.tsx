import Link from 'next/link'

export default function LoginPage() {
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
      `}</style>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ width: '100%', maxWidth: 420 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 40 }}>
            <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #dc2626, #b91c1c)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 20, boxShadow: '0 4px 12px rgba(220,38,38,0.3)' }}>E</div>
            <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px', color: '#0f172a' }}>
              Envanter<span style={{ color: '#dc2626' }}>TR</span>
            </span>
          </Link>

          <h1 style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-1px', color: '#0f172a', marginBottom: 8 }}>Tekrar hoş geldiniz</h1>
          <p style={{ color: '#64748b', fontSize: 14, marginBottom: 32 }}>Hesabınıza giriş yapın ve envanterinizi yönetin.</p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>E-posta</label>
              <input type="email" placeholder="ornek@sirket.com" className="input-field" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>Şifre</label>
              <input type="password" placeholder="••••••••" className="input-field" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', cursor: 'pointer' }}>
                <input type="checkbox" />
                Beni hatırla
              </label>
              <a href="#" style={{ color: '#dc2626', fontWeight: 600, textDecoration: 'none' }}>Şifremi unuttum</a>
            </div>

            <button type="submit" className="submit-btn" style={{ marginTop: 8 }}>Giriş Yap</button>
          </form>

          <div style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: '#64748b' }}>
            Hesabınız yok mu? <Link href="/signup" style={{ color: '#dc2626', fontWeight: 600, textDecoration: 'none' }}>Ücretsiz kayıt olun</Link>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, background: 'linear-gradient(135deg, #0f172a, #334155)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, position: 'relative', overflow: 'hidden' }} className="hide-mobile">
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'rgba(220,38,38,0.3)', borderRadius: '50%', filter: 'blur(100px)' }} />
        <div style={{ position: 'relative', color: '#fff', maxWidth: 400 }}>
          <div style={{ fontSize: 48, marginBottom: 24 }}>📦</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 16 }}>
            Tüm envanteriniz tek panelde
          </h2>
          <p style={{ fontSize: 15, opacity: 0.75, lineHeight: 1.7, marginBottom: 32 }}>
            Demirbaş, lisans, zimmet, bakım — hepsi tek yerden. Zamandan tasarruf edin, verilerinizi kontrol altında tutun.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
              <span style={{ width: 24, height: 24, background: 'rgba(16,185,129,0.2)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900 }}>✓</span>
              14 gün ücretsiz deneme
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
              <span style={{ width: 24, height: 24, background: 'rgba(16,185,129,0.2)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900 }}>✓</span>
              Kredi kartı gerekmez
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
              <span style={{ width: 24, height: 24, background: 'rgba(16,185,129,0.2)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900 }}>✓</span>
              İstediğiniz an iptal edin
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
