import { useState, useRef } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

const ambiances = [
  {
    id: "birds",
    title: "Chant des Oiseaux",
    audioSrc: "sounds/birds.mp3",
    imageSrc: "oiseaux.jpg", // Vérifie bien cette ligne
  },
  {
    id: "waves",
    title: "Bruit des Vagues",
    audioSrc: "sounds/waves.mp3",
    imageSrc: "mer.jpg", // Vérifie si c'est 'mer.jpg' ou 'vagues.jpg' sur ton GitHub
  },
  {
    id: "river",
    title: "Murmure de la Rivière",
    audioSrc: "sounds/river.mp3",
    imageSrc: "riviere.jpg", // Vérifie bien cette ligne
  },
  {
    id: "wind",
    title: "Souffle du Vent",
    audioSrc: "sounds/wind.mp3",
    imageSrc: "vent.jpg", // Vérifie bien cette ligne
  }
];

const SoundAmbiances = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleSound = (ambiance: typeof ambiances[0]) => {
    // Si on clique sur le son déjà en cours, on l'arrête
    if (playingId === ambiance.id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      // Sinon, on charge le nouveau son
      if (!audioRef.current) {
        audioRef.current = new Audio();
      }
      audioRef.current.src = ambiance.audioSrc;
      audioRef.current.loop = true;
      audioRef.current.play();
      setPlayingId(ambiance.id);
    }
  };

  return (
    <section id="sons" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* EN-TÊTE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            NOS AMBIANCES SONORES
          </h2>
          <p className="text-slate-500 uppercase tracking-[0.3em] text-sm font-semibold">
            UNE IMMERSION TOTALE POUR UN ENDORMISSEMENT RAPIDE
          </p>
        </div>

        {/* GRILLE DES CARTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {ambiances.map((item) => (
            <div 
              key={item.id}
              className="bg-[#f8f9fa] rounded-[50px] p-10 flex flex-col items-center shadow-sm border border-slate-50 transition-all hover:shadow-md"
            >
              {/* CERCLE NOIR AVEC ICÔNE */}
              <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-8 shadow-xl">
                <Volume2 className="text-white w-10 h-10" />
              </div>

              {/* TITRE DU SON */}
              <h3 className="text-2xl font-serif text-slate-800 mb-10">
                {item.title}
              </h3>

              {/* BOUTON ÉCOUTER / PAUSE */}
              <button
                onClick={() => toggleSound(item)}
                className={`w-full max-w-sm py-5 rounded-full border-2 border-black flex items-center justify-center gap-4 transition-all font-bold tracking-[0.2em] text-sm
                  ${playingId === item.id 
                    ? 'bg-black text-white' 
                    : 'bg-transparent text-black hover:bg-slate-100'}`}
              >
                {playingId === item.id ? (
                  <>
                    <Pause className="w-5 h-5 fill-current" />
                    PAUSE
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 fill-current" />
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
