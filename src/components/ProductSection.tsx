import { motion } from "framer-motion";
import { Volume2, Battery, Bluetooth, Moon } from "lucide-react";
import productImage from "@/assets/product-device.png";

const features = [
  { icon: Volume2, title: "Son immersif", desc: "Haut-parleur à conduction osseuse ultra-fin" },
  { icon: Battery, title: "8h d'autonomie", desc: "Une nuit complète sur une seule charge" },
  { icon: Bluetooth, title: "Bluetooth 5.3", desc: "Connexion stable et sans latence" },
  { icon: Moon, title: "Minuterie auto", desc: "Arrêt progressif intelligent" },
];

const ProductSection = () => {
  return (
    <section id="produit" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Le produit</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Un concentré de <span className="text-gradient-zen">sérénité</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-zen-cloud p-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-zen-glow/10" />
              <img
                src={productImage}
                alt="Palet sonore Sonora Zen"
                className="relative z-10 w-full max-w-md animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Design minimaliste,<br />technologie avancée
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Le Sonora Zen est un palet sonore ultra-plat recouvert de tissu acoustique premium. 
              Placez-le sous votre oreiller : il diffuse des sons apaisants par vibrations douces, 
              audibles uniquement par vous, sans déranger votre partenaire.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <feat.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="font-semibold text-sm text-foreground">{feat.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
