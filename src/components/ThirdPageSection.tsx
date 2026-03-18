import { motion } from "framer-motion";
import { CheckCircle2, ShoppingCart, Star } from "lucide-react";

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

const testimonials = [
  { name: "Marc L.", text: "Enfin des nuits complètes sans réveiller ma compagne !", rating: 5 },
  { name: "Sophie D.", text: "L'application est super simple et le son est incroyable.", rating: 5 },
  { name: "Thomas B.", text: "Idéal pour mes déplacements pro. Je ne m'en sépare plus.", rating: 4 }
];

const ThirdPageSection = () => {
  return (
    <section id="bienfaits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {solutions.map((sol, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <img src={sol.image} alt={sol.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{sol.title}</h3>
                <p className="text-gray-600 text-sm">{sol.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-blue-50 rounded-3xl p-8 mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Découvrez Sonora Zen en action</h2>
          <video className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl" controls playsInline>
            <source src="/zen-dream-scape/videos/video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Pricing Section */}
        <div className="max-w-xl mx-auto bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-xl text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
          </div>
          <h2 className="text-3xl font-bold mb-4">Votre Sonora Zen</h2>
          <div className="flex justify-center items-baseline gap-3 mb-6">
            <span className="text-6xl font-extrabold text-blue-600">35€</span>
            <span className="text-2xl text-gray-400 line-through">42€90</span>
          </div>
          <button className="w-full bg-blue-600 text-white text-lg font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors">
            COMMANDER MAINTENANT
          </button>
        </div>

      </div>
    </section>
  );
};

export default ThirdPageSection;
