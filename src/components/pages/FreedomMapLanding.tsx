import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';
import { Check, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';

export default function FreedomMapLanding() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: '0px 0px -80px 0px' },
  };

  const CTAButton = ({ label = 'ПОЛУЧИТЬ КАРТУ СВОБОДЫ →' }: { label?: string }) => (
    <motion.a
      href="#pricing"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block bg-buttonbackground hover:bg-secondary text-buttonforeground font-heading font-bold py-4 px-10 rounded-lg text-lg transition-colors cursor-pointer"
    >
      {label}
    </motion.a>
  );

  return (
    <div className="w-full bg-background">

      {/* ── 1. HERO ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
        <motion.div {...fadeInUp}>
          {/* Urgency bar */}
          <div className="inline-flex items-center gap-2 bg-primary border border-bordersubtle rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <p className="font-paragraph text-xs font-bold uppercase tracking-wider text-secondary">
              🎁 Бонусы включены при заказе сегодня
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-2 leading-tight">
            Ты устал жить
          </h1>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-secondary italic mb-6 leading-tight">
            не своей жизнью.
          </h1>
          <p className="font-paragraph text-lg md:text-xl text-textlight max-w-xl mx-auto mb-4 leading-relaxed font-light">
            «Карта Свободы» — практическое руководство, которое покажет <strong className="text-foreground">где именно</strong> ты потерял себя и даст конкретный план возвращения.
          </p>

          {/* Price visible immediately */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <p className="font-paragraph text-sm text-textlight line-through opacity-50">4,500 ₽</p>
            <p className="font-heading text-3xl font-bold text-secondary">2,700 ₽</p>
            <p className="font-paragraph text-xs text-textlight opacity-60">≈ $27</p>
          </div>

          <CTAButton />

          <p className="font-paragraph text-xs text-textlight opacity-40 mt-4">
            🔒 Гарантия возврата 14 дней · Мгновенный доступ · PDF + 3 бонуса
          </p>

          {/* Social proof micro-line */}
          <p className="font-paragraph text-xs text-textlight opacity-50 mt-3">
            500+ человек уже начали путь к себе
          </p>
        </motion.div>
      </section>

      {/* ── 2. VSL ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 pb-6 flex flex-col items-center">
        <motion.div
          className="w-full max-w-3xl bg-primary border border-bordersubtle rounded-lg overflow-hidden shadow-2xl"
          {...fadeInUp}
        >
          {/* ↓ Replace with your real video embed */}
          <div className="relative aspect-video bg-primary flex flex-col items-center justify-center gap-4 cursor-pointer group">
            <div className="w-20 h-20 rounded-full border-2 border-secondary flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
              <div className="w-0 h-0 border-t-[14px] border-b-[14px] border-l-[22px] border-transparent border-l-secondary ml-1" />
            </div>
            <p className="font-paragraph text-xs tracking-widest uppercase text-textlight">
              Смотреть историю · ≈ 8 мин
            </p>
          </div>
        </motion.div>

        {/* One review directly under VSL */}
        <motion.div
          className="w-full max-w-3xl mt-4 bg-primary border border-bordersubtle rounded-lg px-6 py-4 flex items-start gap-4"
          {...fadeInUp}
        >
          <div className="w-9 h-9 rounded-full bg-background border border-bordersubtle flex items-center justify-center font-heading font-bold text-secondary text-sm flex-shrink-0">
            А
          </div>
          <div>
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => <span key={i} className="text-secondary text-xs">★</span>)}
            </div>
            <p className="font-paragraph text-sm text-textbody italic">
              "Калькулятор потерь убил — я теряла 20 часов в неделю на «не своё». Впервые увидела это так ясно."
            </p>
            <p className="font-paragraph text-xs text-textlight mt-1">Анна, 37 лет · Маска «Спасатель»</p>
          </div>
        </motion.div>
      </section>

      {/* ── 3. PAIN ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-16 md:py-24 bg-primary">
        <motion.div className="max-w-2xl mx-auto" {...fadeInUp}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Узнаёте <span className="text-secondary italic">себя?</span>
          </h2>
          <p className="font-paragraph text-sm text-textlight text-center mb-10 opacity-60">
            Если хотя бы 3 пункта про вас — эта карта для вас
          </p>

          <div className="space-y-2">
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
                className="flex items-center gap-3 p-4 rounded-lg bg-background border border-bordersubtle"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                viewport={{ once: true }}
              >
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <p className="font-paragraph text-base text-textbody">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 4. SOCIAL PROOF (3 reviews) ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-16 md:py-24">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-3 text-center">
            Отзывы
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            Что говорят те, кто уже прошёл
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                avatar: 'А', name: 'Анна, 37 лет', mask: 'Маска «Спасатель»',
                text: 'Калькулятор потерь убил — 20 часов в неделю на «не своё». Это целый рабочий год! Впервые увидела это так ясно.',
              },
              {
                avatar: 'Д', name: 'Денис, 44 года', mask: 'Маска «Герой»',
                text: 'Техника «90 секунд» изменила отношения с женой. Просто стал останавливаться перед срывом. Звучит банально — но работает.',
              },
              {
                avatar: 'Е', name: 'Елена, 29 лет', mask: 'Маска «Невидимка»',
                text: 'Впервые назвала своё состояние правильно. Сразу стало понятно, почему боюсь показывать работы. Переломный момент.',
              },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                className="bg-primary border border-bordersubtle rounded-lg p-5 relative"
                {...fadeInUp}
              >
                <p className="font-heading text-5xl text-secondary opacity-15 absolute top-3 left-4 leading-none select-none">"</p>
                <div className="flex gap-0.5 mb-3 mt-1">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-secondary text-xs">★</span>)}
                </div>
                <p className="font-paragraph text-sm text-textbody italic leading-relaxed mb-4">{review.text}</p>
                <div className="flex items-center gap-3 pt-3 border-t border-bordersubtle">
                  <div className="w-8 h-8 rounded-full bg-background border border-bordersubtle flex items-center justify-center font-heading font-bold text-secondary text-xs flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-heading text-xs font-bold text-foreground">{review.name}</p>
                    <p className="font-paragraph text-xs text-textlight opacity-60">{review.mask}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 5. WHAT YOU GET (short) ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-16 md:py-24 bg-primary">
        <motion.div className="max-w-2xl mx-auto" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-3 text-center">
            Что внутри
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            36 страниц. Без воды.
          </h2>
          <p className="font-paragraph text-base text-textlight text-center mb-10 opacity-70">
            Не теория. Не марафон. Практическая карта для тех, кто готов идти.
          </p>

          <div className="space-y-3 mb-10">
            {[
              { emoji: '📍', title: 'Диагностика', desc: 'Тест 15 вопросов + 4 типа масок + калькулятор реальных потерь (время, деньги, здоровье)' },
              { emoji: '🔑', title: 'Метод «3 ключа»', desc: 'Пауза осознанности, граница «НЕТ» с 5 скриптами, дневник «Я vs Маска» — всё с шаблонами' },
              { emoji: '📖', title: 'Истории трансформации', desc: '3 реальных истории через 3 пути. Анна, Денис, Елена — узнай себя и выбери свой путь' },
              { emoji: '🗺', title: 'Roadmap 30 дней', desc: 'Пошаговый план: что делать каждую неделю и где обычно бросают' },
              { emoji: '🚪', title: 'Три двери выбора', desc: 'После 30 дней — чёткие варианты: соло, пробная сессия, или глубокое сопровождение' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-background border border-bordersubtle rounded-lg p-5">
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <p className="font-heading text-base font-bold text-foreground mb-1">{item.title}</p>
                  <p className="font-paragraph text-sm text-textlight leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Honest warning */}
          <div className="bg-background border-l-4 border-secondary rounded-r-lg p-5 mb-10">
            <p className="font-paragraph text-sm text-textbody leading-relaxed">
              ⚠️ <strong className="text-foreground">Честно:</strong> PDF не решит всё. Он покажет карту — где вы сейчас и куда можно прийти. После каждого ключа — честный разбор почему <strong className="text-foreground">70% застревают</strong> без поддержки.
            </p>
          </div>

          <div className="text-center">
            <CTAButton />
          </div>
        </motion.div>
      </section>

      {/* ── 6. AUTHOR ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-16 md:py-24">
        <motion.div className="max-w-2xl mx-auto" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-3 text-center">
            Автор
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            Кто за этим стоит
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-primary border border-bordersubtle rounded-lg p-8">
            <Image src="https://static.wixstatic.com/media/3fbe1a_c4bbbadbc9f8424882abd7de1fc77c37~mv2.png" alt="Автор" className="w-36 h-36 rounded-lg object-cover border border-bordersubtle flex-shrink-0 mx-auto md:mx-0" />
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">[Ваше имя]</h3>
              <p className="font-paragraph text-xs font-bold uppercase tracking-widest text-secondary mb-4">
                [Психолог / Коуч]
              </p>
              <p className="font-paragraph text-sm text-textlight leading-relaxed mb-6">
                Я прошёл этот путь сам — развод, увольнение, потеря себя. Сегодня помогаю людям не ждать «дна», а начинать возвращение к себе <strong className="text-foreground">осознанно</strong> — раньше, чем станет невыносимо.
              </p>
              <div className="flex gap-8 pt-5 border-t border-bordersubtle">
                {[{ num: '500+', label: 'клиентов' }, { num: '10+', label: 'лет опыта' }, { num: '90%', label: 'держат результат' }].map((s, i) => (
                  <div key={i}>
                    <p className="font-heading text-2xl font-bold text-secondary">{s.num}</p>
                    <p className="font-paragraph text-xs text-textlight mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 7. BONUSES ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-16 md:py-24 bg-primary">
        <motion.div className="max-w-2xl mx-auto" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-3 text-center">
            Бонусы
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">
            При заказе сегодня
          </h2>
          <p className="font-paragraph text-sm text-textlight text-center mb-10 opacity-60">
            Промокод SVOBODA при бронировании сессии в течение 7 дней
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '📋', title: 'Гайд «5 телесных практик»', desc: 'PDF, 15 страниц. Практики снятия маски через тело.' },
              { icon: '🎧', title: 'Медитация «Возвращение к себе»', desc: 'Аудио 20 минут. Встреча с настоящим собой.' },
              { icon: '✅', title: 'Чек-лист «10 признаков»', desc: 'Быстрая проверка: живёте вы собой или в маске.' },
            ].map((b, idx) => (
              <div key={idx} className="bg-background border border-bordersubtle rounded-lg p-5">
                <span className="text-2xl block mb-3">{b.icon}</span>
                <p className="font-heading text-sm font-bold text-foreground mb-2">{b.title}</p>
                <p className="font-paragraph text-xs text-textlight leading-relaxed">{b.desc}</p>
                <p className="font-paragraph text-xs font-bold text-secondary mt-3 uppercase tracking-wide">Бесплатно</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 8. PRICE + CTA ── */}
      <section id="pricing" className="w-full max-w-[120rem] mx-auto px-6 py-16 md:py-24">
        <motion.div className="max-w-md mx-auto text-center" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-6">
            Начни сегодня
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Карта Свободы
          </h2>

          <div className="bg-primary border border-bordersubtle rounded-lg p-8 relative overflow-hidden mb-6">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent" />

            <p className="font-paragraph text-sm text-textlight line-through opacity-50 mb-1">4,500 ₽</p>
            <p className="font-heading text-6xl font-bold text-secondary mb-1">2,700 <span className="text-2xl">₽</span></p>
            <p className="font-paragraph text-xs text-textlight opacity-50 mb-6">≈ $27</p>

            <ul className="space-y-3 text-left mb-8">
              {[
                'PDF «Карта Свободы» — 36 страниц',
                'Гайд «5 телесных практик»',
                'Медитация «Возвращение к себе» (20 мин)',
                'Чек-лист «10 признаков жизни в маске»',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                  <p className="font-paragraph text-sm text-textbody">{item}</p>
                </li>
              ))}
            </ul>

            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="block bg-buttonbackground hover:bg-secondary text-buttonforeground font-heading font-bold py-4 px-8 rounded-lg text-base transition-colors w-full text-center mb-4"
            >
              ПОЛУЧИТЬ КАРТУ СВОБОДЫ →
            </motion.a>
            <p className="font-paragraph text-xs text-textlight opacity-50">
              🔒 Гарантия возврата 14 дней — без вопросов
            </p>
          </div>

          {/* Not for whom — placed right before FAQ as final filter */}
          <div className="bg-primary border border-bordersubtle rounded-lg p-5 text-left">
            <p className="font-paragraph text-xs font-bold uppercase tracking-wider text-textlight opacity-60 mb-3">
              Это не для вас, если:
            </p>
            {[
              'Хотите "прочитать и готово" без практики',
              'Не готовы честно смотреть на себя',
              'Ждёте, что кто-то решит проблемы за вас',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 mb-2">
                <X className="w-3 h-3 text-destructive flex-shrink-0" />
                <p className="font-paragraph text-xs text-textlight">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 9. FAQ ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-16 md:py-24 bg-primary">
        <motion.div className="max-w-xl mx-auto" {...fadeInUp}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
            Вопросы
          </h2>

          <div className="space-y-2">
            {[
              { q: 'Это психотерапия?', a: 'Нет. Практическое руководство для самостоятельной работы. Психотерапия и глубинная работа — в разделе «Личное сопровождение» внутри PDF.' },
              { q: 'За какое время увижу результаты?', a: 'Первые инсайты — в процессе заполнения (1–2 часа). Изменения в поведении — через 2–4 недели практики. Устойчивые — через 30 дней по roadmap.' },
              { q: 'Подойдёт ли при тяжёлой ситуации?', a: 'PDF работает с паттернами и масками. Если есть клиническая депрессия, ПТСР или суицидальные мысли — пожалуйста, обратитесь к специалисту напрямую.' },
              { q: 'Чем отличается от курсов и марафонов?', a: 'Нет группы. Нет дедлайнов. Нет мотивационного давления. Только вы и ваш процесс — в своём темпе с честным разбором.' },
              { q: 'Можно ли вернуть деньги?', a: '14 дней безусловного возврата. Если PDF не подошёл — полный возврат без вопросов.' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-background border border-bordersubtle rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 hover:bg-primary transition-colors text-left"
                >
                  <p className="font-heading text-sm font-bold text-foreground pr-4">{faq.q}</p>
                  {expandedFaq === idx
                    ? <ChevronUp className="w-4 h-4 text-secondary flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-secondary flex-shrink-0" />
                  }
                </button>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-5 pb-5 border-t border-bordersubtle"
                  >
                    <p className="font-paragraph text-sm text-textlight leading-relaxed pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 text-center">
        <motion.div className="max-w-xl mx-auto" {...fadeInUp}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Что-то внутри тебя
          </h2>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary italic mb-6 leading-tight">
            уже хочет измениться.
          </h2>
          <p className="font-paragraph text-base text-textlight mb-3 leading-relaxed font-light">
            Ты уже здесь. Ты дочитал до конца.
          </p>
          <p className="font-paragraph text-base text-textlight mb-10 leading-relaxed font-light opacity-70">
            Тот голос внутри, который говорит «хватит, пора домой» — не игнорируй его.
          </p>

          <CTAButton label="НАЧАТЬ СЕГОДНЯ — 2,700 ₽ →" />

          <p className="font-paragraph text-xs text-textlight opacity-30 mt-5">
            🔒 Гарантия возврата 14 дней · Мгновенный доступ
          </p>
        </motion.div>
      </section>

    </div>
  );
}
