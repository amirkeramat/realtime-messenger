import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = async ({ children }) => {
  return (
    <div className="h-full">
      <DesktopSidebar/>
      <MobileFooter/>
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

export default Sidebar;
