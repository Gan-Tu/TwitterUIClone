import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RHS from "../components/RHS";

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <RHS />
      </main>
    </div>
  );
};

export default Home;
