"use client";

import useConversation from "@/app/hooks/useConversation";
import { FullConversationType } from "@/app/types";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { MdOutlineGroupAdd } from "react-icons/md";
import ConversationBox from "./ConversationBox";

interface ConversationListProps {
  initialItems: FullConversationType[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
}) => {
  const [items, setItems] = useState(initialItems);

  const router = useRouter();

  const { isOpen, conversationId } = useConversation();

  return (
    <aside
      className={clsx(
        `
    fixed
    inset-y-0
    pb-20
    lg:pb-0
    lg:w-80
    lg:left-20
    lg:block
    overflow-y-auto
    border-r
    border-gray-200
   `,
        isOpen ? "hidden" : "block w-full left-0"
      )}
    >
      <div className="px-5">
        <div className="flex justify-between mb-4 pt-4">
          <div className="text-2xl font-bold text-neutral-800">Messages</div>
          <div
            className="
            p-2
            rounded-full
            bg-gray-100
            text-gray-600
            cursor-pointer
            hover:opacity-75
            transition
             
          "
          >
            <MdOutlineGroupAdd size={20} />
          </div>
        </div>
        {items.map((item) => (
          <ConversationBox key={item.id} data={item} selected={conversationId === item.id} />
        ))}
      </div>
    </aside>
  );
};

export default ConversationList;
