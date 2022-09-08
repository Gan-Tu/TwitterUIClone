import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <main>
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
};

export default Home;
