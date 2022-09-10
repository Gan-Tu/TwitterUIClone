import React from "react";
import { Tweet } from "../typings";
import TimeAgo from "react-timeago";

interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  return (
    <div className="flex flex-col space-x-3">
      <div className="flex space-x-3">
        <img
          className="w019 h-10 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.screenName}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username}
            </p>

            <TimeAgo
              className="text-sm text-gray-500"
              date={`2022-08-${tweet.userId}`}
            />
          </div>

          <p className="py-1">{tweet.text}</p>

          {tweet.id % 3 == 0 && (
            <img
              src={`https://picsum.photos/id/${tweet.id}/400/200`}
              alt=""
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
