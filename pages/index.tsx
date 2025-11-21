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
  Waves,
} from "@/components/lucide-icons";
import { useLanguage } from "@/config/language-context";

type ValueProp = {
  title: string;
  description: string;
};

type MethodologyStep = {
  title: string;
  detail: string;
};

type Solution = {
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  accent: string;
};

type PageCopy = {
  languageLabel: string;
  badge: string;
  badgeSecondary: string;
  heroTitle: string;
  heroHighlight: string;
  heroBody: string;
  primaryCta: string;
  secondaryCta: string;
  cardCoreLabel: string;
  cardCoreValue: string;
  cardFocusLabel: string;
  cardFocusValue: string;
  cardBasedInLabel: string;
  cardBasedInValue: string;
  cardOpenLabel: string;
  engagement: string;
  delivery: string;
  whyTitle: string;
  valueProps: ValueProp[];
  methodologyHeading: string;
  methodologySubheading: string;
  methodology: MethodologyStep[];
  solutionsHeading: string;
  solutionsSubheading: string;
  solutions: Solution[];
  readyTitle: string;
  readyBody: string;
  contactWhatsApp: string;
  contactEmail: string;
  contactSocial: string;
  contactLinkedIn: string;
  finalPrimaryCta: string;
  finalSecondaryCta: string;
};

