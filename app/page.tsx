'use client'

import { useState, useEffect } from 'react'

type Lang = 'tr' | 'en' | 'mk' | 'ru' | 'uk'
type Theme = 'light' | 'dark'

const S: Record<Lang, any> = {
  tr: {
    features:'Özellikler', pricing:'Fiyatlar', demo:'Demo', contact:'İletişim', login:'Giriş', signup:'Ücretsiz Dene',
    badge:'YENİ · v2.0', h1a:'Şirket envanteriniz', h1b:'artık', h1c:'tek yerde',
    hsub:'Donanım, yazılım lisansı ve zimmet kayıtlarınızı bulut tabanlı modern bir panelde yönetin. Kurulum yok, sunucu yok.',
    cta1:'Ücretsiz Dene', cta2:'Demo İzle',
    t1:'Kredi kartı gerekmez', t2:'Kurulum ücretsiz', t3:'İstediğiniz an iptal',
    fT:'Envanter yönetiminde yeni standart', fS:'Kurumsal güç, modern arayüz',
    pT:'Şeffaf fiyatlandırma', pS:'Gizli ücret yok, taahhüt yok.', pop:'POPÜLER', mo:'/ay', başla:'Başla',
    cT:'Bugün başlayın, 14 gün ücretsiz.', cS:'Kredi kartı gerekmiyor.', cBtn:'Hemen Başla',
    fRights:'Tüm hakları saklıdır.', fAbout:'Hakkımızda', fContact:'İletişim', fKvkk:'KVKK', fPriv:'Gizlilik',
  },
  en: {
    features:'Features', pricing:'Pricing', demo:'Demo', contact:'Contact', login:'Sign In', signup:'Try Free',
    badge:'NEW · v2.0', h1a:'Your company inventory', h1b:'now in', h1c:'one place',
    hsub:'Manage hardware, licenses and assignments on a modern cloud panel. No install, no server.',
    cta1:'Try Free', cta2:'Watch Demo',
    t1:'No credit card', t2:'Free setup', t3:'Cancel anytime',
    fT:'A new standard in inventory', fS:'Enterprise power, modern interface',
    pT:'Transparent pricing', pS:'No hidden fees, no commitment.', pop:'POPULAR', mo:'/mo', başla:'Get Started',
    cT:'Start today, free for 14 days.', cS:'No credit card required.', cBtn:'Get Started',
    fRights:'All rights reserved.', fAbout:'About', fContact:'Contact', fKvkk:'Privacy', fPriv:'Terms',
  },
  mk: {
    features:'Карактеристики', pricing:'Цени', demo:'Демо', contact:'Контакт', login:'Најава', signup:'Пробај',
    badge:'НОВО · v2.0', h1a:'Инвентарот на вашата компанија', h1b:'сега на', h1c:'едно место',
    hsub:'Управувајте со хардвер, лиценци и задолжувања. Без инсталација, без сервер.',
    cta1:'Пробај бесплатно', cta2:'Гледај демо',
    t1:'Без кредитна карта', t2:'Бесплатна инсталација', t3:'Откажете кога било',
    fT:'Нов стандард во инвентар', fS:'Корпоративна моќ, модерен интерфејс',
    pT:'Транспарентни цени', pS:'Без скриени трошоци.', pop:'ПОПУЛАРНО', mo:'/мес', başla:'Започни',
    cT:'Започнете денес, 14 дена бесплатно.', cS:'Без кредитна карта.', cBtn:'Започни',
    fRights:'Сите права задржани.', fAbout:'За нас', fContact:'Контакт', fKvkk:'Приватност', fPriv:'Услови',
  },
  ru: {
    features:'Возможности', pricing:'Цены', demo:'Демо', contact:'Контакты', login:'Войти', signup:'Попробовать',
    badge:'НОВОЕ · v2.0', h1a:'Инвентарь вашей компании', h1b:'теперь в', h1c:'одном месте',
    hsub:'Управляйте оборудованием, лицензиями и записями. Без установки, без сервера.',
    cta1:'Попробовать', cta2:'Смотреть демо',
    t1:'Без карты', t2:'Установка бесплатно', t3:'Отмена когда угодно',
    fT:'Новый стандарт инвентаря', fS:'Корпоративная мощь, современный интерфейс',
    pT:'Прозрачные цены', pS:'Без скрытых платежей.', pop:'ПОПУЛЯРНОЕ', mo:'/мес', başla:'Начать',
    cT:'Начните сегодня, 14 дней бесплатно.', cS:'Карта не требуется.', cBtn:'Начать',
    fRights:'Все права защищены.', fAbout:'О нас', fContact:'Контакты', fKvkk:'Приватность', fPriv:'Условия',
  },
  uk: {
    features:'Можливості', pricing:'Ціни', demo:'Демо', contact:'Контакти', login:'Увійти', signup:'Спробувати',
    badge:'НОВЕ · v2.0', h1a:'Інвентар вашої компанії', h1b:'тепер в', h1c:'одному місці',
    hsub:'Керуйте обладнанням, ліцензіями та записами. Без встановлення, без сервера.',
    cta1:'Спробувати', cta2:'Дивитись демо',
    t1:'Без картки', t2:'Встановлення безкоштовне', t3:'Скасувати будь-коли',
    fT:'Новий стандарт інвентарю', fS:'Корпоративна потужність, сучасний інтерфейс',
    pT:'Прозорі ціни', pS:'Без прихованих платежів.', pop:'ПОПУЛЯРНЕ', mo:'/міс', başla:'Почати',
    cT:'Почніть сьогодні, 14 днів безкоштовно.', cS:'Картка не потрібна.', cBtn:'Почати',
    fRights:'Всі права захищені.', fAbout:'Про нас', fContact:'Контакти', fKvkk:'Конфіденційність', fPriv:'Умови',
  },
}

