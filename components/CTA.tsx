import React, { useState } from 'react';
import { Send } from 'lucide-react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'loading'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          ¿Listo para escalar tu proyecto?
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Mantente informado sobre nuevas aperturas, eventos de networking y oportunidades de inversión en el Parque Tecnológico.
        </p>

        <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-5 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              disabled={status === 'loading' || status === 'success'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`px-8 py-4 font-medium text-white rounded-lg transition-all flex items-center justify-center gap-2
                ${status === 'success' ? 'bg-green-600' : 'bg-brand-600 hover:bg-brand-700 hover:shadow-lg'}
                ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}
              `}
            >
              {status === 'loading' ? 'Enviando...' : status === 'success' ? '¡Suscrito!' : (
                <>
                  Suscribirse <Send size={18} />
                </>
              )}
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Respetamos tu privacidad. Sin spam, solo innovación.
          </p>
        </form>

      </div>
    </section>
  );
};

export default CTA;