import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-primary/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-medium text-sm mb-6 animate-fade-in-up">
              Nova Coleção 2024
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight">
              ModaFlex <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">
                Estilo ao Seu Alcance
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Descubra a EDIVINA CLOSET. Roupas, calçados, pastas, relógios e acessórios com preços acessíveis e entrega rápida em toda Angola.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#catalog"
                className="bg-brand-primary hover:bg-brand-primaryHover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 flex items-center justify-center gap-2"
              >
                Quero Ver os Produtos
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#about"
                className="bg-brand-card hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-medium text-lg transition-all flex items-center justify-center"
              >
                Saber Mais
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-primary blur-[100px] opacity-20 rounded-full" />
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Modelo ModaFlex" 
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover h-[500px] lg:h-[600px] hover:scale-[1.02] transition-transform duration-500"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-brand-card p-4 rounded-xl border border-white/10 shadow-xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs">
                  ✓
                </div>
                <div>
                  <p className="text-white font-bold">Entrega Rápida</p>
                  <p className="text-xs text-gray-400">Luanda e Províncias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;