import React from "react";
import { SearchIcon } from "./Icons";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function RHS() {
  return (
    <div className="col-span-3 mt-2 hidden space-y-3 lg:inline">
      <div className="mx-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmusk"
        autoHeight
        noBorders
      />
    </div>
  );
}

export default RHS;
