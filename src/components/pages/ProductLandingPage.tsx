// HPI 1.7-V
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Target, 
  XCircle, 
  Download, 
  ChevronDown,
  Sparkles
} from 'lucide-react';

// --- Utility Components ---

const SectionDivider = () => (
  <div className="w-full flex justify-center items-center py-12 opacity-30">
    <div className="h-px w-24 bg-bordersubtle" />
    <div className="mx-4 text-bordersubtle">✦</div>
    <div className="h-px w-24 bg-bordersubtle" />
  </div>
);

const NoiseOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay">
    <svg className="h-full w-full">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);

// --- Main Component ---

export default function ProductLandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const handlePurchase = () => {
    window.location.href = '/store';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-primary text-textbody font-paragraph selection:bg-secondary selection:text-white overflow-clip relative">
      <NoiseOverlay />

      {/* --- HERO SECTION: Split Layout (Inspiration Image Replication) --- */}
      <section className="relative w-full min-h-[95vh] grid lg:grid-cols-[1.4fr_1fr] border-b border-bordersubtle/30">
        
        {/* Left: Immersive Visual & Narrative */}
        <div className="relative h-full min-h-[60vh] lg:min-h-auto overflow-hidden group">
          <div className="absolute inset-0 transition-transform duration-[2s] ease-out group-hover:scale-105">
            <Image
              src="https://static.wixstatic.com/media/3fbe1a_0ee90091fadf49c2b3c81d8008457aac~mv2.png?originWidth=1152&originHeight=896"
              alt="Deep reflection and clarity in nature"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
          </div>

          <div className="relative h-full flex flex-col justify-end p-8 md:p-16 lg:p-20 z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-textlight/30 bg-primary/30 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs font-heading tracking-widest uppercase text-textlight">Self-Guided Protocol</span>
              </div>
              
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-primary-foreground mb-8 tracking-tight">
                Ясность <br />
                <span className="italic font-light opacity-80">за 60 минут</span>
              </h1>
              
              <p className="font-paragraph text-lg md:text-xl text-textbody/90 max-w-xl leading-relaxed mb-10 border-l-2 border-secondary pl-6">
                Честный протокол для самостоятельной работы. Снимите шум ума, увидьте свою маску и получите конкретные шаги.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={handlePurchase}
                  className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 h-14 px-8 rounded-none text-lg font-heading tracking-wide transition-all duration-300 hover:pr-10 group"
                >
                  Получить протокол
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                  className="bg-transparent border border-textlight/30 text-textlight hover:bg-textlight/10 h-14 px-8 rounded-none text-lg font-heading tracking-wide"
                >
                  Узнать больше
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Product Focus (The "Store" Element) */}
        <div className="relative h-full bg-[#263326] flex flex-col border-l border-bordersubtle/20">
          {/* Top Label */}
          <div className="absolute top-0 left-0 p-6 md:p-8 w-full flex justify-between items-start z-20">
            <div className="bg-secondary text-primary font-heading text-sm px-3 py-1 uppercase tracking-widest">
              Best Seller
            </div>
            <div className="text-textlight font-paragraph text-sm opacity-60">
              Digital PDF • Instant Access
            </div>
          </div>

          {/* Product Visualization */}
          <div className="flex-1 flex items-center justify-center p-12 relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 opacity-10">
               <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-textlight/20" />
               <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full border border-textlight/10" />
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full max-w-sm aspect-[3/4] bg-gradient-to-br from-[#3A4C3A] to-[#2F3E2F] border border-bordersubtle shadow-2xl flex flex-col items-center justify-between p-8 group hover:shadow-secondary/10 transition-shadow duration-500"
            >
              <div className="w-full flex justify-between items-center opacity-50">
                <FileText className="w-6 h-6 text-textlight" />
                <span className="text-xs font-mono text-textlight">PDF_PROTOCOL_V1.0</span>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full border border-secondary/30 flex items-center justify-center mb-4 group-hover:border-secondary/60 transition-colors">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-3xl text-primary-foreground">Протокол</h3>
                <p className="text-sm text-textlight/70 font-paragraph leading-relaxed">
                  12–18 страниц структурированной практики для глубокой рефлексии.
                </p>
              </div>

              <div className="w-full pt-6 border-t border-white/10">
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <p className="text-xs text-textlight/50 uppercase tracking-wider mb-1">Стоимость</p>
                    <p className="text-4xl font-heading text-primary-foreground">$19</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-textlight/50 uppercase tracking-wider mb-1">Время</p>
                    <p className="text-xl font-heading text-textlight">60 мин</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Action */}
          <div className="p-8 bg-[#222E22] border-t border-bordersubtle/20">
            <p className="text-sm text-textlight/60 mb-4 leading-relaxed">
              Мгновенный доступ после оплаты. Подходит для самостоятельной работы в любое время.
            </p>
            <button 
              onClick={handlePurchase}
              className="w-full group flex items-center justify-between text-primary-foreground border-b border-secondary/50 pb-2 hover:border-secondary transition-colors"
            >
              <span className="font-heading text-lg">Купить сейчас</span>
              <ArrowRight className="w-5 h-5 text-secondary transform group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* --- MARQUEE DIVIDER --- */}
      <div className="w-full bg-secondary py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex items-center gap-12 text-primary font-heading text-xl tracking-widest uppercase"
        >
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Ясность</span>
              <span className="w-2 h-2 rounded-full bg-primary/40" />
              <span>Действие</span>
              <span className="w-2 h-2 rounded-full bg-primary/40" />
              <span>Честность</span>
              <span className="w-2 h-2 rounded-full bg-primary/40" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* --- SECTION 2: The Concept (Sticky Layout) --- */}
      <section id="about" className="w-full max-w-[120rem] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Sticky Title */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32">
              <h2 className="font-heading text-5xl md:text-6xl text-primary-foreground mb-8 leading-tight">
                Что это <br />
                <span className="text-secondary">такое?</span>
              </h2>
              <p className="font-paragraph text-lg text-textlight/80 leading-relaxed mb-8">
                Инструмент для тех, кто устал от бесконечных размышлений и готов к честному диалогу с собой.
              </p>
              <div className="hidden lg:block w-12 h-12 rounded-full border border-bordersubtle flex items-center justify-center animate-bounce mt-12">
                <ChevronDown className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>

          {/* Scrolling Content Cards */}
          <div className="lg:col-span-8 space-y-12">
            {[
              {
                title: "Не курс, не марафон",
                desc: "Здесь нет кураторов, чатов и дедлайнов. Это интимный процесс вашего общения с собой через структуру.",
                icon: <XCircle className="w-8 h-8 text-secondary" />
              },
              {
                title: "Без эзотерики",
                desc: "Никаких вибраций, потоков и магического мышления. Только психология, логика и честные вопросы.",
                icon: <Target className="w-8 h-8 text-secondary" />
              },
              {
                title: "Без лечения",
                desc: "Это не терапия. Это инструмент самодиагностики и планирования действий для здоровых людей в тупике.",
                icon: <CheckCircle2 className="w-8 h-8 text-secondary" />
              }
            ].map((item, idx) => (
              <CardReveal key={idx}>
                <div className="bg-white/5 border border-white/10 p-8 md:p-12 hover:bg-white/10 transition-colors duration-500 group">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-heading text-3xl text-primary-foreground group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    {item.icon}
                  </div>
                  <p className="font-paragraph text-lg text-textbody/80 leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </CardReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: The Problem (Parallax Background) --- */}
      <section className="relative w-full py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage src="https://static.wixstatic.com/media/3fbe1a_ce0f2ae1b4714cf483160ff39a6655ce~mv2.png?originWidth=1600&originHeight=896" />
          <div className="absolute inset-0 bg-primary/90 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-8 leading-tight">
                Для тех, кто <br />
                <span className="text-secondary italic">застрял</span>
              </h2>
              <div className="space-y-6">
                <p className="font-paragraph text-xl text-textbody leading-relaxed">
                  Вы умны, осознанны и рефлексируете. Но именно это иногда становится ловушкой.
                </p>
                <p className="font-paragraph text-lg text-textlight/80 leading-relaxed">
                  Шум ума заглушает истинные желания. Вы ходите по кругу одних и тех же мыслей, но не делаете шаг. Этот протокол — скальпель, который отсекает лишнее.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {['Туман в голове', 'Страх ошибки', 'Бесконечный анализ', 'Отсутствие энергии'].map((tag, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 border-b border-bordersubtle/30"
                >
                  <span className="text-secondary font-mono">0{i + 1}</span>
                  <span className="text-xl font-heading text-primary-foreground">{tag}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: Inside the Protocol (Horizontal Flow) --- */}
      <section className="w-full bg-[#263326] py-24 md:py-32 border-y border-bordersubtle/20">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-4">
                Архитектура <span className="text-secondary">решения</span>
              </h2>
              <p className="text-textlight/60 max-w-md">
                Пошаговый путь от хаоса к конкретному действию за 60 минут.
              </p>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" className="rounded-full px-8 border-secondary text-secondary hover:bg-secondary hover:text-primary">
                Структура PDF
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Диагностика", desc: "Честный срез текущего состояния. Точка А без прикрас." },
              { step: "02", title: "Маска и Выгода", desc: "Почему вам выгодно не действовать? Разбор скрытых мотивов." },
              { step: "03", title: "Чистый лист", desc: "Упражнение на обнуление ожиданий и страхов." },
              { step: "04", title: "План 72 часа", desc: "Три микро-действия, которые невозможно не сделать." }
            ].map((item, i) => (
              <div key={i} className="group relative h-full min-h-[300px] bg-primary border border-bordersubtle/30 p-8 flex flex-col justify-between hover:border-secondary/50 transition-colors duration-300">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-secondary -rotate-45" />
                </div>
                <div>
                  <span className="block text-6xl font-heading text-bordersubtle/40 mb-6 group-hover:text-secondary/20 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-heading text-primary-foreground mb-4">
                    {item.title}
                  </h3>
                </div>
                <p className="text-textlight/70 font-paragraph leading-relaxed border-t border-bordersubtle/30 pt-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: Results (Large Typography) --- */}
      <section className="w-full py-32 max-w-[100rem] mx-auto px-6 md:px-12">
        <SectionDivider />
        <div className="text-center mb-20">
          <h2 className="font-heading text-sm tracking-[0.2em] text-secondary uppercase mb-4">Результат работы</h2>
          <p className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground max-w-5xl mx-auto leading-[1.1]">
            Ясная формулировка, понимание желаний и <span className="text-secondary underline decoration-1 underline-offset-8">конкретный шаг</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "Ясность", text: "Вы сформулируете, что именно вас беспокоит." },
            { label: "Правда", text: "Увидите свои истинные желания за масками." },
            { label: "Действие", text: "Получите 3 шага на ближайшие 72 часа." }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 border-x border-transparent md:border-bordersubtle/20 first:border-l-0 last:border-r-0">
              <div className="w-3 h-3 bg-secondary rounded-full mx-auto mb-6" />
              <h3 className="font-heading text-2xl text-primary-foreground mb-4">{item.label}</h3>
              <p className="text-textlight/70 font-paragraph">{item.text}</p>
            </div>
          ))}
        </div>
        <SectionDivider />
      </section>

      {/* --- SECTION 6: CTA & Access (Visual Anchor) --- */}
      <section className="w-full pb-32 px-6 md:px-12">
        <div className="max-w-[120rem] mx-auto bg-[#263326] relative overflow-hidden rounded-sm border border-bordersubtle/30">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
          
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left: Text */}
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <h2 className="font-heading text-5xl md:text-6xl text-primary-foreground mb-8">
                Готовы к <br />
                <span className="text-secondary">ясности?</span>
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary border border-bordersubtle flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-secondary">1</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-primary-foreground mb-1">Оплата</h4>
                    <p className="text-textlight/60">Единоразовый платеж $19. Безопасная сделка.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary border border-bordersubtle flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-secondary">2</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-primary-foreground mb-1">Кодовое слово</h4>
                    <p className="text-textlight/60">
                      Напишите <span className="text-secondary font-bold">ЯСНОСТЬ</span> для получения доступа.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary border border-bordersubtle flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-secondary">3</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-primary-foreground mb-1">Скачивание</h4>
                    <p className="text-textlight/60">Мгновенная ссылка на PDF-протокол.</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handlePurchase}
                className="w-full md:w-auto bg-secondary text-primary hover:bg-secondary/90 h-16 px-12 text-xl font-heading tracking-wide"
              >
                Купить протокол — $19
              </Button>
            </div>

            {/* Right: Visual */}
            <div className="relative hidden lg:block h-full min-h-full border-l border-bordersubtle/20">
              <Image
                src="https://static.wixstatic.com/media/3fbe1a_b55629d53c3f467c96ba0161790b17eb~mv2.png?originWidth=768&originHeight=576"
                alt="Atmospheric nature"
                className="w-full h-full object-cover grayscale opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border border-secondary/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <Download className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <span className="font-heading text-2xl text-primary-foreground">PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// --- Helper Components for Animation ---

function CardReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ParallaxImage({ src }: { src: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="w-full h-full overflow-hidden">
      <motion.div style={{ y }} className="w-full h-[140%] relative -top-[20%]">
        <Image
          src={src}
          alt="Background texture"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
      </motion.div>
    </div>
  );
}
