import React, { useState, useRef, useEffect } from "react";
import { Volume2 } from "lucide-react";

const baseUrl = import.meta.env.BASE_URL;
const ambiances = [
  { title: "Chant des Oiseaux", image: `${baseUrl}/oiseaux.jpg`, audio: `${baseUrl}/sounds/birds.mp3`, id: "oiseaux" },
  { title: "Bruit des Vagues", image: `${baseUrl}/vagues.jpg`, audio: `${baseUrl}/sounds/waves.mp3`, id: "vagues" },
  { title: "Murmure de la Rivière", image: `${baseUrl}/riviere.jpg`, audio: `${baseUrl}/sounds/river.mp3`, id: "riviere" },
  { title: "Souffle du Vent", image: `${baseUrl}/vent.jpg`, audio: `${baseUrl}/sounds/wind.mp3`, id: "vent" }
];

export default function SoundSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = (ambiance: any) => {
    if (playingId === ambiance.id) {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      setPlayingId(null);
      return;
    }
    if (audioRef.current) { audioRef.current.pause(); }
    const newAudio = new Audio(ambiance.audio);
    newAudio.play().catch(e => console.log(e));
    audioRef.current = newAudio;
    setPlayingId(ambiance.id);
  };

  return (
    <section className="py-24 bg-[#f0f9ff]">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Volume2 className="text-[#26A69A]" size={20} />
          <span className="text-[#26A69A] text-xs font-black uppercase tracking-[0.3em]">Immersion</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-700 mb-16 uppercase tracking-tighter">Nos Ambiances</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {ambiances.map((ambiance) => (
            <div key={ambiance.id} className="bg-white/60 p-8 rounded-[40px] shadow-lg flex flex-col items-center">
              <div className="w-full aspect-square rounded-full overflow-hidden mb-6 border-4 border-white shadow-md">
                <img src={ambiance.image} alt={ambiance.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-bold text-slate-600 mb-6 uppercase tracking-widest">{ambiance.title}</h3>
              <button 
                onClick={() => toggleAudio(ambiance)}
                className={`px-8 py-3 rounded-full font-bold ${playingId === ambiance.id ? "bg-[#26A69A] text-white" : "bg-slate-100 text-[#26A69A]"}`}
              >
                {playingId === ambiance.id ? "STOP" : "ÉCOUTER"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
          
