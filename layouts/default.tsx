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
    </div>
  );
}
