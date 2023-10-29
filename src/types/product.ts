export interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  url: string;
  category_id?: number;
  created_at?: string;
  updated_at?: string;
  price: string;
  category?: {
    id: number;
    name: string;
  };
}
