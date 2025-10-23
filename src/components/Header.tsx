import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
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

          <div className="flex items-center gap-4">
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

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              <Button variant="ghost" onClick={() => scrollToSection("inicio")} className="justify-start">
                Início
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("sobre")} className="justify-start">
                Sobre
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("servicos")} className="justify-start">
                Serviços
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("planos")} className="justify-start">
                Planos
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("equipe")} className="justify-start">
                Equipe
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("contato")} className="justify-start">
                Contato
              </Button>
              <a
                href="https://wa.me/5538991187421"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <Button className="bg-accent hover:bg-accent/90 w-full">
                  Fale conosco
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
