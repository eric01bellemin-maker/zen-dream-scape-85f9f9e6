import { motion } from "framer-motion";
import imgVoyage from "@/assets/voyage.jpg";
import imgInsomnie from "@/assets/insomnie.jpg";
import imgEnfant from "@/assets/enfant.jpg";
import imgMaman from "@/assets/maman.jpg";
import imgCouple from "@/assets/couple.jpg";

const cards = [
  {
    title: "Emporté en voyage",
    text: "Glissez Sonora Zen dans votre sac et retrouvez un sommeil apaisé, même loin de chez vous.",
    image: imgVoyage,
  },
  {
    title: "Difficultés à s’endormir",
    text: "Quand le mental ne s’arrête pas, Sonora Zen vous aide à retrouver le calme et l’endormissement.",
    image: imgInsomnie,
  },
  {
    title: "Pour les enfants",
    text: "Une ambiance plus douce au coucher pour aider les plus petits à s’apaiser plus facilement.",
    image: imgEnfant,
  },
  {
    title: "Pour les mamans seules",
    text: "Après une longue journée, accordez-vous enfin un vrai moment de repos et de sérénité.",
    image: imgMaman,
  },
  {
    title: "Pour les couples",
    text: "Des nuits plus paisibles à deux, dans une atmosphère douce et relaxante.",
    image: imgCouple,
  },
];

export default function ThirdPageSection() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-[#f8f6f2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#63c7bd]">
            Sonora Zen
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#14233d] sm:text-4xl md:text-5xl">
            Une solution pensée pour les nuits difficiles
          </h2>
        </motion.div>

        {/* Grille de cartes */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-[0_12px_35px_rgba(20,35,61,0.08)]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#14233d]">{card.title}</h3>
                <p className="mt-3 text-[#5f6b7a]">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bloc avec la VIDÉO */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-[32px] bg-white p-8 shadow-[0_12px_35px_rgba(20,35,61,0.08)] md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#63c7bd]">
                En action
              </p>
              <h3 className="text-2xl font-bold text-[#14233d] md:text-3xl">
                Retrouvez enfin le calme du soir
              </h3>
              <p className="mt-4 text-[#5f6b7a]">
                Découvrez comment Sonora Zen s'intègre parfaitement à votre rituel nocturne 
                pour un endormissement rapide et profond.
              </p>
              <ul className="mt-6 space-y-3 text-[#5f6b7a]">
                <li>• Son sommeil vous suit partout</li>
                <li>• Enfin des nuits plus paisibles</li>
                <li>• Une solution douce pour tous</li>
              </ul>
            </div>

            {/* LA VIDÉO ICI */}
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-3xl bg-[#f8fbfb] shadow-2xl">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="h-auto w-full max-w-[520px] rounded-3xl object-contain"
                >
                  <source src="/videos/sonora-zen.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
