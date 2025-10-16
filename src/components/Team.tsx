import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import valterFoto from "@/assets/valter-foto.jpg";

const Team = () => {
  return (
    <section id="equipe" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossa equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais experientes e comprometidos com o sucesso do seu negócio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl border-2 border-primary/10 animate-scale-in">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-64 md:h-auto">
                  <img
                    src={valterFoto}
                    alt="Valter Soares Ribeiro - Contador"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      Valter Soares Ribeiro
                    </h3>
                    <p className="text-xl text-accent font-semibold">Contador responsável</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">CRC/MG: 57.928</h4>
                        <p className="text-sm text-muted-foreground">
                          Registro profissional ativo no Conselho Regional de Contabilidade
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Bacharel em Ciências Contábeis</h4>
                        <p className="text-sm text-muted-foreground">
                          UNIFEM - Sete Lagoas - 2005
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Mais de 40 anos de experiência</h4>
                        <p className="text-sm text-muted-foreground">
                          Atuação em todos os processos de mudanças na legislação tributária, com resultados reais e consistentes
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-muted-foreground italic">
                      "Transparência, ética e comprometimento de dono do negócio em cada atendimento"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
