"use client";

import useRoutes from "@/app/hooks/useRoutes";
import useConversation from "@/app/hooks/useConversation";
import MobileItem from "./MobileItem";
import Avatar from "../Avatar";
import { User } from "@prisma/client";
import { useState } from "react";
import SettingsModal from "./SettingsModal";

interface MobileFooterProps {
  currentUser: User;
}

const MobileFooter: React.FC<MobileFooterProps> = ({ currentUser }) => {
  const { isOpen } = useConversation();
  const [open, setOpen] = useState(false);

  const routes = useRoutes();

  if (isOpen) {
    return null;
  }

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      <div
        className="
    fixed
    bottom-0
    lg:hidden
    w-full
    flex
    justify-between
    items-center
    z-40
    bg-white
    border-t-[1px]
    "
      >
        <nav
          className="
          px-4
          border-r
          mt-2
        flex
        flex-col
        justify-center
        items-center
      "
        >
          <div
            onClick={() => setOpen(true)}
            className="
          cursor-pointer
          hover:opacity-75
          transition
        "
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
        {routes.map((item) => (
          <MobileItem
            key={item.href}
            label={item.label}
            href={item.href}
            active={item.active}
            icon={item.icon}
            onClick={item.onClick}
          />
        ))}
      </div>
    </>
  );
};

export default MobileFooter;
