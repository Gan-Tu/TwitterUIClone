import React from "react";
import {
  BellIcon,
  HomeIcon,
  HashTagIcon,
  EnvelopeIcon,
  BookmarkIcon,
  StackIcon,
  UserIcon,
  MoreIcon
} from "./Icons";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <div className="flex flex-col items-start">
      <img
        className="h-10 w-10"
        src="https://ra.ac.ae/wp-content/uploads/2020/01/logo-twitter-icon-symbol-0.png"
        alt="twitter"
      />
      <SidebarMenu Icon={HomeIcon} title="Home" />
      <SidebarMenu Icon={HashTagIcon} title="Explore" />
      <SidebarMenu Icon={BellIcon} title="Notifications" />
      <SidebarMenu Icon={EnvelopeIcon} title="Messages" />
      <SidebarMenu Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarMenu Icon={StackIcon} title="Lists" />
      <SidebarMenu Icon={UserIcon} title="Sign In" />
      <SidebarMenu Icon={MoreIcon} title="More" />
    </div>
  );
}

export default Sidebar;
