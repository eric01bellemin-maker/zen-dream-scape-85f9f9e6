const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold font-['Cormorant_Garamond'] text-gradient-zen mb-3">Sonora Zen</h3>
            <p className="text-sm text-muted-foreground">Le palet sonore qui vous guide vers un sommeil doux et serein.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Liens utiles</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#produit" className="hover:text-primary transition-colors">Le produit</a>
              <a href="#sons" className="hover:text-primary transition-colors">Les sons</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>contact@sonorazen.fr</span>
              <span>Support 7j/7</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © 2026 Sonora Zen. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
