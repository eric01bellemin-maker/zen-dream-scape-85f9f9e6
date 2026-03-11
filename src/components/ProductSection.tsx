import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Battery, Bluetooth, Moon, Check, Cable } from "lucide-react";
import productBlue from "@/assets/product-device.png";
import productYellow from "@/assets/product-yellow.png";
import productPink from "@/assets/product-pink.png";
import productGreen from "@/assets/product-green.png";

const colors = [
  { id: "blue", label: "Bleu Sérénité", image: productBlue, swatch: "hsl(220, 40%, 70%)", overlay: "hsla(220, 60%, 55%, 0.25)" },
  { id: "grey", label: "Gris Douceur", image: productBlue, swatch: "hsl(0, 0%, 65%)", overlay: "transparent" },
];

const features = [
  { icon: Volume2, title: "Son immersif", desc: "Haut-parleur à conduction osseuse ultra-fin" },
  { icon: Battery, title: "8h d'autonomie", desc: "Une nuit complète sur une seule charge" },
  { icon: Bluetooth, title: "Bluetooth 5.3", desc: "Connexion stable et sans latence" },
  { icon: Cable, title: "Recharge USB-C", desc: "Câble USB inclus pour une recharge rapide" },
  { icon: Moon, title: "Minuterie auto", desc: "Arrêt progressif intelligent" },
];

const ProductSection = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const currentProduct = colors.find((c) => c.id === selectedColor)!;

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
            <div className="relative rounded-3xl overflow-hidden bg-zen-cloud p-12 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-zen-glow/10" />
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedColor}
                  src={currentProduct.image}
                  alt={`Palet sonore Sonora Zen — ${currentProduct.label}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-full max-w-md animate-float drop-shadow-2xl"
                />
              </AnimatePresence>
              {/* Color overlay */}
              <div
                className="absolute inset-0 z-20 rounded-3xl pointer-events-none mix-blend-color transition-colors duration-300"
                style={{ backgroundColor: currentProduct.overlay }}
              />

              {/* Color picker */}
              <div className="relative z-10 mt-8 flex flex-col items-center gap-3">
                <p className="text-sm font-medium text-foreground">{currentProduct.label}</p>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className="relative w-9 h-9 rounded-full border-2 transition-all duration-200 flex items-center justify-center"
                      style={{
                        backgroundColor: color.swatch,
                        borderColor: selectedColor === color.id ? "hsl(var(--foreground))" : "transparent",
                      }}
                      aria-label={color.label}
                    >
                      {selectedColor === color.id && (
                        <Check className="w-4 h-4 text-foreground" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
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
