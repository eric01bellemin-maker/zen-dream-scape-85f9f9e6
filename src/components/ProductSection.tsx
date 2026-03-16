import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Battery, Bluetooth, Moon, Check, Cable } from "lucide-react";
import { Button } from "@/components/ui/button";

const colors = [
  { id: "blue", label: "Bleu Sérénité", swatch: "hsl(220, 40%, 70%)", overlay: "hsla(220, 70%, 50%, 0.4)" },
  { id: "grey", label: "Gris Douceur", swatch: "hsl(0, 0%, 65%)", overlay: "transparent" },
];

const features = [
  { icon: Volume2, title: "Son immersif", desc: "Conduction osseuse ultra-fine" },
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
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-zen-cloud p-6 md:p-12 flex flex-col items-center justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-zen-glow/10" />
              
              {/* L'IMAGE A ÉTÉ SUPPRIMÉE ICI POUR RÉGLER LE BUG */}
              <div className="text-muted-foreground text-sm italic z-10">
                Aperçu du coloris : {currentProduct.label}
              </div>

              <div className="relative z-10 mt-8 flex flex-col items-center gap-2">
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className="relative w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center"
                      style={{
                        backgroundColor: color.swatch,
                        borderColor: selectedColor === color.id ? "white" : "transparent",
                      }}
                    >
                      {selectedColor === color.id && <Check className="w-4 h-4 text-white" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-3xl font-semibold text-foreground">
              Design minimaliste, technologie avancée
            </h3>
            <p className="text-muted-foreground">
              Le Sonora Zen est un palet sonore ultra-plat conçu pour se glisser sous votre oreiller.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat) => (
                <div key={feat.title} className="p-4 rounded-xl bg-background/50 border border-border">
                  <feat.icon className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-bold text-sm">{feat.title}</h4>
                  <p className="text-xs text-muted-foreground">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
