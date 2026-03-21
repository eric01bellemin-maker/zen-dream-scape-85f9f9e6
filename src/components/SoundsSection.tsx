import React, { useState, useRef } from "react";
import { Play, Square } from "lucide-react";

const ambiances = [
  {
    title: "Chant des Oiseaux",
    image: "oiseaux.jpg",
    audio: "birds.mp3", // Nom exact sur ta capture
    id: "oiseaux"
  },
  {
    title: "Bruit des Vagues",
    image: "mer.jpg",     // Corrigé selon ton fichier mer.jpg
    audio: "waves.mp3", // Nom exact sur ta capture
    id: "vagues"
  },
  {
    title: "Murmure de la Rivière",
    image: "riviere.jpg",
    audio: "river.mp3", // Nom exact sur ta capture
    id: "riviere"
  },
  {
    title: "Souffle du Vent",
    image: "vent.jpg",
    audio: "wind.mp3",  // Nom exact sur ta capture
    id: "vent"
  }
];

const SoundAmbiances = () => {
  const [playingId, setPlayingId] = useState(null);
  const audioRef = useRef(null);

  const toggleAudio = (ambiance) => {
    // 1. Si un son joue déjà, on l'arrête proprement
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // 2. Si on a cliqué sur le même bouton, on stoppe tout (Toggle)
    if (playingId === ambiance.id) {
      setPlayingId(null);
      return;
    }

    // 3. Sinon, on crée et lance le nouveau son
    const audio = new Audio(ambiance.audio);
    audio.play().catch(error => {
      console.error("Erreur de lecture :", error);
      alert("Le fichier son " + ambiance.audio + " est introuvable ou bloqué.");
    });
    
    audioRef.current = audio;
    setPlayingId(ambiance.id);

    // 4. Quand le son se termine, on remet le bouton à l'état initial
    audio.onended = () => {
      setPlayingId(null);
    };
  };

  return (
    <section id="sons" className="py-24 bg-[#f0f9ff]">
      <div className="container mx-auto px-6 text-center">
        
        {/* TITRE */}
        <h2 className="text-3xl md:text-4xl font-sans font-semibold text-slate-500 mb-2 uppercase tracking-tight">
          Nos Ambiances Sonores
        </h2>
        
        {/* SOUS-TITRE */}
        <p className="mt-1 mb-16 text-sm md:text-base font-medium text-slate-400 tracking-wide max-w-lg mx-auto leading-relaxed">
          Une immersion totale pour un endormissement rapide avec Sonora Zen
        </p>

        {/* GRILLE DE CARTES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ambiances.map((ambiance) => (
            <div 
              key={ambiance.id} 
              className="bg-[#e0f2fe] p-8 rounded-[40px] shadow-inner border border-[#d0eafc] flex flex-col items-center group transition-all duration-300 hover:shadow-lg hover:bg-[#d0eafc]"
            >
              
              {/* IMAGE RONDE */}
              <div className="w-full aspect-square rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg shadow-blue-900/10">
                <img 
                  src={ambiance.image} 
                  alt={ambiance.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* TITRE DE L'AMBIANCE */}
              <h3 className="text-lg font-sans font-bold text-slate-600 mb-8 uppercase tracking-widest text-center h-12 flex items-center justify-center">
                {ambiance.title}
              </h3>

              {/* BOUTON DYNAMIQUE */}
              <button 
                className={`flex items-center gap-3 px-8 py-3.5 rounded-full transition-all duration-300 ${
                  playingId === ambiance.id 
                  ? "bg-[#26A69A] text-white shadow-md scale-95" 
                  : "bg-white border border-slate-300 text-slate-500 hover:bg-slate-50"
                }`}
                onClick={() => toggleAudio(ambiance)}
              >
                {playingId === ambiance.id ? (
                  <>
                    <Square size={16} fill="white" />
                    En cours...
                  </>
                ) : (
                  <>
                    <Play size={16} className="text-[#26A69A]"/>
                    Écouter
                  </>
                )}
              </button> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoundAmbiances;