const content: Record<"en" | "id", PageCopy> = {
  en: {
    languageLabel: "Corporate Digital Agency",
    badge: "Strategy • Branding • Technology",
    badgeSecondary: "Corporate Digital Agency",
    heroTitle: "Empowering business journeys.",
    heroHighlight:
      "Strategic branding & digital transformation for every stage.",
    heroBody:
      "Marrintis Studio is a professional partner for individuals launching their first brand, SMEs building consistency, and institutions pursuing full-scale rebranding. We align design, product, and operations so you can move from idea to impact with confidence.",
    primaryCta: "Start Your Project",
    secondaryCta: "Request Proposal",
    cardCoreLabel: "Core",
    cardCoreValue: "Branding & Growth",
    cardFocusLabel: "Focus",
    cardFocusValue: "Digital Ecosystems",
    cardBasedInLabel: "Based in",
    cardBasedInValue: "Remote • SEA",
    cardOpenLabel: "Open for 2025",
    engagement: "Engagement",
    delivery: "Delivery",
    whyTitle: "Why Partner with Us",
    valueProps: [
      {
        title: "Strategic Insight",
        description:
          "We translate business goals into brand and product decisions so every deliverable ladders up to growth.",
      },
      {
        title: "Integrated Execution",
        description:
          "Design systems, web builds, and launch playbooks are crafted together to keep teams aligned and shipping.",
      },
      {
        title: "Scalable Partnership",
        description:
          "Support for individual founders, SMEs, and institutions—ready to evolve as your organization expands.",
      },
    ],
    methodologyHeading: "Process built for clarity and delivery",
    methodologySubheading: "Methodology",
    methodology: [
      {
        title: "Discovery & Strategy",
        detail:
          "Immersive interviews, market pulse checks, and clear success metrics to ground the engagement.",
      },
      {
        title: "Visual Direction",
        detail:
          "Identity, narrative, and design systems that present your brand as credible, modern, and premium.",
      },
      {
        title: "Technical Development",
        detail:
          "Responsive websites, CMS, and product builds engineered for performance, reliability, and SEO.",
      },
      {
        title: "Launch & Optimization",
        detail:
          "Go-live support, analytics instrumentation, and iteration cycles to keep momentum after launch.",
      },
    ],
    solutionsHeading: "Solutions",
    solutionsSubheading: "Marrintis Studio growth phases",
    solutions: [
      {
        title: "INIT",
        badge: "Foundation for new ventures",
        description:
          "Branding and a focused landing experience to validate ideas and convert early customers.",
        deliverables: [
          "Logo, color, and typography fundamentals",
          "One-page website with conversion tracking",
          "Launch checklist and analytics setup",
        ],
        accent: "from-sky-200/80 via-blue-200/70 to-white",
      },
      {
        title: "FLOW",
        badge: "Systems for growing teams",
        description:
          "Multi-page corporate site, content engine, and social presence to keep communication consistent.",
        deliverables: [
          "Website with CMS & performance tuning",
          "Social media visual toolkit",
          "Editorial calendar & governance guidance",
        ],
        accent: "from-blue-200/80 via-indigo-200/70 to-white",
      },
      {
        title: "SCALE",
        badge: "Expansion for institutions",
        description:
          "Custom digital ecosystems and rebranding programs for enterprises ready to transform or relaunch.",
        deliverables: [
          "Design system for product & marketing",
          "Custom web/app development & integrations",
          "Experimentation roadmap & optimization",
        ],
        accent: "from-indigo-200/80 via-purple-200/70 to-white",
      },
    ],
    readyTitle: "Ready to create your next opportunity.",
    readyBody:
      "From new brands to institutions seeking a rebrand, Marrintis Studio is your strategic partner. Share your context, needs, and timeline—we respond within 24 hours with the next steps.",
    contactWhatsApp: "WhatsApp",
    contactEmail: "Email",
    contactSocial: "instagram.com/marrintistudio",
    contactLinkedIn: "linkedin.com/marrintis",
    finalPrimaryCta: "Chat on WhatsApp",
    finalSecondaryCta: "Email Us",
  },
  id: {
    languageLabel: "Agensi Digital Korporat",
    badge: "Strategi • Branding • Teknologi",
    badgeSecondary: "Agensi Digital Korporat",
    heroTitle: "Memberdayakan perjalanan bisnis.",
    heroHighlight:
      "Branding strategis & transformasi digital untuk setiap tahap.",
    heroBody:
      "Marrintis Studio adalah partner profesional bagi individu yang baru membangun brand, UMKM yang ingin konsisten, hingga institusi yang siap rebranding total. Kami menyelaraskan desain, produk, dan operasional supaya Anda melangkah dari ide ke dampak dengan percaya diri.",
    primaryCta: "Mulai Proyek",
    secondaryCta: "Minta Proposal",
    cardCoreLabel: "Inti",
    cardCoreValue: "Branding & Pertumbuhan",
    cardFocusLabel: "Fokus",
    cardFocusValue: "Ekosistem Digital",
    cardBasedInLabel: "Berbasis di",
    cardBasedInValue: "Remote • Asia Tenggara",
    cardOpenLabel: "Terbuka untuk 2025",
    engagement: "Pendekatan",
    delivery: "Delivery",
    whyTitle: "Alasan brand memilih kami",
    valueProps: [
      {
        title: "Insight Strategis",
        description:
          "Kami menerjemahkan tujuan bisnis ke keputusan brand dan produk agar setiap output mendorong pertumbuhan.",
      },
      {
        title: "Eksekusi Terintegrasi",
        description:
          "Design system, website, dan playbook peluncuran disusun bersama agar tim selaras dan gesit.",
      },
      {
        title: "Kemitraan Skalabel",
        description:
          "Dukungan untuk founder, UMKM, hingga institusi—siap berkembang seiring organisasi Anda membesar.",
      },
    ],
    methodologyHeading: "Proses yang transparan dan terukur",
    methodologySubheading: "Metodologi",
    methodology: [
      {
        title: "Discovery & Strategy",
        detail:
          "Wawancara mendalam, riset pasar, dan KPI yang jelas sebagai fondasi kerja bersama.",
      },
      {
        title: "Visual Direction",
        detail:
          "Identitas, narasi, dan design system yang menampilkan brand Anda kredibel, modern, dan premium.",
      },
      {
        title: "Technical Development",
        detail:
          "Website responsif, CMS, dan produk digital yang optimal, andal, serta siap SEO.",
      },
      {
        title: "Launch & Optimization",
        detail:
          "Pendampingan go-live, analitik, dan siklus iterasi agar momentum tetap terjaga setelah rilis.",
      },
    ],
    solutionsHeading: "Solusi",
    solutionsSubheading: "Fase pertumbuhan Marrintis Studio",
    solutions: [
      {
        title: "INIT",
        badge: "Fondasi untuk bisnis baru",
        description:
          "Branding dan landing page fokus untuk memvalidasi ide dan mengonversi pelanggan awal.",
        deliverables: [
          "Logo, warna, dan tipografi dasar",
          "Situs satu halaman dengan pelacakan konversi",
          "Checklist peluncuran dan setelan analitik",
        ],
        accent: "from-sky-200/80 via-blue-200/70 to-white",
      },
      {
        title: "FLOW",
        badge: "Sistem untuk tim yang bertumbuh",
        description:
          "Situs korporat multi-halaman, mesin konten, dan kehadiran sosial yang konsisten.",
        deliverables: [
          "Website dengan CMS & optimasi performa",
          "Toolkit visual media sosial",
          "Kalender editorial & panduan governance",
        ],
        accent: "from-blue-200/80 via-indigo-200/70 to-white",
      },
      {
        title: "SCALE",
        badge: "Ekspansi untuk institusi",
        description:
          "Ekosistem digital kustom dan program rebranding untuk enterprise yang siap transformasi atau relaunch.",
        deliverables: [
          "Design system untuk produk & marketing",
          "Pengembangan web/app kustom & integrasi",
          "Roadmap eksperimen & optimasi",
        ],
        accent: "from-indigo-200/80 via-purple-200/70 to-white",
      },
    ],
    readyTitle: "Siap menciptakan peluang usaha berikutnya.",
    readyBody:
      "Mulai dari brand baru hingga institusi yang ingin rebranding, Marrintis Studio siap menjadi partner strategis. Ceritakan konteks, kebutuhan, dan timeline Anda—kami balas dalam 24 jam dengan langkah berikutnya.",
    contactWhatsApp: "WhatsApp",
    contactEmail: "Email",
    contactSocial: "instagram.com/marrintistudio",
    contactLinkedIn: "linkedin.com/marrintis",
    finalPrimaryCta: "Chat di WhatsApp",
    finalSecondaryCta: "Kirim Email",
  },
};

