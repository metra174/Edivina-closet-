import React, { useState } from 'react';
import { Category, Product } from '../types';
import { ShoppingCart } from 'lucide-react';
import ProductModal from './ProductModal';
import { useStore } from '../context/StoreContext';

const Catalog: React.FC = () => {
  const { products } = useStore();
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === Category.ALL 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm">Nossa Loja</span>
          <h2 className="text-4xl font-serif font-bold text-white mt-2">Catálogo de Produtos</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/25' 
                  : 'bg-brand-card text-gray-400 hover:bg-white/5 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-primary/30 transition-all hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.featured && (
                  <div className="absolute top-3 right-3 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Destaque
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white text-black px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-gray-200"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs text-brand-primary font-medium mb-1 uppercase tracking-wide">{product.category}</div>
                <h3 className="text-white font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-xl font-bold text-white">
                    {product.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                  </span>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white p-2.5 rounded-full transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default Catalog;