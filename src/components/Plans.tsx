import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Plans = () => {
  return (
    <section id="planos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Planos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solução completa para gestão contábil, financeira e operacional do seu negócio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-2xl animate-scale-in">
            <CardHeader className="text-center pb-8 pt-8">
              <div className="mx-auto bg-gradient-to-br from-primary to-accent w-20 h-20 rounded-2xl flex items-center justify-center mb-4">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl mb-2">Assessoria + Consultoria + Sistema de Gestão (ERP)</CardTitle>
              <CardDescription className="text-lg">
                Pacote completo para empresas que buscam excelência em gestão
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    Assessoria contábil completa
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Escrituração contábil e fiscal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Apuração de impostos otimizada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Declarações e obrigações acessórias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Balanços e demonstrações financeiras</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-primary mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    Consultoria estratégica
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Análise financeira e de balanço</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Planejamento tributário personalizado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Avaliação de processos internos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span>Suporte estratégico contínuo</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 mb-8 border border-primary/10">
                <h3 className="font-semibold text-lg text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  Sistema de Gestão ERP - Egestor
                </h3>
                <p className="text-muted-foreground mb-4">
                  Plataforma completa para controle total do seu negócio com integração em tempo real
                </p>
                <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>Controle financeiro integrado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>Gestão de estoque e vendas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>Emissão de notas fiscais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>Relatórios gerenciais em tempo real</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a href="https://wa.me/5538991187421" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
                    Solicitar proposta personalizada
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Entre em contato para conhecer valores e condições especiais
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Plans;
