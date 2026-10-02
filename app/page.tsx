'use client'
import { useState, useEffect } from 'react'

type Lang = 'tr' | 'en' | 'mk' | 'ru' | 'uk'
type Theme = 'light' | 'dark'

const S: Record<Lang, any> = {
  tr: {
    features:'Özellikler', types:'Türler', deploy:'Kurulum', pricing:'Fiyatlar', demo:'Demo', contact:'İletişim', login:'Giriş', signup:'Ücretsiz Dene',
    badge:'YENİ · v2.0 · Cloudflare Wildcard Aktif',
    h1a:'Şirket envanteriniz', h1b:'artık', h1c:'tek yerde',
    hsub:'Donanım, yazılım lisansı ve zimmeti bulut veya kendi sunucunuzda yönetin. santa.envantertr.com gibi size özel portal, offline EXE ve sınırsız ölçek.',
    cta1:'Ücretsiz Dene', cta2:'Canlı Demo (tes)',
    t1:'Kredi kartı gerekmez', t2:'14 gün ücretsiz', t3:'İstediğin an iptal',
    fT:'Envanter yönetiminde yeni standart', fS:'Snipe-IT mantığı, %100 EnvanterTR arayüzü - hiçbir yerde snipe ismi yok',
    pT:'Şeffaf fiyatlandırma', pS:'Kullanıcı sayına göre öde, varlık sınırsız. Gizli ücret yok.',
    pop:'POPÜLER', mo:'/ay', moOnce:'/tek sefer', basla:'Başla', satinAl:'Satın Al',
    deployT:'Nerede çalışsın?', deployS:'Bulutta bizde veya kendi ağında, tek tık kurulum',
    typeT:'Ne yöneteceksin?', typeS:'5 envanter türü, her biri barkod, QR, zimmet formu',
    superT:'Sizin Süper Admin Paneliniz', superS:'Görsel, fiyat, satış, üyelik, demo, lisans uzatma, extra istekler - hepsi sizde',
    cT:'Bugün başlayın, 14 gün ücretsiz.', cS:'admin@envantertr.com · WhatsApp destek', cBtn:'Hemen Başla',
    fRights:'Tüm hakları saklıdır.', fAbout:'Hakkımızda', fContact:'İletişim', fKvkk:'KVKK', fPriv:'Gizlilik',
    offlineNote:'İnternet yoksa bile tarih bazlı lisans takibi, uyarı ve yedek indirme çalışır',
    camNote:'Kamera ile ekle',
  },
  en: {
    features:'Features', types:'Types', deploy:'Deploy', pricing:'Pricing', demo:'Demo', contact:'Contact', login:'Sign In', signup:'Try Free',
    badge:'NEW · v2.0 · Wildcard Active',
    h1a:'Your company inventory', h1b:'now in', h1c:'one place',
    hsub:'Manage hardware, licenses and assignments on our cloud or your own network. Your own portal like santa.envantertr.com, offline EXE and unlimited scale.',
    cta1:'Try Free', cta2:'Live Demo',
    t1:'No credit card', t2:'14 days free', t3:'Cancel anytime',
    fT:'A new standard', fS:'Enterprise power, modern UI - 100% EnvanterTR',
    pT:'Transparent pricing', pS:'Pay by users, unlimited assets. No hidden fees.',
    pop:'POPULAR', mo:'/mo', moOnce:'/once', basla:'Start', satinAl:'Buy',
    deployT:'Where to run?', deployS:'On our cloud or your own network, one-click install',
    typeT:'What will you manage?', typeS:'5 inventory types with barcode, QR, checkout form',
    superT:'Your Super Admin Panel', superS:'Visuals, pricing, sales, memberships, demo, license extension, extra requests',
    cT:'Start today, 14 days free.', cS:'admin@envantertr.com · WhatsApp support', cBtn:'Get Started',
    fRights:'All rights reserved.', fAbout:'About', fContact:'Contact', fKvkk:'Privacy', fPriv:'Terms',
    offlineNote:'Works offline: date-based license check, warnings and backup download',
    camNote:'Add with camera',
  },
  mk: { features:'Карактеристики', types:'Типови', deploy:'Инсталација', pricing:'Цени', demo:'Демо', contact:'Контакт', login:'Најава', signup:'Пробај', badge:'НОВО · v2.0', h1a:'Инвентарот на вашата компанија', h1b:'сега на', h1c:'едно место', hsub:'Управувајте со хардвер, лиценци и задолжувања. Без инсталација, без сервер.', cta1:'Пробај бесплатно', cta2:'Гледај демо', t1:'Без кредитна карта', t2:'14 дена бесплатно', t3:'Откажете кога било', fT:'Нов стандард', fS:'Корпоративна моќ, модерен интерфејс', pT:'Транспарентни цени', pS:'Без скриени трошоци.', pop:'ПОПУЛАРНО', mo:'/мес', moOnce:'/еднаш', basla:'Започни', satinAl:'Купи', deployT:'Каде да работи?', deployS:'На наш cloud или ваша мрежа', typeT:'Што ќе управувате?', typeS:'5 типови на инвентар', superT:'Супер Админ Панел', superS:'Визуелни, цени, продажби, членства', cT:'Започнете денес.', cS:'Без кредитна карта.', cBtn:'Започни', fRights:'Сите права задржани.', fAbout:'За нас', fContact:'Контакт', fKvkk:'Приватност', fPriv:'Услови', offlineNote:'Работи офлајн', camNote:'Додај со камера' },
  ru: { features:'Возможности', types:'Типы', deploy:'Установка', pricing:'Цены', demo:'Демо', contact:'Контакты', login:'Войти', signup:'Попробовать', badge:'НОВОЕ · v2.0', h1a:'Инвентарь вашей компании', h1b:'теперь в', h1c:'одном месте', hsub:'Управляйте оборудованием, лицензиями и записями. На нашем облаке или у вас.', cta1:'Попробовать', cta2:'Демо', t1:'Без карты', t2:'14 дней бесплатно', t3:'Отмена когда угодно', fT:'Новый стандарт', fS:'Корпоративная мощь, современный интерфейс', pT:'Прозрачные цены', pS:'Без скрытых платежей.', pop:'ПОПУЛЯРНОЕ', mo:'/мес', moOnce:'/раз', basla:'Начать', satinAl:'Купить', deployT:'Где запускать?', deployS:'В нашем облаке или у вас', typeT:'Что управлять?', typeS:'5 типов инвентаря', superT:'Супер Админ', superS:'Визуалы, цены, продажи, членства', cT:'Начните сегодня.', cS:'Карта не требуется.', cBtn:'Начать', fRights:'Все права защищены.', fAbout:'О нас', fContact:'Контакты', fKvkk:'Приватность', fPriv:'Условия', offlineNote:'Работает офлайн', camNote:'Добавить камерой' },
  uk: { features:'Можливості', types:'Типи', deploy:'Встановлення', pricing:'Ціни', demo:'Демо', contact:'Контакти', login:'Увійти', signup:'Спробувати', badge:'НОВЕ · v2.0', h1a:'Інвентар вашої компанії', h1b:'тепер в', h1c:'одному місці', hsub:'Керуйте обладнанням, ліцензіями та записами. На нашій хмарі або у вас.', cta1:'Спробувати', cta2:'Демо', t1:'Без картки', t2:'14 днів безкоштовно', t3:'Скасувати будь-коли', fT:'Новий стандарт', fS:'Корпоративна потужність, сучасний інтерфейс', pT:'Прозорі ціни', pS:'Без прихованих платежів.', pop:'ПОПУЛЯРНЕ', mo:'/міс', moOnce:'/раз', basla:'Почати', satinAl:'Купити', deployT:'Де запускати?', deployS:'У нашій хмарі або у вас', typeT:'Що керувати?', typeS:'5 типів інвентарю', superT:'Супер Адмін', superS:'Візуали, ціни, продажі', cT:'Почніть сьогодні.', cS:'Картка не потрібна.', cBtn:'Почати', fRights:'Всі права захищені.', fAbout:'Про нас', fContact:'Контакти', fKvkk:'Конфіденційність', fPriv:'Умови', offlineNote:'Працює офлайн', camNote:'Додати камерою' },
}

