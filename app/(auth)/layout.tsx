import { ReactNode } from "react";

interface LayoutProps {
  currentTheme: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, currentTheme }) => {
  return (
    <div
      className={`flex items-center justify-center w-full min-h-screen ${
        currentTheme === "dark" ? "dark_background" : "light_background"
      }`}
    >
      {children}
    </div>
  );
};

export default Layout;
