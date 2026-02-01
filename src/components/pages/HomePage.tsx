import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary text-textbody font-paragraph selection:bg-secondary selection:text-white overflow-clip relative">
      <NoiseOverlay />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-center px-6 md:px-12 py-20 border-b border-bordersubtle/30">
        <div className="max-w-[100rem] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-primary-foreground mb-8 tracking-tight">
              Ты не сломан.
              <br />
              <span className="text-secondary">Ты просто живёшь не свою жизнь.</span>
            </h1>

            <p className="font-paragraph text-lg md:text-xl text-textbody/85 max-w-3xl mx-auto leading-relaxed mb-12">
              Коучинг и психологическое сопровождение для тех, кто устал прятаться, сомневаться и жить на паузе — и готов вернуться к себе по-настоящему.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 h-14 px-8 rounded-none text-lg font-heading tracking-wide transition-all duration-300 hover:pr-10 group">
                Записаться на консультацию
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- THE PROBLEM SECTION --- */}
      <section className="w-full max-w-[100rem] mx-auto px-6 md:px-12 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-8">
            Ты узнаёшь себя в этом?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {[
            "Ты много понимаешь, но мало меняешь",
            "Ты чувствуешь потенциал, но не реализуешь его",
            "Ты живёшь «правильно», но без ощущения жизни",
            "Ты боишься сделать шаг — и ненавидишь себя за это"
          ].map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-white/8 transition-colors duration-500"
            >
              <p className="font-paragraph text-lg md:text-xl text-textbody/90 leading-relaxed">
                {problem}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- THE TURNING POINT --- */}
      <section className="w-full bg-[#263326] py-24 md:py-32 border-y border-bordersubtle/20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-8">
              В чём настоящая проблема?
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="font-paragraph text-lg text-textbody/85 mb-6 leading-relaxed">
                Проблема не в лени, не в дисциплине и не в знаниях.
              </p>
              <p className="font-heading text-2xl md:text-3xl text-secondary leading-relaxed">
                Проблема — в разрыве между тем, кто ты есть, и тем, кем ты живёшь.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT MY APPROACH --- */}
      <section className="w-full max-w-[100rem] mx-auto px-6 md:px-12 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-4">
            Как я работаю
          </h2>
          <p className="text-textlight/70 text-lg">
            Четыре принципа, которые лежат в основе каждой сессии
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            { title: "Честный разговор без масок", desc: "Без позёрства, без фильтров. Только правда о том, что происходит." },
            { title: "Работа с убеждениями и страхами", desc: "Мы находим те внутренние роли и ограничения, которые держат тебя в клетке." },
            { title: "Соединение разума, эмоций и инстинкта", desc: "Не только думаешь — чувствуешь и действуешь. Целостный подход." },
            { title: "Ясность → Решение → Действие", desc: "Не бесконечный анализ. Мы движемся вперёд, даже если не всё ясно." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border-l-2 border-secondary pl-8"
            >
              <h3 className="font-heading text-2xl text-primary-foreground mb-4">
                {item.title}
              </h3>
              <p className="font-paragraph text-textbody/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- ABOUT ME --- */}
      <section className="w-full bg-white/3 py-24 md:py-32 border-y border-bordersubtle/20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-8">
                Кто я и почему я это делаю
              </h2>
              <div className="space-y-6">
                <p className="font-paragraph text-lg text-textbody/85 leading-relaxed">
                  Я прошёл собственную глубокую трансформацию. Знаю, что такое страх, потеря опоры и смена идентичности.
                </p>
                <p className="font-paragraph text-lg text-textbody/85 leading-relaxed">
                  Работаю как коуч и психолог. Не даю мотивацию — помогаю вернуться к себе. Помогаю людям разобраться в себе, найти свой путь и начать жить по-настоящему.
                </p>
                <p className="font-paragraph text-lg text-textbody/85 leading-relaxed">
                  Я верю, что каждый человек уже знает, что ему нужно. Моя задача — помочь услышать этот голос.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-sm overflow-hidden"
            >
              <Image
                src="https://static.wixstatic.com/media/3fbe1a_7609d62a16fd4d519dfd0c6eb2a8ec5a~mv2.png?originWidth=512&originHeight=384"
                alt="Трансформационный коуч"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHAT YOU GET --- */}
      <section className="w-full max-w-[100rem] mx-auto px-6 md:px-12 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-4">
            Что ты получишь
          </h2>
          <p className="text-textlight/70 text-lg">
            Реальные результаты, которые меняют жизнь
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Внутренняя ясность — понимание того, кто ты на самом деле",
            "Чувство опоры — стабильность и уверенность в себе",
            "Честное понимание себя — без иллюзий и масок",
            "Способность принимать решения — даже в неопределённости",
            "Выход из застоя — движение вперёд, несмотря на страхи",
            "Возвращение к себе — жизнь, которая действительно твоя"
          ].map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <Check className="w-6 h-6 text-secondary" />
              </div>
              <p className="font-paragraph text-lg text-textbody/85 leading-relaxed">
                {outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- HOW TO START --- */}
      <section className="w-full bg-[#263326] py-24 md:py-32 border-y border-bordersubtle/20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-4">
              Как начать
            </h2>
            <p className="text-textlight/70 text-lg">
              Три простых шага к переменам
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Оставить заявку", desc: "Расскажи немного о себе и о том, что тебя привело сюда." },
              { step: "2", title: "Первая консультация", desc: "Мы встречаемся, говорим честно, разбираемся в ситуации." },
              { step: "3", title: "Решение вместе", desc: "Ты поймёшь — работаем мы дальше или нет. Никакого давления." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white/5 border border-white/10 p-8 md:p-10 text-center hover:bg-white/8 transition-colors duration-500"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-secondary text-secondary font-heading text-xl mb-6">
                  {item.step}
                </div>
                <h3 className="font-heading text-2xl text-primary-foreground mb-4">
                  {item.title}
                </h3>
                <p className="font-paragraph text-textbody/80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="w-full max-w-[100rem] mx-auto px-6 md:px-12 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-8">
            Если ты читаешь это — значит, что-то внутри тебя уже готово к переменам.
          </h2>
          <p className="font-paragraph text-lg text-textbody/85 max-w-2xl mx-auto leading-relaxed mb-12">
            Первый шаг — это всегда самый сложный. Но ты уже здесь. Это уже что-то.
          </p>
          <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 h-14 px-8 rounded-none text-lg font-heading tracking-wide transition-all duration-300 hover:pr-10 group">
            Начать с консультации
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </section>

    </div>
  );
}