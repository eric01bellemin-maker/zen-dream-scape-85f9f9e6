import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[hsl(0,0%,7%)] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Sonora <span className="text-gradient-zen">Zen</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-light">
            Votre compagnon de sommeil. Glissez-le sous l'oreiller et laissez-vous bercer.
          </p>
        </motion.div>

        {/* Product images */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10">
              <img src="/palet-bleu.jpg" alt="Palet Sonora Zen — Édition Bleu" className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-sm text-gray-400 tracking-widest uppercase">Édition Bleu</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-gray-500/20 border border-white/10">
              <img src="/palet-gris.jpg" alt="Palet Sonora Zen — Édition Gris" className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-sm text-gray-400 tracking-widest uppercase">Édition Gris</p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.getElementById('sounds')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold tracking-widest text-sm hover:bg-gray-200 transition-colors"
          >
            COMMENCER L'EXPÉRIENCE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
