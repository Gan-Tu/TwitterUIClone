import React from "react";
import { DefaultProps } from "./types";

interface Props {
  Icon: ({ className }: DefaultProps) => JSX.Element;
  title: string;
}

function SidebarMenu({ Icon, title }: Props) {
  return (
    <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100">
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-twitter hidden text-base font-light md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  );
}

export default SidebarMenu;
