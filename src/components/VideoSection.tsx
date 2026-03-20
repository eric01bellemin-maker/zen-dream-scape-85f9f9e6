import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Titre optionnel au-dessus de la vidéo */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Découvrez le Sonora Zen</h2>
          <div className="h-1 w-16 bg-[#26A69A] mx-auto rounded-full"></div>
        </div>

        {/* Le lecteur vidéo avec ton fichier public/videos/video.mp4 */}
        <div className="relative max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-50 bg-black">
          <video 
            controls 
            className="w-full h-auto aspect-video"
            poster="Présentation du produit.jpg"
          >
            <source src="videos/video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
