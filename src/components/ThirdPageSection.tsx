import { motion } from "framer-motion";

const cards = [
  { title: "Emporté en voyage", text: "Glissez Sonora Zen dans votre sac et retrouvez un sommeil apaisé.", image: "/src/assets/voyage.jpg" },
  { title: "Difficultés à s’endormir", text: "Quand le mental ne s’arrête pas, Sonora Zen vous aide à retrouver le calme.", image: "/src/assets/insomnie.jpg" },
  { title: "Pour les enfants", text: "Une ambiance plus douce au coucher pour aider les plus petits.", image: "/src/assets/enfant.jpg" },
  { title: "Pour les mamans", text: "Après une longue journée, accordez-vous enfin un vrai moment de repos.", image: "/src/assets/maman.jpg" },
  { title: "Pour les couples", text: "Des nuits plus paisibles à deux, dans une atmosphère douce.", image: "/src/assets/couple.jpg" },
];

export default function ThirdPageSection() {
  return (
    <section className="bg-[#f8f6f2] py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold text-[#14233d]">Une solution pensée pour vous</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-48 w-full bg-gray-100">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="h-full w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-[#14233d]">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:flex md:items-center md:gap-8">
          <div className="text-left md:w-1/2">
            <h3 className="text-2xl font-bold text-[#14233d]">Retrouvez le calme</h3>
            <p className="mt-4 text-gray-600">Découvrez Sonora Zen en action pour un endormissement profond.</p>
          </div>
          <div className="mt-6 flex justify-center md:mt-0 md:w-1/2">
            <video autoPlay muted loop playsInline className="w-full max-w-md rounded-2xl shadow-lg">
              <source src="/videos/sonora-zen.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
