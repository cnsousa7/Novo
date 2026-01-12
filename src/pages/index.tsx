import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Zap, Cpu, Wrench } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>cnsousatec - Manutenção Elétrica, Eletrônica e Hidráulica no DF</title>
        <meta
          name="description"
          content="Especialistas em manutenção elétrica, eletrônica e hidráulica no Distrito Federal. Atendimento rápido e profissional para empresas, condomínios e residências."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Manutenção Profissional para seu Negócio
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Serviços especializados em elétrica, eletrônica e hidráulica no Distrito Federal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5561992743428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
                >
                  Nossos Serviços
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Nossos Serviços
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Soluções completas em manutenção para empresas, condomínios e residências
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Manutenção Elétrica */}
              <motion.a
                href="/servicos/manutencao-eletrica"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-200"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Manutenção Elétrica
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Instalações, reparos e manutenção preventiva em sistemas elétricos para empresas e condomínios.
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Saiba mais →
                </span>
              </motion.a>

              {/* Manutenção Eletrônica */}
              <motion.a
                href="/servicos/manutencao-eletronica"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-200"
              >
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Manutenção Eletrônica
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Reparo e manutenção de equipamentos eletrônicos, sistemas de automação e controle.
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Saiba mais →
                </span>
              </motion.a>

              {/* Manutenção Hidráulica */}
              <motion.a
                href="/servicos/manutencao-hidraulica"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-200"
              >
                <div className="bg-cyan-100 dark:bg-cyan-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Manutenção Hidráulica
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Serviços completos em sistemas hidráulicos, tubulações e instalações prediais.
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Saiba mais →
                </span>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Entre em Contato
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Estamos prontos para atender suas necessidades
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Telefone</h3>
                <p className="text-gray-600 dark:text-gray-300">(61) 99274-3428</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">E-mail</h3>
                <p className="text-gray-600 dark:text-gray-300">cnsousatec@gmail.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Localização</h3>
                <p className="text-gray-600 dark:text-gray-300">Brasília - DF</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
