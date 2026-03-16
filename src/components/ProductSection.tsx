import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Battery, Bluetooth, Moon, Check, Cable } from "lucide-react";
import productBlue from "@/assets/product-device.png";

const colors = [
  { id: "blue", label: "Bleu Sérénité", image: productBlue, swatch: "hsl(220, 40%, 70%)", overlay: "hsla(220, 70%, 50%, 0.4)" },
  { id: "grey", label: "Gris Douceur", image: productBlue, swatch: "hsl(0, 0%, 65%)", overlay: "transparent" },
];

const features = [
  { icon: Volume1, title: "Son immersif", desc: "Conduction osseuse ultra-fine" },
  { icon: Battery, title: "16h d'autonomie", desc: "Batterie 400 mAh" },
  { icon: Bluetooth, title: "Bluetooth 5.3", desc: "Connexion stable" },
  { icon: Cable, title: "Recharge USB-C", desc: "Câble USB inclus" },
  { icon: Moon, title: "Minuterie auto", desc: "Arrêt progressif" },
];

const ProductSection = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const currentProduct = colors.find((c) => c.id === selectedColor)!;

  return (
    <section id="produit" className="py-12 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-2">Le produit</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
            Un concentré de <span className="text-gradient-zen">sérénité</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-zen-cloud p-6 md:p-12 flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-zen-glow/10" />
              <AnimatePresence mode="wait">
                              </AnimatePresence>
              <div
                className="absolute inset-0 z-20 rounded-2xl md:rounded-3xl pointer-events-none mix-blend-color transition-colors duration-300"
                style={{ backgroundColor: currentProduct.overlay }}
              />

              <div className="relative z-10 mt-4 md:mt-8 flex flex-col items-center gap-2">
                <p className="text-xs md:text-sm font-medium text-foreground">{currentProduct.label}</p>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className="relative w-7 h-7 md:w-9 md:h-9 rounded-full border-2 transition-all duration-200 flex items-center justify-center"
                      style={{
                        backgroundColor: color.swatch,
                        borderColor: selectedColor === color.id ? "hsl(var(--foreground))" : "transparent",
                      }}
                      aria-label={color.label}
                    >
                      {selectedColor === color.id && (
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-foreground" />
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
            <div className="rounded-2xl md:rounded-3xl bg-muted/50 p-5 md:p-8">
              <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-6 text-foreground">
                Design minimaliste,<br />technologie avancée
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 md:mb-8">
                Le Sonora Zen est un palet sonore ultra-plat recouvert de tissu acoustique premium.
                Placez-le sous votre oreiller : il diffuse des sons apaisants par vibrations douces,
                audibles uniquement par vous.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 md:gap-4">
                {features.map((feat, i) => (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-background/60 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <feat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mb-1 md:mb-2" />
                    <p className="font-semibold text-xs md:text-sm text-foreground">{feat.title}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{feat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
