"use client";

import useRoutes from "@/app/hooks/useRoutes";
import useConversation from "@/app/hooks/useConversation";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const { isOpen } = useConversation();

  const routes = useRoutes();

  if (isOpen) {
    return null;
  }

  return (
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
  );
};

export default MobileFooter;
