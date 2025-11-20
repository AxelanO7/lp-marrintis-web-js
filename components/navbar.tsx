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

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export const Navbar = () => {
  return (
    <HeroUINavbar
      isBordered
      className="backdrop-blur-xl bg-white/70 text-neutral-900"
      maxWidth="xl"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit font-semibold uppercase tracking-wide">
          <NextLink className="flex justify-start items-center gap-2" href="#">
            <span className="h-8 w-8 rounded-full bg-blue-500/90 shadow-lg shadow-blue-200" />
            <p className="font-semibold text-lg lowercase">marrintis.</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-6 justify-start ml-6 text-sm">
          {navItems.map((item) => (
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
        <NavbarItem>
          <Button
            as={Link}
            className="rounded-full bg-blue-600 text-white px-5 text-sm font-medium shadow-lg shadow-blue-200 hover:-translate-y-[1px] transition"
            href="https://wa.me/628123456789"
            radius="full"
          >
            Start Project
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-white/90 backdrop-blur-xl">
        <div className="mx-4 mt-4 flex flex-col gap-3">
          {navItems.map((item) => (
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
          <NavbarMenuItem>
            <Button
              as={Link}
              className="rounded-full bg-blue-600 text-white w-full"
              href="https://wa.me/628123456789"
              radius="full"
            >
              Start Project
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
