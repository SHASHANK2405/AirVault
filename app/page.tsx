import MainContent from "@/components/MainContent";
import "../styles/globals.css";
import Head from "next/head";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="max-w-[1280px] w-full mx-auto bg-[#FFFFFF] overflow-hidden flex">
      <Head>
        <title>AirVault</title>
        <meta name="description" content="A modern landing page" />
      </Head>
      <Sidebar />
      <MainContent />
    </div>
  );
}
