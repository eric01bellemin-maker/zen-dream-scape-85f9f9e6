import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-50 bg-black">
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
