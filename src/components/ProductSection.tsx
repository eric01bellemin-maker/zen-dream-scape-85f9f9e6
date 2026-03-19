import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    id: 1,
    name: "Brume de Sommeil Zen",
    price: "24.90 €",
    description: "Une brume apaisante aux extraits de lavande et de camomille.",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Masque de Nuit Soie",
    price: "19.50 €",
    description: "Un confort absolu pour vos yeux, 100% soie naturelle.",
    image: "https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?q=80&w=1964&auto=format&fit=crop",
  },
];

const ProductSection = () => {
  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16 italic">Nos Essentiels Sommeil</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{product.name}</h3>
              
              {/* 🟢 ICI LE PRIX EN VERT ÉMERAUDE */}
              <p className="text-2xl font-semibold text-emerald-600 mb-4">{product.price}</p>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              <Button className="w-full bg-gray-900 hover:bg-emerald-700 text-white transition-colors">
                <ShoppingCart className="mr-2 h-4 w-4" /> Ajouter au panier
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
