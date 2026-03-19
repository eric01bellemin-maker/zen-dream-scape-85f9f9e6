import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Marie L.", text: "Je m'endors en 10 minutes maintenant. Le son des vagues est incroyablement réaliste.", rating: 5, role: "Enseignante" },
  { name: "Thomas D.", text: "Après des années d'insomnie, j'ai enfin retrouvé un sommeil réparateur. Ce petit palet a changé ma vie.", rating: 5, role: "Développeur" },
  { name: "Sophie M.", text: "Design magnifique et qualité sonore exceptionnelle. Indispensable sur ma table de nuit.", rating: 5, role: "Architecte d'intérieur" },
  { name: "Laurent B.", text: "Le mode minuterie est parfait. Je programme 30 min et je m'endors bien avant la fin.", rating: 4, role: "Médecin" },
  { name: "Camille R.", text: "Mon mari ne l'entend même pas grâce à la conduction osseuse. C'est génial pour les couples !", rating: 5, role: "Graphiste" },
  { name: "Julien P.", text: "Très sceptique au départ, mais après une semaine je ne peux plus m'en passer. Qualité de sommeil nettement améliorée.", rating: 5, role: "Commercial" },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-2">Avis clients</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            Ils ont retrouvé le <span className="text-gradient-zen">sommeil</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm md:text-base">
            Découvrez les témoignages de nos clients qui dorment enfin paisiblement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border/50 relative"
            >
              <Quote className="w-8 h-8 text-primary/10 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-3.5 h-3.5 ${j < t.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
