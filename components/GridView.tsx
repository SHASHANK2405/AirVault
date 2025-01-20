import Image from "next/image";
import React, { useState } from "react";
import { RiFolder6Line } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";
import { MdOutlineImage } from "react-icons/md";
import GridItem from "./GridItem";

const dataset = [
  {
    icon: RiFolder6Line,
    name: "Folder 1",
    size: "105.88 GB",
    type: "Folder",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
  {
    icon: MdOutlineImage,
    name: "Image20158-5589-5104845-4421",
    size: "105.88 GB",
    type: "PNG",
    modifiedOn: "Nov 29, 2024 3:00 pm",
  },
  {
    icon: RiFolder6Line,
    name: "Folder 2",
    size: "102.88 GB",
    type: "Folder",
    modifiedOn: "Nov 30, 2024 4:00 pm",
  },
  {
    icon: MdOutlineImage,
    name: "Image20159-5590-5104845-4422",
    size: "110.88 GB",
    type: "PNG",
    modifiedOn: "Dec 1, 2024 5:00 pm",
  },
  {
    icon: MdOutlineImage,
    name: "Image20160-5591-5104845-4423",
    size: "120.88 GB",
    type: "PNG",
    modifiedOn: "Dec 2, 2024 6:00 pm",
  },
];

const GridView = ({ onSelect }: { onSelect: (selected: boolean) => void }) => {
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
    <div className="w-full h-auto mt-5 mx-3">
      <div className="flex items-center mb-4">
        <Image
          src={"/assets/minus.png"}
          alt="minus"
          width={10}
          height={10}
          className="ml-0"
        />
        <p className="text-[14px] leading-[22px] ml-[8px] font-medium text-[#3D4366]">
          Name
        </p>
        <FaArrowUpLong className="w-[7px] h-[10px] text-[#44475B] ml-[8px]" />
      </div>
      {/* Grid container */}
      <div className="grid grid-cols-4 gap-4">
        {dataset.map((item, index) => (
          <GridItem
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

export default GridView;
