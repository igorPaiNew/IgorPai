import { useState } from 'react';
import { ChevronDown, Star, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

export default function LandingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const testimonials = [
    {
      rating: 5,
      text: 'Калькулятор потерь убил — 20 часов в неделю на «не своё». Это целый рабочий год! Впервые увидела это так ясно.',
      author: 'Анна, 37 лет',
      mask: 'Маска «Спасатель»',
    },
    {
      rating: 5,
      text: 'Техника «90 секунд» изменила отношения с женой. Просто стал останавливаться перед срывом. Звучит банально — но работает.',
      author: 'Денис, 44 года',
      mask: 'Маска «Герой»',
    },
    {
      rating: 5,
      text: 'Впервые назвала своё состояние правильно. Сразу стало понятно, почему боюсь показывать работы. Переломный момент.',
      author: 'Елена, 29 лет',
      mask: 'Маска «Невидимка»',
    },
  ];

  const checkpoints = [
    'Говоришь «да», когда внутри кричит «нет»',
    'Хроническая усталость — без медицинских причин',
    'Снаружи «всё хорошо» — но внутри пусто',
    'Не помнишь, когда последний раз делал что-то только для себя',
    'Боишься показать настоящего себя — вдруг не примят',
    'Живёшь «на автомате» — не по выбору, а по инерции',
    'Не знаешь, чего на самом деле хочешь от жизни',
    'Чувствуешь, что живёшь не своей жизнью',
  ];

  const insideItems = [
    {
      icon: '📍',
      title: 'Диагностика',
      description: 'Тест 15 вопросов + 4 типа масок + калькулятор реальных потерь (время, деньги, здоровье)',
    },
    {
      icon: '🔑',
      title: 'Метод «3 ключа»',
      description: 'Пауза осознанности, граница «НЕТ» с 5 скриптами, дневник «Я vs Маска» — всё с шаблонами',
    },
    {
      icon: '📖',
      title: 'Истории трансформации',
      description: '3 реальных истории через 3 пути. Анна, Денис, Елена — узнай себя и выбери свой путь',
    },
    {
      icon: '🗺',
      title: 'Roadmap 30 дней',
      description: 'Пошаговый план: что делать каждую неделю и где обычно бросают',
    },
    {
      icon: '🚪',
      title: 'Три двери выбора',
      description: 'После 30 дней — чёткие варианты: соло, пробная сессия, или глубокое сопровождение',
    },
  ];

  const bonuses = [
    {
      title: 'Гайд «5 телесных практик»',
      description: 'PDF, 15 страниц. Практики снятия маски через тело.',
      price: 'Бесплатно',
    },
    {
      title: 'Медитация «Возвращение к себе»',
      description: 'Аудио 20 минут. Встреча с настоящим собой.',
      price: 'Бесплатно',
    },
    {
      title: 'Чек-лист «10 признаков»',
      description: 'Быстрая проверка: живёете вы собой или в маске.',
      price: 'Бесплатно',
    },
  ];

  const faqs = [
    {
      question: 'Это психотерапия?',
      answer: 'Нет, это практическое руководство для самопознания и личного развития. Если вам нужна профессиональная психологическая помощь, обратитесь к специалисту.',
    },
    {
      question: 'За какое время увижу результаты?',
      answer: 'Первые инсайты приходят уже при прохождении диагностики. Заметные изменения в поведении — обычно в течение 2-3 недель регулярной практики.',
    },
    {
      question: 'Подойдёт ли при тяжёлой ситуации?',
      answer: 'Карта — хороший старт для осознания. При кризисных состояниях рекомендуем дополнить работу с профессиональным психологом.',
    },
    {
      question: 'Чем отличается от курсов и марафонов?',
      answer: 'Это не марафон с дедлайнами. Это карта, которую вы изучаете в своём темпе. Никаких видеолекций — только практика и шаблоны.',
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Да, 14-дневная гарантия возврата без вопросов. Если карта вам не подошла — полный возврат.',
    },
  ];

  const notForYou = [
    'Хотите "прочитать и готово" без практики',
    'Не готовы честно смотреть на себя',
    'Ждёте, что кто-то решит проблемы за вас',
  ];

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col gap-8 items-center text-center">
          {/* Bonus Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-lg px-4 py-2 w-fit"
          >
            <span className="text-sm font-paragraph">🎁 Бонусы включены при заказе сегодня</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4 max-w-3xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
              Ты устал жить
              <br />
              <span className="text-secondary">не своей жизнью.</span>
            </h1>
            <p className="font-paragraph text-lg md:text-xl text-textlight mx-auto">
              «Карта Свободы» — практическое руководство, которое покажет где именно ты потерял себя и даст конкретный план возвращения.
            </p>
          </motion.div>

          {/* Pricing and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3 justify-center">
                <span className="text-3xl font-heading font-bold text-secondary">2,700 ₽</span>
                <span className="text-lg text-textlight line-through">4,500 ₽</span>
              </div>
              <p className="text-sm text-textlight text-center">≈ $27</p>
            </div>
            <button className="bg-secondary text-primary font-heading font-bold px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors">
              ПОЛУЧИТЬ КАРТУ СВОБОДЫ →
            </button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 text-sm text-textlight font-paragraph justify-center"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-secondary" />
              <span>🔒 Гарантия возврата 14 дней</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-secondary" />
              <span>Мгновенный доступ</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-secondary" />
              <span>PDF + 3 бонуса</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="w-full bg-bordersubtle/30 py-12 md:py-16">
        <div className="max-w-[120rem] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <div className="text-center">
              <p className="font-heading text-lg font-bold mb-2">500+ человек уже начали путь к себе</p>
              <p className="text-textlight text-sm">Смотреть историю · ≈ 8 минут</p>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-16 md:py-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Отзывы
          <br />
          <span className="text-secondary">Что говорят те, кто уже прошёл</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bordersubtle/30 border border-bordersubtle rounded-lg p-6 space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-paragraph text-textbody">{testimonial.text}</p>
              <div className="pt-4 border-t border-bordersubtle">
                <p className="font-heading font-bold">{testimonial.author}</p>
                <p className="text-sm text-textlight">{testimonial.mask}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Checkpoints Section */}
      <section className="w-full bg-bordersubtle/30 py-16 md:py-24">
        <div className="max-w-[120rem] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Узнаёете себя?</h2>
              <p className="font-paragraph text-textlight text-lg">
                Если хотя бы 3 пункта про вас — эта карта для вас
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {checkpoints.map((checkpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <p className="font-paragraph text-textbody">{checkpoint}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-16 md:py-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold mb-4"
        >
          Что внутри
        </motion.h2>
        <p className="font-paragraph text-textlight text-lg mb-12">36 страниц. Без воды.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insideItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bordersubtle/30 border border-bordersubtle rounded-lg p-6 space-y-4"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="font-heading text-xl font-bold">{item.title}</h3>
              <p className="font-paragraph text-textlight">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-bordersubtle/30 border border-bordersubtle rounded-lg p-8"
        >
          <p className="font-paragraph text-textbody leading-relaxed">
            <span className="font-bold">⚠️ Честно:</span> PDF не решит всё. Он покажет карту — где вы сейчас и куда можно прийти. После каждого ключа — честный разбор почему 70% застревают без поддержки.
          </p>
        </motion.div>
      </section>

      {/* Author Section */}
      <section className="w-full bg-bordersubtle/30 py-16 md:py-24">
        <div className="max-w-[120rem] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center">
              Автор
              <br />
              <span className="text-secondary">Кто за этим стоит</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-bordersubtle rounded-lg aspect-square flex items-center justify-center">
                <Image
                  src="https://static.wixstatic.com/media/3fbe1a_3e50d486a0cc4f86bbb12c3e6578e260~mv2.png?originWidth=384&originHeight=384"
                  alt="Автор"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-2">[Ваше имя]</h3>
                  <p className="text-secondary font-heading font-bold">[Психолог / Коуч]</p>
                </div>

                <p className="font-paragraph text-textbody leading-relaxed">
                  Я прошёл этот путь сам — развод, увольнение, потеря себя. Сегодня помогаю людям не ждать «дна», а начинать возвращение к себе осознанно — раньше, чем станет невыносимо.
                </p>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-bordersubtle">
                  <div>
                    <p className="font-heading text-3xl font-bold text-secondary">500+</p>
                    <p className="text-sm text-textlight">клиентов</p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-bold text-secondary">10+</p>
                    <p className="text-sm text-textlight">лет опыта</p>
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-bold text-secondary">90%</p>
                    <p className="text-sm text-textlight">держат результат</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-16 md:py-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold mb-4"
        >
          Бонусы
        </motion.h2>
        <p className="font-paragraph text-textlight text-lg mb-12">При заказе сегодня</p>

        <div className="space-y-6 mb-12">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bordersubtle/30 border border-bordersubtle rounded-lg p-6 flex justify-between items-start"
            >
              <div>
                <h3 className="font-heading font-bold mb-2">{bonus.title}</h3>
                <p className="font-paragraph text-textlight">{bonus.description}</p>
              </div>
              <span className="text-secondary font-heading font-bold whitespace-nowrap ml-4">{bonus.price}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary/10 border border-secondary/30 rounded-lg p-6"
        >
          <p className="font-heading font-bold mb-2">Промокод SVOBODA</p>
          <p className="font-paragraph text-textlight">при бронировании сессии в течение 7 дней</p>
        </motion.div>
      </section>

      {/* Pricing Card Section */}
      <section className="w-full bg-bordersubtle/30 py-16 md:py-24">
        <div className="max-w-[120rem] mx-auto px-4 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-bordersubtle rounded-lg p-8 md:p-12 space-y-8 max-w-2xl w-full"
          >
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Начни сегодня</h2>
              <p className="font-heading text-2xl font-bold text-secondary">Карта Свободы</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="font-heading text-4xl font-bold text-secondary">2,700 ₽</span>
                <span className="text-lg text-textlight line-through">4,500 ₽</span>
              </div>
              <p className="text-textlight">≈ $27</p>
            </div>

            <div className="space-y-3 border-y border-bordersubtle py-6">
              <div className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="font-paragraph">PDF «Карта Свободы» — 36 страниц</p>
              </div>
              <div className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="font-paragraph">Гайд «5 телесных практик»</p>
              </div>
              <div className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="font-paragraph">Медитация «Возвращение к себе» (20 мин)</p>
              </div>
              <div className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <p className="font-paragraph">Чек-лист «10 признаков жизни в маске»</p>
              </div>
            </div>

            <button className="w-full bg-secondary text-primary font-heading font-bold px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors text-lg">
              ПОЛУЧИТЬ КАРТУ СВОБОДЫ →
            </button>

            <p className="text-center text-sm text-textlight">
              🔒 Гарантия возврата 14 дней — без вопросов
            </p>
          </motion.div>
        </div>
      </section>

      {/* Not For You Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">
            Это не для вас, если:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notForYou.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bordersubtle/30 border border-bordersubtle rounded-lg p-6 flex gap-4 items-start"
              >
                <X className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="font-paragraph text-textbody">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-bordersubtle/30 py-16 md:py-24">
        <div className="max-w-[120rem] mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold mb-12"
          >
            Вопросы
          </motion.h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background border border-bordersubtle rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-bordersubtle/20 transition-colors text-left"
                >
                  <h3 className="font-heading font-bold">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 border-t border-bordersubtle bg-bordersubtle/10"
                  >
                    <p className="font-paragraph text-textbody">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Что-то внутри тебя
            <br />
            <span className="text-secondary">уже хочет измениться.</span>
          </h2>

          <p className="font-paragraph text-lg text-textlight max-w-2xl mx-auto">
            Ты уже здесь. Ты дочитал до конца.
            <br />
            Тот голос внутри, который говорит «хватит, пора домой» — не игнорируй его.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-secondary text-primary font-heading font-bold px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors">
              НАЧАТЬ СЕГОДНЯ — 2,700 ₽ →
            </button>
          </div>

          <p className="text-sm text-textlight">
            🔒 Гарантия возврата 14 дней · Мгновенный доступ
          </p>
        </motion.div>
      </section>
    </div>
  );
}
