import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import {
  ArrowUpRight,
  Sparkles,
  Send,
  Instagram,
  Linkedin,
  PhoneCall,
  Palette,
  Code,
  Waves,
} from "@/components/lucide-icons";

const services = [
  {
    title: "INIT",
    badge: "For Starters",
    description:
      "Branding essentials paired with a single-page web launch to validate your idea fast.",
    deliverables: [
      "Logo, color, and typography kit",
      "One-page responsive website",
      "Launch support + analytics setup",
    ],
    accent: "from-sky-200/80 via-blue-200/70 to-white",
  },
  {
    title: "FLOW",
    badge: "For Growth",
    description:
      "Full website, social visuals, and CMS to publish effortlessly across channels.",
    deliverables: [
      "Multi-page website with CMS",
      "Social media visual system",
      "SEO + performance tuning",
    ],
    accent: "from-blue-200/80 via-indigo-200/70 to-white",
  },
  {
    title: "SCALE",
    badge: "For Expansion",
    description:
      "Custom web or mobile apps with a cohesive design system ready to evolve with you.",
    deliverables: [
      "Product design system",
      "Custom web or mobile build",
      "Experimentation & growth loops",
    ],
    accent: "from-indigo-200/80 via-purple-200/70 to-white",
  },
];

const work = [
  {
    title: "Ethereal Commerce",
    tag: "E-commerce",
    palette: "bg-gradient-to-br from-blue-200 via-white to-indigo-200",
  },
  {
    title: "Haus of Shiv vibe",
    tag: "Campaign Visuals",
    palette: "bg-gradient-to-br from-neutral-200 via-white to-blue-100",
  },
  {
    title: "Kinetic Portfolio",
    tag: "Portfolio Web",
    palette: "bg-gradient-to-br from-indigo-100 via-white to-blue-100",
  },
];

