
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="font-bold text-white">EA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-syncopate font-bold text-xl">EXPERIÊNCIA</span>
                <span className="text-[10px] tracking-widest text-red-600 font-bold -mt-1 uppercase">Automóvel Luanda</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Líderes no mercado premium de Angola. Redefinindo o que significa possuir um automóvel de luxo.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-syncopate font-bold text-lg mb-8 border-l-4 border-red-600 pl-4 uppercase">Navegação</h4>
            <ul className="space-y-4">
              {['Showroom', 'Experiências', 'História', 'Certificados', 'Venda seu Carro'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-red-600 transition-colors text-sm uppercase tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-syncopate font-bold text-lg mb-8 border-l-4 border-red-600 pl-4 uppercase">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-red-600 shrink-0" size={20} />
                <span className="text-white/60 text-sm">Avenida 4 de Fevereiro, Edifício Marginal, Luanda, Angola</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-red-600 shrink-0" size={20} />
                <span className="text-white/60 text-sm">+244 9XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-red-600 shrink-0" size={20} />
                <span className="text-white/60 text-sm">geral@experienciaautomovel.co.ao</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-syncopate font-bold text-lg mb-8 border-l-4 border-red-600 pl-4 uppercase">News & Vibe</h4>
            <p className="text-white/50 text-sm mb-6 uppercase tracking-tighter">Receba as novidades mais quentes de Luanda.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="SEU EMAIL" 
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-red-600 focus:ring-0 text-sm"
              />
              <button className="bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all uppercase tracking-widest">
                SUBSCREVER
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 font-bold uppercase tracking-widest">
          <p>© 2024 EXPERIÊNCIA AUTOMÓVEL LUANDA. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
