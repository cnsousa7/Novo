import { GetStaticPaths, GetStaticProps } from 'next';
import { localidades, servicos, getLocalidadeBySlug } from '@/lib/localidades';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Phone, MapPin, CheckCircle } from 'lucide-react';

interface LocalPageProps {
  servico: string;
  servicoNome: string;
  localidade: string;
  localidadeNome: string;
  uf: string;
  foco: string;
  whatsappMsg: string;
  title: string;
  description: string;
}



export default function LocalPage({ servico, servicoNome, localidade, localidadeNome, uf, foco, whatsappMsg, title, description }: LocalPageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${servicoNome} ${localidadeNome}, ${servico} ${localidade}, serviços ${localidadeNome}`} />
        <link rel="canonical" href={`https://www.Cnsousatec.com.br/local/${servico}-${localidade}`} />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {servicoNome} em {localidadeNome}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Atendimento especializado em {servicoNome} para residências, empresas e condomínios em {localidadeNome} - {uf}. Foco: {foco}
              </p>
              <a
                href={`https://api.whatsapp.com/send?phone=5561992743428&text=Olá! ${whatsappMsg} com a Cnsousatec.`}
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
                  {servicoNome} em {localidadeNome} - Atendimento Rápido e Profissional
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A <strong>Cnsousatec</strong> é a sua melhor escolha para serviços de <strong>{servicoNome}</strong> em <strong>{localidadeNome}</strong>. 
                  Atendemos residências, empresas, condomínios e estabelecimentos comerciais com equipe qualificada e equipamentos modernos.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {uf === 'DF' ? (
                    <>
                      Entendemos a sofisticação e as normas exigidas nos projetos de <strong>{localidadeNome}</strong>. Nossa equipe é especializada em manutenções que preservam a estética e a segurança de residências de alto padrão, garantindo conformidade total com as normas técnicas brasileiras.
                    </>
                  ) : (
                    <>
                      A CNSOUSATEC oferece o suporte técnico que <strong>{localidadeNome}</strong> precisa para crescer com segurança. Seja para uma emergência elétrica residencial ou para a instalação hidráulica do seu novo comércio, estamos prontos para atender com agilidade e o melhor custo-benefício da região.
                    </>
                  )}
                </p>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Por Que Escolher a Cnsousatec em {localidadeNome}?
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Atendimento Local</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Equipe disponível para atendimento rápido em {localidadeNome} e região. Foco de Atendimento: <strong>{foco}</strong>.
                  </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Profissionais Qualificados</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Técnicos certificados e experientes em {servicoNome}.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Orçamento Sem Compromisso</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Avaliação gratuita e orçamento transparente antes de iniciar o serviço.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Garantia dos Serviços</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Todos os nossos serviços possuem garantia de qualidade.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Serviços de {servicoNome} que Oferecemos em {localidadeNome}
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Nossa equipe está preparada para atender todas as suas necessidades em {servicoNome}. Trabalhamos com manutenção preventiva, 
                  corretiva, instalações novas, reformas e adequações. Utilizamos apenas materiais de qualidade e seguimos rigorosamente as normas 
                  técnicas vigentes.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {uf === 'DF' ? (
                    <>
                      Em <strong>{localidadeNome}</strong>, a segurança e a conformidade são prioridades. Nossos técnicos possuem certificações NR-10 e CREA, essenciais para atuar em condomínios e empresas de alto padrão. Garantimos um serviço de excelência, focado na durabilidade e na tranquilidade do seu patrimônio.
                    </>
                  ) : (
                    <>
                      Se você está em <strong>{localidadeNome}</strong> e precisa de {servicoNome}, não hesite em nos contatar. Estamos prontos para atender sua solicitação com rapidez e eficiência. Nossa missão é garantir a segurança, o conforto e a tranquilidade dos nossos clientes através de serviços de excelência, com foco em soluções práticas e acessíveis.
                    </>
                  )}
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mt-8">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                    Atendemos {localidadeNome} e Região
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    A Cnsousatec possui equipes móveis prontas para atender {localidadeNome} com agilidade. 
                    Entre em contato agora mesmo e agende uma visita técnica.
                  </p>
                  <a
                    href={`https://api.whatsapp.com/send?phone=5561992743428&text=Olá! ${whatsappMsg} com a Cnsousatec.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    <Phone className="w-5 h-5" />
                    Solicitar Atendimento em {localidadeNome}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Precisa de {servicoNome} em {localidadeNome}?
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Entre em contato agora e receba um orçamento personalizado
                </p>
                <a
                  href={`https://api.whatsapp.com/send?phone=5561992743428&text=Olá! ${whatsappMsg} com a Cnsousatec.`}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  
  for (const servicoKey of Object.keys(servicos)) {
    for (const localidade of localidades) {
      paths.push({
        params: {
          slug: `${servicoKey}-${localidade.slug}`,
        },
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const parts = slug.split('-');
  
  // Encontrar onde termina o serviço e começa a localidade
  let servicoKey = '';
  let localidadeSlug = '';
  
  for (let i = parts.length - 1; i >= 0; i--) {
    const possibleLocalidadeSlug = parts.slice(i).join('-');
    const localidadeData = getLocalidadeBySlug(possibleLocalidadeSlug);
    
    if (localidadeData) {
      localidadeSlug = possibleLocalidadeSlug;
      servicoKey = parts.slice(0, i).join('-');
      break;
    }
  }

  const servicoNome = servicos[servicoKey as keyof typeof servicos] || 'Serviço';
  const localidadeData = getLocalidadeBySlug(localidadeSlug);

  if (!localidadeData) {
    return { notFound: true };
  }

  const { nome: localidadeNome, uf, foco, whatsappMsg } = localidadeData;

  const title = `${servicoNome} em ${localidadeNome} - Cnsousatec | Atendimento Rápido`;
  const description = `Serviços de ${servicoNome} em ${localidadeNome} - ${uf}. Atendimento profissional para residências, empresas e condomínios. Foco: ${foco}. Orçamento grátis!`;

  return {
    props: {
      servico: servicoKey,
      servicoNome,
      localidade: localidadeSlug,
      localidadeNome,
      uf,
      foco,
      whatsappMsg,
      title,
      description,
    },
  };
};
