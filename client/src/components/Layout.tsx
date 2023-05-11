import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen font-sans justify-center">
      <section className="flex flex-col min-h-screen w-[50%]">
        {children}
      </section>
    </main>
  );
};

export default Layout;
