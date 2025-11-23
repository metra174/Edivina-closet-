import React from 'react';
import { Star, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/300/400?random=10" className="rounded-2xl border border-white/10 mt-8" alt="Moda 1" />
              <img src="https://picsum.photos/300/400?random=11" className="rounded-2xl border border-white/10" alt="Moda 2" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 mb-12 lg:mb-0">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Sobre Nós</span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mt-2 mb-6">
              Edivina Closet: <br/> Onde a Elegância Encontra o Conforto
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A ModaFlex nasceu com o propósito de trazer as últimas tendências mundiais para o público angolano. Acreditamos que se vestir bem não precisa custar uma fortuna.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-card border border-white/10 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Qualidade Premium</h4>
                  <p className="text-gray-400 text-sm">Seleção rigorosa de tecidos e acabamentos.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-card border border-white/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Feito com Amor</h4>
                  <p className="text-gray-400 text-sm">Cada peça é escolhida pensando na sua autoestima.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-card border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Atendimento 24/7</h4>
                  <p className="text-gray-400 text-sm">Estamos sempre disponíveis no WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;