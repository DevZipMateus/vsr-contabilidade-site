import { Target, Compass, Heart } from "lucide-react";
import valterFoto from "@/assets/valter-foto.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Sobre nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos valores e compromissos com o seu sucesso
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-center">
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up border border-border">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Garantir o retorno com segurança e tranquilidade do seu empreendimento
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up border border-border" style={{ animationDelay: "0.1s" }}>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Compass className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tornar realidade o seu futuro através de soluções contábeis e financeiras eficientes
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up border border-border" style={{ animationDelay: "0.2s" }}>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transparência, ética e comprometimento de dono do negócio em cada atendimento
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-primary/20 hover:border-primary/40 transition-all">
              <img
                src={valterFoto}
                alt="Valter Soares Ribeiro - Contador responsável VSR Contabilidade"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Valter Soares Ribeiro</p>
                <p className="text-white/90 text-sm">Contador CRC/MG 57.928</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
