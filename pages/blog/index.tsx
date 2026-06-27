import { Card } from "@heroui/card";
import { Link } from "@heroui/link";

import { useLanguage } from "@/config/language-context";
import DefaultLayout from "@/layouts/default";
import { ArrowUpRight } from "@/components/lucide-icons";

type Post = {
  title: string;
  date: string;
  excerpt: string;
  category: string;
};

export default function BlogPage() {
  const { language } = useLanguage();

  const title = language === "en" ? "Marrintis Insights" : "Catatan Marrintis";
  const desc =
    language === "en"
      ? "Thoughts, tutorials, and behind-the-scenes stories on tech, branding, and local business growth."
      : "Opini, tutorial, dan cerita di balik layar mengenai teknologi, branding, serta pertumbuhan bisnis lokal.";

  const posts: Post[] =
    language === "en"
      ? [
          {
            title: "Why Warm Earthy Tones are Winning in 2026",
            date: "June 25, 2026",
            excerpt:
              "Moving away from the sterile, neon-blue SaaS aesthetic. How earth greens and warm terracotta build trust.",
            category: "Design",
          },
          {
            title: "Self-Hosting vs Vercel: Budgeting for Client Projects",
            date: "June 20, 2026",
            excerpt:
              "A developer's guide to deploying sites cost-effectively. Combining free tiers with shared VPS using Coolify.",
            category: "Tech",
          },
          {
            title: "First Brand Checklist: From Zero to Domain Setup",
            date: "June 15, 2026",
            excerpt:
              "A comprehensive checklist covering logos, typography, hosting, custom email, and basic local SEO.",
            category: "Branding",
          },
        ]
      : [
          {
            title: "Mengapa Warna Earthy Lebih Digemari di Tahun 2026",
            date: "25 Juni 2026",
            excerpt:
              "Meninggalkan estetika SaaS biru neon yang kaku. Bagaimana warna hijau daun dan terracotta membangun kepercayaan.",
            category: "Desain",
          },
          {
            title: "Self-Hosting vs Vercel: Mengatur Budget Web Client",
            date: "20 Juni 2026",
            excerpt:
              "Panduan developer untuk men-deploy website secara hemat. Memadukan free tier Vercel dengan shared VPS Coolify.",
            category: "Teknologi",
          },
          {
            title: "Checklist Brand Pertama: Dari Nol hingga Setup Domain",
            date: "15 Juni 2026",
            excerpt:
              "Panduan lengkap mencakup logo, font, hosting, email kustom, dan SEO lokal dasar.",
            category: "Branding",
          },
        ];

  return (
    <DefaultLayout>
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C05C3E] font-semibold">
            Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#243E36] mt-2 mb-4">
            {title}
          </h1>
          <p className="text-stone-600 text-sm md:text-base">{desc}</p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Card
              key={post.title}
              className="p-6 border border-stone-200/60 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="bg-[#243E36]/10 text-[#243E36] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-stone-500">{post.date}</span>
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-[#243E36] mt-1 hover:text-[#C05C3E]">
                  <Link
                    className="text-inherit flex items-center gap-1.5"
                    href="#"
                  >
                    {post.title}
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </Link>
                </h3>
                <p className="text-stone-650 text-xs md:text-sm leading-relaxed mt-1">
                  {post.excerpt}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
