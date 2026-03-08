import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Marie L.", text: "Je m'endors en 10 minutes maintenant. Le son des vagues est incroyablement réaliste. Mon mari ne l'entend même pas !", rating: 5 },
  { name: "Thomas D.", text: "Après des années d'insomnie, j'ai enfin retrouvé un sommeil réparateur. Le Sonora Zen a changé ma vie.", rating: 5 },
  { name: "Sophie M.", text: "Design magnifique et qualité sonore exceptionnelle. Je l'emporte partout en voyage. Indispensable.", rating: 5 },
  { name: "Laurent B.", text: "Le mode minuterie est parfait. Je programme 30 min et je m'endors bien avant la fin. Produit remarquable.", rating: 4 },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Témoignages</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ils ont retrouvé le <span className="text-gradient-zen">sommeil</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
