<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Карта Свободы — Вернись к себе</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Mulish:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --dark: #0f0e0c;
    --deep: #1a1814;
    --warm: #2a261f;
    --gold: #c9a84c;
    --gold-light: #e8c97a;
    --cream: #f5f0e8;
    --text: #e8e0d0;
    --muted: #9a9080;
    --red: #c0392b;
    --green: #27ae60;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--dark);
    color: var(--text);
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    overflow-x: hidden;
  }

  /* ── NOISE TEXTURE ── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.4;
  }

  /* ── TYPOGRAPHY ── */
  h1, h2, h3 { font-family: 'Playfair Display', serif; line-height: 1.2; }

  .gold { color: var(--gold); }
  .italic { font-style: italic; }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 24px 80px;
    position: relative;
    background: radial-gradient(ellipse 80% 60% at 50% 0%, #2a2218 0%, var(--dark) 70%);
  }

  .hero::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 120px;
    background: linear-gradient(to bottom, transparent, var(--dark));
  }

  .hero-eyebrow {
    font-family: 'Mulish', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 28px;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.2s;
  }

  .hero h1 {
    font-size: clamp(48px, 8vw, 96px);
    font-weight: 900;
    text-align: center;
    max-width: 800px;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.4s;
    letter-spacing: -0.02em;
  }

  .hero-sub {
    font-size: clamp(17px, 2.5vw, 22px);
    color: var(--muted);
    text-align: center;
    max-width: 560px;
    margin-top: 24px;
    font-weight: 300;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.6s;
  }

  /* ── VSL BOX ── */
  .vsl-section {
    padding: 20px 24px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .vsl-box {
    width: 100%;
    max-width: 780px;
    background: var(--deep);
    border: 1px solid #3a3428;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.1);
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.8s;
  }

  .vsl-placeholder {
    aspect-ratio: 16/9;
    background: linear-gradient(135deg, #1a1812 0%, #252018 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .vsl-placeholder::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%);
  }

  .play-btn {
    width: 80px; height: 80px;
    border-radius: 50%;
    border: 2px solid var(--gold);
    display: flex; align-items: center; justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }

  .play-btn::after {
    content: '';
    width: 0; height: 0;
    border-top: 14px solid transparent;
    border-bottom: 14px solid transparent;
    border-left: 22px solid var(--gold);
    margin-left: 5px;
  }

  .vsl-placeholder:hover .play-btn {
    background: rgba(201,168,76,0.15);
    transform: scale(1.08);
    box-shadow: 0 0 40px rgba(201,168,76,0.3);
  }

  .vsl-label {
    font-size: 13px;
    color: var(--muted);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    position: relative; z-index: 1;
  }

  .vsl-duration {
    position: absolute;
    bottom: 16px; right: 16px;
    font-size: 12px;
    color: var(--muted);
    background: rgba(0,0,0,0.5);
    padding: 4px 10px;
    border-radius: 3px;
  }

  /* ── PAIN SECTION ── */
  .pain-section {
    padding: 100px 24px;
    max-width: 740px;
    margin: 0 auto;
  }

  .pain-section h2 {
    font-size: clamp(32px, 5vw, 52px);
    margin-bottom: 48px;
    text-align: center;
  }

  .pain-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .pain-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 24px 0;
    border-bottom: 1px solid #2a2620;
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.5s ease;
  }

  .pain-item.visible { opacity: 1; transform: translateX(0); }

  .pain-check {
    width: 22px; height: 22px;
    border-radius: 50%;
    border: 1px solid var(--red);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    margin-top: 3px;
    font-size: 12px;
    color: var(--red);
  }

  .pain-text { font-size: 17px; color: var(--text); font-weight: 300; }

  /* ── DIVIDER ── */
  .gold-divider {
    width: 60px; height: 2px;
    background: var(--gold);
    margin: 0 auto 80px;
    opacity: 0.6;
  }

  /* ── ABOUT PDF ── */
  .about-section {
    padding: 80px 24px 100px;
    max-width: 900px;
    margin: 0 auto;
  }

  .section-label {
    font-size: 11px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 700;
    margin-bottom: 20px;
  }

  .about-section h2 {
    font-size: clamp(30px, 4vw, 46px);
    margin-bottom: 20px;
  }

  .about-intro {
    font-size: 18px;
    color: var(--muted);
    font-weight: 300;
    max-width: 600px;
    margin-bottom: 60px;
    line-height: 1.8;
  }

  .parts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2px;
    background: #2a2620;
    border: 1px solid #2a2620;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 40px;
  }

  .part-card {
    background: var(--deep);
    padding: 32px 28px;
    transition: background 0.3s ease;
  }

  .part-card:hover { background: var(--warm); }

  .part-num {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 700;
    margin-bottom: 12px;
  }

  .part-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    margin-bottom: 12px;
    font-weight: 700;
  }

  .part-desc {
    font-size: 14px;
    color: var(--muted);
    font-weight: 300;
    line-height: 1.6;
  }

  .part-items {
    list-style: none;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .part-items li {
    font-size: 13px;
    color: var(--muted);
    padding-left: 16px;
    position: relative;
  }

  .part-items li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--gold);
    font-size: 12px;
  }

  /* ── HONEST BLOCK ── */
  .honest-block {
    background: var(--warm);
    border-left: 3px solid var(--gold);
    padding: 32px 36px;
    border-radius: 0 4px 4px 0;
    margin-bottom: 60px;
  }

  .honest-block p {
    font-size: 16px;
    color: var(--text);
    font-weight: 300;
    line-height: 1.8;
  }

  .honest-block strong { color: var(--gold); font-weight: 600; }

  /* ── PATHS ── */
  .paths-section {
    padding: 80px 24px 100px;
    background: var(--deep);
    position: relative;
  }

  .paths-inner {
    max-width: 900px;
    margin: 0 auto;
  }

  .paths-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2px;
    background: #1e1c16;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 50px;
  }

  .path-card {
    background: var(--deep);
    padding: 36px 28px;
    position: relative;
  }

  .path-card.featured {
    background: linear-gradient(135deg, #1e1c15 0%, #252012 100%);
    border: 1px solid rgba(201,168,76,0.3);
  }

  .path-badge {
    position: absolute;
    top: -1px; right: 24px;
    background: var(--gold);
    color: var(--dark);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 0 0 4px 4px;
  }

  .path-icon {
    font-size: 28px;
    margin-bottom: 20px;
    display: block;
  }

  .path-name {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    margin-bottom: 8px;
  }

  .path-price {
    font-size: 13px;
    color: var(--gold);
    font-weight: 600;
    letter-spacing: 0.05em;
    margin-bottom: 20px;
  }

  .path-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .path-list li {
    font-size: 13px;
    color: var(--muted);
    padding-left: 20px;
    position: relative;
  }

  .path-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--green);
    font-size: 12px;
  }

  .path-list li.no::before { content: '✗'; color: var(--red); }

  /* ── BONUSES ── */
  .bonuses-section {
    padding: 100px 24px;
    max-width: 840px;
    margin: 0 auto;
  }

  .bonus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin-top: 48px;
  }

  .bonus-card {
    background: var(--deep);
    border: 1px solid #2a2620;
    border-radius: 4px;
    padding: 28px 24px;
    transition: border-color 0.3s ease;
  }

  .bonus-card:hover { border-color: rgba(201,168,76,0.3); }

  .bonus-icon { font-size: 32px; margin-bottom: 16px; display: block; }
  .bonus-title { font-size: 16px; font-weight: 600; margin-bottom: 8px; }
  .bonus-desc { font-size: 13px; color: var(--muted); font-weight: 300; line-height: 1.6; }
  .bonus-value { font-size: 12px; color: var(--gold); font-weight: 700; margin-top: 12px; }

  /* ── AUTHOR ── */
  .author-section {
    padding: 100px 24px;
    background: var(--deep);
  }

  .author-inner {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 60px;
    align-items: start;
  }

  .author-photo {
    width: 200px; height: 200px;
    border-radius: 4px;
    background: var(--warm);
    border: 1px solid #3a3428;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: relative;
    overflow: hidden;
  }

  .author-photo::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 100%);
  }

  .author-name {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    margin-bottom: 6px;
  }

  .author-title {
    font-size: 13px;
    color: var(--gold);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .author-bio {
    font-size: 16px;
    color: var(--muted);
    font-weight: 300;
    line-height: 1.9;
  }

  .author-stats {
    display: flex;
    gap: 40px;
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid #2a2620;
  }

  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    color: var(--gold);
    font-weight: 700;
    line-height: 1;
  }

  .stat-label {
    font-size: 12px;
    color: var(--muted);
    font-weight: 300;
    margin-top: 4px;
  }

  /* ── REVIEWS ── */
  .reviews-section {
    padding: 100px 24px;
    max-width: 900px;
    margin: 0 auto;
  }

  .reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-top: 50px;
  }

  .review-card {
    background: var(--deep);
    border: 1px solid #2a2620;
    border-radius: 4px;
    padding: 28px 24px;
    position: relative;
  }

  .review-quote {
    font-size: 60px;
    line-height: 1;
    color: var(--gold);
    opacity: 0.3;
    font-family: 'Playfair Display', serif;
    position: absolute;
    top: 16px; left: 20px;
  }

  .review-text {
    font-size: 15px;
    color: var(--text);
    font-weight: 300;
    line-height: 1.8;
    margin-top: 24px;
    font-style: italic;
  }

  .review-author {
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid #2a2620;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .review-avatar {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: var(--warm);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }

  .review-name { font-size: 14px; font-weight: 600; }
  .review-meta { font-size: 12px; color: var(--muted); }

  .stars { color: var(--gold); font-size: 13px; margin-bottom: 6px; }

  /* ── PRICE CTA ── */
  .cta-section {
    padding: 100px 24px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: radial-gradient(ellipse 70% 50% at 50% 50%, #1e1c12 0%, var(--dark) 70%);
  }

  .cta-section h2 {
    font-size: clamp(32px, 5vw, 56px);
    max-width: 640px;
    margin-bottom: 20px;
  }

  .cta-sub {
    font-size: 18px;
    color: var(--muted);
    font-weight: 300;
    max-width: 480px;
    margin-bottom: 48px;
    line-height: 1.8;
  }

  .price-box {
    background: var(--deep);
    border: 1px solid rgba(201,168,76,0.3);
    border-radius: 4px;
    padding: 44px 60px;
    margin-bottom: 32px;
    min-width: 360px;
    position: relative;
    overflow: hidden;
  }

  .price-box::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
  }

  .price-old {
    font-size: 16px;
    color: var(--muted);
    text-decoration: line-through;
    margin-bottom: 4px;
  }

  .price-main {
    font-family: 'Playfair Display', serif;
    font-size: 72px;
    color: var(--gold);
    font-weight: 900;
    line-height: 1;
    margin-bottom: 4px;
  }

  .price-note {
    font-size: 13px;
    color: var(--muted);
    margin-bottom: 32px;
  }

  .cta-btn {
    display: block;
    width: 100%;
    padding: 18px 32px;
    background: var(--gold);
    color: var(--dark);
    font-family: 'Mulish', sans-serif;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    margin-bottom: 16px;
  }

  .cta-btn:hover {
    background: var(--gold-light);
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(201,168,76,0.4);
  }

  .cta-guarantee {
    font-size: 12px;
    color: var(--muted);
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: center;
  }

  .cta-guarantee::before { content: '🔒'; font-size: 12px; }

  .price-includes {
    list-style: none;
    margin: 24px 0 32px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
  }

  .price-includes li {
    font-size: 14px;
    color: var(--text);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .price-includes li::before { content: '✓'; color: var(--green); }

  /* ── FAQ ── */
  .faq-section {
    padding: 80px 24px 100px;
    max-width: 680px;
    margin: 0 auto;
  }

  .faq-item {
    border-bottom: 1px solid #2a2620;
  }

  .faq-q {
    padding: 24px 0;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    transition: color 0.2s ease;
  }

  .faq-q:hover { color: var(--gold); }

  .faq-arrow {
    font-size: 18px;
    color: var(--gold);
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  .faq-a {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
    font-size: 15px;
    color: var(--muted);
    font-weight: 300;
    line-height: 1.8;
  }

  .faq-a.open { max-height: 300px; padding-bottom: 24px; }
  .faq-item.active .faq-arrow { transform: rotate(45deg); }

  /* ── FOOTER ── */
  footer {
    padding: 40px 24px;
    border-top: 1px solid #2a2620;
    text-align: center;
  }

  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    color: var(--gold);
    margin-bottom: 12px;
  }

  .footer-copy {
    font-size: 13px;
    color: var(--muted);
    font-weight: 300;
  }

  /* ── STICKY CTA ── */
  .sticky-cta {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background: var(--deep);
    border-top: 1px solid rgba(201,168,76,0.2);
    padding: 14px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transform: translateY(100%);
    transition: transform 0.4s ease;
    z-index: 100;
  }

  .sticky-cta.visible { transform: translateY(0); }

  .sticky-text { font-size: 14px; color: var(--muted); font-weight: 300; }
  .sticky-price { font-size: 20px; font-family: 'Playfair Display', serif; color: var(--gold); font-weight: 700; }

  .sticky-btn {
    padding: 12px 28px;
    background: var(--gold);
    color: var(--dark);
    font-family: 'Mulish', sans-serif;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    white-space: nowrap;
  }

  .sticky-btn:hover { background: var(--gold-light); }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 640px) {
    .author-inner { grid-template-columns: 1fr; }
    .author-photo { width: 120px; height: 120px; font-size: 40px; }
    .author-stats { gap: 24px; }
    .price-box { min-width: unset; padding: 32px 24px; }
    .price-main { font-size: 56px; }
    .sticky-cta { gap: 12px; }
    .sticky-text { display: none; }
  }
</style>
</head>
<body>

<!-- ── HERO ── -->
<section class="hero">
  <p class="hero-eyebrow">Практическое руководство</p>
  <h1>Карта <em class="italic gold">Свободы</em></h1>
  <p class="hero-sub">Полное руководство по возвращению к себе — для тех, кто устал жить в маске</p>
</section>

<!-- ── VSL ── -->
<section class="vsl-section">
  <div class="vsl-box">
    <div class="vsl-placeholder" onclick="this.innerHTML='<iframe width=100% height=100% src=YOUR_VIDEO_URL style=border:none allow=autoplay></iframe>'">
      <div class="play-btn"></div>
      <span class="vsl-label">Смотреть историю</span>
      <span class="vsl-duration">≈ 8 мин</span>
    </div>
  </div>
</section>

<!-- ── PAIN ── -->
<section class="pain-section">
  <h2>Узнаёте <span class="italic gold">себя?</span></h2>
  <ul class="pain-list">
    <li class="pain-item"><span class="pain-check">✗</span><span class="pain-text">Вы говорите «да», когда внутри кричит «нет»</span></li>
    <li class="pain-item"><span class="pain-check">✗</span><span class="pain-text">Вы чувствуете хроническую усталость — без медицинских причин</span></li>
    <li class="pain-item"><span class="pain-check">✗</span><span class="pain-text">Вы не помните, когда последний раз делали что-то только для себя</span></li>
    <li class="pain-item"><span class="pain-check">✗</span><span class="pain-text">Снаружи «всё хорошо» — но внутри пусто</span></li>
    <li class="pain-item"><span class="pain-check">✗</span><span class="pain-text">Вы боитесь показать настоящего себя — вдруг не примут</span></li>
    <li class="pain-item"><span class="pain-check">✗</span><span class="pain-text">Вы живёте «на автомате» — не по своему выбору, а по инерции</span></li>
  </ul>
</section>

<div class="gold-divider"></div>

<!-- ── ABOUT PDF ── -->
<section class="about-section">
  <p class="section-label">Что внутри</p>
  <h2>36 страниц, которые покажут <span class="italic gold">где вы потеряли себя</span></h2>
  <p class="about-intro">Это не теория и не очередная книга по саморазвитию. Это практическая карта с конкретными инструментами — для тех, кто готов идти.</p>

  <div class="parts-grid">
    <div class="part-card">
      <p class="part-num">Часть 1</p>
      <h3 class="part-title">Диагностика</h3>
      <p class="part-desc">Найдите свою точку отсчёта</p>
      <ul class="part-items">
        <li>Тест «Где вы потеряли себя?» (15 вопросов)</li>
        <li>4 типа масок: найдите свою</li>
        <li>Карта симптомов по 5 сферам жизни</li>
        <li>Калькулятор потерь — реальная цена жизни в маске</li>
      </ul>
    </div>
    <div class="part-card">
      <p class="part-num">Часть 2</p>
      <h3 class="part-title">Метод «3 ключа»</h3>
      <p class="part-desc">Конкретные практики, которые работают</p>
      <ul class="part-items">
        <li>Пауза осознанности — техника «90 секунд»</li>
        <li>Граница «НЕТ» — 5 скриптов для разных ситуаций</li>
        <li>Дневник «Я vs Маска» — видеть паттерны каждый день</li>
      </ul>
    </div>
    <div class="part-card">
      <p class="part-num">Часть 3</p>
      <h3 class="part-title">Истории трансформации</h3>
      <p class="part-desc">3 реальных пути — 3 реальных результата</p>
      <ul class="part-items">
        <li>Анна: маска Спасателя → свобода от вины</li>
        <li>Денис: маска Героя → доверие и делегирование</li>
        <li>Елена: маска Невидимки → творческая видимость</li>
      </ul>
    </div>
    <div class="part-card">
      <p class="part-num">Часть 4–5</p>
      <h3 class="part-title">Roadmap и выбор пути</h3>
      <p class="part-desc">Пошаговый план на 30 дней</p>
      <ul class="part-items">
        <li>Чёткий план: что делать каждую неделю</li>
        <li>Где обычно бросают — и как не бросить</li>
        <li>Три двери: самостоятельно / сессия / сопровождение</li>
      </ul>
    </div>
  </div>

  <div class="honest-block">
    <p>⚠️ <strong>Честно:</strong> Этот PDF не решит всё. Он покажет <strong>карту</strong> — где вы сейчас и куда можно прийти. Но идти придётся вам. И после каждого ключа есть честный разбор — почему <strong>70% застревают</strong> при самостоятельной работе, и что с этим делать.</p>
  </div>
</section>

<!-- ── THREE PATHS ── -->
<section class="paths-section">
  <div class="paths-inner">
    <p class="section-label">Три пути</p>
    <h2>Выберите свой уровень <span class="italic gold">глубины</span></h2>
    <div class="paths-grid">
      <div class="path-card">
        <span class="path-icon">📄</span>
        <h3 class="path-name">Самостоятельная работа</h3>
        <p class="path-price">2,700 ₽ ($27)</p>
        <ul class="path-list">
          <li>PDF-руководство (36 стр)</li>
          <li>Тест, инструменты, roadmap</li>
          <li class="no">Нет поддержки</li>
          <li class="no">70% бросают</li>
        </ul>
      </div>
      <div class="path-card featured">
        <span class="path-badge">Популярно</span>
        <span class="path-icon">🎯</span>
        <h3 class="path-name">Пробная сессия</h3>
        <p class="path-price">8,000 ₽ ($85)</p>
        <ul class="path-list">
          <li>PDF + 90 мин персональной работы</li>
          <li>Диагностика именно вашей маски</li>
          <li>Персональный план на 30 дней</li>
          <li>Чат-поддержка 30 дней</li>
          <li>Засчитывается в сопровождение</li>
        </ul>
      </div>
      <div class="path-card">
        <span class="path-icon">💎</span>
        <h3 class="path-name">Личное сопровождение</h3>
        <p class="path-price">от 240,000 ₽</p>
        <ul class="path-list">
          <li>6–12 месяцев работы 1-на-1</li>
          <li>Работа с корнями травм</li>
          <li>Трансформация всех сфер жизни</li>
          <li>90% держат результат</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ── BONUSES ── -->
<section class="bonuses-section">
  <p class="section-label">Бонусы</p>
  <h2>При заказе в течение <span class="italic gold">7 дней</span></h2>
  <div class="bonus-grid">
    <div class="bonus-card">
      <span class="bonus-icon">📋</span>
      <h4 class="bonus-title">Гайд «5 телесных практик»</h4>
      <p class="bonus-desc">Практики для снятия маски через тело. PDF, 15 страниц</p>
      <p class="bonus-value">Бесплатно при покупке</p>
    </div>
    <div class="bonus-card">
      <span class="bonus-icon">🎧</span>
      <h4 class="bonus-title">Медитация «Возвращение к себе»</h4>
      <p class="bonus-desc">Аудио-медитация для встречи с настоящим собой. 20 минут</p>
      <p class="bonus-value">Бесплатно при покупке</p>
    </div>
    <div class="bonus-card">
      <span class="bonus-icon">✅</span>
      <h4 class="bonus-title">Чек-лист «10 признаков»</h4>
      <p class="bonus-desc">Быстрая проверка: живёте вы собой или в маске прямо сейчас</p>
      <p class="bonus-value">Бесплатно при покупке</p>
    </div>
  </div>
</section>

<!-- ── AUTHOR ── -->
<section class="author-section">
  <div class="author-inner">
    <div class="author-photo">👤</div>
    <div>
      <p class="section-label">Автор</p>
      <h2 class="author-name">[Ваше имя]</h2>
      <p class="author-title">[Психолог / Коуч / Специалист]</p>
      <p class="author-bio">Я прошёл этот путь сам. Развод, увольнение, потеря себя — и долгий путь обратно. Сегодня я помогаю людям не ждать «дна», а начинать возвращение к себе осознанно — раньше, чем станет невыносимо.</p>
      <div class="author-stats">
        <div><p class="stat-num">500+</p><p class="stat-label">клиентов</p></div>
        <div><p class="stat-num">10+</p><p class="stat-label">лет опыта</p></div>
        <div><p class="stat-num">90%</p><p class="stat-label">держат результат</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ── REVIEWS ── -->
<section class="reviews-section">
  <p class="section-label">Отзывы</p>
  <h2>Что говорят те, кто <span class="italic gold">уже прошёл</span></h2>
  <div class="reviews-grid">
    <div class="review-card">
      <span class="review-quote">"</span>
      <p class="stars">★★★★★</p>
      <p class="review-text">Я прочитала PDF за один вечер и не могла остановиться. Калькулятор потерь просто убил — я потеряла 20 часов в неделю на «не своё». Это же целый рабочий год!</p>
      <div class="review-author">
        <div class="review-avatar">А</div>
        <div><p class="review-name">Анна, 37 лет</p><p class="review-meta">Маска «Спасатель»</p></div>
      </div>
    </div>
    <div class="review-card">
      <span class="review-quote">"</span>
      <p class="stars">★★★★★</p>
      <p class="review-text">Техника «90 секунд» изменила мои отношения с женой. Я просто стал останавливаться перед тем как срываться. Звучит банально — но работает.</p>
      <div class="review-author">
        <div class="review-avatar">Д</div>
        <div><p class="review-name">Денис, 44 года</p><p class="review-meta">Маска «Герой»</p></div>
      </div>
    </div>
    <div class="review-card">
      <span class="review-quote">"</span>
      <p class="stars">★★★★★</p>
      <p class="review-text">Впервые в жизни я назвала своё состояние правильно — маска Невидимки. И сразу стало понятно, почему я боюсь показывать свои работы. Это был переломный момент.</p>
      <div class="review-author">
        <div class="review-avatar">Е</div>
        <div><p class="review-name">Елена, 29 лет</p><p class="review-meta">Маска «Невидимка»</p></div>
      </div>
    </div>
  </div>
</section>

<!-- ── CTA ── -->
<section class="cta-section" id="buy">
  <h2>Начните возвращаться <span class="italic gold">к себе</span></h2>
  <p class="cta-sub">Вы уже знаете, что что-то нужно менять. Вопрос только в том — начнёте сегодня или будете ждать дна.</p>
  <div class="price-box">
    <p class="price-old">4,500 ₽</p>
    <p class="price-main">2,700<span style="font-size:32px">₽</span></p>
    <p class="price-note">≈ $27 · Мгновенный доступ · PDF + 3 бонуса</p>
    <ul class="price-includes">
      <li>«Карта Свободы» — полное руководство (36 стр)</li>
      <li>Гайд «5 телесных практик»</li>
      <li>Медитация «Возвращение к себе» (20 мин)</li>
      <li>Чек-лист «10 признаков жизни в маске»</li>
    </ul>
    <a href="#" class="cta-btn">Получить карту свободы →</a>
    <p class="cta-guarantee">Гарантия возврата 14 дней — без вопросов</p>
  </div>
  <p style="font-size:13px; color:var(--muted); max-width:420px; line-height:1.7">Промокод SVOBODA при бронировании сессии или заявке на сопровождение в течение 7 дней после покупки</p>
</section>

<!-- ── FAQ ── -->
<section class="faq-section">
  <p class="section-label">Вопросы</p>
  <h2>Часто <span class="italic gold">спрашивают</span></h2>
  <div style="margin-top:40px">
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFaq(this)">Это психотерапия?<span class="faq-arrow">+</span></div>
      <div class="faq-a">Нет. Это практическое руководство для самостоятельной работы. Психотерапия и глубинная работа — в разделе «Личное сопровождение».</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFaq(this)">За какое время увижу результаты?<span class="faq-arrow">+</span></div>
      <div class="faq-a">Первые инсайты — в процессе заполнения (1-2 часа). Изменения в поведении — через 2-4 недели честной практики. Устойчивые изменения — через 30 дней по roadmap.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFaq(this)">Подойдёт ли мне, если ситуация тяжёлая?<span class="faq-arrow">+</span></div>
      <div class="faq-a">PDF работает с паттернами и масками. Если у вас клиническая депрессия, ПТСР или суицидальные мысли — пожалуйста, обратитесь к специалисту напрямую.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFaq(this)">Как получить PDF после оплаты?<span class="faq-arrow">+</span></div>
      <div class="faq-a">Мгновенно — ссылка придёт на email сразу после оплаты. Также PDF будет в личном кабинете (если используется платформа с кабинетом).</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFaq(this)">Что если PDF мне не подойдёт?<span class="faq-arrow">+</span></div>
      <div class="faq-a">14 дней гарантия возврата. Напишите — верну деньги без вопросов.</div>
    </div>
  </div>
</section>

<!-- ── FOOTER ── -->
<footer>
  <p class="footer-logo">Карта Свободы</p>
  <p class="footer-copy">© [Ваше имя], 2026 · Все права защищены · <a href="#" style="color:var(--muted)">Политика конфиденциальности</a></p>
</footer>

<!-- ── STICKY CTA ── -->
<div class="sticky-cta" id="stickyCta">
  <span class="sticky-text">«Карта Свободы» + 3 бонуса</span>
  <span class="sticky-price">2,700 ₽</span>
  <a href="#buy" class="sticky-btn">Получить →</a>
</div>

<script>
  // Scroll animations for pain items
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.pain-item').forEach(el => observer.observe(el));

  // Sticky CTA
  const stickyCta = document.getElementById('stickyCta');
  window.addEventListener('scroll', () => {
    stickyCta.classList.toggle('visible', window.scrollY > 600);
  });

  // FAQ toggle
  function toggleFaq(el) {
    const item = el.parentElement;
    const answer = el.nextElementSibling;
    const isOpen = answer.classList.contains('open');
    document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isOpen) {
      answer.classList.add('open');
      item.classList.add('active');
    }
  }
</script>
</body>
</html>
