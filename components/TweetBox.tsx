import React, { useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  ChartBarIcon,
  PhotographIcon
} from "./Icons";

function TweetBox() {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex space-x-2 px-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        // src="https://picsum.photos/48"
        src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg"
        alt=""
      />

      <div className="flex flex-1 items-center pl-2 ">
        <form className="flex flex-1 flex-col">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            placeholder="What's Happening?"
          />
          <div className="flex items-center">
            <div className="text-twitter flex flex-1 space-x-2">
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-110" />
              <ChartBarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-110" />
              <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-110" />
              <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-110" />
              <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-110" />
            </div>

            <button
              className="bg-twitter rounded-full px-5 py-2 font-bold text-white disabled:opacity-40"
              disabled={!input}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
