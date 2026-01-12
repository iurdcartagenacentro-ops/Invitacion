
import React from 'react';

export const PropertyHighlight: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h3 className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.3em] pl-1">
        Oportunidade do Mês
      </h3>
      <div className="group relative w-full h-48 rounded-2xl overflow-hidden shadow-xl border border-white/10">
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800" 
          alt="Mansão em Beverly Hills"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 w-full flex justify-between items-end">
          <div>
            <h4 className="text-sm font-bold text-white">Mansão Horizon</h4>
            <p className="text-[10px] text-gray-300">Alphaville • SP</p>
          </div>
          <button className="bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-bold uppercase px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-colors">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};
