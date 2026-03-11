import { motion } from "framer-motion";
import featuresImage from "@/assets/product-features.avif";

// Covers: positioned to fully hide English text, then show French
const covers = [
  // Header text block (top)
  { text: "Scène stéréo sous l'oreiller\nCanaux gauche/droit indépendants\nDouble conduction osseuse", top: "0%", left: "0%", w: "100%", h: "16%", align: "left" as const, size: "text-[8px] md:text-lg", bold: true, px: "px-4 pt-2" },
  // Display Lens (right side ~22%)
  { text: "Lentille", top: "21%", right: "0%", w: "36%", h: "5%", align: "right" as const, size: "text-[7px] md:text-sm" },
  // Display Bracket (right side ~30%)
  { text: "Support", top: "30%", right: "0%", w: "30%", h: "5%", align: "right" as const, size: "text-[7px] md:text-sm" },
  // Main Faceplate (right ~44%)
  { text: "Façade principale", top: "44%", right: "0%", w: "32%", h: "5%", align: "right" as const, size: "text-[7px] md:text-sm" },
  // PCBA Circuit Board (right ~50%)
  { text: "Carte circuit PCBA", top: "49%", right: "0%", w: "34%", h: "5%", align: "right" as const, size: "text-[7px] md:text-sm" },
  // Battery (left ~52%)
  { text: "Batterie", top: "52%", left: "0%", w: "24%", h: "5%", align: "left" as const, size: "text-[7px] md:text-sm" },
  // Two Bone Conduction Speakers (right ~62%)
  { text: "2 haut-parleurs\nà conduction osseuse", top: "60%", right: "0%", w: "42%", h: "10%", align: "right" as const, size: "text-[7px] md:text-sm" },
  // Buttons (left ~67%)
  { text: "Boutons", top: "67%", left: "0%", w: "28%", h: "5%", align: "left" as const, size: "text-[7px] md:text-sm" },
  // Main Bottom Shell (center ~76%)
  { text: "Coque inférieure", top: "76%", left: "20%", w: "40%", h: "6%", align: "center" as const, size: "text-[7px] md:text-sm" },
];

const FeaturesImageSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Caractéristiques
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Conçu pour votre <span className="text-gradient-zen">bien-être</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-xl shadow-primary/5"
          >
            <img
              src={featuresImage}
              alt="Vue éclatée du Sonora Zen montrant ses composants internes"
              className="w-full h-auto block"
              loading="lazy"
            />
            {covers.map((c, i) => (
              <div
                key={i}
                className={`absolute flex items-center whitespace-pre-line leading-tight font-bold text-foreground ${c.size} ${c.px || 'px-2'}`}
                style={{
                  top: c.top,
                  left: c.left,
                  right: c.right,
                  width: c.w,
                  height: c.h,
                  textAlign: c.align,
                  justifyContent: c.align === "right" ? "flex-end" : c.align === "center" ? "center" : "flex-start",
                  backgroundColor: "white",
                }}
              >
                {c.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesImageSection;
