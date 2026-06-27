import { useState } from "react";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { motion, AnimatePresence } from "framer-motion";

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
  price: string;
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
  // Picker Copy
  pickerTitle: string;
  pickerSub: string;
  pickerDesc: string;
  pickerThemeLabel: string;
  pickerPkgLabel: string;
  pickerCta: string;
  pickerPreviewLabel: string;
};

const content: Record<"en" | "id", PageCopy> = {
  en: {
    languageLabel: "Creative Digital Agency",
    badge: "Strategy • Branding • Technology",
    badgeSecondary: "Creative Digital Agency",
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
    cardOpenLabel: "Open for 2026",
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
          "Domain (.my.id or .site) + custom email setup",
        ],
        accent: "from-amber-50 to-orange-100/50",
        price: "Rp 1.500.000 - 2.500.000",
      },
      {
        title: "SCALE",
        badge: "Full ecosystem for serious ventures",
        description:
          "Custom digital ecosystems, multi-page websites, and full social media management for enterprises ready to grow.",
        deliverables: [
          "Everything in INIT",
          "Multi-page website with CMS & performance tuning",
          "Social media visual kit + 1 month management",
          "Custom web/app development & design system",
        ],
        accent: "from-emerald-50 to-[#243E36]/10",
        price: "Rp 8.000.000 - 20.000.000",
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
    // Picker Copy
    pickerTitle: "Choose Your Web Vibe",
    pickerSub: "Interactive Template Picker",
    pickerDesc:
      "Explore our preset design styles. Each style features custom colors and typographic values to fit your brand identity.",
    pickerThemeLabel: "Select Design Theme",
    pickerPkgLabel: "Select Packages",
    pickerCta: "Order this style on WhatsApp",
    pickerPreviewLabel: "Live Preview Mockup",
  },
  id: {
    languageLabel: "Agensi Digital Kreatif",
    badge: "Strategi • Branding • Teknologi",
    badgeSecondary: "Agensi Digital Kreatif",
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
    cardOpenLabel: "Terbuka untuk 2026",
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
          "Domain (.my.id atau .site) + setup email kustom",
        ],
        accent: "from-amber-50 to-orange-100/50",
        price: "Rp 1.500.000 - 2.500.000",
      },
      {
        title: "SCALE",
        badge: "Ekosistem penuh untuk bisnis serius",
        description:
          "Ekosistem digital kustom, website multi-halaman, dan pengelolaan sosial media penuh untuk bisnis yang siap tumbuh.",
        deliverables: [
          "Semua yang ada di paket INIT",
          "Website multi-halaman dengan CMS & optimasi performa",
          "Visual kit sosial media + 1 bulan pengelolaan",
          "Pengembangan web/app kustom & design system",
        ],
        accent: "from-emerald-50 to-[#243E36]/10",
        price: "Rp 8.000.000 - 20.000.000",
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
    // Picker Copy
    pickerTitle: "Pilih Gaya Web Kamu",
    pickerSub: "Interactive Template Picker",
    pickerDesc:
      "Eksplorasi gaya desain pilihan kami. Setiap tema dilengkapi setelan warna dan tipografi unik yang merefleksikan identitas brand Anda.",
    pickerThemeLabel: "Pilih Tema Desain",
    pickerPkgLabel: "Pilih Paket",
    pickerCta: "Pesan gaya ini via WhatsApp",
    pickerPreviewLabel: "Preview Live Mockup",
  },
};

type ThemeConfig = {
  id: string;
  name: Record<"en" | "id", string>;
  bg: string;
  text: string;
  accent: string;
  btnBg: string;
  btnText: string;
  fontHeading: string;
  fontBody: string;
  tagline: string;
  desc: string;
};

