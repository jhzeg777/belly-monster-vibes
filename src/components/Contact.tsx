import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Calle de los Sabores #123, Colonia Dulce Vida, Ciudad Monster",
      color: "monster-purple"
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "+52 (55) 1234-5678",
      color: "monster-blue"
    },
    {
      icon: Mail,
      title: "Email",
      info: "hola@bellymonsterbites.com",
      color: "monster-yellow"
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "Lun - Dom: 8:00 AM - 10:00 PM",
      color: "monster-green"
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      handle: "@BellyMonsterBites",
      color: "monster-blue"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@bellymonsterbites",
      color: "monster-purple"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      handle: "+52 55 1234-5678",
      color: "monster-green"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-monster-yellow/5 via-monster-green/5 to-monster-purple/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-monster-yellow/20 text-monster-dark border-monster-yellow">
            <MessageCircle className="w-4 h-4 mr-1" />
            Contáctanos
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-monster-yellow to-monster-green bg-clip-text text-transparent">
              ¡Estamos Aquí
            </span>
            <br />
            <span className="text-foreground">para Ti!</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes alguna pregunta, sugerencia o simplemente quieres saludarnos? 
            Nos encanta escuchar de nuestra comunidad Monster. ¡No dudes en contactarnos!
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            
            return (
              <Card 
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex p-4 rounded-full bg-${contact.color}/20 mb-4`}>
                    <IconComponent className={`h-6 w-6 text-${contact.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {contact.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {contact.info}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Visit Us Card */}
          <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-monster-white to-muted/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-monster-purple mr-3" />
                Ven a Visitarnos
              </h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-muted-foreground">
                  Estamos ubicados en el corazón de la ciudad, en un lugar fácil de encontrar 
                  y con amplio estacionamiento disponible.
                </p>
                
                <div className="bg-monster-purple/10 p-4 rounded-xl border border-monster-purple/20">
                  <h4 className="font-semibold text-monster-purple mb-2">Cómo llegar:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• A 2 cuadras del Metro Dulce Vida</li>
                    <li>• Frente al Parque de los Colores</li>
                    <li>• Estacionamiento gratuito disponible</li>
                  </ul>
                </div>

                <div className="bg-monster-green/10 p-4 rounded-xl border border-monster-green/20">
                  <h4 className="font-semibold text-monster-green mb-2">Horarios Especiales:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Viernes y Sábados: Hasta 11:00 PM</li>
                    <li>• Domingos: Brunch especial 9:00 AM - 2:00 PM</li>
                    <li>• Feriados: Consultar horarios especiales</li>
                  </ul>
                </div>
              </div>

              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-monster-purple to-monster-blue hover:from-monster-purple/90 hover:to-monster-blue/90 text-primary-foreground font-semibold rounded-xl"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Ver en Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Social Media & Contact */}
          <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-monster-white to-muted/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 text-monster-green mr-3" />
                Síguenos y Conéctate
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Mantente al día con nuestras últimas noticias, promociones especiales 
                y eventos. ¡Síguenos en nuestras redes sociales!
              </p>

              <div className="space-y-4 mb-6">
                {socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  
                  return (
                    <div 
                      key={index}
                      className="flex items-center p-4 rounded-xl bg-monster-white hover:shadow-md transition-all duration-300 cursor-pointer border border-border"
                    >
                      <div className={`p-2 rounded-lg bg-${social.color}/20 mr-4`}>
                        <IconComponent className={`h-5 w-5 text-${social.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{social.name}</h4>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-monster-yellow/10 p-4 rounded-xl border border-monster-yellow/20 mb-6">
                <h4 className="font-semibold text-monster-dark mb-2">¿Tienes una sugerencia?</h4>
                <p className="text-sm text-muted-foreground">
                  Nos encanta escuchar ideas para nuevos sabores, juegos o mejoras. 
                  ¡Tu opinión nos ayuda a ser mejores cada día!
                </p>
              </div>

              <Button 
                variant="outline"
                size="lg"
                className="w-full border-2 border-monster-green text-monster-green hover:bg-monster-green hover:text-primary-foreground font-semibold rounded-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-monster-purple/10 via-monster-blue/10 to-monster-green/10 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¡Tu Aventura Monster Te Espera!
          </h3>
          
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Cada día es una nueva oportunidad para crear recuerdos increíbles. 
            Ven y descubre por qué somos el lugar favorito de la comunidad.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-monster-purple text-primary-foreground px-4 py-2">Ambiente Familiar</Badge>
            <Badge className="bg-monster-blue text-primary-foreground px-4 py-2">Sabores Únicos</Badge>
            <Badge className="bg-monster-yellow text-monster-dark px-4 py-2">Diversión Garantizada</Badge>
            <Badge className="bg-monster-green text-primary-foreground px-4 py-2">Experiencia Completa</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;