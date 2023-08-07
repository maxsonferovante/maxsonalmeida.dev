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
              href="/MaxsonAlmeidaBack-endDeveloper.pdf" target="_blank">
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

        <div className="relative flex flex-col before:absolute before:left-[calc(3.75rem/2)] before:h-full before:w-[2px] before:bg-shape md:gap-8 md:before:left-1/2">
          {/*  {workExperiences.map((workExperience) => (
            <div
              key={workExperience.id}
              className="flex items-center gap-6 even:flex-row md:items-start md:gap-0 md:even:flex-row-reverse"
            >
              <div className="z-20 flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-full bg-shape md:absolute md:left-1/2 md:ml-[calc(-3.75rem/2)]">
                <Image
                  src={workExperience.company!.logo.url}
                  alt={workExperience.company!.name}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>

              <div className="flex w-full flex-col md:w-[45%]">
                <h3 className="flex flex-wrap items-center gap-2 text-2xl font-semibold leading-tight">
                  {workExperience.role}
                  <a
                    href={workExperience.company!.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative font-semibold text-text-contrast hover:before:absolute hover:before:bottom-0 hover:before:h-px hover:before:w-full hover:before:bg-text-contrast"
                  >
                    @ {workExperience.company!.name}
                  </a>
                </h3>

                <span className="mt-2 block font-mono text-accent-text">
                  {formatDate(workExperience.startsAt)} -{" "}
                  {workExperience.endsAt
                    ? formatDate(workExperience.endsAt)
                    : "present"}
                </span>

                <div
                  className="prose prose-lg mt-4 dark:prose-invert prose-p:text-accent-text prose-a:font-semibold prose-a:text-text-contrast prose-a:no-underline hover:prose-a:underline prose-strong:text-text-base"
                  dangerouslySetInnerHTML={{
                    __html: workExperience.description.html,
                  }}
                />
              </div>
            </div>
          ))} */}
        </div>
      </section>
    </main>
  );
}
