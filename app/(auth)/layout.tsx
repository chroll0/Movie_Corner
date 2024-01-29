// app/(auth)/layout.tsx
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="flex flex-col items-center paddings">{children}</div>;
};

export default Layout;
