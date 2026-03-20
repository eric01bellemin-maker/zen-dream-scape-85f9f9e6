import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const ProductSection = () => {
  const products = [
    {
      id: "blue",
      name: "ZenDream Édition Bleu",
      price: "79",
      image: "/palet-bleu.jpg", // Vérifie bien le nom de ton image dans /public
      color: "Bleu Nuit"
    },
    {
      id: "grey",
      name: "ZenDream Édition Gris",
      price: "79",
      image: "/palet-gris.jpg", // Vérifie bien le nom de ton image dans /public
      color: "Gris Sidéral"
    }
  ];

  return (
    <section id="product" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tighter">Choisissez votre ZenDream</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col items-center">
              <div className="relative w-full aspect-square mb-8 overflow-hidden rounded-2xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-6">{product.color}</p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-extrabold text-black">{product.price}€</span>
                <span className="text-gray-400 line-through text-lg">129€</span>
              </div>
              <Button className="w-full py-6 rounded-full bg-black text-white hover:bg-gray-800 text-lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Ajouter au panier
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