const FEATURES = [
  { icon:'📦', t:{tr:'Demirbaş Takibi',en:'Asset Tracking'}, d:{tr:'Seri no, garanti, amortisman, TR-ABC-2024-001 otomatik kod.', en:'Serial, warranty, depreciation, auto code.'}},
  { icon:'🔐', t:{tr:'Lisans Yönetimi',en:'License'}, d:{tr:'Koltuk, bitiş, uyumlu cihazlar, kalan gün uyarısı.', en:'Seats, expiry, assigned devices.'}},
  { icon:'👤', t:{tr:'Zimmet & İmza',en:'Checkout & Sign'}, d:{tr:'PDF zimmet formu + dijital imza + e-posta onayı.', en:'PDF checkout + digital signature.'}},
  { icon:'📱', t:{tr:'QR & Barkod Kamera',en:'QR Camera'}, d:{tr:'Kamera ile okut, 10x hız. Code128 + QR otomatik.', en:'Scan with camera, auto QR+barcode.'}},
  { icon:'💻', t:{tr:'Windows 11 EXE',en:'Windows 11 EXE'}, d:{tr:'Çift tık kurulum, ağda diğerleri browser ile girer.', en:'Double-click install, others join via browser.'}},
  { icon:'🖥️', t:{tr:'Windows Server',en:'Windows Server'}, d:{tr:'Servis olarak çalışır, AD entegrasyonu.', en:'Runs as service, AD integration.'}},
  { icon:'🐧', t:{tr:'Linux.deb /.sh',en:'Linux.deb /.sh'}, d:{tr:'Ubuntu/Debian systemd servisi.', en:'Ubuntu/Debian systemd.'}},
  { icon:'🔌', t:{tr:'MDM & ERP',en:'MDM & ERP'}, d:{tr:'Intune, Jamf, Logo, Paraşüt entegrasyonu.', en:'Intune, Jamf, Logo integration.'}},
  { icon:'📊', t:{tr:'Raporlama',en:'Reporting'}, d:{tr:'Canlı dashboard, amortisman, KVKK log.', en:'Live dashboard, depreciation, audit log.'}},
  { icon:'🔒', t:{tr:'SSO & LDAP',en:'SSO & LDAP'}, d:{tr:'Google, Azure, Okta + şifre sıfırlama e-posta ile.', en:'Google, Azure, Okta + password reset.'}},
  { icon:'📤', t:{tr:'Yedek İndir/Yükle',en:'Export/Import'}, d:{tr:'Lisans bitince Excel/CSV/SQL indir, 2 yıl sonra geri yükle.', en:'Export Excel/CSV/SQL when expired, restore later.'}},
  { icon:'⏰', t:{tr:'Lisans Takibi Offline',en:'Offline License'}, d:{tr:'İnternetsiz tarih bazlı kontrol, 7 gün kala uyarı.', en:'Offline date-based check, 7-day warning.'}},
]

