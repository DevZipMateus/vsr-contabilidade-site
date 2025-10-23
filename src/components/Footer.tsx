import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
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
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo e Sobre */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="VSR - CONTABILIDADE" className="h-12 w-12" />
              <div>
                <span className="text-xl font-bold">VSR</span>
                <span className="text-sm block -mt-1 text-white/80">CONTABILIDADE</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Parceiro contábil e financeiro com mais de 40 anos de experiência
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("planos")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Planos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("equipe")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Equipe
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5538991187421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/80 hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>(38) 99118-7421</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:valtercvo@hotmail.com"
                  className="flex items-start gap-2 text-white/80 hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>valtercvo@hotmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Av. Dep. Renato Azeredo, 1050 A<br />
                  Curvelo/MG - CEP: 35796-468
                </span>
              </li>
            </ul>
          </div>

          {/* Horário e Redes */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horário de atendimento</h3>
            <p className="text-white/80 text-sm mb-4">
              Segunda a sexta: 08:00 às 18:00<br />
              Sábados: 08:00 às 12:00
            </p>
            <h3 className="font-bold text-lg mb-4">Redes sociais</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61571937663838"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/valter_contador_2026"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} VSR - CONTABILIDADE. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
