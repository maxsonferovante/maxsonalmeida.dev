import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/button";

export const metadata: Metadata = {
    title: "404",
};

export default function NotFoundPage() {
    return (
        <section className="mx-auto flex max-w-[672px] flex-col pb-14 pt-8 sm:pb-26 sm:pt-16">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                404 – Unavailable For Legal Reasons
            </h2>
            <p className="mt-4 leading-normal text-accent-text">
                Está página não foi encontrada.
            </p>
            <Button className="mt-8 self-center" asChild>
                <Link href="/">Retornar ao Home</Link>
            </Button>
        </section>
    );
}