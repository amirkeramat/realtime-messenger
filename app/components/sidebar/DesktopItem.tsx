"use client";

import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  href: string;
  active?: boolean;
  icon: any;
  onClick?: () => void;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  href,
  active,
  icon: Icon,
  onClick: handleClick,
}) => {
  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `
        group
        flex
        gap-x-3
        rounded-md
        p-3
        text-sm
        leading-6
        font-semibold
        text-gray-500
        hover:text-black
        hover:bg-gray-100
        `,
          active && "bg-gray-100 text-black"
        )}
      >
        <span className="sr-only">{label}</span>
        <Icon className="h-6 w-6 shrink-0" />
      </Link>
    </li>
  );
};

export default DesktopItem;
