import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, IceCream, Cookie, Cake, Utensils, Star } from "lucide-react";
import menuImage from "@/assets/menu-items.jpg";

const Menu = () => {
  const categories = [
    {
      id: "bebidas",
      name: "Bebidas",
      icon: Coffee,
      color: "monster-purple",
      items: [
        { name: "Café Monster Especial", price: "$45", description: "Espresso con leche vaporizada y arte latte" },
        { name: "Malteada Arcoíris", price: "$65", description: "Mezcla de sabores coloridos con chispas" },
        { name: "Té Helado Tropical", price: "$35", description: "Refrescante té con frutas de temporada" },
        { name: "Chocolate Caliente Supremo", price: "$50", description: "Chocolate premium con marshmallows" }
      ]
    },
    {
      id: "postres",
      name: "Postres",
      icon: Cake,
      color: "monster-blue",
      items: [
        { name: "Cupcake Monster", price: "$40", description: "Cupcake decorado con temática de monstruos" },
        { name: "Galletas Artesanales", price: "$25", description: "Galletas horneadas frescas con chips de chocolate" },
        { name: "Cheesecake Arcoíris", price: "$55", description: "Cheesecake con capas de colores vibrantes" },
        { name: "Brownie Explosivo", price: "$45", description: "Brownie tibio con helado y salsa de chocolate" }
      ]
    },
    {
      id: "nieves",
      name: "Nieves",
      icon: IceCream,
      color: "monster-yellow",
      items: [
        { name: "Sundae Monster", price: "$50", description: "Helado con toppings coloridos y decoración temática" },
        { name: "Paleta Gourmet", price: "$30", description: "Paletas artesanales de sabores únicos" },
        { name: "Copa Tropical", price: "$60", description: "Helado con frutas frescas y jarabe natural" },
        { name: "Milkshake Extremo", price: "$70", description: "Batido cremoso con decoración extravagante" }
      ]
    },
    {
      id: "comida",
      name: "Comida",
      icon: Utensils,
      color: "monster-green",
      items: [
        { name: "Sandwich Monster", price: "$85", description: "Sandwich gourmet con ingredientes frescos" },
        { name: "Ensalada Colorida", price: "$75", description: "Ensalada fresca con vinagreta especial" },
        { name: "Wrap Saludable", price: "$70", description: "Wrap integral con proteína y vegetales" },
        { name: "Quesadilla Suprema", price: "$80", description: "Quesadilla con queso derretido y guarniciones" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-monster-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-monster-yellow/20 text-monster-dark border-monster-yellow">
            <Star className="w-4 h-4 mr-1" />
            Nuestro Delicioso Menú
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-monster-purple to-monster-blue bg-clip-text text-transparent">
              Sabores que Despiertan
            </span>
            <br />
            <span className="text-foreground">tu Monster Interior</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra increíble variedad de bebidas, postres, nieves y comida,
            cada uno creado con amor y los mejores ingredientes.
          </p>
        </div>

        {/* Menu Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-md">
            <img 
              src={menuImage}
              alt="Variedad de productos de Belly Monster Bites"
              className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-monster-purple/30 to-transparent"></div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={category.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-${category.color}/20 mr-4`}>
                      <IconComponent className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="group cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          <span className={`font-bold text-${category.color} ml-2`}>
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            ¿No encuentras lo que buscas? ¡Pregúntanos por nuestras especialidades del día!
          </p>
          <Badge variant="outline" className="bg-monster-green/20 text-monster-green border-monster-green px-6 py-2">
            Ingredientes Frescos Diariamente
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Menu;