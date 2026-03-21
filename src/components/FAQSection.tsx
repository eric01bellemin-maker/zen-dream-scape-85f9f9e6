import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment fonctionne la conduction osseuse ?",
    answer: "Contrairement aux écouteurs classiques, le Sonora Zen diffuse des micro-vibrations à travers votre oreiller. Le son parvient directement à votre oreille interne sans boucher vos conduits auditifs, ce qui est beaucoup plus reposant."
  },
  {
    question: "Est-ce que mon partenaire entendra le son ?",
    answer: "Non ! C'est l'avantage magique de notre technologie. Le son reste confiné à l'oreiller sur lequel il est posé. Votre partenaire pourra dormir dans un silence total à vos côtés."
  },
  {
    question: "Quelle est l'autonomie de la batterie ?",
    answer: "Le Sonora Zen offre jusqu'à 16 heures d'écoute continue. Avec une utilisation moyenne, vous n'aurez besoin de le recharger (via USB-C) qu'une seule fois par semaine."
  },
  {
    question: "Puis-je l'utiliser avec n'importe quel oreiller ?",
    answer: "Absolument. Qu'il soit en plume, en mousse à mémoire de forme ou synthétique, il suffit de glisser le palet dessous pour que la magie opère."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-[#f0f9ff]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-slate-500 mb-4 uppercase tracking-tight">
            Des questions ?
          </h2>
          <p className="text-slate-400 font-medium italic">Tout ce que vous devez savoir pour vos futures nuits</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-none bg-white/80 backdrop-blur-sm rounded-[25px] px-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-bold text-slate-600 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
