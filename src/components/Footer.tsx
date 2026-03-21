import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 text-slate-600">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-black text-[#26A69A] uppercase mb-4">Sonora Zen</h3>
            <p className="text-sm">La technologie au service de votre sommeil.</p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-800 uppercase text-sm">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#produit" className="hover:text-[#26A69A]">Le produit</a></li>
              <li><a href="#sons" className="hover:text-[#26A69A]">Les sons</a></li>
              <li><a href="#temoignages" className="hover:text-[#26A69A]">Témoignages</a></li>
              <li><a href="#faq" className="hover:text-[#26A69A]">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-800 uppercase text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><MapPin size={16} className="text-[#26A69A]"/> Paris, France</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-[#26A69A]"/> contact@sonora-zen.com</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-[#26A69A]"/> +33 (0)1 23 45 67 89</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-800 uppercase text-sm">Newsletter</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Votre email" className="border rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-[#26A69A]" />
              <button className="bg-[#26A69A] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#1f8a80]">OK</button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
