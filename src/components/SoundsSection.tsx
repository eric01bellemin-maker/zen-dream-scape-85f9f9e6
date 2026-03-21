import React, { useState, useRef, useEffect } from "react";
import { Play, Square, Volume2 } from "lucide-react";

const ambiances = [
  {
    title: "Chant des Oiseaux",
    image: "oiseaux.jpg",
    audio: "/sounds/birds.mp3", // Note le "/" au début pour pointer vers le dossier public
    id: "oiseaux"
  },
  {
    title: "Bruit des Vagues",
    image: "vagues.jpg",
    audio: "/sounds/waves.mp3",
    id: "vagues"
  },
  {
    title: "Murmure de la Rivière",
    image: "riviere.jpg",
    audio: "/sounds/river.mp3",
    id: "riviere"
  },
  {
    title: "Souffle du Vent",
    image: "vent.jpg",
    audio: "/sounds/wind.mp3",
    id: "vent"
  }
];

const SoundAmbiances = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Nettoyage automatique si on quitte la page
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = (ambiance: typeof ambiances[0]) => {
    // Si le même son est déjà en lecture -> on l'arrête
    if (playingId === ambiance.id) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setPlayingId(null);
      return;
    }

    // Si un autre son jouait, on l'arrête avant de lancer le nouveau
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Création du nouveau son
    const newAudio = new Audio(ambiance.audio);
    newAudio.play().catch(error => {
      console.error("Erreur de lecture :", error);
      // Optionnel : afficher un message plus discret qu'une alerte
    });

    audioRef.current = newAudio;
    setPlayingId(ambiance.id);

    // Reset quand c'est fini
    newAudio.onended = () => {
      setPlayingId(null);
    };
  };

  return (
    <section id="sons" className="py-24 bg-[#f0f9ff]">
      <div className="container mx-auto px-6 text-center">
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <Volume2 className="text-[#26A69A]" size={20} />
          <span className="text-[#26A69A] text-xs font-black uppercase tracking-[0.3em]">Immersion Sonore</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-700 mb-6 tracking-tight">
          Nos <span className="text-[#26A69A]">Ambiances</span> Naturelles
        </h2>
        
        <p className="mb-16 text-slate-400 italic max-w-lg mx-auto">
          Posez votre Sonora Zen sous l'oreiller et laissez-vous transporter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ambiances.map((ambiance) => (
            <div 
              key={ambiance.id} 
              className="bg-white/60 backdrop-blur-sm p-8 rounded-[40px] shadow-xl shadow-blue-900/5 border border-white flex flex-col items-center group transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-full aspect-square rounded-full overflow-hidden mb-8 border-4 border-white shadow-md">
                <img 
                  src={ambiance.image} 
                  alt={ambiance.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-600 mb-8 uppercase tracking-widest text-center">
                {ambiance.title}
              </h3>

              <button 
                className={`flex items-center gap-3 px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-sm ${
                  playingId === ambiance.id 
                  ? "bg-[#26A69A] text-white" 
                  : "bg-white text-[#26A69A] hover:bg-slate-50 border border-slate-100"
                }`}
                onClick={() => toggleAudio(ambiance)}
              >
                {playingId === ambiance.id ? (
                  <>
                    <Square size={14} fill="white" />
                    STOP
                  </>
                ) : (
                  <>
                    <Play size={14} fill="currentColor" />
                    ÉCOUTER
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
