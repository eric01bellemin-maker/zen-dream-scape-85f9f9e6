import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            L'expérience Sonora Zen
          </h2>
          <div className="h-1.5 w-24 bg-[#26A69A] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg">
            Découvrez comment retrouver des nuits profondes et réparatrices en quelques secondes.
          </p>
        </div>

        {/* Lecteur Vidéo - Chemin vers ton dossier public/videos/video.mp4 */}
        <div className="relative max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-black">
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
