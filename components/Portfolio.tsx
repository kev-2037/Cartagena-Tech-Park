import React from 'react';
import { STARTUPS, TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="startups" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
              Comunidad de Innovadores
            </h2>
            <p className="text-lg text-slate-600">
              Únete a las empresas que están redefiniendo la tecnología desde Cartagena para el mundo.
            </p>
          </div>
          <button className="text-brand-600 font-semibold hover:text-brand-700 flex items-center">
            Ver todo el portafolio &rarr;
          </button>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {STARTUPS.map((startup, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-700">
                  {startup.logoInitial}
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-brand-50 text-brand-700 rounded-full border border-brand-100">
                  {startup.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{startup.name}</h3>
              <p className="text-sm text-slate-600">{startup.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Quote size={200} className="text-white" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="flex flex-col h-full justify-between">
                <p className="text-xl md:text-2xl text-slate-200 font-light italic mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.avatarUrl} alt={t.author} className="w-12 h-12 rounded-full border-2 border-slate-700" />
                  <div>
                    <h4 className="text-white font-medium">{t.author}</h4>
                    <p className="text-slate-400 text-sm">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;