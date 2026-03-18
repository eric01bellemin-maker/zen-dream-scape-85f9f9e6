import { ShoppingCart, Star } from "lucide-react";

const solutions = [
  {
    title: "Pour vos voyages",
    description: "Retrouvez le sommeil même en avion ou à l'hôtel.",
    image: "/zen-dream-scape/voyage.jpg",
  },
  {
    title: "Contre l'insomnie",
    description: "Apaisez votre esprit avec des fréquences relaxantes.",
    image: "/zen-dream-scape/insomnie.jpg",
  },
  {
    title: "Pour les enfants",
    description: "Une aide douce pour des nuits calmes et sereines.",
    image: "/zen-dream-scape/enfant.jpg",
  },
];

export default function ThirdPageSection() {
  return (
    <section id="bienfaits" className="py-20 bg-white text-slate-900">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {solutions.map((sol, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <img src={sol.image} alt={sol.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                <p className="text-slate-600 text-sm">{sol.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-3xl p-8 mb-20 text-center border border-blue-100">
          <h2 className="text-3xl font-bold mb-6">Découvrez Sonora Zen en action</h2>
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-black aspect-video">
            <video className="w-full h-full" controls playsInline>
              <source src="/zen-dream-scape/videos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-2xl text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
          </div>
          <h2 className="text-3xl font-bold mb-2">Votre Sonora Zen</h2>
          <p className="text-slate-500 mb-6">Offre de lancement exclusive</p>
          <div className="flex justify-center items-baseline gap-3 mb-8">
            <span className="text-6xl font-black text-blue-600">35€</span>
            <span className="text-2xl text-slate-400 line-through">42€90</span>
          </div>
          <button className="w-full bg-blue-600 text-white text-xl font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-lg">
            COMMANDER MAINTENANT
          </button>
        </div>

      </div>
    </section>
  );
}
