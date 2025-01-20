import React, { useState } from "react";
import { IconType } from "react-icons";
import { IoLinkOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { HiOutlineDownload, HiOutlineDotsVertical } from "react-icons/hi";

interface ListItemProps {
  icon: IconType; // Expecting an icon component, not a string
  name: string;
  size: string;
  type: string;
  modifiedOn: string;
  onSelect: (selected: boolean) => void;
}

const GridItem: React.FC<ListItemProps> = ({
  icon: IconComponent,
  name,
  size,
  type,
  modifiedOn,
  onSelect,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onSelect(newCheckedState); // Pass the new state to the parent
  };

  return (
    <div
      className={`group w-[250px] h-[212px] rounded-[10px] flex flex-col gap-1 items-center transition-all duration-300 ${
        isChecked
          ? "bg-[#D6ECFF]" // Background color when checkbox is selected
          : "bg-[#F5F7FA] hover:bg-[#EDF3FA]" // Default and hover background color
      }`}
    >
      <div className="w-[234px] h-[138px] mt-2 p-2 rounded-[6px] bg-[#FFFFFF] flex justify-between relative">
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          className="w-4 h-4 rounded-[4px] border border-[#BCC0E0]"
          checked={isChecked}
        />
        {/* Visible on hover */}
        <div className="w-[130px] h-[30px] flex gap-[12px] items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-[74px] h-[30px] rounded-[8px] bg-[#298DFF] text-white flex justify-center items-center">
            <p className="text-[14px] leading-[22px] font-medium">Share</p>
          </button>
          <IoLinkOutline className="text-[16px] text-[#44475B]" />
          <HiOutlineDotsVertical className="text-[16px] text-[#44475B]" />
        </div>
      </div>
      <div className="w-[234px] h-[38px] flex justify-between mt-3">
        <div className="w-[180px] h-[38px] flex flex-row items-center gap-2">
          <IconComponent className="text-[16px] text-[#44475B] mb-3" />
          <div className="w-[136px] h-[38px] gap-[4px] flex flex-col items-start">
            <p className="w-[136px] h-[22px] text-[14px] leading-[22px] font-normal text-[#44475B]">
              {name.length > 15 ? `${name.slice(0, 15)}...` : name}
            </p>
            <div className="w-[136px] h-[12px] flex gap-[6px]">
              <p className="w-[136px] h-[12px] font-normal text-[12px] leading-[12px] text-[#6C6E7A]">
                {type} . {size}
              </p>
            </div>
          </div>
        </div>
        <CiStar className="text-[16px] text-[#44475B] mt-2" />
      </div>
    </div>
  );
};

export default GridItem;
