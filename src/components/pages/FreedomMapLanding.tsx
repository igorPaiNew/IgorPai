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
    viewport: { once: true, margin: '0px 0px -100px 0px' },
  };

  return (
    <div className="w-full bg-background">

      {/* ── HERO ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-32">
        <motion.div className="text-center" {...fadeInUp}>
          <p className="font-paragraph text-sm font-bold tracking-widest uppercase text-secondary mb-6">
            Практическое руководство
          </p>
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-foreground mb-4">
            Карта
          </h1>
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-secondary italic mb-8">
            Свободы
          </h1>
          <p className="font-paragraph text-xl md:text-2xl text-textlight max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            Полное руководство по возвращению к себе — для тех, кто устал жить в маске
          </p>
          <p className="font-paragraph text-base text-textlight max-w-xl mx-auto mb-12 opacity-70">
            36 страниц · 3 рабочих инструмента · Roadmap на 30 дней
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-buttonbackground hover:bg-secondary text-buttonforeground font-heading font-bold py-4 px-10 rounded-lg text-lg transition-colors"
          >
            ПОЛУЧИТЬ КАРТУ СВОБОДЫ →
          </motion.button>
        </motion.div>
      </section>

      {/* ── VSL ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 pb-20 md:pb-28 flex flex-col items-center">
        <motion.div
          className="w-full max-w-3xl bg-primary border border-bordersubtle rounded-lg overflow-hidden shadow-2xl"
          {...fadeInUp}
        >
          {/* Replace src with your video embed URL */}
          <div className="relative aspect-video bg-primary flex flex-col items-center justify-center gap-4 cursor-pointer group">
            <div className="w-20 h-20 rounded-full border-2 border-secondary flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
              <div className="w-0 h-0 border-t-[14px] border-b-[14px] border-l-[22px] border-transparent border-l-secondary ml-1" />
            </div>
            <p className="font-paragraph text-xs tracking-widest uppercase text-textlight">
              Смотреть историю · ≈ 8 мин
            </p>
            <p className="font-paragraph text-xs text-textlight opacity-50 absolute bottom-4 right-4">
              Замените этот блок на ваш iframe-видео
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── PAIN — УЗНАЁТЕ СЕБЯ? ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-primary">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Узнаёте <span className="text-secondary italic">себя?</span>
          </h2>
          <p className="font-paragraph text-base text-textlight text-center mb-12 opacity-70">
            Если хотя бы 2 пункта про вас — эта карта для вас
          </p>

          <div className="space-y-3">
            {[
              'Вы говорите «да», когда внутри кричит «нет»',
              'Вы чувствуете хроническую усталость — без медицинских причин',
              'Снаружи «всё хорошо» — но внутри пусто',
              'Вы не помните, когда последний раз делали что-то только для себя',
              'Вы боитесь показать настоящего себя — вдруг не примут',
              'Вы живёте «на автомате» — не по своему выбору, а по инерции',
              'Вы завидуете чужой жизни, думая: «почему у меня не так?»',
              'Вы не знаете, чего на самом деле хотите от жизни',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-lg bg-background border border-bordersubtle"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                viewport={{ once: true }}
              >
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                <p className="font-paragraph text-lg text-textbody">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── ABOUT PDF ── */}
      <section id="about" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-4">
            Что это такое
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Это не очередная книга<br />по саморазвитию
          </h2>
          <p className="font-paragraph text-lg text-textbody mb-4 leading-relaxed">
            Это практическая карта для тех, кто устал жить в маске.
          </p>
          <p className="font-paragraph text-base text-textlight mb-12 leading-relaxed">
            Я создал то, чего мне не хватало самому — инструмент, который показывает <strong className="text-foreground">где именно</strong> вы потеряли себя, и даёт конкретный план возвращения. Не теория. Не марафон с группой. Ваш личный процесс, в вашем темпе.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              { title: 'Увидите', description: 'где именно потеряли себя — по тесту и карте симптомов' },
              { title: 'Поймёте', description: 'свои автоматические паттерны — через дневник «Я vs Маска»' },
              { title: 'Получите', description: '3 конкретных инструмента для изменений — уже сегодня' },
              { title: 'Сделаете', description: 'первые шаги — по чёткому roadmap на 30 дней' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-primary border border-bordersubtle rounded-lg p-6"
                {...fadeInUp}
              >
                <h3 className="font-heading text-xl font-bold text-secondary mb-2">{item.title}</h3>
                <p className="font-paragraph text-textlight">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Honest warning */}
          <div className="bg-primary border-l-4 border-secondary rounded-r-lg p-6">
            <p className="font-paragraph text-base text-textbody leading-relaxed">
              ⚠️ <strong className="text-foreground">Честно:</strong> Этот PDF не решит всё. Он покажет <strong className="text-secondary">карту</strong> — где вы сейчас и куда можно прийти. Но идти придётся вам. После каждого ключа есть честный разбор — почему <strong className="text-foreground">70% застревают</strong> при самостоятельной работе, и что с этим делать.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section id="content" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-primary">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-4 text-center">
            Содержание
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            36 страниц — детально
          </h2>

          <div className="space-y-4">
            {[
              {
                emoji: '📍',
                part: 'Часть 1',
                title: 'Диагностика',
                pages: 'стр 1–9',
                items: [
                  'Тест «Где вы потеряли себя?» — 15 вопросов, 4 уровня результата',
                  '4 типа масок: Герой, Спасатель, Отличник, Невидимка — найдите свою',
                  'Карта симптомов — 5 сфер жизни со шкалой боли 1–10',
                  'Калькулятор потерь — реальная цена жизни в маске (время, деньги, здоровье)',
                ],
              },
              {
                emoji: '🔑',
                part: 'Часть 2',
                title: 'Метод «3 ключа»',
                pages: 'стр 10–20',
                items: [
                  'Пауза осознанности — техника «90 секунд», трекер на 7 дней + Ловушка #1',
                  'Граница «НЕТ» — формула + 5 скриптов для работы, семьи, манипуляций + Ловушка #2',
                  'Дневник «Я vs Маска» — шаблон, 3 примера разборов, как видеть паттерны + Ловушка #3',
                ],
              },
              {
                emoji: '📖',
                part: 'Часть 3',
                title: 'Истории трансформации',
                pages: 'стр 21–26',
                items: [
                  'Анна (маска Спасателя) — от панических атак к границам и энергии',
                  'Денис (маска Героя) — от выгорания и развода к доверию и новому бизнесу',
                  'Елена (маска Невидимки) — от страха критики к первой персональной выставке',
                  'Каждая история через 3 пути: Соло / Пробная сессия / Личное сопровождение',
                ],
              },
              {
                emoji: '🗺',
                part: 'Часть 4',
                title: 'Roadmap «30 дней»',
                pages: 'стр 27–28',
                items: [
                  'Неделя 1: Диагностика и осознание (тест, карта, дневник)',
                  'Неделя 2: Практика «Пауза» — минимум 3 успешные паузы',
                  'Неделя 3: Практика «Микро-нет» — от низкого риска к близким',
                  'Неделя 4: Интеграция, анализ паттернов, точка принятия решения',
                ],
              },
              {
                emoji: '🚪',
                part: 'Часть 5',
                title: 'Три двери выбора',
                pages: 'стр 29–36',
                items: [
                  'Дверь #1: Самостоятельная работа — для кого, реалистичные шансы',
                  'Дверь #2: Пробная сессия (8,000₽) — 90 мин, план, чат 30 дней',
                  'Дверь #3: Личное сопровождение (от 240,000₽) — 6–12 мес, работа с корнями',
                  'FAQ, контакты, следующие шаги',
                ],
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                className="bg-background border border-bordersubtle rounded-lg p-6 md:p-8"
                {...fadeInUp}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{section.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <p className="font-paragraph text-xs font-bold tracking-wider uppercase text-secondary">
                        {section.part}
                      </p>
                      <p className="font-paragraph text-xs text-textlight opacity-60">{section.pages}</p>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="text-secondary text-sm mt-0.5 flex-shrink-0">→</span>
                          <p className="font-paragraph text-sm text-textlight leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── THREE PATHS ── */}
      <section id="paths" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-4 text-center">
            Три пути
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Выберите свой уровень глубины
          </h2>
          <p className="font-paragraph text-base text-textlight text-center mb-12 opacity-70">
            PDF — это старт. Дальше — ваш выбор.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: '📄',
                title: 'Самостоятельная работа',
                price: '2,700 ₽',
                note: '≈ $27',
                featured: false,
                pros: ['PDF 36 стр + 3 бонуса', 'Тест, инструменты, roadmap', 'Работаете в своём темпе'],
                cons: ['Нет поддержки', '70% бросают в первый месяц'],
              },
              {
                icon: '🎯',
                title: 'Пробная сессия',
                price: '8,000 ₽',
                note: 'Засчитывается в сопровождение',
                featured: true,
                pros: ['PDF + 90 мин 1-на-1', 'Диагностика вашей маски', 'Персональный план на 30 дней', 'Чат-поддержка 30 дней'],
                cons: [],
              },
              {
                icon: '💎',
                title: 'Личное сопровождение',
                price: 'от 240,000 ₽',
                note: '6–12 месяцев',
                featured: false,
                pros: ['Работа с корнями травм', 'Трансформация всех сфер', '90% держат результат'],
                cons: ['Не для всех — по заявке'],
              },
            ].map((path, idx) => (
              <motion.div
                key={idx}
                className={`relative rounded-lg p-6 border-2 ${
                  path.featured
                    ? 'bg-primary border-secondary'
                    : 'bg-primary border-bordersubtle'
                }`}
                {...fadeInUp}
              >
                {path.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-buttonforeground text-xs font-bold tracking-wider uppercase px-4 py-1 rounded-full">
                    Популярно
                  </div>
                )}
                <span className="text-3xl block mb-4">{path.icon}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{path.title}</h3>
                <p className={`font-heading text-2xl font-bold mb-1 ${path.featured ? 'text-secondary' : 'text-foreground'}`}>
                  {path.price}
                </p>
                <p className="font-paragraph text-xs text-textlight mb-5 opacity-70">{path.note}</p>
                <ul className="space-y-2">
                  {path.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="font-paragraph text-sm text-textlight">{pro}</p>
                    </li>
                  ))}
                  {path.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="font-paragraph text-sm text-textlight">{con}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── RESULTS ── */}
      <section id="results" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-primary">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Результаты через 30 дней
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-bold text-secondary mb-6">Что получите</h3>
              <ul className="space-y-4">
                {[
                  'Поймёте свой тип маски и где потеряли себя',
                  'Увидите автоматические паттерны поведения',
                  'Попробуете 3 рабочих инструмента',
                  'Получите чёткий план на 30 дней',
                  'Узнаете, где нужна помощь — и какая',
                  'Сделаете осознанный выбор дальнейшего пути',
                ].map((item, idx) => (
                  <motion.div key={idx} className="flex items-start gap-3" {...fadeInUp}>
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-textbody">{item}</p>
                  </motion.div>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl font-bold text-destructive mb-6">Что не получите</h3>
              <ul className="space-y-4">
                {[
                  'Волшебную таблетку — её не существует',
                  'Быстрое решение за один вечер',
                  'Гарантию результата без вашей работы',
                  'Групповой курс или марафон',
                ].map((item, idx) => (
                  <motion.div key={idx} className="flex items-start gap-3" {...fadeInUp}>
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <p className="font-paragraph text-textbody">{item}</p>
                  </motion.div>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── BONUSES ── */}
      <section id="bonuses" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-4 text-center">
            Бонусы
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            При заказе в течение 7 дней
          </h2>
          <p className="font-paragraph text-base text-textlight text-center mb-12 opacity-70">
            Укажите промокод SVOBODA при бронировании сессии или заявке на сопровождение
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: '📋',
                title: 'Гайд «5 телесных практик»',
                desc: 'Практики для снятия маски через тело. PDF, 15 страниц.',
              },
              {
                icon: '🎧',
                title: 'Медитация «Возвращение к себе»',
                desc: 'Аудио-медитация для встречи с настоящим собой. 20 минут.',
              },
              {
                icon: '✅',
                title: 'Чек-лист «10 признаков»',
                desc: 'Быстрая проверка: живёте вы собой или в маске прямо сейчас.',
              },
            ].map((bonus, idx) => (
              <motion.div
                key={idx}
                className="bg-primary border border-bordersubtle rounded-lg p-6"
                {...fadeInUp}
              >
                <span className="text-3xl block mb-4">{bonus.icon}</span>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{bonus.title}</h3>
                <p className="font-paragraph text-sm text-textlight leading-relaxed">{bonus.desc}</p>
                <p className="font-paragraph text-xs font-bold text-secondary mt-4 uppercase tracking-wide">
                  Бесплатно при покупке
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── AUTHOR ── */}
      <section id="author" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-primary">
        <motion.div className="max-w-2xl mx-auto" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-4 text-center">
            Автор
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Кто за этим стоит
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <Image src="https://static.wixstatic.com/media/3fbe1a_c4bbbadbc9f8424882abd7de1fc77c37~mv2.png" alt="Автор" className="w-44 h-44 rounded-lg object-cover border-2 border-bordersubtle" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-1">[Ваше имя]</h3>
              <p className="font-paragraph text-sm font-bold uppercase tracking-widest text-secondary mb-6">
                [Психолог / Коуч / Специалист]
              </p>
              <p className="font-paragraph text-base text-textlight leading-relaxed mb-6">
                Я прошёл этот путь сам. Развод, увольнение, потеря себя — и долгий путь обратно. Сегодня я помогаю людям не ждать «дна», а начинать возвращение к себе осознанно — раньше, чем станет невыносимо.
              </p>
              <div className="flex gap-10 pt-6 border-t border-bordersubtle">
                {[
                  { num: '500+', label: 'клиентов' },
                  { num: '10+', label: 'лет опыта' },
                  { num: '90%', label: 'держат результат' },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="font-heading text-3xl font-bold text-secondary">{stat.num}</p>
                    <p className="font-paragraph text-xs text-textlight mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-4 text-center">
            Отзывы
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Что говорят те, кто уже прошёл
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                avatar: 'А',
                name: 'Анна, 37 лет',
                mask: 'Маска «Спасатель»',
                text: 'Калькулятор потерь просто убил — я теряла 20 часов в неделю на «не своё». Это целый рабочий год! Впервые увидела это так ясно.',
              },
              {
                avatar: 'Д',
                name: 'Денис, 44 года',
                mask: 'Маска «Герой»',
                text: 'Техника «90 секунд» изменила мои отношения с женой. Я просто стал останавливаться перед тем как срываться. Звучит банально — но работает.',
              },
              {
                avatar: 'Е',
                name: 'Елена, 29 лет',
                mask: 'Маска «Невидимка»',
                text: 'Впервые назвала своё состояние правильно — маска Невидимки. Сразу стало понятно, почему боюсь показывать работы. Это был переломный момент.',
              },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                className="bg-primary border border-bordersubtle rounded-lg p-6 relative"
                {...fadeInUp}
              >
                <p className="font-heading text-5xl text-secondary opacity-20 absolute top-4 left-5 leading-none select-none">
                  "
                </p>
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary text-sm">★</span>
                  ))}
                </div>
                <p className="font-paragraph text-sm text-textbody italic leading-relaxed mb-6">
                  {review.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-bordersubtle">
                  <div className="w-9 h-9 rounded-full bg-background border border-bordersubtle flex items-center justify-center font-heading font-bold text-secondary text-sm flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground">{review.name}</p>
                    <p className="font-paragraph text-xs text-textlight">{review.mask}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PRICING & CTA ── */}
      <section id="pricing" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-primary">
        <motion.div className="max-w-lg mx-auto text-center" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-6">
            Начните сегодня
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Карта Свободы
          </h2>
          <p className="font-paragraph text-base text-textlight mb-10">
            36 страниц · 3 бонуса · Мгновенный доступ
          </p>

          <div className="bg-background border border-bordersubtle rounded-lg p-8 mb-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent" />
            <p className="font-paragraph text-base text-textlight line-through mb-1 opacity-60">4,500 ₽</p>
            <p className="font-heading text-6xl font-bold text-secondary mb-1">2,700 <span className="text-3xl">₽</span></p>
            <p className="font-paragraph text-xs text-textlight mb-8 opacity-70">≈ $27 · Сегодня</p>

            <ul className="space-y-3 mb-8 text-left">
              {[
                '«Карта Свободы» — полное руководство (36 стр)',
                'Гайд «5 телесных практик для снятия маски»',
                'Медитация «Возвращение к себе» (20 мин)',
                'Чек-лист «10 признаков жизни в маске»',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                  <p className="font-paragraph text-sm text-textbody">{item}</p>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-buttonbackground hover:bg-secondary text-buttonforeground font-heading font-bold py-4 px-8 rounded-lg text-base transition-colors w-full mb-4"
            >
              ПОЛУЧИТЬ КАРТУ СВОБОДЫ →
            </motion.button>
            <p className="font-paragraph text-xs text-textlight opacity-60">
              🔒 Гарантия возврата 14 дней — без вопросов
            </p>
          </div>

          <p className="font-paragraph text-xs text-textlight opacity-50">
            Промокод SVOBODA при бронировании сессии в течение 7 дней
          </p>
        </motion.div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div className="max-w-2xl mx-auto" {...fadeInUp}>
          <p className="font-paragraph text-xs font-bold tracking-widest uppercase text-secondary mb-4 text-center">
            Вопросы
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Часто спрашивают
          </h2>

          <div className="space-y-3">
            {[
              {
                q: 'Это психотерапия?',
                a: 'Нет. Это практическое руководство для самостоятельной работы с паттернами и масками. Психотерапия и глубинная работа — в разделе «Личное сопровождение».',
              },
              {
                q: 'За какое время увижу результаты?',
                a: 'Первые инсайты — в процессе заполнения (1–2 часа). Изменения в поведении — через 2–4 недели честной практики. Устойчивые изменения — через 30 дней по roadmap.',
              },
              {
                q: 'Подойдёт ли, если ситуация тяжёлая?',
                a: 'PDF работает с паттернами и масками. Если у вас клиническая депрессия, ПТСР или суицидальные мысли — пожалуйста, обратитесь к специалисту напрямую.',
              },
              {
                q: 'Чем отличается от других курсов?',
                a: 'Это не курс. Нет группы, нет марафона, нет дедлайнов. Это ваш личный процесс в вашем темпе — с честным разбором того, где люди обычно застревают.',
              },
              {
                q: 'Что если я не закончу за 30 дней?',
                a: 'Никаких сроков нет. 30 дней — рекомендуемый минимум для первых результатов. Вы работаете в своём темпе.',
              },
              {
                q: 'Можно ли вернуть деньги?',
                a: '14 дней безусловного возврата. Если PDF вам не подошёл — полный возврат без вопросов.',
              },
              {
                q: 'Как проходят сессии в «Личном сопровождении»?',
                a: 'Онлайн (Zoom), еженедельные встречи 60–90 минут. Между сессиями — чат-поддержка. Подробности — по заявке внутри PDF.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-primary border border-bordersubtle rounded-lg overflow-hidden"
                {...fadeInUp}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-background transition-colors text-left"
                >
                  <h3 className="font-heading text-base font-bold text-foreground pr-4">{faq.q}</h3>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-bordersubtle"
                  >
                    <p className="font-paragraph text-sm text-textlight leading-relaxed pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-32">
        <motion.div className="max-w-2xl mx-auto text-center" {...fadeInUp}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Что-то внутри вас<br />
            <span className="text-secondary italic">уже хочет измениться</span>
          </h2>
          <p className="font-paragraph text-lg text-textlight mb-4 leading-relaxed font-light">
            Вы уже здесь. Вы досмотрели до конца. Это значит — тот самый голос, который говорит «хватит, пора домой», ещё жив.
          </p>
          <p className="font-paragraph text-base text-textlight mb-12 opacity-70">
            Не игнорируйте его. Начните сегодня.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-buttonbackground hover:bg-secondary text-buttonforeground font-heading font-bold py-4 px-12 rounded-lg text-xl transition-colors"
          >
            ПОЛУЧИТЬ КАРТУ СВОБОДЫ →
          </motion.button>
          <p className="font-paragraph text-xs text-textlight opacity-40 mt-6">
            🔒 Гарантия возврата 14 дней · Мгновенный доступ
          </p>
        </motion.div>
      </section>

    </div>
  );
}
