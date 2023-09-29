import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Divider } from "@/components/divider";

import cover from "../../../public/cover.png";


export const metadata: Metadata = {
  title: "Sobre",
};

export const revalidate = 3600; // 1 hour

export default function AboutPage() {

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main className="flex-1 items-center justify-center mt-20">

      <section className="pb-14 pt-8 sm:pb-24 sm:pt-16">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Sobre
          </h1>
          <Button variant="outline" asChild>
            <a
              className='font-mono text-base text-text-contrast sm:text-lg'
              href="/Maxson Almeida Ferovante - Desenvolvedor de Software Backend.pdf" target="_blank">
              Currículo
            </a>
          </Button>
        </header>

        <Image
          src={cover}
          alt=""
          width={946}
          height={380}
          quality={100}
          placeholder="blur"
          className="mt-4"
        />

        <div className="prose prose-lg mt-8 w-full max-w-none dark:prose-invert prose-p:text-accent-text prose-a:font-semibold prose-a:text-text-contrast prose-a:no-underline hover:prose-a:underline prose-strong:text-text-base sm:mt-14">
          <p>
            Paraense, amante da cultura local e não apreciador de açaí <strong>(mas o defendo com unhas e dentes)</strong>, amante das músicas brasileiras,
            mesmo errando as letras todas as vez em que as canto. Sou quase como um rapaz latino americano, vindo do interior e com
            parentes importantes. Apaixonado pelo pensamento humano crítico e semântico.
          </p>
          <p>
            Atualmente, estudante de Filosofia na Universidade do Estado do Pará e aluno bolsista da Cubos Academy no curso de Desenvolvimento de Software com foco em Back-end, o programa abrange diversos tópicos essenciais incluindo:
            <br />
            <strong>
              Desenvolvimento de Software, Back-end , Banco de Dados,
              JavaScript, TypeScript, Node.Js, Express.js, Prisma, API REST,
              PostgreSQL, SQLite. Além do curso, tenho experiência com Python e Django.
            </strong>
          </p>
          <p>
            Acredito na educação geral e na programação como formas poderosas de resolução de problemas complexos com soluções
            inovadoras para a sociedade. Nesse processo, sempre estou animado para as novas descobertas, trocas de experiências e das
            particularidades dos envolvidos.
          </p>
          <p>
            Então, se procura um parceiro para o desenvolvimento de soluções possibilitadas pela tecnologia ou para uma conversa profunda sobre
            as questões existenciais da humanidade, vamos conversar. </p>
        </div>
      </section>

      <Divider />

      <section className="py-14 sm:py-26">
        <h2 className="mb-6 text-3xl font-semibold leading-tight sm:text-4xl md:mb-10">
          Ferramentas
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          <Chip>HTML</Chip>
          <Chip>CSS3</Chip>
          <Chip>JavaScript</Chip>
          <Chip>React</Chip>
          <Chip>Next.js</Chip>
          <Chip>Tailwind CSS</Chip>
          <Chip>Typescript</Chip>
          <Chip>Node.js</Chip>
          <Chip>Express</Chip>
          <Chip>Git</Chip>
          <Chip>GitHub</Chip>
          <Chip>PostgreSQL</Chip>
          <Chip>MongoDB</Chip>
          <Chip>Python</Chip>
          <Chip>Django</Chip>

        </div>
      </section>

      <Divider />

      <section className="py-14 sm:py-26">
        <h2 className="mb-18 text-3xl font-semibold leading-tight sm:mb-26 sm:text-4xl">
          Experiência profissional
        </h2>
        <div className="prose prose-lg mt-8 w-full max-w-none dark:prose-invert prose-p:text-accent-text prose-a:font-semibold prose-a:text-text-contrast prose-a:no-underline hover:prose-a:underline prose-strong:text-text-base sm:mt-14">
          <div className="mb-5">
            <h3 className="text-xl font-semibold">Assistente Administrativo - Sindicato dos Portuários do Pará e Amapá (Fevereiro/2021 - Atualmente)</h3>
            <ul className="list-disc list-inside ml-6">
              <li>Atendimento aos(as) associados(as) com habilidades de comunicação e empatia.</li>
              <li>Eficiente gerenciamento de tempo e organização para cumprir prazos.</li>
              <li>Habilidades de trabalho em equipe para colaborar com colegas de diferentes áreas (Financeiro, Contábil e Jurídico).</li>
              <li>Solução de problemas com criatividade e tomada de decisões embasadas.</li>
              <li>Capacidade de gerenciar conflitos com calma e diplomacia.</li>
              <li>Utilização de sistemas de cobrança automatizados para rastrear e gerenciar contas a receber, facilitando a gestão de pagamentos e reduzindo a inadimplência.</li>
              <li>Negociação de prazos e condições de pagamento com os(as) associados(as), além de realizar follow-up proativo para garantir a liquidação de faturas pendentes, otimizando o fluxo de caixa da empresa.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Presidente do Diretório de Belém do Pará - Unidade Popular (agosto/2020 - outubro/2022)</h3>
            <ul className="list-disc list-inside ml-6">
              <li>Experiente em oratória e condução de reuniões, demonstrando habilidades eficazes de comunicação para transmitir ideias de forma clara e persuasiva aos membros do partido e ao público em geral.</li>
              <li>Capacidade de liderança comprovada, gerenciando equipes e motivando membros do partido para alcançar metas comuns.</li>
              <li>Proficiente em planejamento de projetos e definição de estratégias, permitindo a tomada de decisões estratégicas.</li>
              <li>Experiência em gerenciar equipes, identificar talentos e delegar responsabilidades, assegurando uma organização interna eficiente e eficaz.</li>
              <li>Sólida compreensão das questões políticas, legislação e governança, permitindo tomar decisões informadas e estratégicas em consonância com os princípios do partido.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Atendente de Bar - Veropinha (agosto/2018 - março/2019)</h3>
            <ul className="list-disc list-inside ml-6">
              <li>Prestar atendimento aos clientes do estabelecimento, garantindo uma experiência positiva.</li>
              <li>Coordenar a comunicação eficiente entre as equipes de cozinha e salão.</li>
              <li>Lidar com situações de estresse de forma eficaz, mantendo a calma e resolvendo problemas.</li>
              <li>Agilizar o atendimento e a organização de pedidos para garantir a eficiência do serviço.</li>
              <li>Tratar os clientes com cuidado e atenção, assegurando que suas necessidades sejam atendidas de forma satisfatória.</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
