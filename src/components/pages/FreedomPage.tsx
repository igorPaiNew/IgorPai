import { motion } from 'framer-motion';
import { Star, Check, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FreedomPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  // CHANGE: sticky bar — show after scrolling past hero
  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 700);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const faqItems = [
    {
      question: 'Это психотерапия?',
      answer: 'Нет, это практическое руководство с конкретными инструментами и техниками для самостоятельной работы.',
    },
    {
      question: 'За какое время увижу результаты?',
      answer: 'Первые результаты видны уже в первую неделю. Полный roadmap рассчитан на 30 дней.',
    },
    {
      question: 'Подойдёт ли при тяжёлой ситуации?',
      answer: 'Карта — отличный старт. При тяжёлых ситуациях рекомендуем дополнительно работать с психологом.',
    },
    {
      question: 'Чем отличается от курсов и марафонов?',
      answer: 'Это не марафон. Это компактное руководство без воды, с честным разбором и реальными историями.',
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Да, гарантия возврата 14 дней без вопросов, если карта вам не подойдёт.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── STICKY CTA BAR — NEW: appears after scrolling past hero ── */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: showSticky ? 0 : -100, opacity: showSticky ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-bordersubtle px-4 py-3 flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <p className="font-heading font-bold text-foreground hidden sm:block">Карта Свободы</p>
          <div className="flex items-center gap-2">
            <p className="text-textlight line-through text-sm">4,500 ₽</p>
            <p className="font-heading font-bold text-secondary text-lg">2,700 ₽</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-secondary text-primary font-heading font-bold py-2 px-5 rounded-lg text-sm hover:bg-secondary/90 transition-colors flex-shrink-0"
        >
          ПОЛУЧИТЬ →
        </motion.button>
      </motion.div>

      {/* ── HERO ── */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6 inline-block bg-secondary/10 px-4 py-2 rounded-full border border-secondary/30">
            <p className="text-secondary text-sm font-heading font-semibold">🎁 Бонусы включены при заказе сегодня</p>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ты устал жить
            <br />
            <span className="text-secondary">не своей жизнью.</span>
          </h1>

          <p className="font-paragraph text-lg md:text-xl text-textlight max-w-2xl mx-auto mb-8">
            «Карта Свободы» — практическое руководство, которое покажет где именно ты потерял себя и даст конкретный план возвращения.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <p className="text-textlight line-through text-lg">4,500 ₽</p>
              <p className="text-3xl font-heading font-bold text-secondary">2,700 ₽</p>
              <p className="text-sm text-textlight">≈ $27</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-primary font-heading font-bold py-4 px-8 rounded-lg text-lg hover:bg-secondary/90 transition-colors mb-6"
          >
            ПОЛУЧИТЬ КАРТУ СВОБОДЫ →
          </motion.button>

          <p className="text-sm text-textlight">
            🔒 Гарантия возврата 14 дней · Мгновенный доступ · PDF + 3 бонуса
          </p>
        </motion.div>
      </section>

      {/* ── VSL — CHANGE: 9:16 portrait ratio, centered, no floating "500+" text ── */}
      <section className="w-full max-w-[120rem] mx-auto px-4 pb-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-sm"
        >
          {/* 9:16 ratio container — matches vertical/Reels video format */}
          <div
            className="relative w-full bg-bordersubtle/20 border-2 border-dashed border-bordersubtle rounded-2xl overflow-hidden flex flex-col items-center justify-center gap-4"
            style={{ aspectRatio: '9 / 16' }}
          >
            {/* ↓↓↓ REPLACE THIS BLOCK with your <iframe> or <video> embed ↓↓↓ */}
            <div className="w-16 h-16 rounded-full border-2 border-secondary flex items-center justify-center">
              <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[18px] border-transparent border-l-secondary ml-1" />
            </div>
            <p className="font-paragraph text-xs tracking-widest uppercase text-textlight opacity-50 px-6 text-center">
              Вставьте ваше видео сюда
            </p>
            {/* ↑↑↑ END REPLACE ↑↑↑ */}
          </div>
        </motion.div>

        {/* Single review under VSL */}
        <motion.div
          {...fadeInUp}
          className="mt-5 bg-bordersubtle/30 border border-bordersubtle rounded-lg px-6 py-4 flex items-start gap-4 w-full max-w-sm"
        >
          <div className="w-9 h-9 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center font-heading font-bold text-secondary text-sm flex-shrink-0">
            А
          </div>
          <div>
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-secondary text-secondary" />)}
            </div>
            <p className="font-paragraph text-sm italic text-textlight">
              "Калькулятор потерь убил — я теряла 20 часов в неделю на «не своё». Впервые увидела это так ясно."
            </p>
            <p className="text-xs text-textlight opacity-60 mt-1">Анна, 37 лет · Маска «Спасатель»</p>
          </div>
        </motion.div>
      </section>

      {/* ── PAIN — CHANGE: X icon + single column ── */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20 border-t border-bordersubtle">
        <motion.div {...fadeInUp} className="mb-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary">Узнаёте себя?</span>
          </h2>
          <p className="text-textlight text-lg">Если хотя бы 3 пункта про вас — эта карта для вас</p>
        </motion.div>

        {/* CHANGE: single column, X icon — pain must feel like pain */}
        <div className="flex flex-col gap-3 max-w-2xl">
          {[
            'Говоришь «да», когда внутри кричит «нет»',
            'Хроническая усталость — без медицинских причин',
            'Снаружи «всё хорошо» — но внутри пусто',
            'Не помнишь, когда последний раз делал что-то только для себя',
            'Боишься показать настоящего себя — вдруг не примут',
            'Живёшь «на автомате» — не по выбору, а по инерции',
            'Не знаешь, чего на самом деле хочешь от жизни',
            'Чувствуешь, что живёшь не своей жизнью',
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-lg bg-bordersubtle/20 border border-bordersubtle/50"
            >
              <X size={16} className="text-destructive flex-shrink-0" />
              <p className="font-paragraph text-base md:text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── REVIEWS ── unchanged ── */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20 border-t border-bordersubtle">
        <motion.h2 {...fadeInUp} className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Отзывы
        </motion.h2>
        <motion.p {...fadeInUp} className="text-textlight text-lg mb-12">
          Что говорят те, кто уже прошёл
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: 'Калькулятор потерь убил — 20 часов в неделю на «не своё». Это целый рабочий год! Впервые увидела это так ясно.',
              author: 'Анна, 37 лет',
              mask: 'Маска «Спасатель»',
            },
            {
              text: 'Техника «90 секунд» изменила отношения с женой. Просто стал останавливаться перед срывом. Звучит банально — но работает.',
              author: 'Денис, 44 года',
              mask: 'Маска «Герой»',
            },
            {
              text: 'Впервые назвала своё состояние правильно. Сразу стало понятно, почему боюсь показывать работы. Переломный момент.',
              author: 'Елена, 29 лет',
              mask: 'Маска «Невидимка»',
            },
          ].map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-bordersubtle/30 border border-bordersubtle rounded-lg p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-paragraph text-base mb-6 leading-relaxed">{review.text}</p>
              <p className="font-heading font-semibold">{review.author}</p>
              <p className="text-textlight text-sm">{review.mask}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── unchanged except ⚠️ → ⚡ ── */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20 border-t border-bordersubtle">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Что внутри</h2>
          <p className="text-textlight text-lg">36 страниц. Без воды.</p>
          <p className="text-textlight text-lg">Не теория. Не марафон. Практическая карта для тех, кто готов идти.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: '📍', title: 'Диагностика', description: 'Тест 15 вопросов + 4 типа масок + калькулятор реальных потерь (время, деньги, здоровье)' },
            { icon: '🔑', title: 'Метод «3 ключа»', description: 'Пауза осознанности, граница «НЕТ» с 5 скриптами, дневник «Я vs Маска» — всё с шаблонами' },
            { icon: '📖', title: 'Истории трансформации', description: '3 реальных истории через 3 пути. Анна, Денис, Елена — узнай себя и выбери свой путь' },
            { icon: '🗺️', title: 'Roadmap 30 дней', description: 'Пошаговый план: что делать каждую неделю и где обычно бросают' },
            { icon: '🚪', title: 'Три двери выбора', description: 'После 30 дней — чёткие варианты: соло, пробная сессия, или глубокое сопровождение' },
            // CHANGE: ⚠️ → ⚡ (system yellow triangle looked out of place)
            { icon: '⚡', title: 'Честный разбор', description: 'PDF не решит всё. Он покажет карту — где вы сейчас и куда можно прийти. После каждого ключа — честный разбор почему 70% застревают без поддержки.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-bordersubtle/20 border border-bordersubtle rounded-lg p-8"
            >
              <p className="text-4xl mb-4">{item.icon}</p>
              <h3 className="font-heading text-xl font-bold mb-3 text-secondary">{item.title}</h3>
              <p className="font-paragraph text-textlight">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-primary font-heading font-bold py-4 px-8 rounded-lg text-lg hover:bg-secondary/90 transition-colors"
          >
            ПОЛУЧИТЬ КАРТУ СВОБОДЫ →
          </motion.button>
        </motion.div>
      </section>

      {/* ── AUTHOR — CHANGE: real photo, horizontal layout ── */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20 border-t border-bordersubtle">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Автор</h2>
          <p className="text-textlight text-lg mb-10">Кто за этим стоит</p>

          <div className="bg-bordersubtle/30 border border-bordersubtle rounded-lg p-8 flex flex-col md:flex-row gap-8 items-start">
            <img
              src="https://static.wixstatic.com/media/3fbe1a_c4bbbadbc9f8424882abd7de1fc77c37~mv2.png"
              alt="Автор"
              className="w-32 h-32 rounded-lg object-cover border border-bordersubtle flex-shrink-0 mx-auto md:mx-0"
            />
            <div className="flex-1 text-center md:text-left">
              <p className="font-heading text-xl font-bold mb-1">[Ваше имя]</p>
              <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-widest mb-5">[Психолог / Коуч]</p>
              <p className="font-paragraph text-base text-textlight leading-relaxed mb-6">
                Я прошёл этот путь сам — развод, увольнение, потеря себя. Сегодня помогаю людям не ждать «дна», а начинать возвращение к себе осознанно — раньше, чем станет невыносимо.
              </p>
              <div className="flex justify-center md:justify-start gap-10 pt-5 border-t border-bordersubtle">
                {[
                  { num: '500+', label: 'клиентов' },
                  { num: '10+', label: 'лет опыта' },
                  { num: '90%', label: 'держат результат' },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="font-heading text-2xl font-bold text-secondary">{s.num}</p>
                    <p className="text-textlight text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── BONUSES — CHANGE: replaced mismatched system emojis with gold unicode symbols ── */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20 border-t border-bordersubtle">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Бонусы</h2>
          <p className="text-textlight text-lg">При заказе сегодня</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { symbol: '✦', title: 'Гайд «5 телесных практик»', description: 'PDF, 15 страниц. Практики снятия маски через тело.' },
            { symbol: '◉', title: 'Медитация «Возвращение к себе»', description: 'Аудио 20 минут. Встреча с настоящим собой.' },
            { symbol: '◈', title: 'Чек-лист «10 признаков»', description: 'Быстрая проверка: живёте вы собой или в маске.' },
          ].map((bonus, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-bordersubtle/20 border border-bordersubtle rounded-lg p-8 text-center"
            >
              <p className="text-5xl mb-4 text-secondary font-heading font-bold leading-none">{bonus.symbol}</p>
              <h3 className="font-heading text-lg font-bold mb-3 text-secondary">{bonus.title}</h3>
              <p className="font-paragraph text-textlight mb-4">{bonus.description}</p>
              <p className="font-heading font-bold text-secondary text-sm uppercase tracking-wide">Бесплатно</p>
            </motion.div>
          ))}
        </div>

        {/* CHANGE: promokod — added explanation where/how to use */}
        <motion.div {...fadeInUp} className="bg-secondary/10 border border-secondary/30 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 max-w-2xl">
          <p className="text-secondary font-heading font-bold text-2xl flex-shrink-0">✦</p>
          <div>
            <p className="font-heading font-bold text-base mb-1">
              Промокод <span className="text-secondary">SVOBODA</span>
            </p>
            <p className="font-paragraph text-sm text-textlight leading-relaxed">
              При бронировании пробной сессии в течение 7 дней после покупки — введите этот промокод и получите скидку. Промокод придёт на email вместе с PDF.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── CTA / PRICING ── unchanged ── */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20 border-t border-bordersubtle">
        <motion.div {...fadeInUp} className="bg-bordersubtle/30 border border-bordersubtle rounded-lg p-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Начни сегодня</h2>
          <p className="font-heading text-2xl font-bold mb-2">Карта Свободы</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-center">
              <p className="text-textlight line-through text-lg">4,500 ₽</p>
              <p className="text-4xl font-heading font-bold text-secondary">2,700 ₽</p>
              <p className="text-sm text-textlight">≈ $27</p>
            </div>
          </div>

          <ul className="text-left max-w-md mx-auto mb-8 space-y-3">
            {[
              'PDF «Карта Свободы» — 36 страниц',
              'Гайд «5 телесных практик»',
              'Медитация «Возвращение к себе» (20 мин)',
              'Чек-лист «10 признаков жизни в маске»',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                <span className="font-paragraph">{item}</span>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-primary font-heading font-bold py-4 px-8 rounded-lg text-lg hover:bg-secondary/90 transition-colors mb-6"
          >
            ПОЛУЧИТЬ КАРТУ СВОБОДЫ →
          </motion.button>

          <p className="text-sm text-textlight">
            🔒 Гарантия возврата 14 дней — без вопросов
          </p>
        </motion.div>
      </section>

      {/* ── NOT FOR YOU — CHANGE: before FAQ (was after) ── */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-12 border-t border-bordersubtle">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl font-bold mb-6 text-textlight opacity-70">
            Это не для вас, если:
          </h2>
          <div className="space-y-3">
            {[
              'Хотите «прочитать и готово» без практики',
              'Не готовы честно смотреть на себя',
              'Ждёте, что кто-то решит проблемы за вас',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20"
              >
                <X size={16} className="text-destructive flex-shrink-0" />
                <p className="font-paragraph text-base">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ── unchanged ── */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20 border-t border-bordersubtle">
        <motion.h2 {...fadeInUp} className="font-heading text-4xl md:text-5xl font-bold mb-12">
          Вопросы
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="border border-bordersubtle rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-bordersubtle/20 transition-colors text-left"
              >
                <span className="font-heading font-semibold text-lg">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-secondary transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedFaq === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 py-4 bg-bordersubtle/10 border-t border-bordersubtle"
                >
                  <p className="font-paragraph text-textlight">{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA — CHANGE: cleaner button text ── */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-20 border-t border-bordersubtle">
        <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
            Что-то внутри тебя
            <br />
            <span className="text-secondary">уже хочет измениться.</span>
          </h2>

          <p className="font-paragraph text-lg text-textlight mb-6 leading-relaxed">
            Ты уже здесь. Ты дочитал до конца.
            <br />
            Тот голос внутри, который говорит «хватит, пора домой» — не игнорируй его.
          </p>

          {/* CHANGE: was "НАЧАТЬ СЕГОДНЯ – 2,700 ₽ →" with ugly dash, now consistent */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-primary font-heading font-bold py-4 px-8 rounded-lg text-lg hover:bg-secondary/90 transition-colors mb-6"
          >
            ПОЛУЧИТЬ КАРТУ СВОБОДЫ — 2,700 ₽ →
          </motion.button>

          <p className="text-sm text-textlight">
            🔒 Гарантия возврата 14 дней · Мгновенный доступ
          </p>
        </motion.div>
      </section>

      <div className="h-20" />
    </div>
  );
}
