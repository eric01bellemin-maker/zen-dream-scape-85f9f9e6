import { Brain, Moon, Zap, Clock, ShieldCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Réduit le stress",
    description: "Les ondes sonores apaisent le système nerveux et favorisent la relaxation profonde.",
    icon: Brain
  },
  {
    title: "Améliore le sommeil",
    description: "Endormissement plus rapide et cycles de sommeil plus profonds et réparateurs.",
    icon: Moon
  },
  {
    title: "Boost l'énergie",
    description: "Un sommeil de qualité vous offre des réveils pleins de vitalité.",
    icon: Zap
  },
  {
    title: "Régule le rythme",
    description: "Aide à rétablir un cycle circadien naturel et équilibré.",
    icon: Clock
  },
  {
    title: "Sans ondes nocives",
    description: "Mode avion intégré. Aucune émission pendant votre sommeil.",
    icon: ShieldCheck
  },
  {
    title: "100% naturel",
    description: "Sons captés dans la nature, sans synthèse artificielle.",
    icon: Sparkles
  }
];

const BenefitsSection = () => {
  return (
    <section id="bienfaits" className="py-24 bg-[#f0f9ff]"> {/* Fond Bleu Zen */}
      <div className="container mx-auto px-6">
        
        {/* EN-TÊTE DOUCE */}
        <div className="text-center mb-16">
          <span className="text-[#26A69A] text-xs font-black uppercase tracking-[0.3em] mb-4 block">Les Bienfaits</span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-700 tracking-tight">
            Pourquoi choisir <span className="text-[#26A69A]">Sonora Zen</span> ?
          </h2>
          <div className="w-12 h-1 bg-[#26A69A]/20 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* GRILLE DE CARTES "NUAGES" */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="group bg-white/70 backdrop-blur-md p-10 rounded-[40px] border border-white shadow-xl shadow-blue-900/5 transition-all duration-300 hover:scale-[1.03] hover:bg-white"
            >
              {/* ICÔNE DANS SA BULLE */}
              <div className="w-14 h-14 bg-[#e0f2fe] rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-[#26A69A]/10">
                <benefit.icon className="text-[#26A69A] w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-slate-700 mb-4 uppercase tracking-wide">
                {benefit.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
