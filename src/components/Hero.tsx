import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg-new.jpg";
import vsrLogo from "@/assets/vsr-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="max-w-4xl animate-fade-in mx-auto w-full">
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 md:p-10 lg:p-12">
            <div className="mb-6 md:mb-8 flex justify-center">
              <img src={vsrLogo} alt="VSR - CONTABILIDADE" className="h-48 md:h-64 lg:h-80 xl:h-96 w-auto max-w-full" />
            </div>
          
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white mb-6 md:mb-8 font-light text-center">
              Parceiro contábil e financeiro com mais de 40 anos de experiência
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-white mb-8 md:mb-12 max-w-2xl leading-relaxed text-center mx-auto px-4">
              Garantindo o retorno com segurança e tranquilidade do seu empreendimento através de transparência, ética e comprometimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center items-center">
            <a href="https://wa.me/5538991187421" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 w-full sm:w-auto"
              >
                Fale conosco <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary text-lg px-8 py-6 backdrop-blur-sm w-full sm:w-auto"
            >
              Saiba mais
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
              <Shield className="h-8 w-8 md:h-10 md:w-10 text-accent mb-3 md:mb-4 mx-auto md:mx-0" />
              <h3 className="text-white font-semibold text-base md:text-lg mb-2 text-center md:text-left">40+ anos</h3>
              <p className="text-white/90 text-xs md:text-sm text-center md:text-left">De experiência no mercado contábil</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-accent mb-3 md:mb-4 mx-auto md:mx-0" />
              <h3 className="text-white font-semibold text-base md:text-lg mb-2 text-center md:text-left">Resultados reais</h3>
              <p className="text-white/90 text-xs md:text-sm text-center md:text-left">Soluções comprovadas e consistentes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
              <Users className="h-8 w-8 md:h-10 md:w-10 text-accent mb-3 md:mb-4 mx-auto md:mx-0" />
              <h3 className="text-white font-semibold text-base md:text-lg mb-2 text-center md:text-left">Atendimento dedicado</h3>
              <p className="text-white/90 text-xs md:text-sm text-center md:text-left">Compromisso de dono do negócio</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
