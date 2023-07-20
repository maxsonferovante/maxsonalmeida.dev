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

export default async function AboutPage() {

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <main className="flex-1 items-center justify-center mt-20">

      <section className="pb-14 pt-8 sm:pb-26 sm:pt-16">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Sobre
          </h1>
          <Button variant="outline" asChild>
            <a href="/MaxsonAlmeidaBack-endDeveloper.pdf" target="_blank">
              Currículo
            </a>
          </Button>
        </header>

        <Image
          src={cover}
          alt=""
          width={946}
          height={425}
          quality={100}
          placeholder="blur"
          className="mt-4"
        />

        <div className="prose prose-lg mt-8 w-full max-w-none dark:prose-invert prose-p:text-accent-text prose-a:font-semibold prose-a:text-text-contrast prose-a:no-underline hover:prose-a:underline prose-strong:text-text-base sm:mt-14">
          <p>
            Uma introdução sobre quem sou.{" "}
            <strong>
              uma coisa que se destaca em mim é a minha paixão por tecnologia
            </strong>
            .
          </p>


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
          <Chip>Node.js</Chip>
          <Chip>Express</Chip>
          <Chip>Git</Chip>
          <Chip>GitHub</Chip>
          <Chip>Postgresql</Chip>
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
