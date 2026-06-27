import { Card } from "@heroui/card";

import DefaultLayout from "@/layouts/default";
import { useLanguage } from "@/config/language-context";
import { Sparkles, Waves } from "@/components/lucide-icons";

export default function AboutPage() {
  const { language } = useLanguage();

  const title =
    language === "en" ? "Meet Marrintis" : "Kenalan dengan Marrintis";
  const subtitle =
    language === "en"
      ? "A warm, creative local studio blending design, operations, and code into digital impact."
      : "Studio lokal kreatif yang menyatukan desain, operasional, dan kode menjadi dampak digital nyata.";

  const storyHeading = language === "en" ? "Our Story" : "Cerita Kami";
  const storyBody =
    language === "en"
      ? "Born out of pure local creative juice, Marrintis helps new ventures and established SMEs build consistent visual brand identities and high-performing websites. We are not your typical corporate agency; we keep things approachable, professional, and slightly eccentric."
      : "Lahir dari energi kreatif lokal, Marrintis membantu usaha baru dan UMKM berkembang membangun identitas brand visual yang konsisten dan website berkinerja tinggi. Kami bukan agensi korporat yang kaku; kami santai, profesional, dan sedikit nyentrik.";

  const teamHeading = language === "en" ? "The Collective" : "Di Balik Layar";
  const team = [
    {
      role: "IT & Tech Stack",
      name: "Jeremia Axelano (ND)",
      desc:
        language === "en"
          ? "Handles everything backend, frontend, mobile apps, devops setup, and custom AI tooling implementation."
          : "Menangani urusan backend, frontend, aplikasi mobile, setup devops, serta implementasi AI tooling kustom.",
    },
    {
      role: "Visual & Art Direction",
      name: "Creative Partner",
      desc:
        language === "en"
          ? "Crafts high-fidelity logo assets, warm terracotta/earth brand color palettes, and modern layout concepts."
          : "Merancang aset logo resolusi tinggi, palette warna brand hangat, serta konsep layout modern.",
    },
    {
      role: "Growth & Client Success",
      name: "Sales Lead",
      desc:
        language === "en"
          ? "Acts as the bridge between your business metrics and our studio deliverables, keeping communication clear."
          : "Menjadi jembatan antara tujuan bisnis Anda dan output studio kami agar komunikasi berjalan lancar.",
    },
    {
      role: "Social & Community",
      name: "Social Media Manager",
      desc:
        language === "en"
          ? "Creates interactive storyboards and designs local social campaigns with fresh, casual copy."
          : "Membuat storyboard interaktif dan merancang kampanye media sosial lokal dengan bahasa yang segar.",
    },
  ];

  return (
    <DefaultLayout>
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C05C3E] font-semibold">
            {language === "en" ? "About Us" : "Tentang Kami"}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#243E36] mt-2 mb-4">
            {title}
          </h1>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Story Section */}
        <Card className="glass-panel p-6 md:p-8 mb-16 border-stone-200/60 bg-white/70">
          <div className="flex items-center gap-3 mb-4">
            <Waves className="h-5 w-5 text-[#C05C3E]" />
            <h2 className="text-xl font-serif font-bold text-[#243E36]">
              {storyHeading}
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm md:text-base">
            {storyBody}
          </p>
        </Card>

        {/* Team Section */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="h-5 w-5 text-[#C05C3E]" />
            <h2 className="text-2xl font-serif font-bold text-[#243E36]">
              {teamHeading}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <Card
                key={member.name}
                className="p-5 border border-stone-200/60 bg-white shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C05C3E] font-bold block mb-1">
                    {member.role}
                  </span>
                  <h3 className="font-serif font-bold text-stone-850 text-lg mb-2">
                    {member.name}
                  </h3>
                  <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
