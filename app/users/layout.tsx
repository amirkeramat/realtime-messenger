import React from "react";
import Sidebar from "@/app/components/sidebar/Sidebar";

interface UsersLayoutProps {
  children: React.ReactNode;
}

const UsersLayout: React.FC<UsersLayoutProps> = async ({ children }) => {
  return (
    <Sidebar>
      <div className=" h-full">{children}</div>
    </Sidebar>
  );
};

export default UsersLayout;
