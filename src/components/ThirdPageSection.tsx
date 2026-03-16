import { motion } from "framer-motion";

export default function ThirdPageSection() {
  const cards = [
    { title: "Emporté en voyage", text: "Un sommeil apaisé, même loin de chez vous.", img: "voyage.jpg" },
    { title: "Difficultés à s’endormir", text: "Retrouvez le calme quand le mental s'emballe.", img: "insomnie.jpg" },
    { title: "Pour les enfants", text: "Une ambiance douce pour apaiser les plus petits.", img: "enfant.jpg" },
    { title: "Pour les mamans", text: "Un vrai moment de repos après une longue journée.", img: "maman.jpg" },
    { title: "Pour les couples", text: "Des nuits paisibles dans une atmosphère douce.", img: "couple.jpg" }
  ];

  return (
    <section className="bg-[#f8f6f2] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#14233d]">Une solution pensée pour vous</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                <p className="text-xs text-gray-400">Image: {card.img}</p>
              </div>
              <div className="p-6 text-left">
                <h3 className="font-semibold text-[#14233d]">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:flex md:items-center md:gap-8">
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-bold text-[#14233d]">Découvrez Sonora Zen</h3>
            <p className="mt-4 text-gray-600">Retrouvez un endormissement profond et serein.</p>
          </div>
          <div className="mt-6 flex justify-center md:mt-0 md:w-1/2">
            <div className="aspect-video w-full max-w-md rounded-2xl bg-black shadow-lg flex items-center justify-center">
               <span className="text-white text-sm">Vidéo en cours...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
