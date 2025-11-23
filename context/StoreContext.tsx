import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Product, Category, Stats } from '../types';

interface StoreContextType {
  products: Product[];
  stats: Stats;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  incrementVisits: () => void;
  incrementOrders: (amount: number) => void;
}

const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Relógio Minimalista',
    price: 15000,
    category: Category.WATCHES,
    image: 'https://picsum.photos/400/400?random=1',
    description: 'Design clássico com pulseira ajustável, ideal para o dia a dia.',
    featured: true
  },
  {
    id: '2',
    name: 'Tênis Urban Runner',
    price: 12000,
    category: Category.SHOES,
    image: 'https://picsum.photos/400/400?random=2',
    description: 'Conforto e estilo para o seu dia a dia. Solado ergonômico.',
    featured: true
  },
  {
    id: '3',
    name: 'Bolsa de Couro Vermelha',
    price: 8500,
    category: Category.BAGS,
    image: 'https://picsum.photos/400/400?random=3',
    description: 'Espaçosa e elegante, ideal para trabalho ou eventos sociais.',
    featured: true
  },
  {
    id: '4',
    name: 'Camiseta Casual Pink',
    price: 4500,
    category: Category.CLOTHES,
    image: 'https://picsum.photos/400/400?random=4',
    description: 'Camiseta 100% algodão com corte moderno e estampa exclusiva.',
    featured: false
  },
  {
    id: '5',
    name: 'Vestido Longo Floral',
    price: 18000,
    category: Category.CLOTHES,
    image: 'https://picsum.photos/400/400?random=5',
    description: 'Elegância para festas e encontros. Tecido leve e fresco.',
    featured: true
  },
  {
    id: '6',
    name: 'Bolsa Clutch Verde',
    price: 6000,
    category: Category.BAGS,
    image: 'https://picsum.photos/400/400?random=6',
    description: 'Compacta e estilosa, perfeita para carregar o essencial.',
    featured: false
  },
  {
    id: '7',
    name: 'Óculos de Sol Vintage',
    price: 3500,
    category: Category.ACCESSORIES,
    image: 'https://picsum.photos/400/400?random=7',
    description: 'Proteção UV400 com estilo retrô.',
    featured: false
  }
];

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [stats, setStats] = useState<Stats>({
    visits: 1240,
    orders: 45,
    revenue: 450000
  });

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (id: string, updatedProduct: Partial<Product>) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const incrementVisits = () => {
    setStats(prev => ({ ...prev, visits: prev.visits + 1 }));
  };

  const incrementOrders = (amount: number) => {
    setStats(prev => ({ 
      ...prev, 
      orders: prev.orders + 1,
      revenue: prev.revenue + amount
    }));
  };

  useEffect(() => {
    // Simulate visit on mount
    incrementVisits();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StoreContext.Provider value={{ products, stats, addProduct, updateProduct, deleteProduct, incrementVisits, incrementOrders }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};