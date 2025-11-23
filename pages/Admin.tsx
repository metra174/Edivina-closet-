import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { ArrowLeft, Plus, Trash2, Edit2, TrendingUp, Users, ShoppingBag, Save } from 'lucide-react';
import { Category, Product } from '../types';

const Admin: React.FC = () => {
  const { products, stats, deleteProduct, addProduct, updateProduct } = useStore();
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    category: Category.CLOTHES,
    image: 'https://picsum.photos/400/400',
    description: ''
  });

  const handleAdd = () => {
    if (newProduct.name && newProduct.price) {
      addProduct({
        id: Date.now().toString(),
        name: newProduct.name,
        price: Number(newProduct.price),
        category: newProduct.category as Category,
        image: newProduct.image || 'https://picsum.photos/400/400',
        description: newProduct.description || '',
        featured: false
      });
      setNewProduct({ category: Category.CLOTHES, image: 'https://picsum.photos/400/400', description: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-bold">Painel Interno - NÃO PUBLICAR</h1>
          </div>
          <div className="bg-red-500/20 text-red-500 px-4 py-2 rounded-full text-xs font-bold border border-red-500/30">
             MODO EDITOR
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Visitas Totais</h3>
              <Users className="text-brand-primary" />
            </div>
            <p className="text-3xl font-bold">{stats.visits}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Encomendas</h3>
              <ShoppingBag className="text-green-500" />
            </div>
            <p className="text-3xl font-bold">{stats.orders}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">Receita Estimada</h3>
              <TrendingUp className="text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-yellow-500">
              {stats.revenue.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
            </p>
          </div>
        </div>

        {/* Add Product */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Plus className="w-5 h-5" /> Adicionar Novo Produto</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="md:col-span-1">
              <label className="text-xs text-gray-400 block mb-1">Nome</label>
              <input 
                type="text" 
                className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-sm"
                placeholder="Nome do produto"
                value={newProduct.name || ''}
                onChange={e => setNewProduct({...newProduct, name: e.target.value})}
              />
            </div>
            <div className="md:col-span-1">
              <label className="text-xs text-gray-400 block mb-1">Preço (AOA)</label>
              <input 
                type="number" 
                className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-sm"
                placeholder="0.00"
                value={newProduct.price || ''}
                onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})}
              />
            </div>
            <div className="md:col-span-1">
              <label className="text-xs text-gray-400 block mb-1">Categoria</label>
              <select 
                className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-sm"
                value={newProduct.category}
                onChange={e => setNewProduct({...newProduct, category: e.target.value as Category})}
              >
                {Object.values(Category).filter(c => c !== Category.ALL).map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-1">
              <label className="text-xs text-gray-400 block mb-1">Descrição</label>
              <input 
                type="text" 
                className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-sm"
                placeholder="Breve descrição"
                value={newProduct.description || ''}
                onChange={e => setNewProduct({...newProduct, description: e.target.value})}
              />
            </div>
            <button 
              onClick={handleAdd}
              className="bg-brand-primary hover:bg-brand-primaryHover text-white px-4 py-2 rounded font-bold text-sm h-10 w-full"
            >
              Adicionar
            </button>
          </div>
        </div>

        {/* Product List */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-900/50 text-gray-400 text-xs uppercase">
              <tr>
                <th className="p-4">Produto</th>
                <th className="p-4">Categoria</th>
                <th className="p-4">Preço</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {products.map(product => (
                <tr key={product.id} className="hover:bg-gray-700/50">
                  <td className="p-4 flex items-center gap-3">
                    <img src={product.image} alt="" className="w-10 h-10 rounded object-cover bg-gray-600" />
                    <div>
                      <div className="font-medium text-white">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.id}</div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-300">
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                      {product.category}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-sm text-brand-primary">
                    {product.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-400 hover:text-red-300 p-2 hover:bg-red-400/10 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-200">
          <strong>Nota Interna:</strong> As alterações feitas aqui são armazenadas no estado da aplicação (Context API). 
          Ao recarregar a página, os dados voltarão ao estado inicial (Mock Data). Em uma aplicação real, isso conectaria a um banco de dados.
        </div>

      </div>
    </div>
  );
};

export default Admin;