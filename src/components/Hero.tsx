import { Button } from "@/components/ui/button";
import { Coffee, Heart, Star } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";

const Hero = () => {
  const handleOrderClick = () => {
    const menuElement = document.querySelector('#menu');
    menuElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-monster-purple/10 via-monster-blue/10 to-monster-yellow/10 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Heart className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">Bienvenido a nuestro mundo colorido</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-monster-purple via-monster-blue to-monster-green bg-clip-text text-transparent">
                  Belly Monster
                </span>
                <br />
                <span className="text-foreground">Bites</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Donde cada bocado es una aventura llena de sabor y diversión. 
                Disfruta de nuestros deliciosos platillos, postres únicos y 
                diviértete con nuestros juegos de mesa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleOrderClick}
                className="bg-gradient-to-r from-monster-purple to-monster-blue hover:from-monster-purple/90 hover:to-monster-blue/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Coffee className="mr-2 h-5 w-5" />
                Ver Menú
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-monster-purple text-monster-purple hover:bg-monster-purple hover:text-primary-foreground font-semibold px-8 py-6 rounded-xl transition-all duration-300"
              >
                <Star className="mr-2 h-5 w-5" />
                Nuestros Juegos
              </Button>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-monster-purple">50+</div>
                <div className="text-sm text-muted-foreground">Productos Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-monster-blue">20+</div>
                <div className="text-sm text-muted-foreground">Juegos de Mesa</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-monster-green">1000+</div>
                <div className="text-sm text-muted-foreground">Clientes Felices</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Belly Monster Bites - Cafetería colorida con postres y juegos"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-monster-purple/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-monster-yellow text-monster-dark p-3 rounded-full shadow-lg animate-bounce-soft">
              <Coffee className="h-6 w-6" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-monster-green text-monster-white p-3 rounded-full shadow-lg animate-bounce-soft" style={{ animationDelay: '1s' }}>
              <Heart className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;