import React, { useState } from "react";
import { Tweet } from "../typings";
import TimeAgo from "react-timeago";
import { HeartIcon, ShareIcon, CommentIcon, RetweetIcon } from "./Icons";
import toast from "react-hot-toast";

interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  const [commentBox, setCommentBox] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex flex-col space-x-3 p-5">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
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

      <div className="mt-5 flex justify-between pl-10 pr-20">
        <div
          className="flex cursor-pointer  items-center  space-x-3 text-sm text-gray-500"
          onClick={() => setCommentBox(!commentBox)}
        >
          <CommentIcon className="h-5 w-5" />
          <span>{tweet.userId}</span>
        </div>
        <div className="flex cursor-pointer  items-center  space-x-3 text-sm text-gray-500">
          <RetweetIcon className="h-5 w-5" />
          <span>{tweet.userId * tweet.userId * 24}</span>
        </div>
        <div className="flex cursor-pointer  items-center  space-x-3 text-sm text-gray-500">
          <HeartIcon className="h-5 w-5" />
          <span>{tweet.userId * tweet.id * 8}</span>
        </div>
        <div className="flex cursor-pointer  items-center  space-x-3 text-sm text-gray-500">
          <ShareIcon className="h-5 w-5" />
        </div>
      </div>

      {commentBox && (
        <form
          className="mt-3 flex space-x-3 px-10"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Comment is posted.");
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 rounded-lg bg-gray-100 p-2 outline-none"
          />
          <button
            disabled={!input}
            className="text-twitter disabled:text-gray-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Tweet;
