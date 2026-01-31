
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import CarShowroom from './components/CarShowroom';
import AIChatAssistant from './components/AIChatAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for a premium feel
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
        <div className="relative">
           <div className="w-24 h-24 border-2 border-white/10 border-t-red-600 rounded-full animate-spin"></div>
           <div className="absolute inset-0 flex items-center justify-center">
             <span className="font-syncopate font-bold text-xl animate-pulse">EA</span>
           </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="font-syncopate text-xs tracking-[0.5em] text-white/50 animate-pulse">PREPARANDO EXPERIÊNCIA</p>
          <div className="w-48 h-[1px] bg-white/10 overflow-hidden">
            <div className="w-full h-full bg-red-600 origin-left animate-loading-bar"></div>
          </div>
        </div>
        <style>{`
          @keyframes loading-bar {
            0% { transform: scaleX(0); }
            50% { transform: scaleX(0.7); }
            100% { transform: scaleX(1); }
          }
          .animate-loading-bar {
            animation: loading-bar 2s ease-in-out forwards;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="bg-black text-white selection:bg-red-600 selection:text-white">
      {/* Dynamic Cursor Overlay (CSS Only approach) */}
      <div className="hidden lg:block fixed pointer-events-none z-[1000] mix-blend-difference">
         {/* Custom cursor can be added here if needed */}
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Statistics Banner */}
        <div className="bg-red-600 py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
          <div className="flex animate-marquee gap-10 items-center">
            {Array(10).fill(0).map((_, i) => (
              <React.Fragment key={i}>
                <span className="font-syncopate font-black text-white/20 text-3xl">MAIS DE 500 EXPERIÊNCIAS ENTREGUES</span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="font-syncopate font-black text-white text-3xl">O MELHOR DE LUANDA</span>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </React.Fragment>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: fit-content;
              animation: marquee 40s linear infinite;
            }
          `}</style>
        </div>

        <ExperienceSection />
        
        {/* Parallax Quote Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
           <div 
             className="absolute inset-0 bg-cover bg-center parallax-bg"
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1920")' }}
           >
             <div className="absolute inset-0 bg-black/80"></div>
           </div>
           <div className="relative z-10 text-center px-6 max-w-4xl">
              <h2 className="font-syncopate text-3xl md:text-5xl font-bold italic mb-6 leading-tight">
                "A CONDUÇÃO É UM <span className="text-red-600">SENTIMENTO</span>, O CARRO É APENAS O INSTRUMENTO."
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto"></div>
           </div>
        </section>

        <CarShowroom />

        {/* Video / Service Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200" 
                  alt="Service" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all cursor-pointer">
                   <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                   </div>
                </div>
             </div>
             <div>
                <h2 className="text-red-600 font-bold tracking-[0.4em] text-sm mb-4 uppercase">Serviço de Elite</h2>
                <h3 className="font-syncopate text-4xl font-bold mb-8 leading-tight">MANUTENÇÃO QUE <br /> RESPEITA A MÁQUINA</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                   Nossa oficina em Luanda conta com especialistas certificados pelas maiores marcas do mundo. Utilizamos apenas peças originais e tecnologia de diagnóstico de última geração para garantir que sua experiência nunca seja interrompida.
                </p>
                <div className="grid grid-cols-2 gap-6">
                   <div className="flex flex-col border-l-2 border-red-600 pl-4">
                      <span className="font-syncopate font-bold text-2xl">24/7</span>
                      <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Suporte VIP</span>
                   </div>
                   <div className="flex flex-col border-l-2 border-red-600 pl-4">
                      <span className="font-syncopate font-bold text-2xl">100%</span>
                      <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Peças Originais</span>
                   </div>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
      <AIChatAssistant />

      {/* Background Ambience / Particles (Simulated with CSS) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-20">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full animate-float"></div>
         <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full animate-float-delayed"></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 50px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, -20px); }
        }
        .animate-float { animation: float 15s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 20s ease-in-out infinite; }
        
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;
