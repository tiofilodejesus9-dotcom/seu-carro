
import React from 'react';
import { Car, Experience } from './types';
import { Shield, Zap, Compass, Award } from 'lucide-react';

export const CARS: Car[] = [
  {
    id: '1',
    brand: 'Ferrari',
    model: 'SF90 Stradale',
    year: 2024,
    price: 'Sob Consulta',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1200',
    category: 'Sport',
    specs: { hp: 1000, acceleration: '2.5s', topSpeed: '340 km/h' }
  },
  {
    id: '2',
    brand: 'Mercedes-Benz',
    model: 'G-Class AMG',
    year: 2024,
    price: 'Sob Consulta',
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1200',
    category: 'SUV',
    specs: { hp: 585, acceleration: '4.5s', topSpeed: '220 km/h' }
  },
  {
    id: '3',
    brand: 'Rolls-Royce',
    model: 'Phantom',
    year: 2023,
    price: 'Sob Consulta',
    image: 'https://images.unsplash.com/photo-1631215539199-fdc24194004e?auto=format&fit=crop&q=80&w=1200',
    category: 'Luxury',
    specs: { hp: 563, acceleration: '5.3s', topSpeed: '250 km/h' }
  },
  {
    id: '4',
    brand: 'Lamborghini',
    model: 'Urus Performante',
    year: 2024,
    price: 'Sob Consulta',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1200',
    category: 'SUV',
    specs: { hp: 666, acceleration: '3.3s', topSpeed: '306 km/h' }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    title: 'Liberdade Sem Limites',
    description: 'Sinta o poder sob o seu comando nas estradas de Angola.',
    icon: 'Zap'
  },
  {
    title: 'Status e Prestígio',
    description: 'Não é apenas um carro, é a sua assinatura de sucesso.',
    icon: 'Award'
  },
  {
    title: 'Segurança de Elite',
    description: 'Tecnologia de ponta para proteger o que mais importa.',
    icon: 'Shield'
  },
  {
    title: 'Aventura Pura',
    description: 'Explore o desconhecido com o máximo conforto.',
    icon: 'Compass'
  }
];
