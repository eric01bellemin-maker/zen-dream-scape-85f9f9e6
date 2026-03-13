import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import soundBirds from "@/assets/sound-birds.jpg";
import soundRiver from "@/assets/sound-river.jpg";
import soundWaves from "@/assets/sound-waves.jpg";
import soundWind from "@/assets/sound-wind.jpg";

const sounds = [
  { image: soundBirds, title: "Chant d'oiseaux", desc: "Mélodies douces au lever du jour", audio: "/sounds/birds.mp3" },
  { image: soundRiver, title: "Rivière apaisante", desc: "Le murmure continu de l'eau vive", audio: "/sounds/river.mp3" },
  { image: soundWaves, title: "Douceur des vagues", desc: "Le ressac hypnotique de l'océan", audio: "/sounds/waves.mp3" },
  { image: soundWind, title: "Souffle du vent", desc: "La brise légère à travers les arbres", audio: "/sounds/wind.mp3" },
];

const SoundsSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (index: number) => {
    if (playingIndex === index && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlayingIndex(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(sounds[index].audio);
    audioRef.current = audio;
    audio.play();
    setPlayingIndex(index);

    audio.onended = () => {
      setPlayingIndex(null);
    };
  };

  return (
    <section id="sons" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-2">Univers sonore</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            4 ambiances pour <span className="text-gradient-zen">s'évader</span>
          </h2>
          <p className="text-xs md:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
            Chaque son a été capturé en haute fidélité dans des environnements naturels préservés.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {sounds.map((sound, i) => (
            <motion.div
              key={sound.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => handlePlay(i)}
            >
              <div className={`relative rounded-xl md:rounded-2xl overflow-hidden aspect-square mb-2 md:mb-4 border transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10 ${playingIndex === i ? 'border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/30' : 'border-border/50 group-hover:border-primary/30'}`}>
                <img
                  src={sound.image}
                  alt={sound.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${playingIndex === i ? 'scale-100 opacity-100' : 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100'}`}>
                    {playingIndex === i ? (
                      <Pause className="w-4 h-4 md:w-6 md:h-6 text-primary fill-primary" />
                    ) : (
                      <Play className="w-4 h-4 md:w-6 md:h-6 text-primary fill-primary ml-0.5" />
                    )}
                  </div>
                </div>

                {playingIndex === i && (
                  <div className="absolute top-2 right-2 md:top-3 md:right-3 flex items-end gap-[2px] h-4 md:h-5">
                    {[0, 1, 2, 3].map((bar) => (
                      <motion.div
                        key={bar}
                        className="w-[2px] md:w-[3px] bg-primary rounded-full"
                        animate={{ height: ["40%", "100%", "60%", "90%", "40%"] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: bar * 0.15 }}
                      />
                    ))}
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                  <p className="text-xs md:text-sm font-semibold text-primary-foreground">{sound.title}</p>
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-muted-foreground text-center">{sound.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoundsSection;
