
import React from 'react';

export const SaveContactButton: React.FC = () => {
  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Ricardo Silva
ORG:Exclusividade Imóveis
TITLE:Corretor de Imóveis de Luxo
TEL;TYPE=CELL;TYPE=VOICE;TYPE=pref:+5511999999999
EMAIL:contato@ricardosilva.com.br
URL:https://www.ricardosilva.com.br
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ricardo_Silva_Luxo.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownloadVCard}
      className="w-full py-5 gold-gradient rounded-2xl text-black font-bold text-sm tracking-[0.15em] uppercase shadow-[0_10px_20px_rgba(212,175,55,0.3)] hover:brightness-110 active:scale-[0.98] transition-all duration-300"
    >
      <i className="fa-solid fa-user-plus mr-2"></i>
      Salvar na Agenda
    </button>
  );
};
