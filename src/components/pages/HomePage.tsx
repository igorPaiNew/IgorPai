import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0F0F12] text-[#EDEDED] min-h-screen">
      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
              ТЫ НЕ СЛОМАН.
            </h1>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-[#C2B280]">
              ТЫ ПРОСТО ЖИВЁШЬ НЕ СВОЮ ЖИЗНЬ.
            </h1>
          </div>

          {/* Subheadline */}
          <p className="font-paragraph text-lg md:text-xl leading-relaxed max-w-3xl text-[#EDEDED] opacity-90">
            Коучинг и психологическое сопровождение для тех, кто устал прятаться, сомневаться и жить на паузе — и готов вернуться к себе по-настоящему.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="bg-[#C2B280] text-[#0F0F12] px-8 py-4 font-paragraph font-semibold text-lg rounded-lg hover:bg-[#D4C4A0] transition-colors flex items-center gap-3 group"
            >
              Начать с разговора
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Trust Line */}
          <p className="font-paragraph text-sm md:text-base text-[#C9D6B9] max-w-2xl pt-4">
            Без давления. Без обязательств. Первая встреча — чтобы понять, есть ли смысл идти дальше.
          </p>
        </motion.div>
      </section>

      {/* Problem Recognition Section */}
      <section id="problems" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <p className="font-paragraph text-sm uppercase tracking-widest text-[#C2B280]">Узнаёшь себя?</p>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight">
              Ты живёшь, но не чувствуешь жизни
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              'Ты многое понимаешь, но почти ничего не меняешь',
              'Ты чувствуешь потенциал, но живёшь вполсилы',
              'Ты знаешь, что можешь больше — и злишься на себя за бездействие',
              'Ты живёшь "правильно", но не чувствуешь жизни',
            ].map((statement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-[#C2B280] pl-6 py-4"
              >
                <p className="font-paragraph text-lg leading-relaxed">
                  {statement}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Reframe / Turning Point Section */}
      <section id="reframe" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-[#1A1A1F]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-8"
        >
          <div className="space-y-6">
            <p className="font-paragraph text-base uppercase tracking-widest text-[#C2B280]">Суть проблемы</p>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight">
              Проблема не в дисциплине, не в мотивации и не в знаниях.
            </h2>
            <p className="font-heading text-3xl md:text-4xl leading-tight text-[#C2B280]">
              Проблема — в разрыве между тем, кто ты есть, и тем, кем ты живёшь.
            </p>
          </div>

          <p className="font-paragraph text-lg leading-relaxed text-[#C9D6B9] pt-6">
            Когда внутри тебя живёт один человек, а снаружи ты играешь роль другого — энергия уходит на поддержание маски. Остаётся усталость, сомнение и ощущение, что жизнь проходит мимо.
          </p>
        </motion.div>
      </section>

      {/* How I Work Section */}
      <section id="approach" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <p className="font-paragraph text-sm uppercase tracking-widest text-[#C2B280]">Мой подход</p>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight">
              Как я работаю
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: 'Честный разговор без масок',
                description: 'Я не даю советы и не учу. Я слушаю и задаю вопросы, которые помогают тебе увидеть то, что ты уже знаешь, но не осознаёшь.'
              },
              {
                title: 'Работа со страхами и убеждениями',
                description: 'Мы разбираемся, какие роли ты играешь, какие убеждения тебя держат, и откуда они взялись.'
              },
              {
                title: 'Соединение разума, эмоций и инстинкта',
                description: 'Решения, которые работают, — это те, которые согласованы со всеми частями тебя.'
              },
              {
                title: 'Ясность → решение → действие',
                description: 'Мы не зависаем на анализе. Когда ясность появляется, мы переходим к конкретным шагам.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="font-heading text-xl md:text-2xl text-[#C2B280]">
                  {item.title}
                </h3>
                <p className="font-paragraph text-base leading-relaxed text-[#C9D6B9]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-[#1A1A1F]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-8"
        >
          <div className="space-y-2">
            <p className="font-paragraph text-sm uppercase tracking-widest text-[#C2B280]">Обо мне</p>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight">
              Я не гуру. Я проводник.
            </h2>
          </div>

          <div className="space-y-6 font-paragraph text-lg leading-relaxed text-[#C9D6B9]">
            <p>
              Я прошёл собственную глубокую трансформацию. Знаю, что такое потеря опоры, смена идентичности и ощущение, что жизнь разваливается.
            </p>
            <p>
              Работаю как коуч и психолог. Не даю мотивацию — помогаю вернуть ясность и опору. Помогаю людям услышать собственный голос, а не голос общества, родителей или собственного страха.
            </p>
            <p>
              Мой опыт — это мой инструмент. Моя честность — это моё обещание.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What You Gain Section */}
      <section id="results" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <p className="font-paragraph text-sm uppercase tracking-widest text-[#C2B280]">Результаты</p>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight">
              Что ты получишь
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Внутренняя ясность',
              'Чувство опоры',
              'Честное понимание себя',
              'Способность принимать решения',
              'Выход из застоя',
              'Возвращение к себе',
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1F] p-6 rounded-lg border border-[#5A6A4A]"
              >
                <p className="font-paragraph text-lg font-semibold text-[#C2B280]">
                  {result}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How to Start Section */}
      <section id="start" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28 bg-[#1A1A1F]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-12"
        >
          <div className="space-y-2">
            <p className="font-paragraph text-sm uppercase tracking-widest text-[#C2B280]">Начало пути</p>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight">
              Как начать
            </h2>
          </div>

          <div className="space-y-8">
            {[
              { step: '01', title: 'Оставить заявку', description: 'Расскажи немного о себе и о том, что тебя привело сюда.' },
              { step: '02', title: 'Провести первую встречу', description: 'Мы поговорим без обязательств. Я слушаю, ты рассказываешь.' },
              { step: '03', title: 'Понять, подходим ли мы друг другу', description: 'Честный разговор о том, могу ли я помочь и готов ли ты работать.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#C2B280] text-[#0F0F12] font-heading font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl md:text-2xl text-[#EDEDED] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-base leading-relaxed text-[#C9D6B9]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="w-full max-w-[120rem] mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center"
        >
          <p className="font-paragraph text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-[#C9D6B9]">
            Если ты читаешь это — значит, внутри тебя уже есть готовность к переменам.
          </p>

          <p className="font-paragraph text-base text-[#C2B280]">
            Остаётся только первый шаг.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('contact')}
            className="bg-[#C2B280] text-[#0F0F12] px-8 py-4 font-paragraph font-semibold text-lg rounded-lg hover:bg-[#D4C4A0] transition-colors flex items-center gap-3 group mx-auto"
          >
            Начать с разговора
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <p className="font-paragraph text-sm text-[#C9D6B9] pt-4">
            Без давления. Без обязательств.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
