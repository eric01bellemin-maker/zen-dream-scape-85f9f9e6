import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* COLONNE 1 : LOGO & DESCRIPTION */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[#26A69A] tracking-tighter uppercase">
              Sonora Zen
            </h3>
            <p className="text-slate-500 leading-relaxed">
              La technologie de conduction osseuse au service de votre sérénité. 
              Retrouvez un sommeil profond et naturel, où que vous soyez.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-[#26A69A] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-[#26A69A] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-[#26A69A] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* COLONNE 2 : LIENS UTILES (CEUX QUE TU VOULAIS) */}
          <div>
            <h4 className="font-bold mb-6 text-slate-800 uppercase tracking-widest text-sm">
              Liens Utiles
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#produit" className="text-slate-600 hover:text-[#26A69A] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#26A69A] rounded-full"></span>
                  Le produit
                </a>
              </li>
              <li>
                <a href="#sons" className="text-slate-600 hover:text-[#26A69A] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#26A69A] rounded-full"></span>
                  Les sons
                </a>
              </li>
              <li>
                <a href="#temoignages" className="text-slate-600 hover:text-[#26A69A] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#26A69A] rounded-full"></span>
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-[#26A69A] transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#26A69A] rounded-full"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 : CONTACT */}
          <div>
            <h4 className="font-bold mb-6 text-slate-800 uppercase tracking-widest text-sm">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600">
                <MapPin size={18} className="text-[#26A69A] shrink-0 mt-1" />
                <span>Paris, France</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Mail size={18} className="text-[#26A69A] shrink-0" />
                <span>contact@sonora-zen.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600">
                <Phone size={18} className="text-[#26A69A] shrink-0" />
                <span>+33 (0)1 23 45 67 89</span>
              </li>
            </ul>
          </div>

          {/* COLONNE 4 : NEWSLETTER */}
          <div>
            <h4 className="font-bold mb-6 text-slate-800 uppercase tracking-widest text-sm">
              Newsletter
            </h4>
            <p className="text-sm text-slate-500 mb-4">
              Recevez nos conseils pour un meilleur sommeil.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-[#26A69A]"
              />
              <button className="bg-[#26A69A] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#1f8a80] transition-colors">
                OK
              </button>
            </form>
          </div>

        </div>

        {/* BARRE DE COPYRIGHT */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Sonora Zen. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-slate-400 uppercase tracking-tighter">
            <a href="#" className="hover:text-slate-600">Mentions légales</a>
            <a href="#" className="hover:text-slate-600">CGV</a>
            <a href="#" className="hover:text-slate-600">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
