import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle, Phone, Wrench, Zap, Settings } from 'lucide-react';

export default function ManutencaoEletronica() {
  return (
    <>
      <SEO
           title="Manutenção Eletrônica | CNSOUSATEC ® Conserto de Placas"
        description="🛠️ CNSOUSATEC: Conserto de Placas e Equipamentos Eletrônicos em Brasília e Região. Manutenção de Sistemas de Automação. Qualidade Técnica CNSOUSATEC. Confira!"!"
        canonical="https://www.cnsousatec.com.br/servicos/manutencao-eletronica"
      />

      <Header />

      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Manutenção Eletrônica', href: '/servicos/manutencao-eletronica' }]} />
        </div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Manutenção Eletrônica Especializada em Brasília
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Reparo e manutenção de equipamentos eletrônicos, sistemas de automação e controle industrial no Distrito Federal
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5561992743428&text=Olá! Gostaria de solicitar um orçamento para manutenção eletrônica com a Cnsousatec."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Solicitar Orçamento
              </a>
            </motion.div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Soluções Completas em Manutenção Eletrônica
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A <strong>Cnsousatec</strong> é especializada em manutenção eletrônica, oferecendo serviços de alta qualidade para empresas que dependem de equipamentos eletrônicos e sistemas automatizados em suas operações. Nossa equipe técnica possui vasta experiência no diagnóstico, reparo e manutenção de uma ampla gama de dispositivos eletrônicos, desde equipamentos simples até sistemas complexos de automação industrial.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Entendemos que a parada de equipamentos eletrônicos pode causar sérios prejuízos à produtividade e ao faturamento das empresas. Por isso, trabalhamos com agilidade e eficiência, utilizando ferramentas de diagnóstico avançadas e peças de reposição originais ou equivalentes de alta qualidade. Nosso objetivo é minimizar o tempo de inatividade e garantir que seus equipamentos voltem a funcionar com máxima performance.
                </p>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Serviços de Manutenção Eletrônica
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Reparo de Placas Eletrônicas</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Diagnóstico e reparo de placas de circuito impresso, substituição de componentes SMD e PTH.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Manutenção de Inversores de Frequência</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Reparo e calibração de inversores de frequência de diversas marcas e modelos.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Sistemas de Automação</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Manutenção de CLPs, IHMs, sensores e atuadores em sistemas automatizados.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Fontes e Nobreaks</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Reparo de fontes de alimentação, nobreaks e sistemas de energia ininterrupta.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Instrumentação Industrial</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Calibração e manutenção de instrumentos de medição e controle de processos.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Sistemas de Controle</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Manutenção de sistemas de controle de temperatura, pressão e outras variáveis.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Diferenciais da Cnsousatec
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A manutenção eletrônica exige conhecimento técnico especializado, ferramentas adequadas e experiência prática. A Cnsousatec reúne todos esses elementos para oferecer um serviço de excelência aos seus clientes. Nossa equipe é formada por técnicos e engenheiros eletrônicos com certificações reconhecidas e experiência em diversos segmentos industriais.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <Wrench className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                    <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Equipamentos Modernos</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Utilizamos osciloscópios, multímetros de precisão e estações de solda profissionais.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <Zap className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                    <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Diagnóstico Preciso</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Identificamos rapidamente a causa raiz dos problemas, economizando tempo e recursos.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <Settings className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                    <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Peças de Qualidade</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Trabalhamos apenas com componentes originais ou equivalentes certificados.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Manutenção Preventiva de Equipamentos Eletrônicos
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Além da manutenção corretiva, oferecemos planos de manutenção preventiva para equipamentos eletrônicos. Esse tipo de serviço é fundamental para aumentar a vida útil dos equipamentos, reduzir custos com reparos emergenciais e evitar paradas não programadas na produção. A manutenção preventiva inclui limpeza interna, verificação de componentes, testes de funcionamento, atualização de firmware quando aplicável e substituição de peças desgastadas.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Nossos planos de manutenção são personalizados de acordo com as necessidades de cada cliente, levando em consideração o tipo de equipamento, o ambiente de operação e a criticidade do sistema. Realizamos visitas periódicas programadas, gerando relatórios detalhados sobre o estado dos equipamentos e recomendações de melhorias.
                </p>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Automação Industrial e Sistemas de Controle
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A automação industrial é uma área em constante evolução, e a Cnsousatec acompanha as últimas tendências e tecnologias do setor. Prestamos serviços de manutenção em sistemas de automação baseados em CLPs (Controladores Lógicos Programáveis) de marcas como Siemens, Allen-Bradley, Schneider Electric, WEG e outras. Também trabalhamos com interfaces homem-máquina (IHM), sistemas SCADA, redes industriais e protocolos de comunicação como Profibus, Modbus e Ethernet/IP.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Nossa equipe está capacitada para realizar programação e parametrização de equipamentos, troubleshooting de redes industriais, atualização de software e integração de novos dispositivos aos sistemas existentes. Oferecemos suporte técnico especializado para garantir que seus processos automatizados operem com máxima eficiência e confiabilidade.
                </p>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Atendimento em Todo o Distrito Federal
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A Cnsousatec atende empresas em todas as regiões do Distrito Federal, incluindo Brasília, Taguatinga, Ceilândia, Samambaia, Águas Claras, Guará, Sobradinho, Planaltina, Gama e outras localidades. Contamos com uma equipe móvel equipada com ferramentas e instrumentos de diagnóstico, permitindo atendimento rápido e eficiente no local do cliente quando necessário.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Se sua empresa precisa de manutenção eletrônica confiável e de qualidade, entre em contato conosco. Oferecemos orçamentos sem compromisso e estamos prontos para atender suas necessidades com profissionalismo e agilidade. Nossa missão é garantir que seus equipamentos eletrônicos funcionem perfeitamente, contribuindo para a produtividade e o sucesso do seu negócio.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Precisa de Manutenção Eletrônica?
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Entre em contato agora e receba um orçamento personalizado
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5561992743428&text=Olá! Gostaria de solicitar um orçamento para manutenção eletrônica com a Cnsousatec."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Falar com Especialista
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
