import { Tweet } from "../typings";

export const fetchUser = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return data;
};

export const fetchTweets = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_sort=title&_limit=10"
  );
  const data = await res.json();
  let tweets: Tweet[] = [];
  for (const tweet of data) {
    const userData = await fetchUser(tweet.userId);
    tweets.push({
      id: tweet.id,
      userId: tweet.userId,
      text: tweet.body.charAt(0).toUpperCase() + tweet.title.substr(1),
      username: userData.username,
      screenName: userData.name,
      profileImg: `https://picsum.photos/id/${tweet.id}/48`
    });
  }
  return tweets;
};
