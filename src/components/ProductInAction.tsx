import React from 'react';

// On définit la structure d'une "feature" pour TypeScript
interface Feature {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const ProductInAction: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Des nuits douces pour vos enfants",
      description: "La conduction osseuse permet de diffuser nos ambiances sonores directement sous l'oreiller. Une solution sûre et apaisante pour aider vos enfants à s'endormir sereinement.",
      image: "enfant.jpg",
      alt: "Enfant dormant paisiblement"
    },
    {
      title: "Votre oasis de calme, partout",
      description: "Compact et léger, Sonora Zen est le compagnon de voyage idéal. Que ce soit à l'hôtel ou en déplacement, votre sanctuaire de paix vous accompagne partout.",
      image: "travel-bag.jpg",
      alt: "Appareil dans un sac de voyage"
    },
    {
      title: "Une immersion totale pour adultes",
      description: "Retrouvez un sommeil profond grâce à une immersion sonore totale. Le design ergonomique se glisse sous n'importe quel oreiller pour une expérience invisible et efficace.",
      image: "adult-sleep.jpg",
      alt: "Adulte dormant sereinement"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight uppercase">
            Le Sommeil, Réinventé Partout
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Découvrez comment Sonora Zen s'intègre naturellement dans votre quotidien.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* IMAGE */}
              <div className="md:w-1/2 w-full">
                <div className="relative group">
                  <img 
                    src={feature.image} 
                    alt={feature.alt} 
                    className="rounded-[40px] shadow-2xl transition-transform duration-500 group-hover:scale-105 border-4 border-[#f0f9ff] w-full h-auto"
                  />
                </div>
              </div>

              {/* TEXTE */}
              <div className="md:w-1/2 text-center md:text-left px-4">
                <h3 className="text-3xl font-bold text-slate-700 mb-6">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInAction;
