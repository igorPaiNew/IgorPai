import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-primary/95 backdrop-blur-sm border-b border-bordersubtle sticky top-0 z-40">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading text-2xl md:text-3xl text-primary-foreground">
              Ясность
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors"
            >
              О протоколе
            </button>
            <Link
              to="/store"
              className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors"
            >
              Магазин
            </Link>
            <Button
              onClick={() => window.location.href = '/store'}
              className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 px-6 py-2 font-paragraph"
            >
              Получить протокол
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-bordersubtle">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors text-left py-2"
              >
                О протоколе
              </button>
              <Link
                to="/store"
                className="font-paragraph text-base text-textbody hover:text-primary-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Магазин
              </Link>
              <Button
                onClick={() => {
                  window.location.href = '/store';
                  setMobileMenuOpen(false);
                }}
                className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 w-full py-3 font-paragraph"
              >
                Получить протокол
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
