import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#E29545]/20 font-sans">
      <Head />
      <Navbar />
      <main className="relative flex-1 overflow-hidden">{children}</main>
      <footer className="w-full flex flex-col items-center justify-center py-8 border-t border-stone-200/50 bg-[#FAF8F5] text-xs text-stone-500 font-sans gap-2">
        <p>© 2026 Marrintis Studio. All rights reserved.</p>
        <p className="opacity-75">Strategi • Branding • Teknologi</p>
      </footer>
    </div>
  );
}