const FEATURES = [
  { icon:'📦', tr:'Demirbaş Takibi', en:'Asset Tracking', mk:'Следење на средства', ru:'Учёт активов', uk:'Облік активів', desc_tr:'Tüm donanımınızı tek merkezden takip edin.', desc_en:'Track all hardware from one hub.', desc_mk:'Следете го целиот хардвер од едно место.', desc_ru:'Всё оборудование в одном месте.', desc_uk:'Все обладнання в одному місці.' },
  { icon:'🔐', tr:'Lisans Yönetimi', en:'License Management', mk:'Управување со лиценци', ru:'Управление лицензиями', uk:'Управління ліцензіями', desc_tr:'Koltukları ve bitiş tarihlerini izleyin.', desc_en:'Track seats and expiration dates.', desc_mk:'Следете места и датуми.', desc_ru:'Отслеживайте места и даты.', desc_uk:'Відстежуйте місця та дати.' },
  { icon:'👤', tr:'Zimmet Sistemi', en:'Assignment', mk:'Задолжување', ru:'Выдача', uk:'Видача', desc_tr:'Dijital imza ve PDF zimmet formu.', desc_en:'Digital signature and PDF form.', desc_mk:'Дигитален потпис и PDF.', desc_ru:'Цифровая подпись и PDF.', desc_uk:'Цифровий підпис та PDF.' },
  { icon:'📱', tr:'QR & Barkod', en:'QR & Barcode', mk:'QR & Баркод', ru:'QR и штрих-код', uk:'QR та штрих-код', desc_tr:'Kamerayla okut, 10 kat hızlan.', desc_en:'Scan with camera, 10x faster.', desc_mk:'Скенирајте со камера.', desc_ru:'Сканируйте камерой.', desc_uk:'Скануйте камерою.' },
  { icon:'🔌', tr:'MDM & ERP', en:'MDM & ERP', mk:'MDM & ERP', ru:'MDM и ERP', uk:'MDM та ERP', desc_tr:'Intune, Jamf, Logo entegrasyonu.', desc_en:'Intune, Jamf, Logo integration.', desc_mk:'Интеграција со Intune, Jamf.', desc_ru:'Интеграция с Intune, Jamf.', desc_uk:'Інтеграція з Intune, Jamf.' },
  { icon:'📊', tr:'Raporlama', en:'Reporting', mk:'Извештаи', ru:'Отчёты', uk:'Звіти', desc_tr:'Canlı dashboard ve analiz.', desc_en:'Live dashboard and analysis.', desc_mk:'Жив dashboard и анализа.', desc_ru:'Живой дашборд и анализ.', desc_uk:'Живий дашборд та аналіз.' },
  { icon:'🌍', tr:'Çoklu Dil', en:'Multi-Language', mk:'Повеќе јазици', ru:'Много языков', uk:'Багато мов', desc_tr:'5 dil, çoklu para birimi.', desc_en:'5 languages, multi-currency.', desc_mk:'5 јазици, повеќе валути.', desc_ru:'5 языков, мультивалютность.', desc_uk:'5 мов, мультивалютність.' },
  { icon:'🎨', tr:'Whitelabel', en:'Whitelabel', mk:'Whitelabel', ru:'Whitelabel', uk:'Whitelabel', desc_tr:'Kendi logonuz ve renkleriniz.', desc_en:'Your logo and colors.', desc_mk:'Вашето лого и бои.', desc_ru:'Ваш логотип и цвета.', desc_uk:'Ваш логотип та кольори.' },
  { icon:'🔒', tr:'SSO & LDAP', en:'SSO & LDAP', mk:'SSO & LDAP', ru:'SSO и LDAP', uk:'SSO та LDAP', desc_tr:'Google, Azure, Okta desteği.', desc_en:'Google, Azure, Okta support.', desc_mk:'Поддршка Google, Azure.', desc_ru:'Поддержка Google, Azure.', desc_uk:'Підтримка Google, Azure.' },
]