export default function IndexPage() {
  const { language } = useLanguage();
  const copy = content[language];

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
                {copy.languageLabel}
              </Chip>
              <Chip className="bg-blue-600 text-white" variant="solid">
                {copy.badge}
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
                  {copy.heroTitle}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-500">
                    {copy.heroHighlight}
                  </span>
                </motion.h1>
                <p className="text-lg md:text-xl text-neutral-700 max-w-2xl leading-relaxed">
                  {copy.heroBody}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    as={Link}
                    className="rounded-full bg-blue-600 text-white px-6 shadow-lg shadow-blue-200"
                    endContent={<ArrowUpRight className="h-4 w-4" />}
                    href="https://wa.me/628123456789"
                  >
                    {copy.primaryCta}
                  </Button>
                  <Button
                    as={Link}
                    className="rounded-full border border-neutral-200 bg-white/80 backdrop-blur-md text-neutral-900"
                    endContent={<Send className="h-4 w-4" />}
                    href="mailto:hello@marrintis.studio"
                    variant="bordered"
                  >
                    {copy.secondaryCta}
                  </Button>
                </div>
              </div>

              <div className="md:col-span-5 grid gap-4">
                <Card className="glass-panel p-5">
                  <div className="flex items-center gap-3">
                    <Waves className="h-10 w-10 text-blue-600" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {copy.badgeSecondary}
                      </p>
                      <p className="text-lg font-semibold text-neutral-900">
                        Marrintis Studio
                      </p>
                    </div>
                  </div>
                  <Divider className="my-4" />
                  <div className="grid grid-cols-2 gap-3 text-sm text-neutral-700">
                    <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-4 shadow-inner">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {copy.cardCoreLabel}
                      </p>
                      <p className="font-semibold">{copy.cardCoreValue}</p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-4 shadow-inner">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {copy.cardFocusLabel}
                      </p>
                      <p className="font-semibold">{copy.cardFocusValue}</p>
                    </div>
                  </div>
                </Card>
                <Card className="glass-panel p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-600">
                        {copy.cardBasedInLabel}
                      </p>
                      <p className="text-lg font-semibold">
                        {copy.cardBasedInValue}
                      </p>
                    </div>
                    <Chip className="bg-blue-50 text-blue-700" variant="flat">
                      {copy.cardOpenLabel}
                    </Chip>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-neutral-700">
                    <div className="rounded-2xl bg-white/70 border border-white/60 p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {copy.engagement}
                      </p>
                      <p className="font-semibold">Consultative</p>
                    </div>
                    <div className="rounded-2xl bg-white/70 border border-white/60 p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        {copy.delivery}
                      </p>
                      <p className="font-semibold">End-to-End</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section
            className="max-w-6xl mx-auto mt-20 grid gap-6 md:grid-cols-3"
            id="solutions"
          >
            <Card className="glass-panel p-6 md:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500">
                  {copy.whyTitle}
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {copy.valueProps.map((item) => (
                  <Card
                    key={item.title}
                    className="p-5 bg-white/70 border border-white/60 shadow-sm"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-blue-700 mb-2">
                      {item.title}
                    </p>
                    <p className="text-neutral-700 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </Card>
          </section>

          <section className="max-w-6xl mx-auto mt-20" id="methodology">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500">
                  {copy.methodologySubheading}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight">
                  {copy.methodologyHeading}
                </h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {copy.methodology.map((step, index) => (
                <Card key={step.title} className="glass-panel p-5 flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-700 font-semibold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                      {step.title}
                    </p>
                    <p className="text-neutral-700 leading-relaxed text-sm">
                      {step.detail}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto mt-20" id="pricing">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500">
                  {copy.solutionsHeading}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight">
                  {copy.solutionsSubheading}
                </h2>
              </div>
              <Chip
                className="bg-white/70 border border-white/60 text-neutral-700"
                startContent={<ArrowUpRight className="h-3 w-3" />}
              >
                Tailored per engagement
              </Chip>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {copy.solutions.map((solution) => (
                <Card
                  key={solution.title}
                  className="glass-panel p-6 relative overflow-hidden border border-white/60"
                >
                  <div
                    className={`absolute inset-0 -z-10 bg-gradient-to-br ${solution.accent}`}
                  />
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold">{solution.title}</h3>
                    <Chip
                      className="bg-white/60 text-neutral-800"
                      variant="flat"
                    >
                      {solution.badge}
                    </Chip>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <Divider className="my-4" />
                  <ul className="space-y-2 text-sm text-neutral-800">
                    {solution.deliverables.map((item) => (
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

          <section
            className="max-w-6xl mx-auto mt-24 mb-16 grid gap-6 md:grid-cols-[1.2fr_0.8fr]"
            id="contact"
          >
            <Card className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <p className="uppercase tracking-[0.3em] text-xs text-neutral-500">
                  Ready?
                </p>
              </div>
              <h3 className="text-3xl font-semibold mb-4">{copy.readyTitle}</h3>
              <p className="text-neutral-700 leading-relaxed mb-6">
                {copy.readyBody}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  as={Link}
                  className="rounded-full bg-blue-600 text-white px-6"
                  endContent={<ArrowUpRight className="h-4 w-4" />}
                  href="https://wa.me/628123456789"
                >
                  {copy.finalPrimaryCta}
                </Button>
                <Button
                  as={Link}
                  className="rounded-full border border-neutral-200 bg-white/70"
                  href="mailto:hello@marrintis.studio"
                  variant="bordered"
                >
                  {copy.finalSecondaryCta}
                </Button>
              </div>
            </Card>
            <Card className="glass-panel p-8 flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                Contact
              </p>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-neutral-500 text-sm">
                    {copy.contactWhatsApp}
                  </p>
                  <p className="font-semibold">+62 812 3456 6789</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Send className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-neutral-500 text-sm">
                    {copy.contactEmail}
                  </p>
                  <p className="font-semibold">hello@marrintis.studio</p>
                </div>
              </div>
              <Divider />
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5" />
                <Link
                  isExternal
                  className="text-neutral-800"
                  href="https://instagram.com/marrintistudio"
                >
                  {copy.contactSocial}
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5" />
                <Link
                  isExternal
                  className="text-neutral-800"
                  href="https://linkedin.com"
                >
                  {copy.contactLinkedIn}
                </Link>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </DefaultLayout>
  );
}
