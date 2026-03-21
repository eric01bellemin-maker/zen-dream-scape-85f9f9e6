import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Marie L.", role: "Enseignante", content: "Je m'endors en 10 minutes maintenant. Le son des vagues est incroyablement réaliste.", rating: 5 },
  { name: "Thomas D.", role: "Développeur", content: "Après des années d'insomnie, j'ai enfin retrouvé un sommeil réparateur. Ce petit palet a changé ma vie.", rating: 5 },
  { name: "Sophie M.", role: "Architecte d'intérieur", content: "Design magnifique et qualité sonore exceptionnelle. Indispensable sur ma table de nuit.", rating: 5 },
  // ... ajoute les autres ici
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-24 bg-[#f0f9ff]"> {/* LE FOND BLEU ZEN */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#26A69A] text-xs font-black uppercase tracking-[0.3em]">Avis Clients</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-700 mt-4 tracking-tight">
            Ils ont retrouvé le <span className="text-[#26A69A]">sommeil</span>
          </h2>
          <p className="text-slate-400 mt-4 italic">Découvrez les témoignages de nos clients qui dorment enfin paisiblement.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm p-8 rounded-[35px] shadow-xl shadow-blue-900/5 border border-white transition-transform hover:scale-[1.02]">
              <div className="flex text-teal-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.content}"</p>
              <div className="border-t border-slate-50 pt-4">
                <p className="font-bold text-slate-700">{t.name}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
