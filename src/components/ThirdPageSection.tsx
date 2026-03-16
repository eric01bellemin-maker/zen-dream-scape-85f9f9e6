import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Battery, Bluetooth, Moon, Cable } from "lucide-react";

// On utilise maintenant des chemins directs vers le dossier public
const colors = [
  { 
    id: "blue", 
    label: "Bleu Sérénité", 
    image: "/Product-blue.png", // Chemin direct vers public
    swatch: "hsl(220, 40%, 70%)", 
    overlay: "hsla(220, 70%, 50%, 0.4)" 
  },
  { 
    id: "grey", 
    label: "Gris Douceur", 
    image: "/palet-final-v1.png", // Chemin direct vers public
    swatch: "hsl(0, 0%, 65%)", 
    overlay: "transparent" 
  },
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
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-zen-cloud p-6 md:p-12 flex flex-col items-center justify-center">
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
                  className="relative z-10 w-full max-w-[200px] sm:max-w-xs md:max-w-md drop-shadow-2xl"
                />
              </AnimatePresence>

              <div className="relative z-10 mt-8 flex flex-col items-center gap-2">
                <p className="text-sm font-medium">{currentProduct.label}</p>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className="w-8 h-8 rounded-full border-2 transition-all"
                      style={{
                        backgroundColor: color.swatch,
                        borderColor: selectedColor === color.id ? "black" : "transparent",
                      }}
                    />
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
              Le Sonora Zen est un palet sonore ultra-plat recouvert de tissu acoustique premium. Placez-le sous votre oreiller : il diffuse des sons apaisants par vibrations douces.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feat) => (
                <div key={feat.title} className="p-4 rounded-xl bg-background/50 border border-border">
                  <feat.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="font-bold text-xs md:text-sm">{feat.title}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">{feat.desc}</p>
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
