import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import { Link } from "@heroui/link";
import { useMemo } from "react";

import { useLanguage } from "@/config/language-context";

const navItems = {
  en: [
    { label: "Solutions", href: "#solutions" },
    { label: "Methodology", href: "#methodology" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  id: [
    { label: "Solusi", href: "#solutions" },
    { label: "Metodologi", href: "#methodology" },
    { label: "Harga", href: "#pricing" },
    { label: "Kontak", href: "#contact" },
  ],
};

export const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  const ctaLabel = useMemo(
    () =>
      language === "en" ? "Schedule Consultation" : "Jadwalkan Konsultasi",
    [language],
  );

  const activeNavItems = useMemo(() => navItems[language], [language]);

  return (
    <HeroUINavbar
      isBordered
      className="backdrop-blur-xl bg-white/70 text-neutral-900"
      maxWidth="xl"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit font-semibold uppercase tracking-wide">
          <NextLink className="flex justify-start items-center gap-2" href="#">
            <span className="h-8 w-8 rounded-full bg-blue-600 shadow-lg shadow-blue-200" />
            <p className="font-semibold text-lg">Marrintis Studio</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-6 justify-start ml-6 text-sm">
          {activeNavItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                as={NextLink}
                className="text-neutral-700 transition-colors hover:text-blue-600"
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex items-center gap-2">
          <Button
            className="min-w-[40px] h-9 rounded-full border border-neutral-200 bg-white/80 text-xs font-medium"
            radius="full"
            variant="bordered"
            onPress={toggleLanguage}
          >
            {language === "en" ? "EN / ID" : "ID / EN"}
          </Button>
          <Button
            as={Link}
            className="rounded-full bg-blue-600 text-white px-5 text-sm font-medium shadow-lg shadow-blue-200 hover:-translate-y-[1px] transition"
            href="https://wa.me/628123456789"
            radius="full"
          >
            {ctaLabel}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-white/90 backdrop-blur-xl">
        <div className="mx-4 mt-4 flex flex-col gap-3">
          {activeNavItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                as={NextLink}
                className="text-lg text-neutral-800"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="flex gap-2">
            <Button
              className="rounded-full border border-neutral-200 bg-white/80 text-sm"
              radius="full"
              variant="bordered"
              onPress={toggleLanguage}
            >
              {language === "en" ? "EN / ID" : "ID / EN"}
            </Button>
            <Button
              as={Link}
              className="rounded-full bg-blue-600 text-white w-full"
              href="https://wa.me/628123456789"
              radius="full"
            >
              {ctaLabel}
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
