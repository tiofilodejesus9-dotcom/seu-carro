
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920")',
          transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0005})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1 border border-red-600 text-red-600 rounded-full text-xs font-bold tracking-[0.4em] mb-6 animate-pulse uppercase">
          Elite Motors Angola
        </div>
        <h1 className="font-syncopate text-5xl md:text-8xl font-bold mb-6 tracking-tighter leading-none">
          NÃO VENDEMOS <span className="text-red-600 text-glow-red">CARROS</span>.
        </h1>
        <p className="text-xl md:text-3xl font-light tracking-widest text-white/80 mb-12">
          VENDEMOS <span className="font-bold border-b-2 border-red-600">EXPERIÊNCIAS</span>.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-black px-10 py-4 rounded-full font-extrabold tracking-tighter hover:bg-red-600 hover:text-white transition-all duration-300 w-full md:w-auto text-lg">
            VER SHOWROOM
          </button>
          <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-full font-bold tracking-tighter hover:border-red-600 transition-all duration-300 w-full md:w-auto backdrop-blur-sm text-lg">
            NOSSA HISTÓRIA
          </button>
        </div>
      </div>

      {/* Bottom Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.5em] font-bold text-white/50 uppercase">Scroll para explorar</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-red-600 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
