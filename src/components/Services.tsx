import { Calculator, TrendingUp, FileText, BarChart3, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade completa",
      description: "Atendimento para empresas comerciais, de serviços e indústrias com total conformidade legal",
      items: ["Escrituração contábil", "Balanços patrimoniais", "DRE e demonstrações"],
    },
    {
      icon: TrendingUp,
      title: "Planejamento tributário",
      description: "Análise comparativa entre regimes tributários para otimizar sua carga fiscal",
      items: ["Lucro Real", "Simples Nacional", "Lucro Presumido"],
    },
    {
      icon: FileText,
      title: "Consultoria e assessoria",
      description: "Acompanhamento estratégico do seu negócio com visão de dono",
      items: ["Análise financeira", "Processos internos", "Gestão estratégica"],
    },
    {
      icon: BarChart3,
      title: "Análise financeira",
      description: "Análise detalhada de balanços e indicadores para tomada de decisão",
      items: ["Análise de balanço", "Indicadores financeiros", "Relatórios gerenciais"],
    },
    {
      icon: Users,
      title: "Departamento fiscal",
      description: "Gestão completa das obrigações fiscais com segurança e pontualidade",
      items: ["Apuração de impostos", "Declarações", "Compliance fiscal"],
    },
    {
      icon: CheckCircle2,
      title: "Sistema de gestão",
      description: "ERP Egestor integrado para controle total do seu negócio",
      items: ["Gestão integrada", "Controle financeiro", "Relatórios em tempo real"],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para todas as necessidades contábeis e financeiras do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Experiência de mais de 40 anos atuando em todas as mudanças da legislação tributária
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
