import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Image } from '@/components/ui/image';

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
      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-32">
        <motion.div className="text-center" {...fadeInUp}>
          <h1 className="font-heading text-6xl md:text-7xl font-bold text-foreground mb-6">
            КАРТА СВОБОДЫ
          </h1>
          <p className="font-heading text-2xl md:text-3xl text-secondary mb-8">
            Практическое руководство по возвращению к себе
          </p>
          <p className="font-paragraph text-lg text-textlight max-w-2xl mx-auto mb-12">
            36 страниц, которые покажут где вы потеряли себя и как начать возвращаться
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-buttonbackground hover:bg-secondary text-buttonforeground font-heading font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            ПОЛУЧИТЬ КАРТУ СВОБОДЫ
          </motion.button>
        </motion.div>
      </section>

      {/* Section 1: Brief Description */}
      <section id="about" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            Это не очередная книга по саморазвитию
          </h2>
          <p className="font-paragraph text-lg text-textbody mb-8 leading-relaxed">
            Это практическая карта для тех, кто устал жить в маске.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              { title: 'Увидите', description: 'где именно потеряли себя' },
              { title: 'Поймёте', description: 'свои автоматические паттерны' },
              { title: 'Получите', description: 'конкретные инструменты для изменений' },
              { title: 'Сделаете', description: 'первые шаги к возвращению к себе' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-primary border border-bordersubtle rounded-lg p-6"
                {...fadeInUp}
              >
                <h3 className="font-heading text-xl font-bold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="font-paragraph text-textlight">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="font-paragraph text-base text-textlight mt-12 text-center">
            За 30 дней вы получите всё это
          </p>
        </motion.div>
      </section>

      {/* Section 2: For Whom */}
      <section id="for-whom" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-primary">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Для кого эта карта
          </h2>

          <div className="space-y-4">
            {[
              'Вы чувствуете, что живёте "не своей жизнью"',
              'Говорите "да", когда внутри кричит "нет"',
              'Устали соответствовать ожиданиям других',
              'Не помните, когда последний раз делали что-то для себя',
              'Чувствуете хроническую усталость без причин',
              'Боитесь показать настоящего себя',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-lg bg-background border border-bordersubtle"
                {...fadeInUp}
              >
                <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="font-paragraph text-lg text-textbody">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.p className="font-paragraph text-lg text-secondary mt-12 text-center font-bold" {...fadeInUp}>
            Если хотя бы 2 пункта про вас — эта карта для вас.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 3: What's Inside */}
      <section id="content" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-16 text-center" {...fadeInUp}>
          Что внутри — детально
        </motion.h2>

        {/* Part 1: Diagnostics */}
        <motion.div className="mb-16" {...fadeInUp}>
          <div className="bg-primary border-2 border-secondary rounded-lg p-8 md:p-12">
            <h3 className="font-heading text-3xl font-bold text-secondary mb-8">
              📍 ЧАСТЬ 1: ДИАГНОСТИКА (стр 1-9)
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Тест "Где вы потеряли себя?"
                </h4>
                <ul className="font-paragraph text-textlight space-y-2 ml-4">
                  <li>• 15 вопросов для определения уровня потери себя</li>
                  <li>• Интерпретация результатов (критический/средний/начальный)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Ваш тип маски
                </h4>
                <ul className="font-paragraph text-textlight space-y-2 ml-4">
                  <li>• 4 типа: Герой, Спасатель, Отличник, Невидимка</li>
                  <li>• Корни каждой маски (откуда она пришла)</li>
                  <li>• Последствия для жизни</li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Карта симптомов
                </h4>
                <ul className="font-paragraph text-textlight space-y-2 ml-4">
                  <li>• Анализ 5 сфер: отношения, работа, здоровье, финансы, творчество</li>
                  <li>• Шкала боли 1-10 для каждой сферы</li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                  Калькулятор потерь
                </h4>
                <ul className="font-paragraph text-textlight space-y-2 ml-4">
                  <li>• Сколько времени уходит на "не своё"</li>
                  <li>• Сколько денег тратится на последствия</li>
                  <li>• Реальная цена жизни в маске</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Part 2: 3 Keys Method */}
        <motion.div className="mb-16" {...fadeInUp}>
          <div className="bg-primary border-2 border-secondary rounded-lg p-8 md:p-12">
            <h3 className="font-heading text-3xl font-bold text-secondary mb-8">
              🔑 ЧАСТЬ 2: МЕТОД "3 КЛЮЧА" (стр 10-20)
            </h3>

            <div className="space-y-8">
              {[
                {
                  title: 'КЛЮЧ #1: Пауза осознанности',
                  items: [
                    'Техника "90 секунд" (6 шагов)',
                    'Как остановить автопилот реакций',
                    'Трекер пауз на 7 дней',
                    'Ловушка #1: Почему забываете про паузу в критический момент',
                  ],
                },
                {
                  title: 'КЛЮЧ #2: Граница "НЕТ"',
                  items: [
                    'Формула границы (3 части)',
                    '5 типов "нет" со скриптами (работа, отношения, семья, себе, манипуляция)',
                    'Практика "Микро-нет" на неделю',
                    'Ловушка #2: Почему вина съедает после "нет"',
                  ],
                },
                {
                  title: 'КЛЮЧ #3: Дневник "Я vs Маска"',
                  items: [
                    'Шаблон ежедневной записи',
                    '3 примера разборов реальных ситуаций',
                    'Как увидеть паттерны через 2-3 недели',
                    'Ловушка #3: Западня самоанализа без выхода',
                  ],
                },
              ].map((key, idx) => (
                <div key={idx} className="bg-background border border-bordersubtle rounded-lg p-6">
                  <h4 className="font-heading text-xl font-bold text-secondary mb-4">
                    {key.title}
                  </h4>
                  <ul className="font-paragraph text-textlight space-y-2 ml-4">
                    {key.items.map((item, itemIdx) => (
                      <li key={itemIdx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="font-paragraph text-textlight mt-8 p-4 bg-background border-l-4 border-secondary rounded">
              ⚠️ ВАЖНО: После каждого ключа — честный разбор, почему это не работает самостоятельно у 70-80% людей
            </p>
          </div>
        </motion.div>

        {/* Part 3: Transformation Stories */}
        <motion.div className="mb-16" {...fadeInUp}>
          <div className="bg-primary border-2 border-secondary rounded-lg p-8 md:p-12">
            <h3 className="font-heading text-3xl font-bold text-secondary mb-8">
              📖 ЧАСТЬ 3: ИСТОРИИ ТРАНСФОРМАЦИИ (стр 21-26)
            </h3>

            <div className="space-y-6">
              {[
                {
                  name: 'Анна, 37 лет',
                  mask: 'маска "Спасатель"',
                  paths: [
                    { path: 'Путь A: Соло с PDF', result: 'Капитуляция через 3 месяца' },
                    { path: 'Путь Б: Пробная сессия + 30 дней', result: 'Первые сдвиги, потолок' },
                    { path: 'Путь В: Личное сопровождение', result: 'Полная трансформация за 6 месяцев' },
                  ],
                },
                {
                  name: 'Денис, 44 года',
                  mask: 'маска "Герой"',
                  paths: [
                    { path: 'Путь A: Соло с PDF', result: 'Капитуляция через 3 месяца' },
                    { path: 'Путь Б: Пробная сессия + 30 дней', result: 'Первые сдвиги, потолок' },
                    { path: 'Путь В: Личное сопровождение', result: 'Полная трансформация за 6 месяцев' },
                  ],
                },
                {
                  name: 'Елена, 29 лет',
                  mask: 'маска "Невидимка"',
                  paths: [
                    { path: 'Путь A: Соло с PDF', result: 'Капитуляция через 3 месяца' },
                    { path: 'Путь Б: Пробная сессия + 30 дней', result: 'Первые сдвиги, потолок' },
                    { path: 'Путь В: Личное сопровождение', result: 'Полная трансформация за 6 месяцев' },
                  ],
                },
              ].map((story, idx) => (
                <div key={idx} className="bg-background border border-bordersubtle rounded-lg p-6">
                  <h4 className="font-heading text-lg font-bold text-secondary mb-2">
                    {story.name} ({story.mask})
                  </h4>
                  <div className="space-y-2">
                    {story.paths.map((pathItem, pathIdx) => (
                      <p key={pathIdx} className="font-paragraph text-textlight">
                        <span className="text-foreground font-bold">{pathItem.path}:</span> {pathItem.result}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Part 4: 30-Day Roadmap */}
        <motion.div className="mb-16" {...fadeInUp}>
          <div className="bg-primary border-2 border-secondary rounded-lg p-8 md:p-12">
            <h3 className="font-heading text-3xl font-bold text-secondary mb-8">
              🗺 ЧАСТЬ 4: ROADMAP "30 ДНЕЙ" (стр 27-28)
            </h3>

            <div className="space-y-6">
              {[
                {
                  week: 'Неделя 1',
                  title: 'Диагностика и осознание',
                  items: [
                    'День 1-2: Тест, карта симптомов, калькулятор',
                    'День 3-4: Определить тип маски',
                    'День 5-7: Начать дневник',
                  ],
                },
                {
                  week: 'Неделя 2',
                  title: 'Практика "Пауза"',
                  items: [
                    'Изучение техники "90 секунд"',
                    'Создание якорей-напоминаний',
                    'Минимум 3 успешные паузы',
                  ],
                },
                {
                  week: 'Неделя 3',
                  title: 'Практика "Микро-нет"',
                  items: [
                    'День 15-16: Нет с низким риском',
                    'День 17-18: Нет коллегам',
                    'День 19-21: Нет близким',
                  ],
                },
                {
                  week: 'Неделя 4',
                  title: 'Интеграция и оценка',
                  items: [
                    'Анализ паттернов из дневника',
                    'Оценка результатов',
                    'День 30: Точка принятия решения',
                  ],
                },
              ].map((week, idx) => (
                <div key={idx} className="bg-background border border-bordersubtle rounded-lg p-6">
                  <h4 className="font-heading text-lg font-bold text-secondary mb-2">
                    {week.week}: {week.title}
                  </h4>
                  <ul className="font-paragraph text-textlight space-y-2 ml-4">
                    {week.items.map((item, itemIdx) => (
                      <li key={itemIdx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Part 5: Three Doors */}
        <motion.div {...fadeInUp}>
          <div className="bg-primary border-2 border-secondary rounded-lg p-8 md:p-12">
            <h3 className="font-heading text-3xl font-bold text-secondary mb-8">
              🚪 ЧАСТЬ 5: ТРИ ДВЕРИ ВЫБОРА (стр 29-36)
            </h3>

            <p className="font-paragraph text-textlight mb-8">
              После 30 дней у вас есть выбор:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Дверь #1',
                  subtitle: 'Самостоятельная работа',
                  forWho: 'Для кого: лёгкие случаи, высокая самодисциплина',
                  reality: 'Реальность: 70% бросают через 2-3 месяца',
                  price: 'только PDF (2,700₽)',
                  color: 'border-bordersubtle',
                },
                {
                  title: 'Дверь #2',
                  subtitle: 'Пробная сессия + 30 дней',
                  forWho: 'Для кого: видите сдвиги, но чувствуете "потолок"',
                  reality: 'Что входит: 90 минут диагностики, персональный план, чат-поддержка',
                  price: '8,000₽ (вычитается из стоимости сопровождения)',
                  color: 'border-secondary',
                },
                {
                  title: 'Дверь #3',
                  subtitle: 'Личное сопровождение',
                  forWho: 'Для кого: готовы к глубине',
                  reality: 'Пакеты: 6 / 12 / 18 месяцев. Работа с корнями травм (EMDR, IFS, соматика)',
                  price: 'от 240,000₽',
                  color: 'border-secondary',
                },
              ].map((door, idx) => (
                <div key={idx} className={`bg-background border-2 ${door.color} rounded-lg p-6`}>
                  <h4 className="font-heading text-lg font-bold text-secondary mb-2">
                    {door.title}
                  </h4>
                  <p className="font-heading text-base font-bold text-foreground mb-4">
                    {door.subtitle}
                  </p>
                  <div className="space-y-3">
                    <p className="font-paragraph text-sm text-textlight">
                      <span className="font-bold text-foreground">Для кого:</span> {door.forWho}
                    </p>
                    <p className="font-paragraph text-sm text-textlight">
                      {door.reality}
                    </p>
                    <p className="font-heading text-base font-bold text-secondary">
                      {door.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 4: Results */}
      <section id="results" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-primary">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Результаты через 30 дней
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-heading text-2xl font-bold text-secondary mb-6">
                ✓ Что получите
              </h3>
              <ul className="space-y-4">
                {[
                  'Поймёте свой тип маски и где потеряли себя',
                  'Увидите автоматические паттерны поведения',
                  'Попробуете 3 рабочих инструмента',
                  'Получите чёткий план на месяц',
                  'Узнаете свои ограничения (где нужна помощь)',
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
              <h3 className="font-heading text-2xl font-bold text-destructive mb-6">
                ✗ Что не получите
              </h3>
              <ul className="space-y-4">
                {[
                  'Волшебную таблетку (её не существует)',
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

      {/* Section 5: Not For Whom */}
      <section id="not-for" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Для кого это не подойдёт
          </h2>

          <div className="space-y-4">
            {[
              'Вы ищете быстрое решение "прочитать и готово"',
              'Не готовы честно смотреть на себя',
              'Ждёте, что кто-то решит проблемы за вас',
              'Хотите "мотивационный пинок" без реальной работы',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-lg bg-primary border border-bordersubtle"
                {...fadeInUp}
              >
                <X className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="font-paragraph text-lg text-textbody">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.p className="font-paragraph text-lg text-secondary mt-12 text-center font-bold" {...fadeInUp}>
            Это карта для тех, кто готов идти.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 6: Author */}
      <section id="author" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-primary">
        <motion.div className="max-w-2xl mx-auto text-center" {...fadeInUp}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12">
            Об авторе
          </h2>

          <div className="mb-8">
            <Image
              src="https://static.wixstatic.com/media/3fbe1a_c4bbbadbc9f8424882abd7de1fc77c37~mv2.png?originWidth=192&originHeight=192"
              alt="Автор"
              width={200}
              height={200}
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-secondary"
            />
          </div>

          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            [Ваше имя]
          </h3>
          <p className="font-heading text-lg text-secondary mb-6">
            [Ваш титул/опыт]
          </p>

          <p className="font-paragraph text-lg text-textlight leading-relaxed">
            Я прошёл этот путь сам. 10+ лет работы с клиентами. 500+ людей вернулись к себе.
          </p>
        </motion.div>
      </section>

      {/* Section 7: Pricing & CTA */}
      <section id="pricing" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div className="max-w-2xl mx-auto text-center" {...fadeInUp}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            КАРТА СВОБОДЫ
          </h2>
          <p className="font-paragraph text-lg text-textlight mb-8">
            36 страниц практического руководства
          </p>

          <div className="mb-12">
            <p className="font-paragraph text-lg text-textlight line-through mb-2">
              Обычная цена: 4,500₽
            </p>
            <p className="font-heading text-5xl font-bold text-secondary mb-4">
              2,700₽
            </p>
            <p className="font-paragraph text-base text-textlight">
              Сегодня
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-buttonbackground hover:bg-secondary text-buttonforeground font-heading font-bold py-4 px-12 rounded-lg text-xl transition-colors mb-8 w-full md:w-auto"
          >
            ПОЛУЧИТЬ КАРТУ СВОБОДЫ
          </motion.button>

          <p className="font-paragraph text-base text-textlight">
            Гарантия: 14 дней возврата денег, если PDF вам не подошёл
          </p>
        </motion.div>
      </section>

      {/* Section 8: FAQ */}
      <section id="faq" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-primary">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Часто задаваемые вопросы
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Это психотерапия?',
                a: 'Нет, это самостоятельная работа с инструментами. Психотерапия — в разделе "Личное сопровождение".',
              },
              {
                q: 'За какое время увижу результаты?',
                a: 'Первые инсайты — в процессе заполнения (1-2 часа). Изменения в поведении — через 2-4 недели практики.',
              },
              {
                q: 'Подойдёт ли мне, если у меня тяжёлая ситуация?',
                a: 'PDF подходит для работы с паттернами и масками. Если у вас клиническая депрессия, ПТСР, суицидальные мысли — обратитесь к специалисту.',
              },
              {
                q: 'Чем отличается от других курсов?',
                a: 'Это не курс, а практическое руководство. Вы работаете в своём темпе, без сроков и групповых марафонов.',
              },
              {
                q: 'Что если я не закончу за 30 дней?',
                a: 'Нет никаких сроков. Это ваш личный процесс. 30 дней — рекомендуемый минимум для первых результатов.',
              },
              {
                q: 'Можно ли вернуть деньги?',
                a: 'Да, 14 дней безусловного возврата. Если PDF вам не подошёл — полный возврат без вопросов.',
              },
              {
                q: 'Как проходят сессии в "Личном сопровождении"?',
                a: 'Онлайн или офлайн, в зависимости от вашего выбора. Еженедельные встречи 60-90 минут. Между сессиями — чат-поддержка.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-background border border-bordersubtle rounded-lg overflow-hidden"
                {...fadeInUp}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-primary transition-colors"
                >
                  <h3 className="font-heading text-lg font-bold text-foreground text-left">
                    {faq.q}
                  </h3>
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
                    <p className="font-paragraph text-textlight">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div className="max-w-2xl mx-auto text-center" {...fadeInUp}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
            Готовы начать?
          </h2>
          <p className="font-paragraph text-lg text-textlight mb-12">
            Ваш путь к себе начинается с одного клика
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-buttonbackground hover:bg-secondary text-buttonforeground font-heading font-bold py-4 px-12 rounded-lg text-xl transition-colors"
          >
            ПОЛУЧИТЬ КАРТУ СВОБОДЫ
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
