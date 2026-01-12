
import React from 'react';

const SocialIcon: React.FC<{ icon: string; href: string }> = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
  >
    <i className={icon} />
  </a>
);

export const SocialFooter: React.FC = () => {
  return (
    <div className="flex gap-4 mt-2">
      <SocialIcon icon="fa-brands fa-instagram" href="https://instagram.com" />
      <SocialIcon icon="fa-brands fa-linkedin-in" href="https://linkedin.com" />
      <SocialIcon icon="fa-brands fa-facebook-f" href="https://facebook.com" />
    </div>
  );
};
