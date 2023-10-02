"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import useActiveList from "../hooks/useActiveList";
import { isActiveUser } from "../helper/isActive";
interface AvatarProps {
  user: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {

  const {members} = useActiveList()
  const isActive = isActiveUser(members,user?.email!)

  return (
    <div className="relative">
      <div
        className="
         relative
         inline-block
         rounded-full
         overflow-hidden
         h-9
         w-9
         md:h-11
         md:w-11
        "
      >
        <Image alt="Avatar" fill src={user?.image || "/images/placeholder.jpg"} />
      </div>
      {isActive && ( <span
      className="
        absolute
        block
        rounded-full
        bg-green-500
        ring-2
        ring-white
        top-0
        right-0
        h-2
        w-2
        md:h-3
        md:w-3
      "
      />)}
     
      
    </div>
  );
};

export default Avatar;