const themes: ThemeConfig[] = [
  {
    id: "tropis",
    name: { en: "Tropis (Warm Green)", id: "Tropis (Warm Green)" },
    bg: "#FAF8F5",
    text: "#243E36",
    accent: "#C05C3E",
    btnBg: "#243E36",
    btnText: "#FAF8F5",
    fontHeading: "font-serif",
    fontBody: "font-sans",
    tagline: "Karya lokal, standar global.",
    desc: "A warm and inviting brand with clay and forest green notes.",
  },
  {
    id: "minimal",
    name: { en: "Minimal Slate", id: "Minimal Slate" },
    bg: "#F8FAFC",
    text: "#0F172A",
    accent: "#64748B",
    btnBg: "#0F172A",
    btnText: "#FFFFFF",
    fontHeading: "font-sans font-bold",
    fontBody: "font-sans",
    tagline: "Less clutter. More impact.",
    desc: "A cool slate gray base for modern, minimal tech-focused brands.",
  },
  {
    id: "bold",
    name: { en: "Bold Dark", id: "Bold Dark" },
    bg: "#0B0F19",
    text: "#F3F4F6",
    accent: "#E29545",
    btnBg: "#E29545",
    btnText: "#0B0F19",
    fontHeading: "font-black tracking-tight uppercase",
    fontBody: "font-mono",
    tagline: "BREAK THE MOULD.",
    desc: "High contrast dark design with amber lights for creative studios.",
  },
  {
    id: "playful",
    name: { en: "Playful Pastel", id: "Playful Pastel" },
    bg: "#FFFBEB",
    text: "#78350F",
    accent: "#D97706",
    btnBg: "#F59E0B",
    btnText: "#FFFBEB",
    fontHeading: "font-sans font-semibold rounded-lg",
    fontBody: "font-sans",
    tagline: "Ide segar setiap hari!",
    desc: "Soft colors, organic spacing and friendly vibes for lifestyle brands.",
  },
];

