import React from "react";
import { RefreshIcon } from "./Icons";

function Feed() {
  return (
    <div>
      <div className="flex flex-center justify-between">
        <h1 className="text-xl font-bold p-5">Home</h1>
        <RefreshIcon className="w-6 h-6 cursor-pointer mt-6 mr-5 text-twitter transition-all ease-out duration-500 hover:rotate-180 active:scale-125" />
      </div>
    </div>
  );
}

export default Feed;
