import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, CheckCircle2, CreditCard, Users, TrendingUp } from "lucide-react";

const SplitPayment = () => {
  return (
    <section id="split-payment" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent to-primary rounded-2xl mb-6">
            <CreditCard className="h-8 w-8 md:h-10 md:w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Split Payment
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Solução inovadora de pagamento compartilhado para seu negócio
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-2xl animate-scale-in overflow-hidden">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 md:p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl md:text-3xl mb-3">
                  Revolucione a Gestão Financeira do Seu Negócio
                </CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Divida pagamentos de forma inteligente e automatizada entre múltiplos beneficiários
                </CardDescription>
              </CardHeader>
            </div>

            <CardContent className="px-4 md:px-8 py-8 md:py-10">
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Múltiplos Beneficiários</h3>
                  <p className="text-sm text-muted-foreground">
                    Distribua pagamentos automaticamente entre parceiros
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
                  <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Crescimento Escalável</h3>
                  <p className="text-sm text-muted-foreground">
                    Expanda seu negócio com gestão financeira simplificada
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all">
                  <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Transparência Total</h3>
                  <p className="text-sm text-muted-foreground">
                    Acompanhe cada transação em tempo real
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 md:p-8 mb-8 border border-primary/10">
                <h3 className="font-semibold text-xl text-primary mb-6 text-center">
                  Benefícios da Solução Split Payment
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Automação completa de divisão de pagamentos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Redução de custos operacionais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Conciliação financeira simplificada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Segurança e conformidade garantidas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Integração com sistemas existentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Relatórios detalhados e analytics</span>
                  </li>
                </ul>
              </div>

              <div className="text-center space-y-6">
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <a href="/Apresentacao_Split_Payment.pptx" download className="block">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-base md:text-lg px-6 py-6 gap-3 w-full">
                      <Download className="h-5 w-5" />
                      Apresentação Split Payment
                    </Button>
                  </a>
                  <a href="/Guia_Reforma_Tributaria_VSR_Contabilidade.pptx" download className="block">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-base md:text-lg px-6 py-6 gap-3 w-full">
                      <Download className="h-5 w-5" />
                      Guia Reforma Tributária
                    </Button>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  Baixe nossos materiais completos sobre Split Payment e Reforma Tributária
                </p>
                <div className="pt-4">
                  <a href="https://wa.me/5538991187421" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="text-base px-6">
                      Solicitar consultoria personalizada
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SplitPayment;
