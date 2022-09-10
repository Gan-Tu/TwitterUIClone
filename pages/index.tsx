import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RHS from "../components/RHS";
import { fetchTweets } from "../utils/fetchTweets";
import { Tweet } from "../typings";
import { Toaster } from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  console.log(tweets);
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <Toaster />

      <main className="grid grid-cols-10">
        <Sidebar />
        <Feed tweets={tweets} />
        <RHS />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: { tweets }
  };
};
