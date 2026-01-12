
import React from 'react';

export const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Profile Photo */}
      <div className="relative mb-6">
        <div className="absolute inset-0 gold-gradient rounded-full blur-[2px]" />
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256" 
          alt="Ricardo Silva"
          className="relative w-32 h-32 rounded-full border-4 border-[#D4AF37] object-cover shadow-2xl"
        />
      </div>

      {/* Identity */}
      <h1 className="text-3xl font-bold tracking-tight mb-1 text-white">
        Ricardo Silva
      </h1>
      <h2 className="text-[#D4AF37] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
        Corretor de Imóveis de Luxo
      </h2>
      <p className="text-gray-300 text-sm italic font-light max-w-[280px]">
        "Transformando sonhos em endereços exclusivos."
      </p>
    </div>
  );
};
