import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary border-t border-bordersubtle">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl text-primary-foreground mb-4">
              Ясность
            </h3>
            <p className="font-paragraph text-base text-textbody leading-relaxed">
              Честный протокол для самостоятельной работы. Получите ясность за 60 минут.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-primary-foreground mb-4">
              Навигация
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors"
              >
                Главная
              </Link>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors text-left"
              >
                О протоколе
              </button>
              <Link
                to="/store"
                className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors"
              >
                Магазин
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl text-primary-foreground mb-4">
              Контакты
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-textlight" />
              <a
                href="mailto:info@clarity60.com"
                className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors"
              >
                info@clarity60.com
              </a>
            </div>
            <p className="font-paragraph text-sm text-textlight leading-relaxed">
              Напишите слово «ЯСНОСТЬ» после оплаты для получения доступа к протоколу
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-bordersubtle">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-textlight">
              © {new Date().getFullYear()} Ясность. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-paragraph text-sm text-textlight hover:text-primary-foreground transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="font-paragraph text-sm text-textlight hover:text-primary-foreground transition-colors"
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
