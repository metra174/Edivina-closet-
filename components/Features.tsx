import React from 'react';
import { Tag, ShieldCheck, Truck, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <Tag className="w-6 h-6 text-brand-primary" />,
    title: 'Preços Acessíveis',
    description: 'Moda de qualidade que cabe no seu bolso. Ofertas exclusivas todo mês.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />,
    title: 'Produtos Originais',
    description: 'Garantia de qualidade e autenticidade em todas as peças.'
  },
  {
    icon: <Truck className="w-6 h-6 text-brand-primary" />,
    title: 'Entrega Rápida',
    description: 'Receba seus produtos com segurança e rapidez no conforto de casa.'
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-brand-primary" />,
    title: 'Suporte WhatsApp',
    description: 'Atendimento personalizado e humanizado para tirar todas as dúvidas.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-brand-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Por que escolher a ModaFlex?</h2>
          <p className="text-gray-400">Compromisso com a sua satisfação e estilo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-brand-dark p-6 rounded-2xl border border-white/5 hover:border-brand-primary/50 transition-colors group">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;