const duo = [
  {
    title: "The Designer",
    focus:
      "Brand, visual direction, and sensory storytelling for premium feel.",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: "The Engineer",
    focus: "Robust builds, performance, and scalable systems to keep you live.",
    icon: <Code className="h-6 w-6" />,
  },
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="gradient-blob bg-blue-400/40 top-[-10%] left-[-10%] animate-float" />
          <div className="gradient-blob bg-sky-200/60 bottom-[-15%] right-[-10%] animate-float-delayed" />
          <div className="gradient-blob bg-indigo-200/50 top-1/3 right-1/4 animate-spin-slow" />
        </div>

        <div className="relative px-6 md:px-10 lg:px-16 pt-12 pb-10">
          <section className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-14 pt-10">
            <div className="flex flex-wrap items-center gap-3">
              <Chip
                className="bg-white/70 backdrop-blur-md border border-white/40 text-neutral-800"
                startContent={<Sparkles className="h-4 w-4 text-blue-600" />}
              >
                Art meets Tech
              </Chip>
              <Chip className="bg-blue-600 text-white" variant="solid">
                Minimal & Editorial
              </Chip>
            </div>

            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7 flex flex-col gap-6">
                <motion.h1
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                >
                  Artistry meets Engineering.
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-500">
                    We craft digital legacies.
                  </span>
                </motion.h1>
                <p className="text-lg md:text-xl text-neutral-700 max-w-2xl leading-relaxed">
                  Marrintis is a creative duo blending bold visual direction
                  with robust engineering. We help founders and brands launch,
                  grow, and scale with experiences that feel expensive yet
                  effortless.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    as={Link}
                    className="rounded-full bg-blue-600 text-white px-6 shadow-lg shadow-blue-200"
                    endContent={<ArrowUpRight className="h-4 w-4" />}
                    href="https://wa.me/628123456789"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    as={Link}
                    className="rounded-full border border-neutral-200 bg-white/80 backdrop-blur-md text-neutral-900"
                    endContent={<Send className="h-4 w-4" />}
                    href="mailto:hello@marrintis.studio"
                    variant="bordered"
                  >
                    Email us
                  </Button>
                </div>
              </div>

              <div className="md:col-span-5 grid gap-4">
                <Card className="glass-panel p-5">
                  <div className="flex items-center gap-3">
                    <Waves className="h-10 w-10 text-blue-600" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        Creative Studio
                      </p>
                      <p className="text-lg font-semibold text-neutral-900">
                        Marrintis Duo
                      </p>
                    </div>
                  </div>
                  <Divider className="my-4" />
                  <div className="flex items-center justify-between text-sm text-neutral-700">
                    <div>
                      <p className="font-semibold">Software Engineer</p>
                      <p className="text-neutral-500">Systems & Delivery</p>
                    </div>
                    <div>
                      <p className="font-semibold">Graphic Designer</p>
                      <p className="text-neutral-500">Visual Direction</p>
                    </div>
                  </div>
                </Card>
                <Card className="glass-panel p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-600">Based in</p>
                      <p className="text-lg font-semibold">Remote • SEA</p>
                    </div>
                    <Chip className="bg-blue-50 text-blue-700" variant="flat">
                      Open for 2025
                    </Chip>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-neutral-700">
                    <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-4 shadow-inner">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        Core
                      </p>
                      <p className="font-semibold">Design + Code</p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-4 shadow-inner">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        Focus
                      </p>
                      <p className="font-semibold">Launch & Scale</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section
            className="max-w-6xl mx-auto mt-20 grid gap-6 md:grid-cols-3"
            id="about"
          >
            <Card className="glass-panel p-6 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500">
                  The Duo
                </p>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">
                Where editorial polish meets technical precision.
              </h2>
              <p className="text-neutral-700 leading-relaxed text-lg">
                Every project is co-crafted by a graphic designer and a software
                engineer, ensuring the visuals feel luxurious while the
                technology stays dependable. We move quickly without sacrificing
                detail.
              </p>
              <Divider className="my-6" />
              <div className="grid gap-4 md:grid-cols-2">
                {duo.map((role) => (
                  <Card
                    key={role.title}
                    className="p-4 bg-white/70 border border-white/60 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-2 text-neutral-900">
                      <div className="rounded-full bg-blue-50 text-blue-700 p-2">
                        {role.icon}
                      </div>
                      <p className="font-semibold">{role.title}</p>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {role.focus}
                    </p>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="glass-panel p-6 flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Inquiries
              </p>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-neutral-500 text-sm">WhatsApp</p>
                  <p className="font-semibold">+62 812 3456 6789</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Send className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-neutral-500 text-sm">Email</p>
                  <p className="font-semibold">hello@marrintis.studio</p>
                </div>
              </div>
              <Divider />
              <div className="flex gap-3">
                <Button
                  as={Link}
                  className="rounded-full bg-blue-600 text-white"
                  endContent={<ArrowUpRight className="h-4 w-4" />}
                  href="https://wa.me/628123456789"
                >
                  Start a project
                </Button>
                <Button
                  as={Link}
                  className="rounded-full border border-neutral-200"
                  href="mailto:hello@marrintis.studio"
                  variant="bordered"
                >
                  Email
                </Button>
              </div>
            </Card>
          </section>

          <section className="max-w-6xl mx-auto mt-20" id="services">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500">
                  Services
                </p>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Marrintis packages
                </h2>
              </div>
              <Chip
                className="bg-white/70 border border-white/60 text-neutral-700"
                startContent={<ArrowUpRight className="h-3 w-3" />}
              >
                Built with Hero UI
              </Chip>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="glass-panel p-6 relative overflow-hidden border border-white/60"
                >
                  <div
                    className={`absolute inset-0 -z-10 bg-gradient-to-br ${service.accent}`}
                  />
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <Chip
                      className="bg-white/60 text-neutral-800"
                      variant="flat"
                    >
                      {service.badge}
                    </Chip>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Divider className="my-4" />
                  <ul className="space-y-2 text-sm text-neutral-800">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto mt-20" id="work">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500">
                  Selected Work
                </p>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Case study previews
                </h2>
              </div>
              <Button
                as={Link}
                className="rounded-full border border-neutral-300 bg-white/80"
                endContent={<ArrowUpRight className="h-4 w-4" />}
                href="mailto:hello@marrintis.studio"
                variant="bordered"
              >
                Request full deck
              </Button>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
              {work.map((item) => (
                <Card
                  key={item.title}
                  className="min-w-[260px] md:min-w-[320px] glass-panel p-5 snap-start"
                >
                  <div
                    className={`${item.palette} h-44 rounded-2xl mb-4 shadow-inner`}
                  />
                  <div className="flex items-center justify-between text-neutral-900">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                        {item.tag}
                      </p>
                      <p className="text-xl font-semibold">{item.title}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-neutral-700" />
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto mt-24 mb-16 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <Card className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500">
                  Ready?
                </p>
              </div>
              <h3 className="text-3xl font-semibold mb-4">
                Let&apos;s build your next launch.
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Tell us about your brand, your product, and the future you want
                to build. We respond within 24 hours with a clear next step.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  as={Link}
                  className="rounded-full bg-blue-600 text-white px-6"
                  endContent={<ArrowUpRight className="h-4 w-4" />}
                  href="https://wa.me/628123456789"
                >
                  Start Project
                </Button>
                <Button
                  as={Link}
                  className="rounded-full border border-neutral-200 bg-white/70"
                  href="mailto:hello@marrintis.studio"
                  variant="bordered"
                >
                  hello@marrintis.studio
                </Button>
              </div>
            </Card>
            <Card className="glass-panel p-8 flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                Social
              </p>
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5" />
                <Link
                  isExternal
                  className="text-neutral-800"
                  href="https://instagram.com/marrintistudio"
                >
                  instagram.com/marrintistudio
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5" />
                <Link
                  isExternal
                  className="text-neutral-800"
                  href="https://linkedin.com"
                >
                  linkedin.com/marrintis
                </Link>
              </div>
              <Divider />
              <div className="flex items-center gap-3">
                <Send className="h-5 w-5" />
                <p className="text-neutral-800">Portfolio deck on request</p>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
}
