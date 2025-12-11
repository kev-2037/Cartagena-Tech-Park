import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="vision" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2"></span>
            <span className="text-xs font-semibold tracking-wide uppercase text-slate-500">
              Cartagena Tech District
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            El Futuro se <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">
              Construye Aquí
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
            Un ecosistema de innovación Web3 y tecnología en el corazón del Caribe. 
            Conectamos startups, inversores y nómadas digitales en un espacio diseñado para crear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group">
              Agendar Visita
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all hover:border-slate-300">
              Conocer Startups
            </button>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="relative h-[500px] hidden md:block">
            {/* Main Image Container with "Glass" effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
                {/* Simulated stylized map or abstract tech visual */}
                 <img 
                    src="https://picsum.photos/id/160/800/1000" 
                    alt="Espacio de Innovación" 
                    className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700"
                 />
                 
                 {/* Floating Cards (Decorations) */}
                 <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-xs">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</span>
                    </div>
                    <p className="text-sm font-medium text-slate-800">
                        120+ Startups activas colaborando en el distrito.
                    </p>
                 </div>
            </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-slate-400">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;