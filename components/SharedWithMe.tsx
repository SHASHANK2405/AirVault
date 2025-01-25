import React, { useState } from "react";
import SidebarMenuHeader from "./SidebarMenuHeader";

interface SharedWithMeProps {
  activeComponent: string;
}

const SharedWithMe: React.FC<SharedWithMeProps> = ({ activeComponent }) => {
  const [selectedCount, setSelectedCount] = useState(0); // Track the number of selected checkboxes
  const [isListView, setIsListView] = useState(true); // Track whether the ListView or GridView is active

  // Update the selected count when a checkbox is toggled
  // const handleSelect = (selected: boolean) => {
  //   setSelectedCount((prev) => (selected ? prev + 1 : prev - 1));
  // };
  return (
    <div className="w-[97%] h-full flex flex-col ">
      <SidebarMenuHeader
        isListView={isListView}
        setSelectedCount={setSelectedCount}
        setIsListView={setIsListView}
        selectedCount={selectedCount}
        activeComponent={activeComponent}
      />
    </div>
  );
};

export default SharedWithMe;
