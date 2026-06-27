import { useState } from "react";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";

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
  const [showModal, setShowModal] = useState(false);

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
                  <button
                    className="text-left flex items-center gap-1.5 focus:outline-none"
                    onClick={() => setShowModal(true)}
                  >
                    {post.title}
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </button>
                </h3>
                <p className="text-stone-650 text-xs md:text-sm leading-relaxed mt-1">
                  {post.excerpt}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-fade-in">
            <Card className="max-w-md w-full p-6 border border-stone-200/60 bg-white shadow-xl flex flex-col items-center text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-[#C05C3E]/10 text-[#C05C3E] flex items-center justify-center">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-bold text-[#243E36]">
                {language === "en"
                  ? "Article Coming Soon"
                  : "Artikel Segera Hadir"}
              </h3>
              <p className="text-stone-600 text-xs md:text-sm">
                {language === "en"
                  ? "We are currently drafting this article. Check back shortly or subscribe to our newsletter via contact channels."
                  : "Kami sedang menyusun artikel ini. Silakan cek kembali dalam waktu dekat."}
              </p>
              <Button
                className="rounded-full bg-[#243E36] text-white px-6 py-2 text-xs font-semibold"
                onClick={() => setShowModal(false)}
              >
                {language === "en" ? "Close" : "Tutup"}
              </Button>
            </Card>
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
