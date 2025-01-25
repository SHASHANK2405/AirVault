"use client";
import React, { useState } from "react";
import ListView from "./ListView";
import { dataset } from "../data/dataset";
import GridView from "./GridView";
import EmptyFiles from "./EmptyFiles";
import SidebarMenuHeader from "./SidebarMenuHeader";

interface MainContentProps {
  activeComponent: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeComponent }) => {
  const [selectedCount, setSelectedCount] = useState(0); // Track the number of selected checkboxes
  const [isListView, setIsListView] = useState(true); // Track whether the ListView or GridView is active

  // Update the selected count when a checkbox is toggled
  const handleSelect = (selected: boolean) => {
    setSelectedCount((prev) => (selected ? prev + 1 : prev - 1));
  };

  return (
    <div className="w-[97%] h-full flex flex-col ">
      {/* Search and Logo Section */}
      <SidebarMenuHeader
        isListView={isListView}
        setSelectedCount={setSelectedCount}
        setIsListView={setIsListView}
        selectedCount={selectedCount}
        activeComponent={activeComponent}
      />

      {/* Conditional Rendering */}
      {dataset.length === 0 ? (
        <EmptyFiles
          text1={"Welcome to AirVault"}
          text2={"Drag your files and folders here or use the"}
          bold={" “Upload”"}
          afterBold={"button"}
        />
      ) : isListView ? (
        <ListView onSelect={handleSelect} />
      ) : (
        <GridView onSelect={handleSelect} />
      )}
    </div>
  );
};

export default MainContent;
