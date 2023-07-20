import Image from 'next/image'
import Link from "next/link";

import clsx from "clsx";

import { getPlaiceholder } from "plaiceholder";

import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Divider } from "@/components/divider";


import avatar from "../../public/avatar.png";

import linkBioLogo from "../imagens/projects/link.png";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-start gap-12 pb-14 pt-8 sm:pb-26 sm:pt-16 lg:flex-row lg:items-center lg:gap-20">
        <Image
          src={avatar}
          alt="Maxson Almeida's photo"
          width={298}
          height={298}
          quality={100}
          placeholder="blur"

          className="h-44 w-44 rounded shadow-lg sm:h-72 sm:w-72"
        />

        <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col">
            <span className="font-mono text-base text-text-contrast sm:text-lg">
              Olá, meu nome é
            </span>
            <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-6xl">
              Maxson Almeida
            </h1>
            <p className="mt-4 text-base leading-normal text-accent-text sm:text-lg md:mt-6">
              Eu sou Maxson Almeida, a Back-end Developer com Node.JS e entusiasta de Javascript e Python.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-base text-text-contrast sm:text-lg"> Atualmente, estudando na Cubos Academy </span>
          </div>

          <div className="mt-8 flex items-center gap-4">
            
           <Button variant="primary" asChild>
              <Link href="/about">Mais sobre mim</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/MaxsonAlmeidaBack-endDeveloper.pdf" target="_blank">
                Currículo
              </a>
            </Button> 
          </div>
        </div>
      </section>

      <Divider />

      <section className="py-14 !pb-0 sm:py-26">
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
          Projetos em destaque
        </h2>

        <div className="mt-14 flex flex-col gap-16 sm:gap-26">
          <div
            key="1"
            className={clsx("relative flex", {
              "justify-start": "left",
              "justify-end": "right",
            })}
          >
            <Link href="/projects/link-bio-nextjs">
              <div className="absolute top-26 -z-10 h-[216px] w-full overflow-hidden rounded border border-accent-border lg:relative lg:top-auto lg:z-auto lg:h-[328px] lg:w-[602px]">
                <Image
                  src={linkBioLogo}
                  alt="Link Bio"
                  sizes="100%"
                  layout="fill"
                  className="object-cover transition-transform hover:scale-105 lg:hover:transform-none"
                />
              </div>
            </Link>

            <div
              className={clsx(
                "flex w-full flex-col lg:absolute lg:top-1/2 lg:w-[430px] lg:-translate-y-1/2",
                {
                  "items-end right-0": "left",
                  "items-start left-0": "right",
                },
              )}
            >
              <Link
                href="/projects/2"
                className="text-text-base transition hover:text-text-contrast"
              >
                <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  Link Bio Next.js
                </h3>
              </Link>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {/* {project.technologies.slice(0, 2).map((tech) => (
                  <Chip
                    key={tech.id}
                    highlightColor={tech.highlightColor}
                    asChild
                  >
                    <a
                      href={tech.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={tech.image.url}
                        alt={tech.name}
                        width={18}
                        height={18}
                      />
                      {tech.name}
                    </a>
                  </Chip> 
                    ))}*/}

              </div>

              <div
                className={clsx(
                  "mt-40 w-[80vw] rounded bg-shape p-6 shadow-lg lg:mt-6 lg:w-auto",
                  {
                    "text-right": "left",
                    "text-left": "right",
                  },
                )}
              >
                <p className="leading-normal">
                  É projeto para agregar mais informações no perfil das redes sociais, com NextJS 13 e Tailwind CSS.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="flex flex-col py-14 sm:pb-26 sm:pt-36">
        <h3 className="text-center text-2xl font-semibold sm:text-3xl">
          Other Projects
        </h3>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 [&>a]:mx-auto">

        </div>

        <Button variant="outline" asChild className="mt-14 self-center">
          <Link href="/projects">Todos</Link>
        </Button>
      </section>
    </>
  )
}
