import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const VideoSession = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center p-6 pt-24 md:pt-12 md:justify-center">
      
      {/* BOUTON RETOUR : Plus de "absolute" pour éviter le chevauchement sur mobile */}
      <div className="w-full max-w-5xl mb-10">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/70 hover:text-[#26A69A] transition-all group text-sm font-medium"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </button>
      </div>

      <div className="max-w-5xl w-full">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#26A69A] mb-4 leading-tight">
            Votre Séance de Relaxation
          </h1>
          <p className="text-white/60 text-base md:text-lg">
            Installez-vous confortablement et laissez Sonora Zen vous guider.
          </p>
        </div>

        {/* LE LECTEUR VIDÉO */}
        <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden border-4 border-white/5 aspect-video">
          <video 
            controls 
            autoPlay 
            className="w-full h-full object-contain"
          >
            <source src="videos/video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>

        {/* ÉTAPES */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[#26A69A] font-bold mb-1">Étape 1</p>
            <p className="text-sm text-white/80">Placez le Sonora Zen sous votre oreiller</p>
          </div>
          <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[#26A69A] font-bold mb-1">Étape 2</p>
            <p className="text-sm text-white/80">Fermez les yeux et respirez calmement</p>
          </div>
          <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[#26A69A] font-bold mb-1">Étape 3</p>
            <p className="text-sm text-white/80">Laissez les vibrations vous apaiser</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSession;
