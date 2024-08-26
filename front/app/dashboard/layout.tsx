import Logo from "@/components/Logo";
import Sidebar from "@/components/Sidebar";
import { Search, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for your app",
};

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-24 items-center justify-center border-b px-4 lg:h-[80px] lg:px-6">
            <Logo width={60} height={60} />
          </div>
          <div className="flex-1 mt-12">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-24 items-center justify-end gap-4 border-b bg-muted/40 px-4 lg:h-[80px] lg:px-6">
          <div className="bg-gray-300 rounded-full p-2 me-4">
            <User className="h-6 w-6 " />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4  lg:gap-6 lg:p-6 min-h-[calc(100vh - 96px)] md:min-h-[calc(100vh - 80px)]  ">
          {children}
        </main>
      </div>
    </div>
  );
}
