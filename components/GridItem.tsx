import React, { useState } from "react";
import Image from "next/image";
import CustomIcon from "/public/icons/Custom.svg";
import ImageIcon from "/public/icons/Image.svg";

const iconMap: Record<string, string> = {
  Custom: CustomIcon,
  image: ImageIcon,
};

interface ListItemProps {
  icon: string;
  name: string;
  size: string;
  type: string;
  activeComponent: string;
  onSelect: (selected: boolean) => void;
}

const GridItem: React.FC<ListItemProps> = ({
  icon,
  name,
  size,
  type,
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
    <div
      className={`group w-[250px] h-[212px] rounded-[10px] flex flex-col gap-1 items-center transition-all duration-300 ${
        isChecked ? "bg-[#D6ECFF]" : "bg-[#F5F7FA] hover:bg-[#EDF3FA]"
      }`}
    >
      <div className="w-[234px] h-[138px] mt-2 p-2 rounded-[6px] bg-[#FFFFFF] flex justify-between relative">
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          className="w-4 h-4 rounded-[4px] border border-[#BCC0E0]"
          checked={isChecked}
        />
        {activeComponent === "Deleted files" ? (
          <div></div>
        ) : (
          <div className="w-[130px] h-[30px] flex gap-[12px] items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="w-[74px] h-[30px] rounded-[8px] bg-[#298DFF] text-white flex justify-center items-center">
              <p className="text-[14px] leading-[22px] font-medium">Share</p>
            </button>
            <Image
              src={"/icons/Link.svg"}
              alt="Link Icon"
              width={16}
              height={16}
            />{" "}
            <Image
              src="/icons/Dots.svg"
              alt="Dots Icon"
              width={1.42}
              height={11.72}
              style={{ width: "10.42px", height: "11.72px" }}
            />
          </div>
        )}
      </div>
      <div className="w-[234px] h-[38px] flex justify-between mt-3">
        <div className="w-[180px] h-[38px] flex flex-row items-center gap-2">
          <Image
            src={iconMap[icon] || CustomIcon}
            alt={`${name} Icon`}
            width={16}
            height={16}
          />
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
      </div>
    </div>
  );
};

export default GridItem;
