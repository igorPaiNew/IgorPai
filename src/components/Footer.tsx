import { Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#0F0F12] border-t border-[#5A6A4A]">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl text-[#C2B280] mb-4 font-bold">Igor Pai</h3>
            <p className="font-paragraph text-base text-[#C9D6B9] leading-relaxed">
              Коучинг и психологическое сопровождение для тех, кто готов вернуться к себе по-настоящему.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-[#C2B280] mb-4 font-bold">
              Навигация
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="font-paragraph text-base text-[#EDEDED] hover:text-[#C2B280] transition-colors"
              >
                Главная
              </Link>
              <button
                onClick={() => scrollToSection('approach')}
                className="font-paragraph text-base text-[#EDEDED] hover:text-[#C2B280] transition-colors text-left"
              >
                Подход
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-paragraph text-base text-[#EDEDED] hover:text-[#C2B280] transition-colors text-left"
              >
                Обо мне
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl text-[#C2B280] mb-4 font-bold">
              Контакты
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-[#C2B280]" />
              <a
                href="mailto:hello@clarity.coach"
                className="font-paragraph text-base text-[#EDEDED] hover:text-[#C2B280] transition-colors"
              >
                hello@clarity.coach
              </a>
            </div>
            <p className="font-paragraph text-sm text-[#C9D6B9] leading-relaxed mb-6">
              Напишите мне, если у вас есть вопросы.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9D6B9] hover:text-[#C2B280] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9D6B9] hover:text-[#C2B280] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9D6B9] hover:text-[#C2B280] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9D6B9] hover:text-[#C2B280] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#5A6A4A]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-[#C9D6B9]">
              © {new Date().getFullYear()} Ясность. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-paragraph text-sm text-[#C9D6B9] hover:text-[#C2B280] transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="font-paragraph text-sm text-[#C9D6B9] hover:text-[#C2B280] transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
