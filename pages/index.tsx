import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RHS from "../components/RHS";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <main>
        <Sidebar />
        <Feed />
        <RHS />
      </main>
    </div>
  );
};

export default Home;
