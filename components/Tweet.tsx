import React from "react";
import { Tweet } from "../typings";

interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  return <div>{tweet.username}</div>;
}

export default Tweet;
