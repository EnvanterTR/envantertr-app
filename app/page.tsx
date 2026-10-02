import Link from 'next/link'
import {
  Package,
  Shield,
  User,
  QrCode,
  Plug,
  BarChart3,
  Globe,
  Palette,
  Lock,
  ArrowRight,
  Check,
} from 'lucide-react'

const features = [
  { icon: Package, title: 'Demirbaş Takibi', desc: 'Laptop, monitör, telefon — tüm donanımınızı tek merkezden takip edin.' },
  { icon: Shield, title: 'Lisans Yönetimi', desc: 'Yazılım lisanslarını, koltukları ve bitiş tarihlerini takip edin.' },
  { icon: User, title: 'Zimmet Sistemi', desc: 'Kime ne verildi? Dijital imza, PDF zimmet formu, otomatik e-posta.' },
  { icon: QrCode, title: 'QR & Barkod', desc: 'Otomatik etiket üretimi. Kamerayla okut, sayımı 10 kat hızlandır.' },
  { icon: Plug, title: 'MDM & ERP Entegrasyonu', desc: 'Intune, Jamf, Logo, Netsis ile iki yönlü senkronizasyon.' },
  { icon: BarChart3, title: 'Raporlama & BI', desc: 'Canlı dashboard, kategori dağılımı, maliyet analizi.' },
  { icon: Globe, title: 'Çoklu Dil & Para Birimi', desc: 'Global şirketler için hazır. 55+ dil, çoklu para birimi.' },
  { icon: Palette, title: 'Whitelabel', desc: 'Kendi logonuz, kendi renginiz. Sistem sizin markanız gibi.' },
  { icon: Lock, title: 'SSO & LDAP', desc: 'Google, Azure AD, Okta, SAML, SCIM desteği.' },
]

const plans = [
  {
    name: 'Başlangıç',
    price: '499',
    features: ['50 demirbaş', '3 kullanıcı', '5 GB disk', 'QR kod & barkod', 'PDF zimmet formu'],
    missing: ['LDAP / SSO', 'API erişimi'],
  },
  {
    name: 'Standart',
    price: '999',
    features: ['500 demirbaş', '20 kullanıcı', '50 GB disk', 'QR kod & barkod', 'PDF zimmet formu', 'LDAP / SSO'],
    missing: ['API erişimi'],
  },
  {
    name: 'Profesyonel',
    price: '1.999',
    features: ['2.000 demirbaş', '50 kullanıcı', '250 GB disk', 'QR kod & barkod', 'PDF zimmet formu', 'LDAP / SSO / SCIM', 'API erişimi'],
    featured: true,
    missing: [],
  },
  {
    name: 'Kurumsal',
    price: '2.499',
    features: ['Sınırsız demirbaş', 'Sınırsız kullanıcı', '1 TB disk', 'QR kod & barkod', 'PDF zimmet formu', 'LDAP / SSO / SCIM', 'API + MDM entegrasyon'],
    missing: [],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-white font-black text-lg shadow-lg shadow-red-600/30">
              E
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              Envanter<span className="text-red-600">TR</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition">Özellikler</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Fiyatlar</a>
            <a href="#demo" className="hover:text-slate-900 transition">Demo</a>
            <a href="#contact" className="hover:text-slate-900 transition">İletişim</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-4 py-2 rounded-lg transition">
              Giriş Yap
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-800 px-5 py-2.5 rounded-lg shadow-lg shadow-red-600/30 hover:shadow-red-600/40 hover:-translate-y-0.5 transition-all"
            >
              Ücretsiz Dene
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative px-6 pt-20 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.08),_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            Şirket envanteriniz
            <br />
            artık <span className="text-red-600">tek yerde</span>.
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Donanım, yazılım lisansı ve zimmet kayıtlarınızı bulut tabanlı modern bir panelde yönetin.
            Kurulum yok, sunucu yok — saniyeler içinde başlayın.
          </p>
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-red-600 to-red-800 px-7 py-3.5 rounded-xl font-semibold shadow-xl shadow-red-600/30 hover:shadow-red-600/40 hover:-translate-y-0.5 transition-all"
            >
              Ücretsiz Dene
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="inline-flex items-center gap-2 bg-white border border-slate-200 px-7 py-3.5 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition">
              Demo İzle
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> Kredi kartı gerekmez</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> Kurulum ücretsiz</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-600" /> İstediğiniz an iptal</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-black tracking-tight mb-4">Envanter yönetiminde yeni standart</h2>
          <p className="text-slate-500">Kurumsal güç, modern arayüz</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group bg-white border border-slate-200 rounded-2xl p-7 hover:border-red-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/5 transition-all">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-black tracking-tight mb-4">Şeffaf fiyatlandırma</h2>
          <p className="text-slate-500">Gizli ücret yok, taahhüt yok. İstediğiniz an iptal edin.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative bg-white rounded-2xl p-7 border-2 transition-all hover:-translate-y-1 ${
                p.featured ? 'border-red-600 shadow-xl shadow-red-600/10' : 'border-slate-200 hover:border-red-600'
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-wider">
                  POPÜLER
                </div>
              )}
              <h3 className="text-lg font-extrabold mb-1">{p.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-black tracking-tight">₺{p.price}</span>
                <span className="text-sm text-slate-500">/ay</span>
              </div>
              <ul className="space-y-3 mb-7">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    {f}
                  </li>
                ))}
                {p.missing.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-400 line-through">
                    <span className="w-4 h-4 text-center shrink-0">×</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition ${
                  p.featured
                    ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/40'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                Başla
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="px-6 py-20">
        <div className="max-w-5xl mx-auto relative bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl p-16 text-center text-white overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/30 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Bugün başlayın, 14 gün ücretsiz.
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
              Kredi kartı gerekmiyor. Kurulum ücretsiz, istediğiniz an iptal edebilirsiniz.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 rounded-xl font-semibold shadow-2xl shadow-red-600/40 hover:-translate-y-0.5 transition-all"
            >
              Hemen Başla
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-slate-200 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>© 2026 EnvanterTR — Tüm hakları saklıdır.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 transition">Hakkımızda</a>
            <a href="#" className="hover:text-slate-900 transition">İletişim</a>
            <a href="#" className="hover:text-slate-900 transition">KVKK</a>
            <a href="#" className="hover:text-slate-900 transition">Gizlilik</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
