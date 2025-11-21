import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAFAF9] text-neutral-900">
      <Head />
      <Navbar />
      <main className="relative flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
