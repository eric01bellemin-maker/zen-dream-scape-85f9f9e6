import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const solutions = [
  {
    title: "Pour vos voyages",
    description: "Retrouvez le sommeil même en avion ou à l'hôtel.",
    image: "/voyage.jpg",
  },
  {
    title: "Contre l'insomnie",
    description: "Apaisez votre esprit avec des fréquences relaxantes.",
    image: "/insomnie.png", // <--- On change .jpg par .png ici !
  },
  {
    title: "Pour les enfants",
    description: "Une aide douce pour des nuits calmes et sereines.",
    image: "/enfant.jpg",
  },
];


const ThirdPageSection = () => {
  return (
    <section className="py-20 bg-white">
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
              <div className="h-48 overflow-hidden">
                <img 
                  src={sol.image} 
                  alt={sol.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60")} // Image de secours si le nom est mal tapé
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
        <div className="grid md:grid-cols-2 gap-12 items-center bg-zen-cloud rounded-3xl p-8 md:p-12">
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
              {/* Remplace 'video-sonora.mp4' par le vrai nom de ton fichier dans le dossier public/videos */}
              {/* Utilisation du nom exact avec l'accent et les espaces */}
<source src="/videos/vidéo sonora zen.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPageSection;
