import { Tweet } from "../typings";

export const fetchTweets = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const tweets: Tweet[] = data.map((x: Tweet) => {
    return {
      ...x,
      profileImg: `https://picsum.photos/id/${x.userId}/48`,
      username: `User ${x.userId}`
    };
  });
  return tweets.slice(0, 10);
};
