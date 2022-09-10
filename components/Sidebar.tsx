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
    <div className="col-span-2 flex flex-col items-center md:items-start">
      <img
        className="m-3 h-10 w-10"
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
