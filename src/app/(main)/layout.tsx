"use client";
import Footer from "@/components/core/footer";
import Header from "@/components/core/header";
import { PageHeader } from "@/components/core/page-header";
import PageTransition from "@/components/core/page-transition";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <>
      <main className="max-w-[700px] mx-auto  mt-160 min-h-screen flex flex-col justify-between  px-4">
        <div className="flex flex-col gap-9 pt-4 lg:pt-16 pb-12 ">
          <Header />
          <PageTransition>
            <div className="pt-6 flex flex-col gap-9">
              <PageHeader title={pathname} />
              {children}
            </div>
          </PageTransition>
        </div>
        <Footer />
      </main>
    </>
  );
}
