"use client";

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "@/app/components/AvatarGroup";
import useActiveList from "@/app/hooks/useActiveList";
import { isActiveUser } from "@/app/helper/isActive";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {members} = useActiveList()
  const isActive = isActiveUser(members,otherUser?.email!)

  const statueText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }
    
    return isActive ? "Active" :"Offline"
  }, [conversation,isActive]);

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div
        className="
        bg-white
        w-full
        flex
        border-b-1
        sm:px-4
        py-4
        px-4
        lg:px-6
        justify-between
        items-center
        shadow-sm
        "
      >
        <div className="flex gap-x-3 items-center">
          <Link
            href="/conversations"
            className="
        lg:hidden
        block
        text-sky-500
        hover:text-sky-600
        transition
        cursor-pointer
        "
          >
            <HiChevronLeft size={32} />
          </Link>
          {conversation.isGroup ? (
            <AvatarGroup users={conversation?.users} />
          ) : (
            <Avatar user={otherUser} />
          )}

          <div className="flex flex-col ">
            <div>{conversation.name || otherUser.name}</div>
            <div
              className="
            text-sm
            text-neutral-500
            font-light
            "
            >
              {statueText}
            </div>
          </div>
        </div>
        <HiEllipsisHorizontal
          size={32}
          onClick={() => setDrawerOpen(true)}
          className="
        text-sky-500
        cursor-pointer
        hover:text-sky-600
        transition
      "
        />
      </div>
    </>
  );
};

export default Header;
