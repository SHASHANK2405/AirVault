import React, { useState } from "react";
import SidebarMenuHeader from "./SidebarMenuHeader";
import { dataset } from "../data/dataset";
import EmptyFiles from "./EmptyFiles";
import ListView from "./ListView";
import GridView from "./GridView";

interface MyFilesProps {
  activeComponent: string;
}

const MyFiles: React.FC<MyFilesProps> = ({ activeComponent }) => {
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
          text1={"A place for all of your files"}
          text2={"Drag your files and folder here or use "}
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

export default MyFiles;
