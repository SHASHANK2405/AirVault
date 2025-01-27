import React, { useState } from "react";
import Image from "next/image";

import CustomIcon from "/public/icons/Custom.svg";
import ImageIcon from "/public/icons/Image.svg";

const iconMap: Record<string, string> = {
  Custom: CustomIcon,
  image: ImageIcon,
};

interface ListItemProps {
  icon: string; // Expecting a file path to the icon
  name: string;
  size: string;
  type: string;
  modifiedOn: string;
  SharedBy: string;
  activeComponent: string;
  onSelect: (selected: boolean) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  icon,
  name,
  size,
  type,
  modifiedOn,
  SharedBy,
  activeComponent,
  onSelect,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onSelect(newCheckedState);
  };

  return (
    <div className="w-full h-[46px] flex gap-2 group relative">
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        className="w-4 h-4 mt-[15px] rounded-[4px] border border-[#BCC0E0]"
        checked={isChecked}
      />
      <div
        className={`w-full py-2 px-3 border flex gap-[36px] items-center hover:border-[#BCC0E0] transition-all duration-300 ${
          isChecked ? "bg-[#D6ECFF]" : "hover:bg-[#EDF3FA]"
        }`}
      >
        {activeComponent === "Starred" ? (
          <div className="w-[228px] h-[22px] flex items-center gap-2">
            <Image
              src={iconMap[icon] || CustomIcon}
              alt={`${name} Icon`}
              width={16}
              height={16}
              className="text-[16px] text-[#44475B]"
            />
            <p className="w-[200px] h-[22px] text-[14px] leading-[22px] font-normal text-[#44475B] flex gap-2">
              {name.length > 22 ? `${name.slice(0, 22)}...` : name}
              <Image
                src={"/icons/FilledStars.svg"}
                alt="Starred Icon"
                width={9}
                height={9}
              />
            </p>
          </div>
        ) : (
          <div className="w-[228px] h-[22px] flex items-center gap-2">
            <Image
              src={iconMap[icon] || CustomIcon}
              alt={`${name} Icon`}
              width={16}
              height={16}
              className="text-[16px] text-[#44475B]"
            />
            <p className="w-[200px] h-[22px] text-[14px] leading-[22px] font-normal text-[#44475B]">
              {name.length > 22 ? `${name.slice(0, 24)}...` : name}
            </p>
          </div>
        )}
        <p className="w-[100px] h-[22px] text-[14px] leading-[22px] font-normal text-[#44475B]">
          {size}
        </p>
        <p className="w-[100px] h-[22px] text-[14px] leading-[22px] font-normal text-[#44475B] ml-7">
          {type}
        </p>
        {activeComponent === "Shared with me" ? (
          <div className="w-[180px] h-[22px] flex items-center gap-2">
            {/* Circle with Initials */}
            <div className="w-[24px] h-[24px] bg-[#298DFF] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
              {SharedBy.split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase()}
            </div>
            <p className="text-[14px] leading-[22px] font-normal text-[#44475B]">
              {SharedBy}
            </p>
          </div>
        ) : (
          <p className="w-[180px] h-[22px] text-[14px] leading-[22px] font-normal text-[#44475B]">
            {modifiedOn}
          </p>
        )}
        <div className="w-[206px] h-[30px] flex gap-4 items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-[74px] h-[30px] rounded-[8px] bg-[#298DFF] text-white flex justify-center items-center">
            <p className="text-[14px] leading-[22px] font-medium">Share</p>
          </button>
          <Image
            src={"/icons/Link.svg"}
            alt="Link Icon"
            width={16}
            height={16}
          />
          <Image
            src={"/icons/Download.svg"}
            alt="Download Icon"
            width={16}
            height={16}
          />
          {activeComponent === "Starred" ? (
            <Image
              src={"/icons/FilledStars.svg"}
              alt="Starred Icon"
              width={13}
              height={13}
            />
          ) : (
            <Image
              src={"/icons/Starred.svg"}
              alt="Starred Icon"
              width={13}
              height={13}
            />
          )}

          <Image src="/icons/Dots.svg" alt="Dots Icon" width={4} height={11} />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
