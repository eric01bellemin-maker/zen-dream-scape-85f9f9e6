import { motion } from "framer-motion";

// On utilise des chemins relatifs directs pour éviter les erreurs de compilation
const cards = [
  {
    title: "Emporté en voyage",
    text: "Glissez Sonora Zen dans votre sac et retrouvez un sommeil apaisé, même loin de chez vous.",
    image: "/src/assets/voyage.jpg",
  },
  {
    title: "Difficultés à s’endormir",
    text: "Quand le mental ne s’arrête pas, Sonora Zen vous aide à retrouver le calme.",
    image: "/src/assets/insomnie.jpg",
  },
  {
    title: "Pour les enfants",
    text: "Une ambiance plus douce au coucher pour aider les plus petits à s’apaiser plus facilement.",
    image: "/src/assets/enfant.jpg",
  },
  {
    title: "Pour les mamans",
    text: "Après une longue journée, accordez-vous enfin un vrai moment de repos et de sérénité.",
    image: "/src/assets/maman.jpg",
  },
  {
    title: "Pour les couples",
    text: "Des nuits plus paisibles à deux, dans une atmosphère douce et relaxante.",
    image: "/src/assets/couple.jpg",
  },
];

export default function ThirdPageSection() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-[#f8f6f2] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#63c7bd]">
            Sonora Zen
          </p>
          <h2 className="text-3xl font-bold text-[#14233d] sm:text-4xl">
            Une solution pensée pour vous
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Si l'image ne charge pas, on met un fond gris pour ne pas faire crasher le site
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300?text=Image+Sonora";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-[#14233d]">{card.title}</h3>
                <p className="mt-2 text-sm text-[#5f6b7a]">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-[32px] bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#14233d]">Retrouvez le calme</h3>
              <p className="mt-4 text-[#5f6b7a]">
                Découvrez Sonora Zen en action pour un endormissement profond.
              </p>
            </div>
            <div className="flex justify-center">
              <video autoPlay muted loop playsInline className="w-full max-w-[500px] rounded-2xl shadow-lg">
                <source src="/videos/sonora-zen.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
