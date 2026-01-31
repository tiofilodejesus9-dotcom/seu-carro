
import React, { useState } from 'react';
import { CARS } from '../constants';
import { ArrowRight, Gauge, Zap, Wind } from 'lucide-react';

const CarShowroom: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Luxury' | 'Sport' | 'SUV'>('All');

  const filteredCars = filter === 'All' ? CARS : CARS.filter(car => car.category === filter);

  return (
    <section id="showroom" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="font-syncopate text-3xl md:text-5xl font-bold uppercase">
            Nosso <span className="text-red-600">Showroom</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {['All', 'Sport', 'SUV', 'Luxury'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all ${filter === cat ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.4)]' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredCars.map((car) => (
            <div key={car.id} className="group relative overflow-hidden rounded-3xl bg-black border border-white/5 hover:border-red-600/30 transition-all duration-500">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.model} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-red-600 text-xs font-bold tracking-widest uppercase">{car.brand}</span>
                    <h4 className="text-3xl font-syncopate font-bold mt-1">{car.model}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-white/40 text-xs block uppercase">A partir de</span>
                    <span className="text-xl font-bold text-white">{car.price}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center p-3 bg-white/5 rounded-xl">
                    <Zap className="text-red-600 mb-1" size={18} />
                    <span className="text-[10px] text-white/40 uppercase">Cavalos</span>
                    <span className="text-sm font-bold">{car.specs.hp}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white/5 rounded-xl">
                    <Gauge className="text-red-600 mb-1" size={18} />
                    <span className="text-[10px] text-white/40 uppercase">0-100</span>
                    <span className="text-sm font-bold">{car.specs.acceleration}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white/5 rounded-xl">
                    <Wind className="text-red-600 mb-1" size={18} />
                    <span className="text-[10px] text-white/40 uppercase">Máx</span>
                    <span className="text-sm font-bold">{car.specs.topSpeed}</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 rounded-xl font-bold group-hover:bg-red-600 group-hover:text-white transition-all">
                  RESERVAR AGORA <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarShowroom;
