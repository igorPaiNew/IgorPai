import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

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
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center px-6 md:px-12 py-20 border-b border-bordersubtle/30">
        <div className="max-w-[100rem] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-textlight/30 bg-primary/30 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-heading tracking-widest uppercase text-textlight">Welcome</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-primary-foreground mb-8 tracking-tight">
              Transform Your <br />
              <span className="text-secondary">Inner World</span>
            </h1>

            <p className="font-paragraph text-lg md:text-xl text-textbody/90 max-w-2xl mx-auto leading-relaxed mb-12">
              Discover powerful tools and resources designed to help you achieve clarity, take meaningful action, and live with purpose.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/product">
                <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 h-14 px-8 rounded-none text-lg font-heading tracking-wide transition-all duration-300 hover:pr-10 group">
                  Explore Our Product
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="bg-transparent border border-textlight/30 text-textlight hover:bg-textlight/10 h-14 px-8 rounded-none text-lg font-heading tracking-wide"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="w-full max-w-[120rem] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-6">
            Why Choose Us
          </h2>
          <p className="text-textlight/80 max-w-2xl mx-auto text-lg">
            We provide comprehensive solutions to help you navigate life's challenges with confidence and clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8 text-secondary" />,
              title: "Fast & Effective",
              desc: "Get results in just 60 minutes with our proven methodology."
            },
            {
              icon: <Users className="w-8 h-8 text-secondary" />,
              title: "Community Driven",
              desc: "Join thousands of people who have transformed their lives."
            },
            {
              icon: <Award className="w-8 h-8 text-secondary" />,
              title: "Proven Results",
              desc: "Our approach is backed by psychology and real-world success stories."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 md:p-12 hover:bg-white/10 transition-colors duration-500 group"
            >
              <div className="mb-6 group-hover:text-secondary transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-heading text-2xl text-primary-foreground mb-4 group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="font-paragraph text-textbody/80 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="w-full bg-[#263326] py-24 md:py-32 border-y border-bordersubtle/20">
        <div className="max-w-[120rem] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-5xl md:text-6xl text-primary-foreground mb-8">
                Ready to Start Your <span className="text-secondary">Journey?</span>
              </h2>
              <p className="text-textlight/80 text-lg mb-8 leading-relaxed">
                Discover our comprehensive protocol designed to help you find clarity and take meaningful action towards your goals.
              </p>
              <Link to="/product">
                <Button className="bg-secondary text-primary hover:bg-secondary/90 h-14 px-8 text-lg font-heading tracking-wide">
                  View Our Product
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-sm overflow-hidden"
            >
              <Image
                src="https://static.wixstatic.com/media/3fbe1a_0ee90091fadf49c2b3c81d8008457aac~mv2.png?originWidth=1152&originHeight=896"
                alt="Journey to clarity"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}