const TYPES = [
  { icon:'💻', name_tr:'Demirbaş', name_en:'Asset', what_tr:'Laptop, masa, araç', need_tr:'Seri no + zimmetli kişi' },
  { icon:'🔌', name_tr:'Aksesuar', name_en:'Accessory', what_tr:'Mouse, klavye, kulaklık', need_tr:'Stok adedi + zimmet' },
  { icon:'📜', name_tr:'Lisans', name_en:'License', what_tr:'Office 365, Adobe', need_tr:'Koltuk sayısı + bitiş tarihi' },
  { icon:'🧴', name_tr:'Sarf', name_en:'Consumable', what_tr:'Toner, pil, kablo', need_tr:'Stok kritik seviye' },
  { icon:'🔧', name_tr:'Bileşen', name_en:'Component', what_tr:'RAM, SSD, anakart', need_tr:'Uyumlu demirbaş' },
]

const DEPLOYS = [
  { id:'cloud', icon:'☁️', title_tr:'Online Bulut', title_en:'Online Cloud', desc_tr:'Veri bizde (Hetzner 169.58.53.189). santa.envantertr.com otomatik açılır. Yedekler Avrupa S3.', desc_en:'Data on our server. Auto subdomain like santa.envantertr.com. EU S3 backups.', price_tr:'Aylık', price_en:'Monthly' },
  { id:'win11', icon:'💾', title_tr:'Windows 11 EXE', title_en:'Windows 11 EXE', desc_tr:'EnvanterTR_Kurulum.exe → 30 sn kurulum. Diğerleri http://envantertr.local ile girer. Sınırsız varlık, kullanıcı paketli.', desc_en:'EnvanterTR_Setup.exe → 30 sec install. Others join via browser. Unlimited assets, user-based packages.', price_tr:'Tek sefer', price_en:'One-time' },
  { id:'winserver', icon:'🏢', title_tr:'Windows Server', title_en:'Windows Server', desc_tr:'Servis olarak çalışır, AD ile giriş. 500+ kullanıcı için.', desc_en:'Runs as service, AD login. For 500+ users.', price_tr:'Tek sefer', price_en:'One-time' },
  { id:'linux', icon:'🐧', title_tr:'Linux', title_en:'Linux', desc_tr:'Ubuntu/Debian.deb +.sh. systemd + nginx. Kendi datacenter için.', desc_en:'Ubuntu/Debian.deb +.sh. For your datacenter.', price_tr:'Tek sefer', price_en:'One-time' },
]

