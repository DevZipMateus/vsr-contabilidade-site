import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar seu negócio
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Informações de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <a
                      href="https://wa.me/5538991187421"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      (38) 99118-7421
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <a
                      href="mailto:valtercvo@hotmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors break-all"
                    >
                      valtercvo@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av. Dep. Renato Azeredo, 1050 A<br />
                      Vila de Lourdes - Curvelo/MG<br />
                      CEP: 35796-468
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a sexta: 08:00 às 18:00<br />
                      Sábados: 08:00 às 12:00
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Redes sociais</h3>
              
              <div className="space-y-6 mb-8">
                <a
                  href="https://www.facebook.com/profile.php?id=61571937663838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors group"
                >
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Facebook className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Facebook</h4>
                    <p className="text-sm text-muted-foreground">Valter Soares Ribeiro Soares</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/valter_contador_2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors group"
                >
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Instagram className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Instagram</h4>
                    <p className="text-sm text-muted-foreground">@valter_contador_2026</p>
                  </div>
                </a>
              </div>

              <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-3">Pronto para começar?</h4>
                <p className="mb-6 text-white/90">
                  Entre em contato agora e garanta uma consultoria personalizada para o seu negócio
                </p>
                <a href="https://wa.me/5538991187421" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-white text-primary hover:bg-white/90"
                  >
                    Falar via WhatsApp
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
