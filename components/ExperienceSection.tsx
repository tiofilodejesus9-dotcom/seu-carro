
import React from 'react';
import { EXPERIENCES } from '../constants';
import * as LucideIcons from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experiências" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-red-600 font-bold tracking-[0.3em] text-sm mb-4 uppercase">Sinta a Diferença</h2>
            <h3 className="font-syncopate text-4xl md:text-6xl font-bold leading-tight">
              A ARTE DE <br /> <span className="text-white/30 italic">CONDUZIR</span> EM LUANDA
            </h3>
          </div>
          <div className="text-right text-white/50 max-w-sm">
            Elevamos o padrão do mercado angolano com curadoria exclusiva e serviço personalizado.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERIENCES.map((exp, idx) => {
            // @ts-ignore
            const Icon = LucideIcons[exp.icon] || LucideIcons.Zap;
            return (
              <div 
                key={idx} 
                className="group p-10 bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-500 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <div className="text-7xl font-syncopate font-black text-white/10">0{idx + 1}</div>
                </div>
                <div className="w-16 h-16 bg-red-600/20 text-red-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Icon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4 font-syncopate tracking-tight">{exp.title}</h4>
                <p className="text-white/60 leading-relaxed">{exp.description}</p>
                <div className="mt-8 h-[2px] w-0 group-hover:w-full bg-red-600 transition-all duration-700"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
