import React from "react";
import { SearchIcon } from "./Icons";

function RHS() {
  return (
    <div className="mt-2 px-2">
      <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-3">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent outline-none flex-1"
        />
      </div>
    </div>
  );
}

export default RHS;
