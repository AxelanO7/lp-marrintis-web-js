import { Card } from "@heroui/card";

import { useLanguage } from "@/config/language-context";
import DefaultLayout from "@/layouts/default";
import { Sparkles } from "@/components/lucide-icons";

export default function DocsPage() {
  const { language } = useLanguage();

  const title =
    language === "en"
      ? "Marrintis Client Playbook"
      : "Panduan Kolaborasi Klien";
  const desc =
    language === "en"
      ? "Everything you need to know about our project onboarding, design feedback cycles, and launch guidelines."
      : "Semua yang perlu Anda ketahui tentang onboarding proyek, proses review desain, dan panduan peluncuran.";

  const sections =
    language === "en"
      ? [
          {
            title: "1. Onboarding & Kickoff",
            points: [
              "Select your package & theme from our interactive template picker.",
              "Book a 30-minute discovery call on our Scheduler.",
              "Provide assets (logos, images, copy guidelines) via Google Drive/Notion.",
            ],
          },
          {
            title: "2. Visual Feedback Cycle",
            points: [
              "We draft layouts directly in Figma or inline interactive prototypes.",
              "Review using Figma comments or our live staging link.",
              "We support up to 2 major design revisions in standard packages.",
            ],
          },
          {
            title: "3. Technical Delivery",
            points: [
              "We build responsive Next.js apps optimized for SEO and Core Web Vitals.",
              "We assist in purchasing local domains and setting up free custom emails (Zoho).",
              "Your site is deployed to Vercel (Hobby) or Coolify VPS with automatic SSL.",
            ],
          },
        ]
      : [
          {
            title: "1. Onboarding & Kickoff",
            points: [
              "Pilih paket dan tema melalui interaktif template picker kami.",
              "Jadwalkan sesi obrolan 30 menit gratis di halaman Konsultasi.",
              "Kirim materi brand (logo lama jika ada, foto, draf tulisan) via Google Drive/Notion.",
            ],
          },
          {
            title: "2. Review & Masukan Desain",
            points: [
              "Kami merancang layout langsung di Figma atau berupa prototipe web interaktif.",
              "Tinjau desain dan beri feedback melalui komentar Figma atau link staging live kami.",
              "Kami menyediakan revisi visual hingga 2 kali pada paket standar.",
            ],
          },
          {
            title: "3. Peluncuran & Serah Terima",
            points: [
              "Kami membangun web Next.js responsif yang dioptimasi untuk SEO dan kecepatan load.",
              "Kami membantu pembelian domain (.id/.com) dan konfigurasi email custom (Zoho Mail).",
              "Website di-deploy ke Vercel (Hobby) atau Coolify VPS dengan sertifikat SSL gratis.",
            ],
          },
        ];

  return (
    <DefaultLayout>
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C05C3E] font-semibold">
            {language === "en" ? "Documentation" : "Dokumentasi"}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#243E36] mt-2 mb-4">
            {title}
          </h1>
          <p className="text-stone-600 text-sm md:text-base">{desc}</p>
        </div>

        <div className="grid gap-6">
          {sections.map((sect) => (
            <Card
              key={sect.title}
              className="p-6 md:p-8 border border-stone-200/60 bg-white"
            >
              <h3 className="text-lg font-serif font-bold text-[#243E36] mb-4 flex items-center gap-2">
                <Sparkles className="h-4.5 w-4.5 text-[#C05C3E]" />
                {sect.title}
              </h3>
              <ul className="space-y-3.5">
                {sect.points.map((pt, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-xs md:text-sm text-stone-750"
                  >
                    <span className="font-bold text-[#C05C3E]">{i + 1}.</span>
                    <p className="leading-relaxed">{pt}</p>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
