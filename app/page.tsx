"use client";
import MainContent from "@/components/MainContent";
import MyFiles from "@/components/MyFiles";
import SharedWithMe from "@/components/SharedWithMe";
import DeletedFiles from "@/components/DeletedFiles";
import Starred from "@/components/Starred";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Head from "next/head";

type ComponentName =
  | "All files"
  | "My files"
  | "Shared with me"
  | "Deleted files"
  | "Starred";

export default function Home() {
  const [activeComponent, setActiveComponent] =
    useState<ComponentName>("All files");

  const renderComponent = () => {
    switch (activeComponent) {
      case "All files":
        return <MainContent activeComponent={activeComponent} />;
      case "My files":
        return <MyFiles activeComponent={activeComponent} />;
      case "Shared with me":
        return <SharedWithMe activeComponent={activeComponent} />;
      case "Deleted files":
        return <DeletedFiles activeComponent={activeComponent} />;
      case "Starred":
        return <Starred activeComponent={activeComponent} />;
      default:
        return <MainContent activeComponent={activeComponent} />;
    }
  };

  return (
    <div className="w-full bg-[#FFFFFF] overflow-hidden flex">
      <Head>
        <title>AirVault</title>
        <meta name="description" content="A modern landing page" />
      </Head>
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1">{renderComponent()}</div>
    </div>
  );
}
