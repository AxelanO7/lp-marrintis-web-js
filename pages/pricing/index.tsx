import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";

import { useLanguage } from "@/config/language-context";
import DefaultLayout from "@/layouts/default";
import { Sparkles } from "@/components/lucide-icons";

type PlanDetail = {
  title: string;
  price: string;
  desc: string;
  features: string[];
  recommended?: boolean;
};

export default function PricingPage() {
  const { language } = useLanguage();

  const title = language === "en" ? "Transparent Pricing" : "Harga Transparan";
  const subtitle =
    language === "en"
      ? "No hidden fees. Choose a plan that suits your current stage of growth."
      : "Tanpa biaya tersembunyi. Pilih paket yang sesuai dengan tahap pertumbuhan bisnis Anda.";

  const plans: PlanDetail[] =
    language === "en"
      ? [
          {
            title: "INIT",
            price: "Rp 1.500.000 - 2.500.000",
            desc: "Perfect for validating new ideas and launching your first digital brand identity.",
            features: [
              "Logo & Brand Identity fundamentals (Colors, Type)",
              "One-page high-converting landing page",
              "Domain setup (.my.id or .site for 1 year)",
              "Custom email routing (Zoho Mail)",
              "Basic SEO & performance setup",
              "Analytics instrumentation (Google Analytics/SimpleAnalytics)",
            ],
          },
          {
            title: "SCALE",
            price: "Rp 8.000.000 - 20.000.000",
            desc: "Custom web applications and comprehensive design systems built for established ventures.",
            features: [
              "Everything in INIT",
              "Multi-page responsive corporate website (up to 5 pages)",
              "Sanity CMS or Notion Integration for blogs/services",
              "Social Media visual kit & templates",
              "Custom web/app development (Next.js or dashboard integrations)",
              "Comprehensive Design System (Figma to Code)",
              "1 Month Social Media Management (collaboration with Oswalds)",
              "Custom performance audit & server-side optimization",
              "24/7 dedicated support team access",
            ],
            recommended: true,
          },
        ]
      : [
          {
            title: "INIT",
            price: "Rp 1.500.000 - 2.500.000",
            desc: "Sangat cocok untuk memvalidasi ide baru dan meluncurkan identitas brand digital pertama Anda.",
            features: [
              "Dasar Identitas Brand & Logo (Warna, Tipografi)",
              "Website satu halaman (Landing Page) berkonversi tinggi",
              "Setup Domain (.my.id atau .site gratis 1 tahun)",
              "Setup Custom Email Domain (Zoho Mail)",
              "Optimasi performa & SEO dasar",
              "Integrasi analitik (Google Analytics/SimpleAnalytics)",
            ],
          },
          {
            title: "SCALE",
            price: "Rp 8.000.000 - 20.000.000",
            desc: "Aplikasi web kustom dan sistem desain komprehensif untuk startup/institusi matang.",
            features: [
              "Semua yang ada di paket INIT",
              "Website korporat multi-halaman (hingga 5 halaman)",
              "Integrasi CMS (Sanity / Notion) untuk blog/layanan",
              "Visual kit & template untuk postingan Media Sosial",
              "Pengembangan web/app kustom (dashboard/integrasi sistem pihak ketiga)",
              "Sistem Desain (Design System) komprehensif",
              "1 Bulan pengelolaan Media Sosial (kolaborasi dengan Oswalds)",
              "Audit performa kustom & optimasi server-side",
              "Akses support prioritas 24/7",
            ],
            recommended: true,
          },
        ];

  const addonTitle =
    language === "en"
      ? "Social Media Packages (Oswalds Edition)"
      : "Paket Media Sosial (Edisi Oswalds)";
  const addons = [
    {
      title: "Basic",
      posts: "8 posts/month + caption",
      price: "Rp 500.000 - 800.000",
    },
    {
      title: "Standard",
      posts: "16 posts/month + story + caption",
      price: "Rp 1.200.000 - 1.800.000",
    },
    {
      title: "Premium",
      posts: "20+ posts + story + reel planning + caption",
      price: "Rp 2.500.000 - 4.000.000",
    },
  ];

  return (
    <DefaultLayout>
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C05C3E] font-semibold">
            {language === "en" ? "Pricing Plans" : "Rencana Harga"}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#243E36] mt-2 mb-4">
            {title}
          </h1>
          <p className="text-stone-600 text-sm md:text-base">{subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-stretch mb-20 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.title}
              className={`p-6 md:p-8 flex flex-col justify-between relative overflow-hidden border ${
                plan.recommended
                  ? "border-[#243E36] shadow-md ring-1 ring-[#243E36]/30 bg-stone-50"
                  : "border-stone-200/60 bg-white"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0">
                  <Chip
                    className="bg-[#243E36] text-white rounded-bl-xl rounded-tr-none text-[10px] font-semibold uppercase tracking-wider"
                    size="sm"
                    variant="solid"
                  >
                    {language === "en" ? "Best Value" : "Paling Populer"}
                  </Chip>
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-serif font-bold text-[#243E36]">
                    {plan.title}
                  </h3>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-[#C05C3E] tracking-tight">
                    {plan.price}
                  </p>
                </div>
                <p className="text-xs text-stone-600 mb-6 leading-relaxed">
                  {plan.desc}
                </p>
                <Divider className="my-4" />
                <ul className="space-y-3 text-xs text-stone-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#C05C3E] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button
                  as={Link}
                  className={`w-full rounded-xl py-5 text-xs font-semibold ${
                    plan.recommended
                      ? "bg-[#243E36] text-white"
                      : "border border-stone-200 bg-white text-stone-850 hover:bg-stone-50"
                  }`}
                  href={`/konsultasi?pkg=${plan.title}`}
                >
                  {language === "en"
                    ? "Consult on this Plan"
                    : "Konsultasikan Paket Ini"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Addon Social Media Card */}
        <Card className="glass-panel p-6 md:p-8 border-stone-200/60 bg-white/70">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-5 w-5 text-[#C05C3E]" />
            <h3 className="text-xl font-serif font-bold text-[#243E36]">
              {addonTitle}
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {addons.map((addon) => (
              <div
                key={addon.title}
                className="p-4 rounded-2xl bg-white border border-stone-150 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-stone-800 text-sm mb-1">
                    {addon.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {addon.posts}
                  </p>
                </div>
                <p className="text-sm font-semibold text-[#C05C3E]">
                  {addon.price}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </DefaultLayout>
  );
}
