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
  onSelect: (selected: boolean) => void;
}

const GridItem: React.FC<ListItemProps> = ({
  icon,
  name,
  size,
  type,
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
      </div>
    </div>
  );
};

export default GridItem;
