import React from 'react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-brand-600" />
              <span className="font-bold text-lg text-slate-900">Parque Tecnológico Cartagena</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Catalizando la innovación en el Caribe. Uniendo startups, Web3 y talento global en un solo lugar.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <a 
                  key={social.platform} 
                  href={social.url} 
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-200 transition-colors"
                  aria-label={social.platform}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Explorar</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-brand-600 text-sm">Sobre Nosotros</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-600 text-sm">Espacios de Trabajo</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-600 text-sm">Programa de Aceleración</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-600 text-sm">Eventos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-brand-600 text-sm">Privacidad</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-600 text-sm">Términos de Uso</a></li>
              <li><a href="#" className="text-slate-500 hover:text-brand-600 text-sm">Cookies</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Parque Tecnológico Cartagena. Todos los derechos reservados.
          </p>
          <div className="text-slate-400 text-xs flex gap-2">
            <span>Diseñado para el futuro</span>
            <span>•</span>
            <span>Hecho en Cartagena</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;