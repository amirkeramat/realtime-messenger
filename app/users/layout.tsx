import React from "react";
import Sidebar from "@/app/components/sidebar/Sidebar";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

interface UsersLayoutProps {
  children: React.ReactNode;
}

const UsersLayout: React.FC<UsersLayoutProps> = async ({ children }) => {
  const users = await getUsers();

  return (
    <Sidebar>
      <div className=" h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
};

export default UsersLayout;
