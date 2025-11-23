export enum Category {
  ALL = 'Todos',
  CLOTHES = 'Roupas',
  SHOES = 'Calçados',
  BAGS = 'Pastas/Bolsas',
  WATCHES = 'Relógios',
  ACCESSORIES = 'Acessórios'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  featured?: boolean;
}

export interface OrderForm {
  name: string;
  phone: string;
  email: string;
  observation?: string;
  product?: Product;
}

export interface Stats {
  visits: number;
  orders: number;
  revenue: number;
}