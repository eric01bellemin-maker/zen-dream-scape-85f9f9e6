import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 text-slate-600 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* COLONNE 1 : LOGO & TEXTE UNIQUEMENT */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[#26A69A] uppercase tracking-tighter">Sonora Zen</h3>
            <p className="text-sm">Votre allié pour un sommeil profond et naturel.</p>
          </div>

          {/* COLONNE 2 : CONTACT (TEXTE & ICONES LUCIDE) */}
          <div>
            <h4 className="font-bold mb-6 text-slate-800 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#26A69A]" />
                <span>Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#26A69A]" />
                <span>contact@sonora-zen.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#26A69A]" />
                <span>+33 (0)1 23 45 67 89</span>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 : NEWSLETTER (CHAMPS DE TEXTE) */}
          <div>
            <h4 className="font-bold mb-6 text-slate-800 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-xs mb-4">Recevez nos conseils pour un meilleur sommeil.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm w-full outline-none focus:border-[#26A69A]" 
              />
              <button className="bg-[#26A69A] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#1f8a80] transition-colors">
                OK
              </button>
            </div>
          </div>

        </div>
        
        <div className="border-t border-slate-200 mt-12 pt-8 text-center text-[10px] uppercase tracking-widest text-slate-400">
          © {new Date().getFullYear()} Sonora Zen - Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
