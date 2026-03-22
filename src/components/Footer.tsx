import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-16 text-slate-600">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-bold text-[#26A69A] mb-4 uppercase">Sonora Zen</h3>
          <p className="text-sm italic">
            Votre allié pour un sommeil profond et naturel.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200/60 text-xs text-slate-400">
          © {new Date().getFullYear()} Sonora Zen. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
