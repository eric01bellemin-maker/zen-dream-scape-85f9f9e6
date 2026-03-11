import { motion } from "framer-motion";
import featuresImage from "@/assets/product-features.avif";

// Each label is positioned to cover the English text on the original image
const labels = [
  // Top header area
  { text: "Scène stéréo sous l'oreiller | Canaux gauche/droit indépendants |\nDouble conduction osseuse", top: "0%", left: "2%", width: "96%", py: "py-3", size: "text-[9px] md:text-base font-extrabold" },
  // Display Lens
  { text: "Lentille d'affichage", top: "28%", right: "6%", size: "text-[8px] md:text-sm font-bold" },
  // Display Bracket  
  { text: "Support d'affichage", top: "36%", right: "4%", size: "text-[8px] md:text-sm font-bold" },
  // Main Faceplate
  { text: "Façade principale", top: "52%", right: "4%", size: "text-[8px] md:text-sm font-bold" },
  // PCBA Circuit Board
  { text: "Carte circuit PCBA", top: "58%", right: "2%", size: "text-[8px] md:text-sm font-bold" },
  // Battery
  { text: "Batterie", top: "60%", left: "4%", size: "text-[8px] md:text-sm font-bold" },
  // Two Bone Conduction Speakers
  { text: "2 haut-parleurs\nà conduction osseuse", top: "72%", right: "4%", size: "text-[8px] md:text-sm font-bold" },
  // Buttons
  { text: "Boutons", top: "77%", left: "16%", size: "text-[8px] md:text-sm font-bold" },
  // Main Bottom Shell
  { text: "Coque inférieure", top: "86%", left: "30%", size: "text-[8px] md:text-sm font-bold" },
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
            style={{ backgroundColor: "hsl(var(--card))" }}
          >
            <img
              src={featuresImage}
              alt="Vue éclatée du Sonora Zen montrant ses composants internes"
              className="w-full h-auto"
              loading="lazy"
            />
            {/* French labels covering English text */}
            {labels.map((label, i) => (
              <div
                key={i}
                className={`absolute px-2 ${label.py || 'py-0.5'} rounded whitespace-pre-line leading-tight ${label.size} text-foreground`}
                style={{
                  top: label.top,
                  left: label.left,
                  right: label.right,
                  width: label.width,
                  backgroundColor: "hsl(var(--card))",
                  textAlign: label.right ? "right" : "left",
                }}
              >
                {label.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesImageSection;
