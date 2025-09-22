export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'hogar' | 'baño' | 'cocina';
  image: string;
}

export interface Category {
  id: string;
  name: string;
  value: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Detergente Líquido Premium",
    description: "Detergente líquido concentrado para ropa blanca y de color. Fórmula avanzada con enzimas.",
    price: 12000,
    category: "hogar",
    image: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Jabón Antibacterial",
    description: "Jabón de manos antibacterial con aloe vera y vitamina E. Protección y cuidado.",
    price: 5000,
    category: "baño",
    image: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Limpiador Multiusos",
    description: "Limpiador multiusos para cocina y superficies. Elimina grasa y bacterias eficazmente.",
    price: 8000,
    category: "cocina",
    image: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Suavizante de Telas",
    description: "Suavizante concentrado que deja la ropa suave y con aroma fresco duradero.",
    price: 9500,
    category: "hogar",
    image: "https://images.pexels.com/photos/5217844/pexels-photo-5217844.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Champú Anticaspa",
    description: "Champú medicado anticaspa con mentol y zinc. Para cabello graso y caspa persistente.",
    price: 15000,
    category: "baño",
    image: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Desengrasante Cocina",
    description: "Desengrasante potente para cocinas. Ideal para campanas, hornos y superficies grasosas.",
    price: 11000,
    category: "cocina",
    image: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 7,
    name: "Blanqueador Multiusos",
    description: "Blanqueador y desinfectante para baños, cocinas y ropa. Elimina manchas difíciles.",
    price: 6500,
    category: "hogar",
    image: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 8,
    name: "Gel Limpiador WC",
    description: "Gel limpiador para inodoros con acción desinfectante. Fórmula adherente y eficaz.",
    price: 7500,
    category: "baño",
    image: "https://images.pexels.com/photos/4239151/pexels-photo-4239151.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 9,
    name: "Lavavajillas Líquido",
    description: "Lavavajillas concentrado con poder desengrasante. Suave con las manos.",
    price: 4500,
    category: "cocina",
    image: "https://images.pexels.com/photos/4239092/pexels-photo-4239092.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 10,
    name: "Limpiador de Vidrios",
    description: "Limpiador de vidrios y espejos sin residuos. Fórmula antiempañante.",
    price: 5500,
    category: "hogar",
    image: "https://images.pexels.com/photos/4239028/pexels-photo-4239028.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 11,
    name: "Acondicionador Cabello",
    description: "Acondicionador hidratante para todo tipo de cabello. Con aceites naturales.",
    price: 12500,
    category: "baño",
    image: "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    id: 12,
    name: "Desinfectante Cocina",
    description: "Desinfectante especial para superficies de cocina. Elimina 99.9% de gérmenes.",
    price: 9000,
    category: "cocina",
    image: "https://images.pexels.com/photos/5217844/pexels-photo-5217844.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  }
];

export const categories: Category[] = [
  { id: 'all', name: 'Todos los productos', value: 'all' },
  { id: 'hogar', name: 'Limpieza del hogar', value: 'hogar' },
  { id: 'baño', name: 'Cuidado personal', value: 'baño' },
  { id: 'cocina', name: 'Limpieza de cocina', value: 'cocina' }
];