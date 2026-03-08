import { motion } from "framer-motion";
import { Brain, Heart, Zap, Clock, Shield, Sparkles } from "lucide-react";

const benefits = [
  { icon: Brain, title: "Réduit le stress", desc: "Les ondes sonores apaisent le système nerveux et favorisent la relaxation profonde." },
  { icon: Heart, title: "Améliore le sommeil", desc: "Endormissement plus rapide et cycles de sommeil plus profonds et réparateurs." },
  { icon: Zap, title: "Boost l'énergie", desc: "Un sommeil de qualité vous offre des réveils pleins de vitalité." },
  { icon: Clock, title: "Régule le rythme", desc: "Aide à rétablir un cycle circadien naturel et équilibré." },
  { icon: Shield, title: "Sans ondes nocives", desc: "Mode avion intégré. Aucune émission pendant votre sommeil." },
  { icon: Sparkles, title: "100% naturel", desc: "Sons captés dans la nature, sans synthèse artificielle." },
];

const BenefitsSection = () => {
  return (
    <section id="bienfaits" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Les bienfaits</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Pourquoi choisir <span className="text-gradient-zen">Sonora Zen</span> ?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
