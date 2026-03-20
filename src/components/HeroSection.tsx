import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-white pt-32 pb-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-black mb-4">
          ATMOSPHÈRE
        </h1>
        <p className="text-xl font-light text-gray-500 tracking-[0.2em] uppercase mb-12">
          LE SOMMEIL PAR LE DESIGN
        </p>

        {/* Ta Vidéo Principale */}
        <div className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl mb-20 border border-gray-100 bg-gray-50">
         <video src="/videos/video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          />
        </div>

        {/* Tes 4 Univers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { src: "/enfant.jpg", title: "Pour les Enfants" },
            { src: "/insomnie.jpg", title: "Contre l'Insomnie" },
            { src: "/maman.jpg", title: "Pour les Mamans" },
            { src: "/voyage.jpg", title: "En Voyage" },
          ].map((item, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-md">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-lg font-semibold tracking-wide">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
