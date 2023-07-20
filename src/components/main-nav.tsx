"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";

export const MainNav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-2 ">

            <Link
                href="/about"
                data-active={pathname === "/about"}
                className="rounded-lg px-3 py-2 text-text-base transition hover:bg-shape hover:text-text-contrast data-[active=true]:text-text-contrast"
            >
                Sobre
            </Link>
            <Link
                href="/projects"
                data-active={pathname === "/projects"}
                className="rounded-lg px-3 py-2 text-text-base transition hover:bg-shape hover:text-text-contrast data-[active=true]:text-text-contrast"
            >
                Projetos
            </Link>

            <ThemeToggle />
        </nav>
    );
};