
import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-red-900/30' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Car className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-syncopate font-bold text-xl tracking-tighter">EXPERIÊNCIA</span>
            <span className="text-[10px] tracking-[0.3em] text-red-500 font-bold -mt-1 uppercase">Automóvel Luanda</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Showroom', 'Experiências', 'Serviços', 'Contacto'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold tracking-widest hover:text-red-600 transition-colors uppercase">
              {item}
            </a>
          ))}
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all hover:scale-105 active:scale-95 uppercase">
            Test Drive
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black transition-transform duration-500 z-40 md:hidden flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {['Showroom', 'Experiências', 'Serviços', 'Contacto'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-3xl font-syncopate font-bold hover:text-red-600">
            {item}
          </a>
        ))}
        <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg">
          SOLICITAR CONTACTO
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
