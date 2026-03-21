import { Play } from "lucide-react";

const ambiances = [
  {
    title: "Chant des Oiseaux",
    image: "oiseaux.jpg", // Assure-toi que le nom du fichier image est correct
    id: "oiseaux"
  },
  {
    title: "Bruit des Vagues",
    image: "vagues.jpg",
    id: "vagues"
  },
  {
    title: "Murmure de la Rivière",
    image: "riviere.jpg",
    id: "riviere"
  },
  {
    title: "Souffle du Vent",
    image: "vent.jpg",
    id: "vent"
  }
];

const SoundAmbiances = () => {
  return (
    <section id="sons" className="py-24 bg-[#f0f9ff]"> {/* Fond Bleu Ciel très Pâle */}
      <div className="container mx-auto px-6 text-center">
        
        {/* TITRE DOUX ET APPAISANT */}
        <h2 className="text-3xl md:text-4xl font-sans font-semibold text-slate-500 mb-2 uppercase tracking-tight">
          Nos Ambiances Sonores
        </h2>
        
        {/* SOUS-TITRE DOUX */}
        <p className="mt-1 mb-16 text-sm md:text-base font-medium text-slate-400 tracking-wide max-w-lg mx-auto leading-relaxed">
          Une immersion totale pour un endormissement rapide
        </p>

        {/* GRILLE DE CARTES HARMONIEUSES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ambiances.map((ambiance) => (
            <div 
              key={ambiance.id} 
              className="bg-[#e0f2fe] p-8 rounded-[40px] shadow-inner border border-[#d0eafc] flex flex-col items-center group transition-all duration-300 hover:shadow-lg hover:bg-[#d0eafc]"
            >
              
              {/* IMAGE RONDE "BULLE" */}
              <div className="w-full aspect-square rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg shadow-blue-900/10">
                <img 
                  src={ambiance.image} 
                  alt={ambiance.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* TITRE DE L'AMBIANCE DOUX */}
              <h3 className="text-lg font-sans font-bold text-slate-600 mb-8 uppercase tracking-widest text-center h-12 flex items-center justify-center">
                {ambiance.title}
              </h3>

              {/* BOUTON ÉPURÉ ET CLAIR */}
              <button className="flex items-center gap-3 bg-white border border-slate-300 text-slate-500 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:bg-slate-50 active:scale-95 group-hover:border-[#26A69A]/30 group-hover:text-[#26A69A]">
                <Play size={16} className="text-[#26A69A]"/>
                Écouter
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoundAmbiances;
