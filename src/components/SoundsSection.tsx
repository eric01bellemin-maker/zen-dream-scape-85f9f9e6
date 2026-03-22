import React, { useState, useRef, useEffect } from "react";
import { Play, Square, Volume2 } from "lucide-react";

const baseUrl = import.meta.env.BASE_URL;
const ambiances = [
  { title: "Chant des Oiseaux", image: `${baseUrl}/oiseaux.jpg`, audio: `${baseUrl}/sounds/birds.mp3`, id: "oiseaux" },
  { title: "Bruit des Vagues", image: `${baseUrl}/vagues.jpg`, audio: `${baseUrl}/sounds/waves.mp3`, id: "vagues" },
  { title: "Murmure de la Rivière", image: `${baseUrl}/riviere.jpg`, audio: `${baseUrl}/sounds/river.mp3`, id: "riviere" },
  { title: "Souffle du Vent", image: `${baseUrl}/vent.jpg`, audio: `${baseUrl}/sounds/wind.mp3`, id: "vent" }
];

const SoundSection = () => { // On renomme la fonction pour matcher le fichier
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = (ambiance: typeof ambiances[0]) => {
    if (playingId === ambiance.id) {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      setPlayingId(null);
      return;
    }
    if (audioRef.current) { audioRef.current.pause(); }
    const newAudio = new Audio(ambiance.audio);
    newAudio.play().catch(error => console.error("Erreur de lecture :", error));
    audioRef.current = newAudio;
    setPlayingId(ambiance.id);
    newAudio.onended = () => setPlayingId(null);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {ambiances.map((ambiance) => (
            <div key={ambiance.id} className="bg-white/60 backdrop-blur-sm p-8 rounded-[40px] shadow-xl border border-white flex flex-col items-center group transition-all">
              <div className="w-full aspect-square rounded-full overflow-hidden mb-8 border-4 border-white shadow-md">
                <img src={ambiance.image} alt={ambiance.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-600 mb-8 uppercase tracking-widest">{ambiance.title}</h3>
              <button 
                className={`flex items-center gap-3 px-8 py-3.5 rounded-full font-bold shadow-sm ${playingId === ambiance.id ? "bg-[#26A69A] text-white" : "bg-white text-[#26A69A]"}`}
                onClick={() => toggleAudio(ambiance)}
              >
                {playingId === ambiance.id ? <><Square size={14} fill="white" /> STOP</> : <><Play size={14} fill="currentColor" /> ÉCOUTER</>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoundSection; // CETTE LIGNE EST CRUCIALE
