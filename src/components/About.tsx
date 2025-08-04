import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Gamepad, Coffee } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Pasión por el Sabor",
      description: "Cada producto es creado con amor y los mejores ingredientes, para despertar una sonrisa en cada bocado.",
      color: "monster-purple"
    },
    {
      icon: Users,
      title: "Comunidad Familiar",
      description: "Somos más que una cafetería, somos un espacio donde familias y amigos crean recuerdos inolvidables.",
      color: "monster-blue"
    },
    {
      icon: Gamepad,
      title: "Diversión Garantizada",
      description: "Combina deliciosa comida con entretenimiento. Nuestros juegos de mesa crean experiencias únicas.",
      color: "monster-yellow"
    },
    {
      icon: Coffee,
      title: "Calidad Premium",
      description: "Seleccionamos cuidadosamente cada ingrediente para ofrecer productos de la más alta calidad.",
      color: "monster-green"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-monster-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-monster-purple/20 text-monster-purple border-monster-purple">
            <Heart className="w-4 h-4 mr-1" />
            Nuestra Historia
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-monster-green">
              Donde Nació
            </span>
            <br />
            <span className="text-foreground">la Magia Monster</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Belly Monster Bites nació de un sueño simple pero poderoso: crear un espacio donde la comida 
            deliciosa se encuentre con la diversión auténtica. Somos una cafetería que va más allá de lo 
            convencional, donde cada visita es una aventura llena de sabores únicos y momentos especiales.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-xl border-0 bg-monster-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Una Experiencia Completa
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    En Belly Monster Bites creemos que comer es solo el comienzo de una gran experiencia. 
                    Por eso hemos creado un ambiente único donde puedes disfrutar de nuestros productos 
                    artesanales mientras te diviertes con una amplia selección de juegos de mesa.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestros colores vibrantes - morado, celeste, amarillo y verde - no son solo decoración, 
                    sino que representan la energía, creatividad y alegría que queremos compartir contigo 
                    en cada visita.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-monster-purple text-primary-foreground">Ingredientes Frescos</Badge>
                    <Badge className="bg-monster-blue text-primary-foreground">Recetas Únicas</Badge>
                    <Badge className="bg-monster-yellow text-monster-dark">Ambiente Familiar</Badge>
                    <Badge className="bg-monster-green text-primary-foreground">Diversión Asegurada</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-monster-purple/10 p-6 rounded-xl border border-monster-purple/20">
                    <h4 className="font-bold text-monster-purple mb-2">Nuestra Misión</h4>
                    <p className="text-sm text-muted-foreground">
                      Crear momentos memorables a través de sabores excepcionales y experiencias de entretenimiento únicas.
                    </p>
                  </div>
                  
                  <div className="bg-monster-blue/10 p-6 rounded-xl border border-monster-blue/20">
                    <h4 className="font-bold text-monster-blue mb-2">Nuestra Visión</h4>
                    <p className="text-sm text-muted-foreground">
                      Ser el lugar favorito de la comunidad donde las familias se reúnen para compartir, jugar y disfrutar.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            
            return (
              <Card 
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex p-4 rounded-full bg-${value.color}/20 mb-4`}>
                    <IconComponent className={`h-8 w-8 text-${value.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-4">
            ¿Listo para vivir la experiencia Monster completa?
          </p>
          <Badge variant="outline" className="bg-monster-yellow/20 text-monster-dark border-monster-yellow px-6 py-2">
            ¡Te esperamos con los brazos abiertos!
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default About;