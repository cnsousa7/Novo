import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 overflow-hidden rounded-full border border-blue-600">
                <Image
                  src="/logo.jpg"
                  alt="Cnsousatec logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Cnsousatec</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Especialistas em manutenção elétrica, eletrônica e hidráulica no Distrito Federal.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicos/manutencao-eletrica"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Manutenção Elétrica
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/manutencao-eletronica"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Manutenção Eletrônica
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/manutencao-hidraulica"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Manutenção Hidráulica
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>(61) 99274-3428</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Cnsousatec@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Brasília - DF</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Cnsousatec. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
