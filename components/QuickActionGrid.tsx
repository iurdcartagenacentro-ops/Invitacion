
import React from 'react';

interface ActionButtonProps {
  icon: string;
  label: string;
  href: string;
  colorClass?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, href, colorClass = "text-white" }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 btn-hover group"
  >
    <i className={`${icon} text-2xl mb-2 group-hover:scale-110 transition-transform ${colorClass}`} />
    <span className="text-[11px] font-medium uppercase tracking-wider">{label}</span>
  </a>
);

export const QuickActionGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      <ActionButton 
        icon="fa-brands fa-whatsapp" 
        label="WhatsApp" 
        href="https://wa.me/5511999999999" 
        colorClass="text-green-400"
      />
      <ActionButton 
        icon="fa-solid fa-location-dot" 
        label="Escritório" 
        href="https://www.google.com/maps" 
        colorClass="text-red-400"
      />
      <ActionButton 
        icon="fa-solid fa-envelope" 
        label="E-mail" 
        href="mailto:contato@ricardosilva.com.br" 
      />
      <ActionButton 
        icon="fa-solid fa-globe" 
        label="Portfolio" 
        href="#" 
      />
    </div>
  );
};
