import { motion } from "framer-motion";
import productImage from "@/assets/product-device.png";
import { Speaker, Battery, Bluetooth, Cable, Power, Disc } from "lucide-react";

const specs = [
  { icon: Disc, label: "Façade en tissu acoustique", desc: "Tissu premium doux au toucher" },
  { icon: Speaker, label: "2 haut-parleurs à conduction osseuse", desc: "Son audible uniquement par vous" },
  { icon: Battery, label: "Batterie 400 mAh", desc: "16h d'autonomie, 150 jours en veille" },
  { icon: Bluetooth, label: "Bluetooth 5.3", desc: "Connexion stable et sans latence" },
  { icon: Cable, label: "Recharge USB-C", desc: "Câble inclus, recharge rapide" },
  { icon: Power, label: "Boutons intégrés", desc: "Contrôle du volume et des sons" },
];

const FeaturesImageSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Caractéristiques
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Conçu pour votre <span className="text-gradient-zen">bien-être</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {/* Left specs */}
          <div className="flex flex-col gap-6">
            {specs.slice(0, 3).map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-right md:text-right text-left"
              >
                <div className="flex items-center gap-3 md:flex-row-reverse">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <spec.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{spec.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{spec.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={productImage}
              alt="Sonora Zen — palet sonore vue de dessus"
              className="w-full max-w-[280px] drop-shadow-2xl animate-float"
            />
          </motion.div>

          {/* Right specs */}
          <div className="flex flex-col gap-6">
            {specs.slice(3).map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <spec.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{spec.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{spec.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesImageSection;
