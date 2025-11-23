import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send email would go here
  };

  return (
    <section className="py-20 bg-brand-card border-y border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Fale Conosco</h2>
          <p className="text-gray-400">Tem alguma dúvida ou sugestão? Envie uma mensagem.</p>
        </div>

        {submitted ? (
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center animate-fade-in">
            <h3 className="text-xl font-bold text-green-500 mb-2">Mensagem Enviada!</h3>
            <p className="text-gray-300 mb-6">Recebemos o seu contato e responderemos em breve.</p>
            <button 
              onClick={() => window.open('https://wa.me/244932846639', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold"
            >
              Falar no WhatsApp também
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Nome</label>
                <input required type="text" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Telefone</label>
                <input required type="tel" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary" placeholder="+244..." />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <input required type="email" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Mensagem</label>
              <textarea required rows={4} className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary resize-none" placeholder="Como podemos ajudar?" />
            </div>
            <button type="submit" className="w-full bg-brand-primary hover:bg-brand-primaryHover text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all">
              <Send className="w-5 h-5" />
              Enviar Mensagem
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;