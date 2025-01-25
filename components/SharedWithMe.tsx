import React, { useState } from "react";
import SidebarMenuHeader from "./SidebarMenuHeader";
import { dataset } from "../data/dataset";
import ListView from "./ListView";
import GridView from "./GridView";
import EmptyFiles from "./EmptyFiles";

interface SharedWithMeProps {
  activeComponent: string;
}

const SharedWithMe: React.FC<SharedWithMeProps> = ({ activeComponent }) => {
  const [selectedCount, setSelectedCount] = useState(0);
  const [isListView, setIsListView] = useState(true);

  const handleSelect = (selected: boolean) => {
    setSelectedCount((prev) => (selected ? prev + 1 : prev - 1));
  };
  return (
    <div className="w-[97%] h-full flex flex-col ">
      <SidebarMenuHeader
        isListView={isListView}
        setSelectedCount={setSelectedCount}
        setIsListView={setIsListView}
        selectedCount={selectedCount}
        activeComponent={activeComponent}
      />
      {dataset.length === 0 ? (
        <EmptyFiles
          text1={"Welcome to AirVault"}
          text2={"Drag your files and folders here or use the"}
          bold={" “Upload”"}
          afterBold={"button"}
        />
      ) : isListView ? (
        <ListView onSelect={handleSelect} activeComponent={activeComponent} />
      ) : (
        <GridView onSelect={handleSelect} activeComponent={activeComponent} />
      )}
    </div>
  );
};

export default SharedWithMe;
