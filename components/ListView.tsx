import React, { useState } from "react";
import Image from "next/image";
import { FaArrowUpLong } from "react-icons/fa6";
import ListItem from "./ListItem";

interface ListViewProps {
  onSelect: (selected: boolean) => void;
  activeComponent: string; // Add activeComponent prop
}

const dataset = [
  {
    id: 1,
    icon: "/icons/Custom.png",
    name: "Folder 1",
    size: "105.88 GB",
    type: "Folder",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "Bishal Bhattacharya",
  },
  {
    id: 2,
    icon: "/icons/Image.png",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "rituraj",
  },
  {
    id: 3,
    icon: "/icons/Custom.png",
    name: "Folder 1",
    size: "105.88 GB",
    type: "Folder",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "Rohit Chowik",
  },
  {
    id: 4,
    icon: "/icons/Image.png",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "Rituraj Kumar ",
  },
  {
    id: 5,
    icon: "/icons/Image.png",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "Ashutosh Mishra",
  },
];

const ListView: React.FC<ListViewProps> = ({ onSelect, activeComponent }) => {
  const [selectedItems, setSelectedItems] = useState<boolean[]>(
    new Array(dataset.length).fill(false)
  );

  const handleSelect = (index: number, selected: boolean) => {
    const updatedSelectedItems = [...selectedItems];
    updatedSelectedItems[index] = selected;
    setSelectedItems(updatedSelectedItems);
    onSelect(selected); // Call the parent handler
  };

  return (
    <div className="w-full flex flex-col mt-5 mx-3">
      {/* Header Row */}
      <div className="flex items-center">
        <Image
          src={"/assets/minus.png"}
          alt="minus"
          width={10}
          height={10}
          className="ml-0"
        />
        <p className="text-[14px] leading-[22px] ml-[16px] font-medium text-[#3D4366]">
          Name
        </p>
        <FaArrowUpLong className="w-[7px] h-[10px] text-[#44475B] ml-[20px]" />
        <p className="text-[14px] leading-[22px] ml-[210px] font-medium text-[#3D4366]">
          Size
        </p>
        <p className="text-[14px] leading-[22px] ml-[140px] font-medium text-[#3D4366]">
          Type
        </p>
        <p className="text-[14px] leading-[22px] ml-[100px] font-medium text-[#3D4366]">
          {activeComponent === "Shared with me"
            ? "Shared by"
            : activeComponent === "Deleted files"
            ? "Deleted on"
            : "Modified on"}
        </p>
      </div>

      {/* Conditional Rendering Based on activeComponent */}
      {activeComponent === "My files" ||
      activeComponent === "Shared with me" ? (
        <div className="w-full h-auto flex flex-col mt-2">
          {/* Last Week */}
          <p className="w-[79px] h-[22px] font-medium text-[14px] leading-[22px] text-[#3D4366]">
            Last week
          </p>
          {dataset.slice(0, 3).map((item) => (
            <ListItem
              key={item.id} // Use id as key
              icon={item.icon}
              name={item.name}
              size={item.size}
              type={item.type}
              modifiedOn={item.modifiedOn}
              SharedBy={item.SharedBy}
              activeComponent={activeComponent}
              onSelect={(selected) => handleSelect(item.id - 1, selected)} // Adjust index for correct selection
            />
          ))}

          {/* Last Month */}
          <p className="w-[79px] h-[22px] font-medium text-[14px] leading-[22px] text-[#3D4366]">
            Last month
          </p>
          {dataset.slice(3).map((item) => (
            <ListItem
              key={item.id} // Use id as key
              icon={item.icon}
              name={item.name}
              size={item.size}
              type={item.type}
              activeComponent={activeComponent}
              modifiedOn={item.modifiedOn}
              SharedBy={item.SharedBy}
              onSelect={(selected) => handleSelect(item.id - 1, selected)} // Adjust index for correct selection
            />
          ))}
        </div>
      ) : (
        dataset.map((item) => (
          <div className="w-full h-auto flex flex-col" key={item.id}>
            <ListItem
              icon={item.icon}
              name={item.name}
              size={item.size}
              type={item.type}
              modifiedOn={item.modifiedOn}
              activeComponent={activeComponent}
              SharedBy={item.SharedBy}
              onSelect={(selected) => handleSelect(item.id - 1, selected)} // Adjust index for correct selection
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ListView;
