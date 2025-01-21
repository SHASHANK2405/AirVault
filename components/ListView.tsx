import React, { useState } from "react";
import Image from "next/image";
import { FaArrowUpLong } from "react-icons/fa6";
import ListItem from "./ListItem";
import { RiFolder6Line } from "react-icons/ri";
import { MdOutlineImage } from "react-icons/md";

// Dataset with icons already as components
const dataset = [
  {
    icon: "Custom",
    name: "Folder 1",
    size: "105.88 GB",
    type: "Folder",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
  {
    icon: "image",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
  {
    icon: "Custom",
    name: "Folder 1",
    size: "105.88 GB",
    type: "Folder",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
  {
    icon: "image",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
  {
    icon: "image",
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
];

const ListView = ({ onSelect }: { onSelect: (selected: boolean) => void }) => {
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
    <div className="w-[1062px] h-[214px] flex flex-col mt-5 mx-3">
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
          Modified on
        </p>
      </div>
      <div className="w-[1062px] h-auto flex flex-col">
        {dataset.map((item, index) => (
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
      </div>
    </div>
  );
};

export default ListView;
