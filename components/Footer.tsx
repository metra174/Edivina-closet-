import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ModaFlex</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sua loja online favorita para roupas, calçados e acessórios de luxo com preços que cabem no bolso.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Início</a></li>
              <li><a href="#catalog" className="hover:text-brand-primary transition-colors">Catálogo</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>+244 932 846 639</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>contato@edivinacloset.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-primary" />
                <span>Luanda, Angola</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Novidades</h4>
            <p className="text-gray-400 text-sm mb-4">Receba ofertas exclusivas no seu email.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="bg-brand-card border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-primary w-full"
              />
              <button className="bg-brand-primary hover:bg-brand-primaryHover text-white px-4 py-2 rounded-r-lg text-sm font-medium">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ModaFlex - Edivina Closet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;