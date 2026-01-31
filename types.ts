
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  image: string;
  category: 'Luxury' | 'Sport' | 'SUV' | 'Classic';
  specs: {
    hp: number;
    acceleration: string;
    topSpeed: string;
  };
}

export interface Experience {
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model' | 'system';
  content: string;
}
