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
  {
    name: "Marc L.",
    text: "Enfin des nuits complètes sans réveiller ma compagne ! Un vrai bonheur.",
    rating: 5
  },
  {
    name: "Sophie D.",
    text: "L'application est super simple et le son est d'une clarté incroyable sous l'oreiller.",
    rating: 5
  },
  {
    name: "Thomas B.",
    text: "Idéal pour mes déplacements pro. Je ne m'en sépare plus.",
    rating: 4
  }
];

const ThirdPageSection = () => {
  return (
    <section id="bienfaits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Une solution pour vous */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Une solution pour vous</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sonora Zen s'adapte à votre style de vie pour vous offrir le meilleur repos possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {solutions.map((sol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary/20 rounded-2xl overflow-hidden border border-border"
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img 
                  src={sol.image} 
                  alt={sol.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{sol.title}</h3>
                <p className="text-muted-foreground text-sm">{sol.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Vidéo Découverte */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-zen-cloud rounded-3xl p-8 md:p-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Découvrez Sonora Zen en action</h2>
            <div className="space-y-4">
              {[
                "Installation invisible sous l'oreiller",
                "Application mobile intuitive incluse",
                "Plus de 50 paysages sonores disponibles",
                "Utilisé par des milliers de dormeurs"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
          >
            <video 
              className="w-full h-full object-cover"
              controls
              playsInline
            >
              <source src="/zen-dream-scape/videos/video.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </motion.div>
        </div>

        {/* --- SECTION PRIX ET AVIS --- */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-2xl font-bold">
              OFFRE DE LANCEMENT
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(128 avis)</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">Votre Sonora Zen</h2>
                <p className="text-muted-foreground mb-6">
                  Comprend l'appareil, l'accès illimité à l'application et la garantie satisfait ou remboursé de 30 jours.
                </p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-6xl font-extrabold text-primary">35€</span>
                  <span className="text-2xl text-muted-foreground line-through decoration-red-500/50">42€90</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white text-lg font-bold py-6 px-8 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 group">
                  <ShoppingCart className="group-hover:scale-110 transition-transform" />
                  COMMANDER MAINTENANT
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Livraison gratuite • Paiement 100% sécurisé
                </p>
              </div>
            </div>
          </div>

          {/* SECTION TÉMOIGNAGES CLIENTS */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-secondary/10 p-6 rounded-2xl border border-border/50 text-center italic text-sm">
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, index) => (
                    <Star key={index} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                "{t.text}"
                <p className="mt-3 font-semibold not-italic text-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPageSection;
