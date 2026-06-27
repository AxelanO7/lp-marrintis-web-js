import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { useLanguage } from "@/config/language-context";
import DefaultLayout from "@/layouts/default";
import { PhoneCall } from "@/components/lucide-icons";

export default function KonsultasiPage() {
  const { language } = useLanguage();

  const title =
    language === "en" ? "Schedule a Consultation" : "Jadwalkan Konsultasi";
  const desc =
    language === "en"
      ? "Pick a slot that works for you. We will chat about your business goals, brand direction, and web needs."
      : "Pilih slot waktu yang cocok untuk Anda. Kita akan mengobrol tentang tujuan bisnis, arah brand, dan kebutuhan web Anda.";

  const alternateLabel =
    language === "en" ? "Or chat on WhatsApp" : "Atau chat via WhatsApp";

  return (
    <DefaultLayout>
      <section className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
        <div className="text-center max-w-2xl mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C05C3E] font-semibold">
            {language === "en" ? "Free 30-Min Session" : "Sesi Gratis 30 Menit"}
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#243E36] mt-2 mb-4">
            {title}
          </h1>
          <p className="text-stone-600 text-sm md:text-base">{desc}</p>
        </div>

        {/* Cal.com Embed Container */}
        <Card className="w-full glass-panel overflow-hidden border border-stone-200/60 shadow-lg min-h-[600px] mb-8">
          <iframe
            allowFullScreen
            className="w-full min-h-[600px] border-0"
            src="https://cal.com/marrintis/30min?embed=true"
            title="Cal.com Scheduler"
          />
        </Card>

        <div className="flex flex-col items-center gap-3">
          <p className="text-stone-500 text-xs uppercase tracking-wider">
            {alternateLabel}
          </p>
          <Button
            as={Link}
            className="rounded-full bg-[#C05C3E] text-white px-6 font-medium"
            endContent={<PhoneCall className="h-4 w-4" />}
            href="https://wa.me/628123456789"
          >
            WhatsApp
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
