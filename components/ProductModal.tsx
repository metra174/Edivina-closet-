import React, { useState } from 'react';
import { Product, OrderForm } from '../types';
import { X, Send } from 'lucide-react';
import { useStore } from '../context/StoreContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { incrementOrders } = useStore();
  const [formData, setFormData] = useState<OrderForm>({
    name: '',
    phone: '',
    email: '',
    observation: ''
  });

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    incrementOrders(product.price);

    const message = `Olá ModaFlex! 👋%0A%0AGostaria de encomendar este produto:%0A*Produto:* ${product.name}%0A*Preço:* ${product.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}%0A%0A*Meus Dados:*%0A👤 Nome: ${formData.name}%0A📱 Tel: ${formData.phone}%0A📧 Email: ${formData.email}%0A📝 Obs: ${formData.observation || 'Sem observações'}`;
    
    const whatsappUrl = `https://wa.me/244932846639?text=${message}`;
    
    // Simulate email notification log
    console.log('Sending notification to admin email...', formData);
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-brand-card w-full max-w-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative animate-fade-in">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black/20 p-2 rounded-full backdrop-blur-md z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col max-h-[90vh] overflow-y-auto">
          {/* Header Image */}
          <div className="h-40 w-full relative">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-card to-transparent" />
            <div className="absolute bottom-4 left-6">
              <h3 className="text-2xl font-bold text-white shadow-sm">{product.name}</h3>
              <p className="text-brand-primary font-bold">{product.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-300">Nome Completo</label>
              <input 
                required
                type="text" 
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                placeholder="Ex: Maria António"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Telefone / WhatsApp</label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary"
                  placeholder="+244 9XX..."
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">E-mail</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-300">Observação (Opcional)</label>
              <textarea 
                rows={3}
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary resize-none"
                placeholder="Tamanho, cor específica, endereço de entrega..."
                value={formData.observation}
                onChange={e => setFormData({...formData, observation: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-primary hover:bg-brand-primaryHover text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 mt-4 transition-colors"
            >
              <Send className="w-5 h-5" />
              Finalizar no WhatsApp
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">
              Você será redirecionado para o WhatsApp para confirmar o pedido.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;