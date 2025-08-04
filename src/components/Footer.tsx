import { Heart, Coffee, Gamepad, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-monster-dark text-monster-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-monster-yellow">
              Belly Monster Bites
            </h3>
            <p className="text-monster-white/80 mb-4 leading-relaxed">
              Donde cada bocado es una aventura llena de sabor y diversión. 
              Tu lugar favorito para disfrutar en familia mientras compartes 
              momentos únicos con deliciosa comida y juegos increíbles.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-monster-yellow text-monster-yellow bg-transparent">
                <Coffee className="w-3 h-3 mr-1" />
                Café Premium
              </Badge>
              <Badge variant="outline" className="border-monster-blue text-monster-blue bg-transparent">
                <Gamepad className="w-3 h-3 mr-1" />
                50+ Juegos
              </Badge>
              <Badge variant="outline" className="border-monster-green text-monster-green bg-transparent">
                <Heart className="w-3 h-3 mr-1" />
                Ambiente Familiar
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-monster-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Menú", href: "#menu" },
                { name: "Sobre Nosotros", href: "#sobre" },
                { name: "Juegos", href: "#juegos" },
                { name: "Contacto", href: "#contacto" }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-monster-white/70 hover:text-monster-yellow transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-monster-white">Información</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-monster-white/70">Dirección:</p>
                <p className="text-monster-white">Calle de los Sabores #123</p>
                <p className="text-monster-white">Colonia Dulce Vida</p>
              </div>
              <div>
                <p className="text-monster-white/70">Teléfono:</p>
                <p className="text-monster-white">+52 (55) 1234-5678</p>
              </div>
              <div>
                <p className="text-monster-white/70">Email:</p>
                <p className="text-monster-white">hola@bellymonsterbites.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-monster-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-monster-white/70 text-sm">
                © {currentYear} Belly Monster Bites. Todos los derechos reservados.
              </p>
              <p className="text-monster-white/60 text-xs mt-1">
                Hecho con <Heart className="w-3 h-3 inline fill-monster-yellow text-monster-yellow" /> para nuestra comunidad Monster
              </p>
            </div>

            {/* Social Links & Recognition */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-monster-yellow">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-monster-white/70 text-xs">Calificado 5 estrellas</span>
            </div>
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-6 text-center">
          <p className="text-monster-white/60 text-xs italic">
            "Donde los monstruos del sabor cobran vida y la diversión nunca termina" 🎲☕️🧁
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;