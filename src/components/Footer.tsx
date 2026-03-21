import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 text-slate-600">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold text-[#26A69A] mb-4 uppercase">Sonora Zen</h3>
          <p className="text-sm italic">Votre allié pour un sommeil profond et naturel.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-slate-800 uppercase text-xs tracking-widest">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-[#26A69A]"/> Paris, France</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-[#26A69A]"/> contact@sonora-zen.com</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-[#26A69A]"/> +33 (0)1 23 45 67 89</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-slate-800 uppercase text-xs tracking-widest">Newsletter</h4>
          <div className="flex gap-2">
            <input type="email" placeholder="Votre email" className="border rounded-lg px-3 py-2 text-sm w-full outline-none focus:border-[#26A69A]" />
            <button className="bg-[#26A69A] text-white px-4 py-2 rounded-lg text-sm font-bold">OK</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
