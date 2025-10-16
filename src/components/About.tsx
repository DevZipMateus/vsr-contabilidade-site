import { Target, Compass, Heart } from "lucide-react";

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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      </div>
    </section>
  );
};

export default About;
