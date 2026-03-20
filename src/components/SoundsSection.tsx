import { useState, useRef } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "./ui/button";

const SoundsSection = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const sounds = [
    { id: "oiseaux", name: "Chant des Oiseaux", file: "/sons/oiseaux.mp3" },
    { id: "riviere", name: "Ruisseau Paisible", file: "/sons/riviere.mp3" },
    { id: "pluie", name: "Pluie Douce", file: "/sons/pluie.mp3" },
    { id: "foret", name: "Ambiance Forêt", file: "/sons/foret.mp3" },
  ];

  const togglePlay = (id: string, file: string) => {
    if (playingId === id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(file);
      audioRef.current.loop = true;
      audioRef.current.play();
      setPlayingId(id);
    }
  };

  return (
    <section id="sounds" className="py-24 bg-white font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-tighter text-black">
          NOS AMBIANCES SONORES
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto uppercase tracking-widest text-sm">
          Une immersion totale pour un endormissement rapide
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {sounds.map((sound) => (
            <div 
              key={sound.id} 
              className={`p-8 rounded-[2rem] transition-all duration-300 flex flex-col items-center border ${
                playingId === sound.id ? "bg-black text-white border-black shadow-2xl scale-105" : "bg-gray-50 text-black border-gray-100 hover:border-gray-300"
              }`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                playingId === sound.id ? "bg-white text-black" : "bg-black text-white"
              }`}>
                <Volume2 size={28} />
              </div>
              
              <h3 className="font-bold text-lg mb-8 tracking-tight">{sound.name}</h3>
              
              <Button 
                onClick={() => togglePlay(sound.id, sound.file)}
                variant="ghost"
                className={`rounded-full w-full py-6 border-2 ${
                  playingId === sound.id 
                    ? "bg-white text-black hover:bg-gray-100 border-white" 
                    : "bg-transparent text-black border-black hover:bg-black hover:text-white"
                }`}
              >
                {playingId === sound.id ? (
                  <><Pause className="mr-2 h-5 w-5 fill-current" /> PAUSE</>
                ) : (
                  <><Play className="mr-2 h-5 w-5 fill-current" /> ÉCOUTER</>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoundsSection;
