import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const sounds = [
  { 
    image: "/sounds/oiseaux.jpg", 
    title: "Chant d'oiseaux", 
    desc: "Mélodies douces au lever du jour", 
    audio: "" 
  },
  { 
    image: "/sounds/riviere.jpg", 
    title: "Rivière apaisante", 
    desc: "Le murmure continu de l'eau vive", 
    audio: "" 
  },
  { 
    image: "/sounds/mer.jpg", 
    title: "Douceur de la mer", 
    desc: "Le ressac hypnotique de l'océan", 
    audio: "" 
  },
  { 
    image: "/sounds/vent.jpg", 
    title: "Vent dans les arbres", 
    desc: "La brise légère à travers la forêt", 
    audio: ""
  }
];

const SoundsSection = () => {
  const [playing, setPlaying] = useState<number | null>(null);
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  const togglePlay = (index: number) => {
    if (!sounds[index].audio) return;
    if (playing === index) {
      audioRefs.current[index].pause();
      setPlaying(null);
    } else {
      if (playing !== null) audioRefs.current[playing].pause();
      audioRefs.current[index].play();
      setPlaying(index);
    }
  };

  return (
    <section id="sounds" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16 tracking-widest uppercase">Atmosphères</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sounds.map((sound, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800"
            >
              <div className="h-48 overflow-hidden relative group">
                <img src={sound.image} alt={sound.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <button 
                  onClick={() => togglePlay(index)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  {playing === index ? (
                    <Pause className="w-12 h-12 text-white fill-white" />
                  ) : (
                    <Play className="w-12 h-12 text-white fill-white ml-1" />
                  )}
                </button>
                {sound.audio && (
                  <audio 
                    ref={el => el && (audioRefs.current[index] = el)} 
                    src={sound.audio} 
                    loop 
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{sound.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{sound.desc}</p>
                {!sound.audio && <p className="text-zinc-600 text-xs mt-2 italic">Audio bientôt disponible</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoundsSection;
