import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#0F0F12] border-b border-[#5A6A4A] sticky top-0 z-40">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading text-2xl md:text-3xl text-[#C2B280] font-bold">
              Ясность
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('approach')}
              className="font-paragraph text-base text-[#EDEDED] hover:text-[#C2B280] transition-colors"
            >
              Подход
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="font-paragraph text-base text-[#EDEDED] hover:text-[#C2B280] transition-colors"
            >
              Обо мне
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#C2B280] text-[#0F0F12] px-6 py-2 font-paragraph font-semibold rounded-lg hover:bg-[#D4C4A0] transition-colors"
            >
              Начать
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#C2B280]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-[#5A6A4A]">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('approach')}
                className="font-paragraph text-base text-[#EDEDED] hover:text-[#C2B280] transition-colors text-left py-2"
              >
                Подход
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-paragraph text-base text-[#EDEDED] hover:text-[#C2B280] transition-colors text-left py-2"
              >
                Обо мне
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#C2B280] text-[#0F0F12] px-6 py-3 font-paragraph font-semibold rounded-lg hover:bg-[#D4C4A0] transition-colors w-full"
              >
                Начать
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
