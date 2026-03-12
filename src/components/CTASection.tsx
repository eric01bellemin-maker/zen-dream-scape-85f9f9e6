import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, RotateCcw, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-zen-glow/5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prêt à <span className="text-gradient-zen">mieux dormir</span> ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Offrez-vous le sommeil que vous méritez. Livraison gratuite et retour sous 30 jours.
          </p>

          <div className="bg-card border border-border/50 rounded-3xl p-8 mb-8 shadow-xl shadow-primary/5">
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="text-2xl text-muted-foreground line-through">30,00 €</span>
              <span className="text-5xl font-bold text-foreground">25,00 €</span>
              <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">-17% ÉCONOMISÉ</span>
            </div>

            <Button size="lg" className="rounded-full px-12 text-lg shadow-lg shadow-primary/25 w-full sm:w-auto">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Ajouter au panier
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary" />
              Livraison gratuite
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-primary" />
              Retour 30 jours
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Garantie 2 ans
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
