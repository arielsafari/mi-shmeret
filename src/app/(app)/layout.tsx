import Navbar from "@/components/layout/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto flex max-w-screen-lg min-h-screen gap-10 flex-col justify-between px-2 py-4 pt-8">
      <main className="flex flex-col gap-10">
        <Navbar />

        {children}
      </main>
    </div>
  );
}
