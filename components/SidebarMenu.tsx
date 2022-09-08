import React from "react";
import { DefaultProps } from "./types";

interface Props {
  Icon: ({ className }: DefaultProps) => JSX.Element;
  title: string;
}

function SidebarMenu({ Icon, title }: Props) {
  return (
    <div className="flex max-w-fit items-center space-x-2 px-4 rounded-full py-3 hover:bg-gray-100 transition-all duration-200 cursor-pointer group">
      <Icon className="w-6 h-6" />
      <p className="group-hover:text-twitter">{title}</p>
    </div>
  );
}

export default SidebarMenu;
