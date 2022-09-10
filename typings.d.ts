export type DefaultProps = {
  className?: string;
};

export type TweetBody = {
  username: string;
  profileImg: string;
};

export interface Tweet extends TweetBody {
  _type: "tweet";
  id: number;
  userId: number;
  title: string;
  body: string;
}
