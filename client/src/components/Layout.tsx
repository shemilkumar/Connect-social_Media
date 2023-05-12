import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="relative flex min-h-screen font-poppins justify-center bg-[#f2f6fb]">
      <section className="flex flex-col min-h-screen w-[70%] xl:w-[80%] md:w-[90%]">
        {children}
      </section>
    </main>
  );
};

export default Layout;
