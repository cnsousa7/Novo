import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            CN Sousa TEC
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Início
            </Link>

            {/* Serviços Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                Serviços
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
                  <Link
                    href="/servicos/manutencao-eletrica"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    Manutenção Elétrica
                  </Link>
                  <Link
                    href="/servicos/manutencao-eletronica"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    Manutenção Eletrônica
                  </Link>
                  <Link
                    href="/servicos/manutencao-hidraulica"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    Manutenção Hidráulica
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#contato"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contato
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="https://wa.me/5561999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between"
              >
                Serviços
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    href="/servicos/manutencao-eletrica"
                    className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    Manutenção Elétrica
                  </Link>
                  <Link
                    href="/servicos/manutencao-eletronica"
                    className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    Manutenção Eletrônica
                  </Link>
                  <Link
                    href="/servicos/manutencao-hidraulica"
                    className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    Manutenção Hidráulica
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#contato"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>

            <a
              href="https://wa.me/5561999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold text-center transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Orçamento
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