const PLANS_ONLINE = [
  { name:'Başlangıç', nameEn:'Starter', users:'0-200 kişi', price:'999', feat:['Sınırsız varlık','20 kullanıcı','50 GB','QR/Barkod','E-posta destek'] },
  { name:'Büyüme', nameEn:'Growth', users:'200-500 kişi', price:'1999', feat:['Sınırsız varlık','100 kullanıcı','250 GB','Whitelabel + logo','SSO + LDAP','Öncelikli destek'], popular:true },
  { name:'Kurumsal', nameEn:'Enterprise', users:'500+ kişi', price:'2499', feat:['Sınırsız varlık','Sınırsız kullanıcı','1 TB','Kendi domain (CNAME)','API + Webhook','7/24 telefon'] },
  { name:'Sınırsız', nameEn:'Unlimited', users:'Sınırsız', price:'3999', feat:['Sınırsız her şey','10 TB','On-prem geçiş hakkı','Özel entegrasyon','Yerinde kurulum'] },
]

const PLANS_OFFLINE = [
  { name:'Başlangıç EXE', nameEn:'Starter EXE', users:'5 kullanıcı', price:'4999', feat:['Sınırsız varlık','5 kullanıcı','Kamera ile ekleme','Ağda paylaşım','1 yıl güncelleme'] },
  { name:'Profesyonel EXE', nameEn:'Pro EXE', users:'50 kullanıcı', price:'9999', feat:['Sınırsız varlık','50 kullanıcı','AD entegrasyonu','Offline lisans takibi','Ömür boyu güncelleme'], popular:true },
  { name:'Server', nameEn:'Server', users:'Sınırsız', price:'19999', feat:['Sınırsız varlık/kullanıcı','Windows Server + Linux','API + yedek','Kendi domain','Ömür boyu'] },
]