const PLANS = [
  { name:'Başlangıç', nameEn:'Starter', price:'499', k:3, d:'5 GB', feat:['50 demirbaş','3 kullanıcı','5 GB disk'] },
  { name:'Standart', nameEn:'Standard', price:'999', k:20, d:'50 GB', feat:['500 demirbaş','20 kullanıcı','50 GB disk'] },
  { name:'Profesyonel', nameEn:'Professional', price:'1999', k:50, d:'250 GB', feat:['2000 demirbaş','50 kullanıcı','250 GB disk'], popular:true },
  { name:'Kurumsal', nameEn:'Enterprise', price:'2499', k:999, d:'1 TB', feat:['Sınırsız demirbaş','Sınırsız kullanıcı','1 TB disk'] },
]

export default function Home() {
  const [lang, setLang] = useState<Lang>('tr')
  const [theme, setTheme] = useState<Theme>('light')
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const saved = (localStorage.getItem('etr_lang') as Lang) || 'tr'
    const savedTheme = (localStorage.getItem('etr_theme') as Theme) || 'light'
    setLang(saved)
    setTheme(savedTheme)
  }, [])

  const changeLang = (l: Lang) => { setLang(l); localStorage.setItem('etr_lang', l); setLangOpen(false) }
  const toggleTheme = () => {
    const n = theme === 'light' ? 'dark' : 'light'
    setTheme(n)
    localStorage.setItem('etr_theme', n)
  }

  const t = S[lang]
  const D = theme === 'dark'
  const C = {
    bg: D ? '#0A0A0A' : '#FAF7F2',
    bgAlt: D ? '#141414' : '#FFFFFF',
    bgSoft: D ? '#1A1A1A' : '#F5F0E8',
    fg: D ? '#F5F5F0' : '#1A1A1A',
    fgMuted: D ? '#9CA3AF' : '#6B6B6B',
    border: D ? '#262626' : '#E8E1D5',
    accent: D ? '#D4AF37' : '#B91C1C',
    accentSoft: D ? 'rgba(212,175,55,0.12)' : 'rgba(185,28,28,0.08)',
  }

  const LANGS: { c: Lang; l: string; f: string }[] = [
    { c:'tr', l:'Türkçe', f:'🇹🇷' }, { c:'en', l:'English', f:'🇬🇧' },
    { c:'mk', l:'Македонски', f:'🇲🇰' }, { c:'ru', l:'Русский', f:'🇷🇺' }, { c:'uk', l:'Українська', f:'🇺🇦' },
  ]

  return (
    <div style={{ minHeight:'100vh', background:C.bg, color:C.fg, fontFamily:'Inter, system-ui, sans-serif', transition:'background .35s ease, color .35s ease' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .serif { font-family: 'Fraunces', Georgia, serif; letter-spacing: -0.02em; }
        a { text-decoration: none; color: inherit; }
        .btn-primary { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; background:${C.accent}; color:${D?'#0A0A0A':'#fff'}; font-weight:600; border-radius:100px; border:none; cursor:pointer; font-family:inherit; font-size:15px; box-shadow:0 8px 24px ${C.accentSoft}; transition: all .3s cubic-bezier(.16,1,.3,1); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px ${C.accentSoft}; }
        .btn-ghost { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; background:transparent; color:${C.fg}; font-weight:600; border-radius:100px; border:1px solid ${C.border}; cursor:pointer; font-family:inherit; font-size:15px; transition: all .3s; }
        .btn-ghost:hover { background:${C.bgSoft}; }
        .feature-card { padding:32px 28px; border-radius:20px; border:1px solid ${C.border}; background:${C.bgAlt}; transition: all .4s cubic-bezier(.16,1,.3,1); }
        .feature-card:hover { transform: translateY(-6px); border-color:${C.accent}; box-shadow: 0 20px 40px ${C.accentSoft}; }
        .plan-card { padding:36px 28px; border-radius:24px; border:1px solid ${C.border}; background:${C.bgAlt}; position:relative; transition: all .4s cubic-bezier(.16,1,.3,1); display:flex; flex-direction:column; }
        .plan-card:hover { transform: translateY(-6px); }
        .plan-pop { border:2px solid ${C.accent}; box-shadow: 0 20px 50px ${C.accentSoft}; }
        .navlink { font-size:14px; font-weight:500; color:${C.fgMuted}; transition: color .2s; cursor:pointer; }
        .navlink:hover { color:${C.fg}; }
        .lang-btn { display:flex; align-items:center; gap:8px; padding:8px 14px; border-radius:100px; border:1px solid ${C.border}; background:transparent; color:${C.fg}; cursor:pointer; font-family:inherit; font-size:13px; font-weight:500; transition: all .2s; }
        .lang-btn:hover { background:${C.bgSoft}; }
        .lang-menu { position:absolute; top:calc(100% + 8px); right:0; background:${C.bgAlt}; border:1px solid ${C.border}; border-radius:14px; padding:6px; min-width:180px; box-shadow: 0 20px 50px rgba(0,0,0,${D?'0.5':'0.12'}); z-index:100; }
        .lang-item { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:10px; font-size:14px; cursor:pointer; color:${C.fg}; transition: background .15s; }
        .lang-item:hover { background:${C.bgSoft}; }
        .theme-btn { width:40px; height:40px; border-radius:100px; border:1px solid ${C.border}; background:transparent; color:${C.fg}; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:18px; transition: all .3s cubic-bezier(.16,1,.3,1); }
        .theme-btn:hover { background:${C.bgSoft}; transform: rotate(20deg); }
        .hide-mobile { display: flex; }
        @media(max-width:900px){
          .hide-mobile { display:none !important; }
          .grid-3 { grid-template-columns:1fr !important; }
          .grid-4 { grid-template-columns:1fr !important; }
          .hero-title { font-size:42px !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position:'sticky', top:0, zIndex:50, background: D ? 'rgba(10,10,10,0.85)' : 'rgba(250,247,242,0.85)', backdropFilter:'blur(20px)', borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 28px', height:72, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <a href="/" style={{ display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ width:40, height:40, background:C.accent, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', color: D ? '#0A0A0A' : '#fff', fontWeight:900, fontSize:20, fontFamily:'Fraunces, serif' }}>E</div>
            <span className="serif" style={{ fontSize:22, fontWeight:700 }}>
              Envanter<span style={{ color:C.accent }}>TR</span>
            </span>
          </a>

          <div className="hide-mobile" style={{ alignItems:'center', gap:36 }}>
            <a href="#features" className="navlink">{t.features}</a>
            <a href="#pricing" className="navlink">{t.pricing}</a>
            <a href="#demo" className="navlink">{t.demo}</a>
            <a href="#contact" className="navlink">{t.contact}</a>
          </div>

          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            {/* LANGUAGE */}
            <div style={{ position:'relative' }}>
              <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
                <span>{LANGS.find(x => x.c === lang)?.f}</span>
                <span>{lang.toUpperCase()}</span>
                <span style={{ fontSize:10, opacity:.6 }}>▾</span>
              </button>
              {langOpen && (
                <div className="lang-menu">
                  {LANGS.map(x => (
                    <div key={x.c} className="lang-item" onClick={() => changeLang(x.c)}>
                      <span style={{ fontSize:16 }}>{x.f}</span>
                      <span>{x.l}</span>
                      {lang === x.c && <span style={{ marginLeft:'auto', color:C.accent }}>✓</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* THEME */}
            <button className="theme-btn" onClick={toggleTheme} title={D ? 'Açık tema' : 'Koyu tema'}>
              {D ? '☀️' : '🌙'}
            </button>

            <a href="/login" className="hide-mobile navlink" style={{ marginLeft:8 }}>{t.login}</a>
            <a href="/signup" className="btn-primary" style={{ padding:'10px 22px', fontSize:14 }}>{t.signup}</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding:'100px 28px 80px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at top, ${C.accentSoft}, transparent 60%)`, pointerEvents:'none' }} />
        <div style={{ position:'relative', maxWidth:900, margin:'0 auto' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 16px', borderRadius:100, border:`1px solid ${C.border}`, background:C.bgAlt, fontSize:12, fontWeight:600, letterSpacing:'0.06em', color:C.accent, marginBottom:28 }}>
            {t.badge}
          </div>
          <h1 className="serif hero-title" style={{ fontSize:72, fontWeight:900, lineHeight:1.02, marginBottom:24 }}>
            {t.h1a}<br/>{t.h1b} <span style={{ color:C.accent }}>{t.h1c}</span>.
          </h1>
          <p style={{ fontSize:18, color:C.fgMuted, maxWidth:640, margin:'0 auto 40px', lineHeight:1.65 }}>
            {t.hsub}
          </p>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, flexWrap:'wrap', marginBottom:32 }}>
            <a href="/signup" className="btn-primary">{t.cta1} →</a>
            <button className="btn-ghost">{t.cta2}</button>
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:28, fontSize:13, color:C.fgMuted }}>
            <span>✓ {t.t1}</span><span>✓ {t.t2}</span><span>✓ {t.t3}</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding:'100px 28px', background:C.bgAlt, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:1200, margin:'0 auto', textAlign:'center', marginBottom:64 }}>
          <h2 className="serif" style={{ fontSize:52, fontWeight:900, lineHeight:1.1, marginBottom:14 }}>{t.fT}</h2>
          <p style={{ color:C.fgMuted, fontSize:16 }}>{t.fS}</p>
        </div>
        <div className="grid-3" style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:20 }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-card">
              <div style={{ width:56, height:56, borderRadius:16, background:C.accentSoft, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, marginBottom:20 }}>
                {f.icon}
              </div>
              <h3 className="serif" style={{ fontSize:20, fontWeight:700, marginBottom:8 }}>{f[lang]}</h3>
              <p style={{ fontSize:14, color:C.fgMuted, lineHeight:1.6 }}>{f[`desc_${lang}`]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding:'100px 28px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', textAlign:'center', marginBottom:64 }}>
          <h2 className="serif" style={{ fontSize:52, fontWeight:900, lineHeight:1.1, marginBottom:14 }}>{t.pT}</h2>
          <p style={{ color:C.fgMuted, fontSize:16 }}>{t.pS}</p>
        </div>
        <div className="grid-4" style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:20 }}>
          {PLANS.map((p, i) => (
            <div key={i} className={`plan-card ${p.popular ? 'plan-pop' : ''}`}>
              {p.popular && (
                <div style={{ position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)', background:C.accent, color: D ? '#0A0A0A' : '#fff', fontSize:10, fontWeight:800, padding:'5px 14px', borderRadius:100, letterSpacing:'0.1em' }}>{t.pop}</div>
              )}
              <h3 className="serif" style={{ fontSize:20, fontWeight:700, marginBottom:14 }}>{lang === 'tr' ? p.name : p.nameEn}</h3>
              <div style={{ marginBottom:28 }}>
                <span className="serif" style={{ fontSize:44, fontWeight:900, letterSpacing:'-0.03em' }}>₺{p.price}</span>
                <span style={{ fontSize:14, color:C.fgMuted }}>{t.mo}</span>
              </div>
              <ul style={{ listStyle:'none', padding:0, margin:'0 0 28px', flex:1 }}>
                {p.feat.map((f, j) => (
                  <li key={j} style={{ display:'flex', alignItems:'center', gap:10, fontSize:14, color:C.fg, padding:'8px 0', borderBottom: j < p.feat.length-1 ? `1px solid ${C.border}` : 'none' }}>
                    <span style={{ color:C.accent, fontWeight:900 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="/signup" className={p.popular ? 'btn-primary' : 'btn-ghost'} style={{ justifyContent:'center', width:'100%' }}>
                {t.başla}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="demo" style={{ padding:'100px 28px' }}>
        <div style={{ maxWidth:1000, margin:'0 auto', background: D ? C.bgAlt : '#1A1A1A', borderRadius:32, padding:'80px 48px', textAlign:'center', position:'relative', overflow:'hidden', border:`1px solid ${C.border}` }}>
          <div style={{ position:'absolute', top:-120, right:-120, width:400, height:400, background:C.accentSoft, borderRadius:'50%', filter:'blur(100px)', pointerEvents:'none' }} />
          <div style={{ position:'relative' }}>
            <h2 className="serif" style={{ fontSize:52, fontWeight:900, lineHeight:1.1, marginBottom:18, color: D ? C.fg : '#F5F5F0' }}>{t.cT}</h2>
            <p style={{ fontSize:17, color: D ? C.fgMuted : '#9CA3AF', marginBottom:36, maxWidth:560, marginLeft:'auto', marginRight:'auto' }}>{t.cS}</p>
            <a href="/signup" className="btn-primary" style={{ padding:'16px 36px' }}>{t.cBtn} →</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ borderTop:`1px solid ${C.border}`, padding:'48px 28px', background:C.bgAlt }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:20 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:32, height:32, background:C.accent, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', color: D ? '#0A0A0A' : '#fff', fontWeight:900, fontFamily:'Fraunces, serif' }}>E</div>
            <span className="serif" style={{ fontSize:16, fontWeight:700 }}>Envanter<span style={{ color:C.accent }}>TR</span></span>
          </div>
          <div style={{ fontSize:13, color:C.fgMuted }}>© 2026 EnvanterTR · {t.fRights}</div>
          <div style={{ display:'flex', alignItems:'center', gap:24, fontSize:13, color:C.fgMuted }}>
            <a href="#" className="navlink">{t.fAbout}</a>
            <a href="#" className="navlink">{t.fContact}</a>
            <a href="#" className="navlink">{t.fKvkk}</a>
            <a href="#" className="navlink">{t.fPriv}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
