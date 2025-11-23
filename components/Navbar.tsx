import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, Lock, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/244932846639', '_blank');
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-brand-dark/90 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-primary p-2 rounded-lg group-hover:bg-brand-primaryHover transition-colors">
              <ShoppingBag className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">ModaFlex</span>
              <span className="text-[10px] text-brand-muted uppercase tracking-widest -mt-1">Edivina Closet</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-brand-primary transition-colors text-sm font-medium">Sobre</a>
            <a href="#catalog" className="text-gray-300 hover:text-brand-primary transition-colors text-sm font-medium">Coleção</a>
            <a href="#benefits" className="text-gray-300 hover:text-brand-primary transition-colors text-sm font-medium">Benefícios</a>
            <Link to="/admin" className="text-gray-300 hover:text-brand-primary flex items-center gap-1 text-sm font-medium">
              <Lock className="w-3 h-3" /> Admin
            </Link>
            
            <button 
              onClick={handleWhatsApp}
              className="bg-brand-primary hover:bg-brand-primaryHover text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-brand-primary/20"
            >
              <Phone className="w-4 h-4" />
              Entrar em Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-brand-card border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Sobre a Marca</a>
            <a href="#catalog" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Ver Produtos</a>
            <Link to="/admin" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Painel Admin</Link>
            <button 
              onClick={handleWhatsApp}
              className="w-full mt-4 bg-brand-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Falar no WhatsApp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;