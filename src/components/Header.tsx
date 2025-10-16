import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="VSR - CONTABILIDADE" className="h-12 w-12" />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-primary">VSR</span>
              <span className="text-sm text-muted-foreground block -mt-1">CONTABILIDADE</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" onClick={() => scrollToSection("inicio")}>
              Início
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("sobre")}>
              Sobre
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("servicos")}>
              Serviços
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("planos")}>
              Planos
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("equipe")}>
              Equipe
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contato")}>
              Contato
            </Button>
          </nav>

          <a
            href="https://wa.me/5538991187421"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button className="bg-accent hover:bg-accent/90">
              Fale conosco
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