export default function IndexPage() {
  const { language } = useLanguage();
  const copy = content[language];

  // Template Picker State
  const [selectedTheme, setSelectedTheme] = useState<ThemeConfig>(themes[0]);
  const [selectedPkg, setSelectedPkg] = useState<string>("INIT");

  const buildWaLink = () => {
    const text =
      language === "en"
        ? `Halo Marrintis! I am interested in the [${selectedPkg}] package with the [${selectedTheme.name.en}] style theme. My name is: `
        : `Halo Marrintis! Saya tertarik dengan paket [${selectedPkg}] dengan tema gaya [${selectedTheme.name.id}]. Nama saya: `;

    return `https://wa.me/6282246034453?text=${encodeURIComponent(text)}`;
  };

  return (
    <DefaultLayout>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="gradient-blob bg-amber-200/20 top-[-10%] left-[-10%] animate-float" />
          <div className="gradient-blob bg-orange-200/20 bottom-[-15%] right-[-10%] animate-float-delayed" />
        </div>

        <div className="relative px-6 md:px-10 lg:px-16 pt-12 pb-10">
          <section className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-14 pt-10">
            <div className="flex flex-wrap items-center gap-3">
              <Chip
                className="bg-white/70 backdrop-blur-md border border-stone-200/60 text-stone-800"
                startContent={<Sparkles className="h-4 w-4 text-[#C05C3E]" />}
              >
                {copy.languageLabel}
              </Chip>
              <Chip className="bg-[#243E36] text-white" variant="solid">
                {copy.badge}
              </Chip>
            </div>

            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7 flex flex-col gap-6">
                <motion.h1
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.05] tracking-tight text-[#243E36]"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                >
                  {copy.heroTitle}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#243E36] to-[#C05C3E]">
                    {copy.heroHighlight}
                  </span>
                </motion.h1>
                <p className="text-lg md:text-xl text-stone-700 max-w-2xl leading-relaxed">
                  {copy.heroBody}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    as={Link}
                    className="rounded-full bg-[#243E36] text-white px-6 shadow-md"
                    endContent={<ArrowUpRight className="h-4 w-4" />}
                    href="#templates"
                  >
                    {copy.primaryCta}
                  </Button>
                  <Button
                    as={Link}
                    className="rounded-full border border-stone-200 bg-white/80 backdrop-blur-md text-stone-900"
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
                    <Waves className="h-10 w-10 text-[#C05C3E]" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-sans">
                        {copy.badgeSecondary}
                      </p>
                      <p className="text-lg font-bold font-serif text-[#243E36]">
                        Marrintis Studio
                      </p>
                    </div>
                  </div>
                  <Divider className="my-4" />
                  <div className="grid grid-cols-2 gap-3 text-sm text-stone-700">
                    <div className="rounded-2xl bg-stone-50 p-4 border border-stone-100">
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-sans">
                        {copy.cardCoreLabel}
                      </p>
                      <p className="font-semibold text-[#243E36]">
                        {copy.cardCoreValue}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-stone-50 p-4 border border-stone-100">
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-sans">
                        {copy.cardFocusLabel}
                      </p>
                      <p className="font-semibold text-[#243E36]">
                        {copy.cardFocusValue}
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="glass-panel p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-stone-600">
                        {copy.cardBasedInLabel}
                      </p>
                      <p className="text-lg font-semibold text-[#243E36]">
                        {copy.cardBasedInValue}
                      </p>
                    </div>
                    <Chip
                      className="bg-orange-50 text-[#C05C3E]"
                      variant="flat"
                    >
                      {copy.cardOpenLabel}
                    </Chip>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-stone-700">
                    <div className="rounded-2xl bg-white/70 border border-stone-200/50 p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-sans">
                        {copy.engagement}
                      </p>
                      <p className="font-semibold">Consultative</p>
                    </div>
                    <div className="rounded-2xl bg-white/70 border border-stone-200/50 p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-sans">
                        {copy.delivery}
                      </p>
                      <p className="font-semibold">End-to-End</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* interactive template picker */}
          <section
            className="max-w-6xl mx-auto mt-28 scroll-mt-20"
            id="templates"
          >
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C05C3E] font-semibold">
                {copy.pickerSub}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#243E36] mt-2 mb-4">
                {copy.pickerTitle}
              </h2>
              <p className="text-stone-600 text-sm md:text-base">
                {copy.pickerDesc}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 items-start">
              {/* picker control */}
              <div className="lg:col-span-5 space-y-6">
                <Card className="glass-panel p-6 space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-500 font-semibold mb-3">
                      {copy.pickerThemeLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {themes.map((t) => (
                        <button
                          key={t.id}
                          className={`p-3 rounded-xl border text-left transition-all relative ${
                            selectedTheme.id === t.id
                              ? "border-[#243E36] bg-stone-50 shadow-sm"
                              : "border-stone-200/60 bg-white hover:border-stone-400"
                          }`}
                          onClick={() => setSelectedTheme(t)}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-stone-300"
                              style={{ backgroundColor: t.accent }}
                            />
                            <span className="font-medium text-xs text-stone-800">
                              {t.name[language]}
                            </span>
                          </div>
                          <span className="text-[10px] text-stone-500 block truncate">
                            {t.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-500 font-semibold mb-3">
                      {copy.pickerPkgLabel}
                    </label>
                    <div className="flex gap-2">
                      {["INIT", "SCALE"].map((pkg) => (
                        <button
                          key={pkg}
                          className={`flex-1 py-2 px-3 rounded-lg border text-center text-xs font-semibold transition-all ${
                            selectedPkg === pkg
                              ? "bg-[#243E36] text-white border-transparent shadow-sm"
                              : "border-stone-200/60 bg-white text-stone-700 hover:border-stone-300"
                          }`}
                          onClick={() => setSelectedPkg(pkg)}
                        >
                          {pkg}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Divider />

                  <Button
                    isExternal
                    as={Link}
                    className="w-full rounded-xl bg-[#C05C3E] text-white font-medium py-6"
                    endContent={<ArrowUpRight className="h-4 w-4" />}
                    href={buildWaLink()}
                  >
                    {copy.pickerCta}
                  </Button>
                </Card>
              </div>

              {/* live preview mockup */}
              <div className="lg:col-span-7">
                <div className="bg-stone-900 rounded-3xl p-3 shadow-xl border border-stone-800 relative">
                  <div className="absolute top-4 left-6 flex gap-1.5 z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="text-center text-[10px] text-stone-500 mb-2 py-0.5 select-none font-mono">
                    marrintis-preview.studio/{selectedTheme.id}
                  </div>

                  {/* inner preview screen */}
                  <div
                    className="rounded-2xl min-h-[380px] p-8 md:p-12 transition-colors duration-500 flex flex-col justify-between overflow-hidden relative"
                    style={{ backgroundColor: selectedTheme.bg }}
                  >
                    {/* decorative background element for preview */}
                    <div
                      className="absolute -right-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none transition-colors duration-500"
                      style={{ backgroundColor: selectedTheme.accent }}
                    />

                    <div className="space-y-6 max-w-md relative z-10">
                      {/* header brand */}
                      <div className="flex items-center gap-2">
                        <span
                          className="w-5 h-5 rounded-full transition-colors duration-500"
                          style={{ backgroundColor: selectedTheme.accent }}
                        />
                        <span
                          className="text-xs uppercase tracking-widest font-semibold transition-colors duration-500"
                          style={{ color: selectedTheme.text }}
                        >
                          MyBrand Studio
                        </span>
                      </div>

                      {/* Heading */}
                      <AnimatePresence mode="wait">
                        <motion.h3
                          key={selectedTheme.id}
                          animate={{ opacity: 1, y: 0 }}
                          className={`text-2xl md:text-3xl transition-all duration-500 ${selectedTheme.fontHeading}`}
                          exit={{ opacity: 0, y: -10 }}
                          initial={{ opacity: 0, y: 10 }}
                          style={{ color: selectedTheme.text }}
                        >
                          {selectedTheme.tagline}
                        </motion.h3>
                      </AnimatePresence>

                      <p
                        className="text-xs md:text-sm leading-relaxed opacity-85 max-w-sm transition-colors duration-500 font-sans"
                        style={{ color: selectedTheme.text }}
                      >
                        Kami membantu Anda melangkah dari ide hingga peluncuran
                        brand digital dengan workflow modern dan desain
                        responsif.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-8 relative z-10">
                      <button
                        className="py-2.5 px-5 rounded-full text-xs font-semibold shadow-sm transition-all hover:scale-105 duration-300"
                        style={{
                          backgroundColor: selectedTheme.btnBg,
                          color: selectedTheme.btnText,
                        }}
                      >
                        Mulai Sekarang
                      </button>
                      <button
                        className="py-2.5 px-5 rounded-full text-xs font-semibold border transition-all duration-300"
                        style={{
                          borderColor: `${selectedTheme.text}33`,
                          color: selectedTheme.text,
                        }}
                      >
                        Pelajari Selengkapnya
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="max-w-6xl mx-auto mt-28 grid gap-6 md:grid-cols-3"
            id="solutions"
          >
            <Card className="glass-panel p-6 md:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-[#C05C3E]" />
                <p className="uppercase tracking-[0.3em] text-xs text-stone-500 font-semibold font-sans">
                  {copy.whyTitle}
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {copy.valueProps.map((item) => (
                  <Card
                    key={item.title}
                    className="p-5 bg-white/70 border border-stone-200/50 shadow-sm"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-[#C05C3E] font-semibold mb-2 font-sans">
                      {item.title}
                    </p>
                    <p className="text-stone-700 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
            </Card>
          </section>

          <section className="max-w-6xl mx-auto mt-28" id="methodology">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-stone-500 font-semibold font-sans">
                  {copy.methodologySubheading}
                </p>
                <h2 className="text-3xl font-serif font-bold text-[#243E36]">
                  {copy.methodologyHeading}
                </h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {copy.methodology.map((step, index) => (
                <Card key={step.title} className="glass-panel p-5 flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-stone-100 text-[#243E36] font-semibold flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.2em] text-stone-500 font-semibold font-sans">
                      {step.title}
                    </p>
                    <p className="text-stone-700 leading-relaxed text-sm">
                      {step.detail}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto mt-28" id="pricing">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-stone-500 font-semibold font-sans">
                  {copy.solutionsHeading}
                </p>
                <h2 className="text-3xl font-serif font-bold text-[#243E36]">
                  {copy.solutionsSubheading}
                </h2>
              </div>
              <Chip
                className="bg-white/70 border border-stone-200/50 text-stone-700"
                startContent={<ArrowUpRight className="h-3 w-3" />}
              >
                Tailored per engagement
              </Chip>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {copy.solutions.map((solution) => (
                <Card
                  key={solution.title}
                  className="glass-panel p-6 relative overflow-hidden border border-stone-200/60"
                >
                  <div
                    className={`absolute inset-0 -z-10 bg-gradient-to-br ${solution.accent}`}
                  />
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-serif font-bold text-[#243E36]">
                      {solution.title}
                    </h3>
                    <Chip className="bg-[#243E36] text-white" variant="flat">
                      {solution.badge}
                    </Chip>
                  </div>
                  <div className="my-2">
                    <p className="text-xs uppercase tracking-wider text-stone-500">
                      Harga Paket
                    </p>
                    <p className="text-lg font-bold text-[#C05C3E]">
                      {solution.price}
                    </p>
                  </div>
                  <p className="text-stone-700 leading-relaxed mb-4 text-sm">
                    {solution.description}
                  </p>
                  <Divider className="my-4" />
                  <ul className="space-y-2 text-sm text-stone-800">
                    {solution.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C05C3E] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          <section
            className="max-w-6xl mx-auto mt-28 mb-16 grid gap-6 md:grid-cols-[1.2fr_0.8fr]"
            id="contact"
          >
            <Card className="glass-panel p-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-[#C05C3E]" />
                <p className="uppercase tracking-[0.3em] text-xs text-stone-500 font-semibold font-sans">
                  Ready?
                </p>
              </div>
              <h3 className="text-3xl font-serif font-bold text-[#243E36] mb-4">
                {copy.readyTitle}
              </h3>
              <p className="text-stone-700 leading-relaxed mb-6">
                {copy.readyBody}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  as={Link}
                  className="rounded-full bg-[#243E36] text-white px-6"
                  endContent={<ArrowUpRight className="h-4 w-4" />}
                  href={buildWaLink()}
                >
                  {copy.finalPrimaryCta}
                </Button>
                <Button
                  as={Link}
                  className="rounded-full border border-stone-200 bg-white/70"
                  href="mailto:hello@marrintis.studio"
                  variant="bordered"
                >
                  {copy.finalSecondaryCta}
                </Button>
              </div>
            </Card>
            <Card className="glass-panel p-8 flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500 font-semibold font-sans">
                Contact
              </p>
              <div className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-[#C05C3E]" />
                <div>
                  <p className="text-stone-500 text-sm">
                    {copy.contactWhatsApp}
                  </p>
                  <p className="font-semibold text-stone-800">
                    +62 822-4603-4453
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Send className="h-5 w-5 text-[#C05C3E]" />
                <div>
                  <p className="text-stone-500 text-sm">{copy.contactEmail}</p>
                  <p className="font-semibold text-stone-800">
                    hello@marrintis.studio
                  </p>
                </div>
              </div>
              <Divider />
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-stone-800" />
                <Link
                  isExternal
                  className="text-stone-800 hover:text-[#C05C3E] text-sm"
                  href="https://instagram.com/marrintistudio"
                >
                  {copy.contactSocial}
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-stone-800" />
                <Link
                  isExternal
                  className="text-stone-800 hover:text-[#C05C3E] text-sm"
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
