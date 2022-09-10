import React from "react";
import { Tweet } from "../typings";
import { RefreshIcon } from "./Icons";
import TweetComponent from "./Tweet";
import TweetBox from "./TweetBox";

interface Props {
  tweets: Tweet[];
}

function Feed({ tweets }: Props) {
  return (
    <div className="col-span-8 border-x lg:col-span-5">
      <div className="flex-center flex justify-between">
        <h1 className="p-5 text-xl font-bold">Home</h1>
        <RefreshIcon className="text-twitter mt-6 mr-5 h-6 w-6 cursor-pointer transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
      <TweetBox />

      <div>
        {tweets.map((tweet) => (
          <TweetComponent tweet={tweet} key={tweet.id} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