export default function Home() {
  const [lang, setLang] = useState<Lang>('tr')
  const [theme, setTheme] = useState<Theme>('light')
  const [langOpen, setLangOpen] = useState(false)
  const [bill, setBill] = useState<'online'|'offline'>('online')

  useEffect(() => {
    const saved = (localStorage.getItem('etr_lang') as Lang) || 'tr'
    const savedTheme = (localStorage.getItem('etr_theme') as Theme) || 'light'
    setLang(saved); setTheme(savedTheme)
  }, [])
  const changeLang = (l: Lang) => { setLang(l); localStorage.setItem('etr_lang', l); setLangOpen(false) }
  const toggleTheme = () => { const n = theme === 'light'? 'dark' : 'light'; setTheme(n); localStorage.setItem('etr_theme', n) }
  const t = S[lang]; const D = theme === 'dark'
  const C = { bg: D? '#0A0A0A' : '#FFFFFF', bgAlt: D? '#141414' : '#FAFAFA', bgSoft: D? '#1A1A1A' : '#F1F5F9', fg: D? '#F5F5F0' : '#0F172A', fgMuted: D? '#9CA3AF' : '#64748B', border: D? '#262626' : '#E2E8F0', accent: D? '#3B82F6' : '#DC2626', accentSoft: D? 'rgba(59,130,246,0.15)' : 'rgba(220,38,38,0.10)' }
  const LANGS = [{ c:'tr' as Lang, l:'Türkçe', f:'🇹🇷' },{ c:'en' as Lang, l:'English', f:'🇬🇧' },{ c:'mk' as Lang, l:'Македонски', f:'🇲🇰' },{ c:'ru' as Lang, l:'Русский', f:'🇷🇺' },{ c:'uk' as Lang, l:'Українська', f:'🇺🇦' }]

  return (
    <div style={{ minHeight:'100vh', background:C.bg, color:C.fg, fontFamily:'Inter,system-ui,sans-serif', transition:'all.35s' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0} a{color:inherit;text-decoration:none}
       .btn-p{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:${C.accent};color:#fff;font-weight:600;border-radius:100px;border:none;cursor:pointer;font-family:inherit;font-size:15px;box-shadow:0 8px 24px ${C.accentSoft};transition:all.3s cubic-bezier(.16,1,.3,1)}
       .btn-p:hover{transform:translateY(-2px);box-shadow:0 12px 32px ${C.accentSoft}}
       .btn-g{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:transparent;color:${C.fg};font-weight:600;border-radius:100px;border:1px solid ${C.border};cursor:pointer;font-family:inherit;font-size:15px;transition:all.3s}
       .btn-g:hover{background:${C.bgSoft}}
       .card{padding:32px 28px;border-radius:20px;border:1px solid ${C.border};background:${C.bgAlt};transition:all.4s cubic-bezier(.16,1,.3,1)}
       .card:hover{transform:translateY(-6px);border-color:${C.accent};box-shadow:0 20px 40px ${C.accentSoft}}
       .plan{padding:36px 28px;border-radius:24px;border:1px solid ${C.border};background:${C.bgAlt};position:relative;transition:all.4s;display:flex;flex-direction:column}
       .plan:hover{transform:translateY(-6px)}.plan-pop{border:2px solid ${C.accent};box-shadow:0 20px 50px ${C.accentSoft}}
       .navl{font-size:14px;font-weight:500;color:${C.fgMuted};transition:color.2s;cursor:pointer}.navl:hover{color:${C.fg}}
       .hide-m{display:flex} @media(max-width:980px){.hide-m{display:none!important}.grid-3{grid-template-columns:1fr!important}.grid-4{grid-template-columns:1fr 1fr!important}.hero{font-size:38px!important}}
      `}</style>

      <nav style={{ position:'sticky', top:0, zIndex:50, background:D?'rgba(10,10,10,0.85)':'rgba(255,255,255,0.85)', backdropFilter:'blur(20px)', borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 28px', height:72, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <a href="/" style={{ display:'flex', alignItems:'center', gap:12 }}><div style={{ width:40, height:40, background:C.accent, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900, fontSize:20 }}>E</div><span style={{ fontSize:22, fontWeight:800, letterSpacing:'-0.03em' }}>Envanter<span style={{ color:C.accent }}>TR</span></span></a>
          <div className="hide-m" style={{ alignItems:'center', gap:28 }}><a href="#types" className="navl">{t.types}</a><a href="#deploy" className="navl">{t.deploy}</a><a href="#features" className="navl">{t.features}</a><a href="#pricing" className="navl">{t.pricing}</a><a href="#contact" className="navl">{t.contact}</a></div>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ position:'relative' }}><button onClick={()=>setLangOpen(!langOpen)} style={{ display:'flex', alignItems:'center', gap:8, padding:'8px 14px', borderRadius:100, border:`1px solid ${C.border}`, background:'transparent', color:C.fg, cursor:'pointer', fontSize:13, fontWeight:500 }}>{LANGS.find(x=>x.c===lang)?.f} {lang.toUpperCase()} ▾</button>{langOpen && <div style={{ position:'absolute', top:'calc(100% + 8px)', right:0, background:C.bgAlt, border:`1px solid ${C.border}`, borderRadius:14, padding:6, minWidth:180, boxShadow:`0 20px 50px rgba(0,0,0,${D?'0.5':'0.12'})`, zIndex:100 }}>{LANGS.map(x=><div key={x.c} onClick={()=>changeLang(x.c)} style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderRadius:10, fontSize:14, cursor:'pointer', background:lang===x.c?C.bgSoft:'transparent' }}><span>{x.f}</span><span>{x.l}</span>{lang===x.c && <span style={{ marginLeft:'auto', color:C.accent }}>✓</span>}</div>)}</div>}</div>
            <button onClick={toggleTheme} style={{ width:40, height:40, borderRadius:100, border:`1px solid ${C.border}`, background:'transparent', color:C.fg, cursor:'pointer', fontSize:18 }}>{D?'☀':'🌙'}</button>
            <a href="/login" className="hide-m navl" style={{ marginLeft:8 }}>{t.login}</a><a href="/signup" className="btn-p" style={{ padding:'10px 22px', fontSize:14 }}>{t.signup}</a>
          </div>
        </div>
      </nav>

      <section style={{ padding:'110px 28px 80px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at top, ${C.accentSoft}, transparent 60%)`, pointerEvents:'none' }} />
        <div style={{ position:'relative', maxWidth:900, margin:'0 auto' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 16px', borderRadius:100, border:`1px solid ${C.border}`, background:C.bgAlt, fontSize:12, fontWeight:600, letterSpacing:'0.06em', color:C.accent, marginBottom:28 }}>{t.badge}</div>
          <h1 className="hero" style={{ fontSize:56, fontWeight:900, lineHeight:1.05, letterSpacing:'-0.04em', marginBottom:24 }}>{t.h1a}<br/>{t.h1b} <span style={{ color:C.accent }}>{t.h1c}</span>.</h1>
          <p style={{ fontSize:17, color:C.fgMuted, maxWidth:720, margin:'0 auto 40px', lineHeight:1.65 }}>{t.hsub}</p>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, flexWrap:'wrap', marginBottom:32 }}><a href="/signup" className="btn-p">{t.cta1} →</a><a href="https://tes.envantertr.com" target="_blank" className="btn-g">{t.cta2}</a></div>
          <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:28, fontSize:13, color:C.fgMuted }}><span>✓ {t.t1}</span><span>✓ {t.t2}</span><span>✓ {t.t3}</span><span>✓ {t.offlineNote}</span></div>
        </div>
      </section>

      <section id="types" style={{ padding:'80px 28px', background:C.bgAlt, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1200, margin:'0 auto', textAlign:'center', marginBottom:48 }}><h2 style={{ fontSize:36, fontWeight:900, letterSpacing:'-0.03em', marginBottom:12 }}>{t.typeT}</h2><p style={{ color:C.fgMuted }}>{t.typeS}</p></div>
        <div className="grid-3" style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:16 }}>
          {TYPES.map((x,i)=><div key={i} className="card" style={{ textAlign:'center', padding:'28px 20px' }}><div style={{ fontSize:32, marginBottom:12 }}>{x.icon}</div><div style={{ fontWeight:700, marginBottom:6 }}>{lang==='tr'?x.name_tr:x.name_en}</div><div style={{ fontSize:12, color:C.fgMuted, marginBottom:4 }}>{lang==='tr'?x.what_tr:x.name_en}</div><div style={{ fontSize:11, color:C.accent, fontWeight:600 }}>{lang==='tr'?x.need_tr:''}</div></div>)}
        </div>
      </section>

      <section id="deploy" style={{ padding:'80px 28px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', textAlign:'center', marginBottom:48 }}><h2 style={{ fontSize:36, fontWeight:900, letterSpacing:'-0.03em', marginBottom:12 }}>{t.deployT}</h2><p style={{ color:C.fgMuted }}>{t.deployS}</p></div>
        <div className="grid-4" style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
          {DEPLOYS.map((d,i)=><div key={i} className="card"><div style={{ fontSize:28, marginBottom:16 }}>{d.icon}</div><h3 style={{ fontWeight:700, marginBottom:8 }}>{lang==='tr'?d.title_tr:d.title_en}</h3><p style={{ fontSize:13, color:C.fgMuted, lineHeight:1.6, marginBottom:12 }}>{lang==='tr'?d.desc_tr:d.desc_en}</p><div style={{ fontSize:12, fontWeight:700, color:C.accent }}>{lang==='tr'?d.price_tr:d.price_en}</div></div>)}
        </div>
      </section>

      <section id="features" style={{ padding:'100px 28px', background:C.bgAlt, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1200, margin:'0 auto', textAlign:'center', marginBottom:64 }}><h2 style={{ fontSize:42, fontWeight:900, lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:14 }}>{t.fT}</h2><p style={{ color:C.fgMuted }}>{t.fS}</p></div>
        <div className="grid-3" style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
          {FEATURES.map((f,i)=><div key={i} className="card"><div style={{ width:56, height:56, borderRadius:16, background:C.accentSoft, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, marginBottom:20 }}>{f.icon}</div><h3 style={{ fontSize:16, fontWeight:700, marginBottom:8 }}>{f.t[lang as 'tr' | 'en'] || f.t.tr}</h3><p style={{ fontSize:13, color:C.fgMuted, lineHeight:1.6 }}>{f.d[lang as 'tr' | 'en'] || f.d.tr}</p></div>)}
        </div>
        <div style={{ maxWidth:1200, margin:'0 auto', marginTop:40, padding:24, borderRadius:16, background:C.bg, border:`1px dashed ${C.accent}`, display:'flex', gap:16, alignItems:'center' }}><div style={{ fontSize:24 }}>🎥</div><div><div style={{ fontWeight:700, fontSize:14 }}>Modern kullanım kılavuzları</div><div style={{ fontSize:12, color:C.fgMuted }}>Her modül için 1 dakikalık GIF + video + {t.camNote}. Şifre unutanlar için e-posta ile sıfırlama + admin manuel sıfırlama.</div></div></div>
      </section>

      <section id="pricing" style={{ padding:'100px 28px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', textAlign:'center', marginBottom:32 }}><h2 style={{ fontSize:42, fontWeight:900, letterSpacing:'-0.03em', marginBottom:14 }}>{t.pT}</h2><p style={{ color:C.fgMuted }}>{t.pS}</p>
          <div style={{ display:'inline-flex', marginTop:24, padding:4, borderRadius:100, background:C.bgSoft, border:`1px solid ${C.border}` }}>
            <button onClick={()=>setBill('online')} style={{ padding:'8px 20px', borderRadius:100, border:'none', cursor:'pointer', fontWeight:600, fontSize:13, background:bill==='online'?C.accent:'#transparent', color:bill==='online'?'#fff':C.fgMuted }}>☁️ Online Bulut</button>
            <button onClick={()=>setBill('offline')} style={{ padding:'8px 20px', borderRadius:100, border:'none', cursor:'pointer', fontWeight:600, fontSize:13, background:bill==='offline'?C.accent:'#transparent', color:bill==='offline'?'#fff':C.fgMuted }}>💾 Offline EXE / Server / Linux</button>
          </div>
        </div>
        <div className="grid-4" style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
          {(bill==='online'?PLANS_ONLINE:PLANS_OFFLINE).map((p,i)=><div key={i} className={`plan ${p.popular?'plan-pop':''}`}>{p.popular && <div style={{ position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)', background:C.accent, color:'#fff', fontSize:10, fontWeight:800, padding:'5px 14px', borderRadius:100 }}>{t.pop}</div>}<h3 style={{ fontSize:16, fontWeight:700, marginBottom:6 }}>{lang==='tr'?p.name:p.nameEn}</h3><div style={{ fontSize:12, color:C.accent, fontWeight:600, marginBottom:12 }}>{p.users}</div><div style={{ marginBottom:24 }}><span style={{ fontSize:32, fontWeight:900 }}>₺{p.price}</span><span style={{ fontSize:13, color:C.fgMuted }}>{bill==='online'?t.mo:t.moOnce}</span></div><ul style={{ listStyle:'none', padding:0, margin:'0 0 24px', flex:1 }}>{p.feat.map((f,j)=><li key={j} style={{ display:'flex', gap:10, fontSize:13, padding:'7px 0', borderBottom:j<p.feat.length-1?`1px solid ${C.border}`:'none' }}><span style={{ color:C.accent, fontWeight:900 }}>✓</span>{f}</li>)}</ul><a href="/signup" className={p.popular?'btn-p':'btn-g'} style={{ justifyContent:'center', width:'100%' }}>{bill==='online'?t.basla:t.satinAl}</a></div>)}
        </div>
      </section>

      <section style={{ padding:'60px 28px', background:C.bgAlt, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1000, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }} className="grid-3">
          <div className="card"><div style={{ fontSize:20, marginBottom:12 }}>👑</div><h3 style={{ fontWeight:800, marginBottom:8 }}>{t.superT}</h3><p style={{ fontSize:13, color:C.fgMuted, lineHeight:1.6 }}>{t.superS} - Fiyat güncelleme, görsel yönetme, demo verme (14 gün), lisans uzatma, extra kullanıcı talepleri, satış raporu, MRR.</p><div style={{ marginTop:12, fontSize:11, color:C.accent, fontWeight:700 }}>envantertr.com/admin → Sadece siz</div></div>
          <div className="card"><div style={{ fontSize:20, marginBottom:12 }}>🏢</div><h3 style={{ fontWeight:800, marginBottom:8 }}>Şirket Portalı</h3><p style={{ fontSize:13, color:C.fgMuted, lineHeight:1.6 }}>santa.envantertr.com gibi her firmaya özel. Logo, renk edit. Kullanıcı yetki (admin/editör/görüntüleme). Kullanıcı lisansı bitince Excel/CSV/SQL indir, 2 yıl sonra geri yükle.</p><div style={{ marginTop:12, fontSize:11, color:C.accent, fontWeight:700 }}>*.envantertr.com → Wildcard aktif, otomatik açılıyor</div></div>
        </div>
      </section>

      <section id="demo" style={{ padding:'80px 28px' }}>
        <div style={{ maxWidth:1000, margin:'0 auto', background:D?C.bgAlt:'#0F172A', borderRadius:32, padding:'70px 48px', textAlign:'center', position:'relative', overflow:'hidden', border:`1px solid ${C.border}` }}>
          <div style={{ position:'absolute', top:-120, right:-120, width:400, height:400, background:C.accentSoft, borderRadius:'50%', filter:'blur(100px)', pointerEvents:'none' }} />
          <div style={{ position:'relative' }}><h2 style={{ fontSize:38, fontWeight:900, color:'#F5F5F0', marginBottom:14 }}>{t.cT}</h2><p style={{ color:'#9CA3AF', marginBottom:28 }}>{t.cS}</p><div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}><a href="/signup" className="btn-p" style={{ padding:'16px 36px' }}>{t.cBtn} →</a><a href="https://wa.me/905000000000" target="_blank" className="btn-g" style={{ background:'#fff', color:'#0F172A', borderColor:'#fff' }}>WhatsApp</a></div><div style={{ marginTop:20, fontSize:12, color:'#6B7280' }}>admin@envantertr.com · Canlı: tes.envantertr.com</div></div>
        </div>
      </section>

      <footer id="contact" style={{ borderTop:`1px solid ${C.border}`, padding:'48px 28px', background:C.bgAlt }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:20 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}><div style={{ width:32, height:32, background:C.accent, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900 }}>E</div><span style={{ fontWeight:800 }}>Envanter<span style={{ color:C.accent }}>TR</span></span></div>
          <div style={{ fontSize:12, color:C.fgMuted }}>© 2026 EnvanterTR · {t.fRights} · admin@envantertr.com</div>
          <div style={{ display:'flex', gap:20, fontSize:12, color:C.fgMuted }}><a href="#" className="navl">KVKK</a><a href="#" className="navl">Gizlilik</a><a href="#" className="navl">Kılavuzlar</a><a href="#" className="navl">API Docs</a></div>
        </div>
      </footer>
    </div>
  )
}
