import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gamepad, Users, Clock, Star, Dice1, Puzzle } from "lucide-react";
import gamesImage from "@/assets/games-area.jpg";

const Games = () => {
  const gameCategories = [
    {
      icon: Gamepad,
      title: "Estrategia",
      description: "Juegos que desafían tu mente",
      games: ["Catan", "Ticket to Ride", "Splendor", "Azul"],
      color: "monster-purple",
      players: "2-4 jugadores",
      time: "45-90 min"
    },
    {
      icon: Users,
      title: "Familiares",
      description: "Diversión para toda la familia",
      games: ["UNO", "Monopoly", "Jenga", "Pictionary"],
      color: "monster-blue",
      players: "2-8 jugadores", 
      time: "30-60 min"
    },
    {
      icon: Puzzle,
      title: "Cooperativos",
      description: "Trabajen juntos para ganar",
      games: ["Pandemic", "Ghost Stories", "Castle Panic", "Forbidden Island"],
      color: "monster-yellow",
      players: "2-5 jugadores",
      time: "45-75 min"
    },
    {
      icon: Dice1,
      title: "Rápidos",
      description: "Partidas dinámicas y emocionantes",
      games: ["Yahtzee", "King of Tokyo", "Love Letter", "Sushi Go!"],
      color: "monster-green",
      players: "2-6 jugadores",
      time: "15-30 min"
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Más de 50 Juegos",
      description: "Amplia biblioteca constantemente actualizada"
    },
    {
      icon: Users,
      title: "Grupos Grandes",
      description: "Espacios para grupos de hasta 10 personas"
    },
    {
      icon: Clock,
      title: "Sin Límite de Tiempo",
      description: "Juega todo el tiempo que quieras"
    }
  ];

  return (
    <section id="juegos" className="py-20 bg-monster-purple/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-monster-green/20 text-monster-green border-monster-green">
            <Gamepad className="w-4 h-4 mr-1" />
            Zona de Juegos
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-monster-purple">
              Diversión Sin Límites
            </span>
            <br />
            <span className="text-foreground">para Toda la Familia</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Disfruta de nuestra increíble colección de juegos de mesa mientras saboreas 
            tus productos favoritos. Un espacio diseñado para crear recuerdos inolvidables.
          </p>
        </div>

        {/* Games Area Image */}
        <div className="mb-16 relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://www.emdpublicidad.com/bmb/b3.png"
              alt="Área de juegos de Belly Monster Bites"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-monster-purple/20"></div>
            
            {/* Overlay Content */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
              
              </h3>
              <p className="text-white/90 text-lg">
              </p>
            </div>
          </div>
        </div>

        {/* Game Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {gameCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-${category.color}/20 mb-4`}>
                    <IconComponent className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Jugadores:</span>
                      <span className={`text-${category.color} font-medium`}>{category.players}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duración:</span>
                      <span className={`text-${category.color} font-medium`}>{category.time}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Juegos Destacados:
                    </p>
                    {category.games.slice(0, 3).map((game, gameIndex) => (
                      <p key={gameIndex} className="text-sm text-foreground">
                        • {game}
                      </p>
                    ))}
                    <p className="text-xs text-muted-foreground">
                      +{category.games.length - 3} más disponibles
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                <div className="inline-flex p-4 rounded-full bg-monster-blue/20 mb-4">
                  <IconComponent className="h-8 w-8 text-monster-blue" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-monster-blue/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Listo para la Diversión?
          </h3>
          
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ven con tus amigos, familia o conoce gente nueva mientras disfrutas 
            de nuestros deliciosos productos y la mejor selección de juegos de mesa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-monster-green hover:bg-monster-green/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Gamepad className="mr-2 h-5 w-5" />
              Reservar Mesa
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-monster-purple text-monster-purple hover:bg-monster-purple hover:text-primary-foreground font-semibold px-8 py-6 rounded-xl"
            >
              Ver Catálogo Completo
            </Button>
          </div>

          <div className="mt-6">
            <Badge variant="outline" className="bg-monster-yellow/20 text-monster-dark border-monster-yellow">
              Ambiente Familiar • Todas las Edades • Diversión Garantizada
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;