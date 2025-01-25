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
    icon: "/icons/Custom.png",
    name: "Folder 1",
    size: "105.88 GB",
    type: "Folder",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "Bishal Bhattacharya",
  },
  {
    icon: "/icons/Image.png",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "rituraj",
  },
  {
    icon: "/icons/Custom.png",
    name: "Folder 1",
    size: "105.88 GB",
    type: "Folder",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "Rohit Chowik",
  },
  {
    icon: "/icons/Image.png",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
    SharedBy: "Rituraj Kumar ",
  },
  {
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
          {activeComponent === "Shared with me" ? "Shared by" : "Modified on"}
        </p>
      </div>

      {/* Conditional Rendering Based on activeComponent */}

      {activeComponent === "My files" ? (
        <div className="w-full h-auto flex flex-col mt-2">
          {/* Last Week */}
          <p className="w-[79px] h-[22px] font-medium text-[14px] leading-[22px] text-[#3D4366]">
            Last week
          </p>
          {dataset.slice(0, 3).map((item, index) => (
            <ListItem
              key={index}
              icon={item.icon} // Pass the actual icon component
              name={item.name}
              size={item.size}
              type={item.type}
              modifiedOn={item.modifiedOn}
              onSelect={(selected) => handleSelect(index, selected)}
            />
          ))}

          {/* Last Month */}
          <p className="w-[79px] h-[22px] font-medium text-[14px] leading-[22px] text-[#3D4366]">
            Last month
          </p>
          {dataset.slice(3).map((item, index) => (
            <ListItem
              key={index + 3} // Adjust index to avoid duplicate keys
              icon={item.icon} // Pass the actual icon component
              name={item.name}
              size={item.size}
              type={item.type}
              modifiedOn={item.modifiedOn}
              onSelect={(selected) => handleSelect(index + 3, selected)}
            />
          ))}
        </div>
      ) : (
        dataset.map((item, index) => (
          <div className="w-full h-auto flex flex-col">
            <ListItem
              key={index}
              icon={item.icon} // Pass the actual icon component
              name={item.name}
              size={item.size}
              type={item.type}
              modifiedOn={item.modifiedOn}
              onSelect={(selected) => handleSelect(index, selected)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ListView;
