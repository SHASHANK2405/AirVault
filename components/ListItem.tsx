import React, { useState } from "react";
import { IconType } from "react-icons";
import { IoLinkOutline } from "react-icons/io5";
import { HiOutlineDownload, HiOutlineDotsVertical } from "react-icons/hi";
import { CiStar } from "react-icons/ci";

// Define props interface
interface ListItemProps {
  icon: IconType; // Expecting an icon component, not a string
  name: string;
  size: string;
  type: string;
  modifiedOn: string;
  onSelect: (selected: boolean) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  icon: IconComponent,
  name,
  size,
  type,
  modifiedOn,
  onSelect,
}) => {
  // Declare state inside the component
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onSelect(newCheckedState); // Pass the new state to the parent
  };

  return (
    <div className="w-[1062px] h-[46px] flex gap-2 group relative">
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        className="w-4 h-4 mt-[15px] rounded-[4px] border border-[#BCC0E0]"
        checked={isChecked}
      />
      {/* Conditionally apply the background color when checkbox is checked */}
      <div
        className={`w-[1038px] py-2 px-3 border flex gap-[36px] items-center hover:border-[#BCC0E0] transition-all duration-300 ${
          isChecked ? "bg-[#D6ECFF]" : "hover:bg-[#EDF3FA]"
        }`}
      >
        <div className="w-[228px] h-[22px] flex items-center gap-2">
          <IconComponent className="text-[16px] text-[#44475B]" />
          <p className="w-[200px] h-[22px] text-[14px] leading-[22px] font-normal text-[#44475B]">
            {name.length > 22 ? `${name.slice(0, 24)}...` : name}
          </p>
        </div>
        <p className="w-[100px] h-[22px] text-[14px] leading-[22px] font-normal text-[#44475B]">
          {size}
        </p>
        <p className="w-[100px] h-[22px] text-[14px] leading-[22px] font-normal text-[#44475B] ml-7">
          {type}
        </p>
        <p className="w-[180px] h-[22px] text-[14px] leading-[22px] font-normal text-[#44475B]">
          {modifiedOn}
        </p>
        <div className="w-[206px] h-[30px] flex gap-4 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-[74px] h-[30px] rounded-[8px] bg-[#298DFF] text-white flex justify-center items-center">
            <p className="text-[14px] leading-[22px] font-medium">Share</p>
          </button>
          <IoLinkOutline className="text-[16px] text-[#44475B]" />
          <HiOutlineDownload className="text-[16px] text-[#44475B]" />
          <CiStar className="text-[16px] text-[#44475B]" />
          <HiOutlineDotsVertical className="text-[16px] text-[#44475B]" />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
