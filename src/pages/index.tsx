import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, ArrowRight, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaLocalBusiness from '@/components/SchemaLocalBusiness';

const fastTransition = { duration: 0.3, ease: "easeOut" as const };

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Cnsousatec - Manutenção Elétrica, Eletrônica e Hidráulica no DF</title>
        <meta name="description" content="Serviços especializados de manutenção elétrica, eletrônica e hidráulica para empresas, condomínios e residências em todo o Distrito Federal." />
      </Head>

      <SchemaLocalBusiness />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-blue-600 py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={fastTransition}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Manutenção Profissional para seu Negócio
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-blue-100">
                Serviços especializados em elétrica, eletrônica e hidráulica no Distrito Federal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://api.whatsapp.com/send?phone=5561992743428&text=Olá! Gostaria de solicitar um orçamento com a Cnsousatec."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-6 h-6" /> WhatsApp
                </a>
                <Link
                  href="/#servicos"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center justify-center"
                >
                  Nossos Serviços
                </Link>
              </div>
            </motion.div>
          </div>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Nossos Serviços</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Soluções completas em manutenção para empresas, condomínios e residências
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Manutenção Elétrica",
                  desc: "Instalações, reparos e manutenção preventiva em sistemas elétricos para empresas e condomínios.",
                  icon: <Zap className="w-8 h-8 text-blue-600" />,
                  link: "/servicos/manutencao-eletrica",
                  image: "/images/eletrica.jpg"
                },
                {
                  title: "Manutenção Hidráulica",
                  desc: "Serviços completos em sistemas hidráulicos, tubulações e instalações prediais.",
                  icon: <Clock className="w-8 h-8 text-cyan-600" />,
                  link: "/servicos/manutencao-hidraulica",
                  image: "/images/hidraulica.jpg"
                },
                {
                  title: "Manutenção Eletrônica",
                  desc: "Reparo e manutenção de equipamentos eletrônicos, sistemas de automação e controle.",
                  icon: <Shield className="w-8 h-8 text-purple-600" />,
                  link: "/servicos/manutencao-eletronica",
                  image: "/images/eletronica.jpg"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{service.desc}</p>
                    <Link href={service.link} className="text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center gap-2 hover:underline">
                      Saiba mais <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Por que escolher a Cnsousatec?</h2>
                <div className="space-y-4">
                  {[
                    "Equipe técnica altamente qualificada",
                    "Atendimento rápido e personalizado",
                    "Garantia em todos os serviços prestados",
                    "Equipamentos de última geração",
                    "Preços competitivos e transparência"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl border border-blue-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">Solicite uma Visita Técnica</h3>
                <p className="text-blue-800 dark:text-blue-200 mb-6">
                  Nossos especialistas estão prontos para avaliar sua necessidade e propor a melhor solução.
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=5561992743428&text=Olá! Gostaria de solicitar uma visita técnica com a Cnsousatec."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-center block transition-colors duration-200"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-800"
            >
              <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold mb-8">Entre em Contato</h2>
                  <p className="mb-12 text-blue-100 text-lg">Estamos prontos para atender suas necessidades com excelência e rapidez.</p>
                  <div className="space-y-8">
                    {[
                      { icon: <Phone className="w-6 h-6" />, text: "(61) 99274-3428", label: "Telefone" },
                      { icon: <Mail className="w-6 h-6" />, text: "Cnsousatec@gmail.com", label: "E-mail" },
                      { icon: <MapPin className="w-6 h-6" />, text: "Brasília - DF", label: "Localização" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-5 group cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">{item.label}</p>
                          <p className="text-lg font-medium">{item.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
              </div>
              
              <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white dark:bg-gray-900">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Mande uma mensagem</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg leading-relaxed">
                  Prefere um atendimento instantâneo? Clique no botão abaixo e fale diretamente com nossa equipe técnica pelo WhatsApp.
                </p>
                <motion.a
                  whileHover={{ scale: 1.03, translateY: -5 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://api.whatsapp.com/send?phone=5561992743428&text=Olá! Gostaria de solicitar um orçamento com a Cnsousatec."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-8 rounded-2xl text-xl text-center shadow-lg shadow-green-500/20 transition-all flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" /> Iniciar Conversa
                </motion.a>
                <p className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">Resposta média em menos de 15 minutos</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
