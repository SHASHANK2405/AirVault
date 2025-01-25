import Image from "next/image";
import React, { useState } from "react";
type ComponentName =
  | "All files"
  | "My files"
  | "Shared with me"
  | "Deleted files"
  | "Starred";
interface SidebarProps {
  setActiveComponent: (component: ComponentName) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveComponent }) => {
  const [activeComponent, setActive] = useState<ComponentName>("All files");

  const handleClick = (component: ComponentName) => {
    setActive(component);
    setActiveComponent(component);
  };

  const isActive = (component: ComponentName) => activeComponent === component;

  return (
    <div className="w-[15%] h-lvh border bg-[#F7F9FC]">
      <div className="w-full h-[360px] mt-3 p-3 flex flex-col gap-3">
        <Image
          src={"assets/Logo.png"}
          alt="Logo"
          width={26}
          height={26}
          className="ml-3"
        />
        <div className="w-[90%] h-[126px] gap-1">
          <div
            onClick={() => handleClick("All files")}
            className={`w-full h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] flex items-center cursor-pointer ${
              isActive("All files") ? "bg-[#DBEAFE]" : ""
            }`}
          >
            <Image
              src={"/icons/Home.svg"}
              alt="Home Icon"
              width={12}
              height={13}
            />
            <p className="w-[110px] h-[22px] text-[14px] font-normal text-[#3D4366] leading-[22px]">
              Home
            </p>
          </div>
          <div
            onClick={() => handleClick("My files")}
            className={`w-full h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] flex items-center cursor-pointer ${
              isActive("My files") ? "bg-[#DBEAFE]" : ""
            }`}
          >
            <Image
              src={"/icons/Files.svg"}
              alt="Files Icon"
              width={12}
              height={13}
            />
            <p className="w-[110px] h-[22px] text-[14px] font-normal text-[#3D4366] leading-[22px]">
              My files
            </p>
          </div>
          <div
            onClick={() => handleClick("Shared with me")}
            className={`w-full h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] flex items-center cursor-pointer ${
              isActive("Shared with me") ? "bg-[#DBEAFE]" : ""
            }`}
          >
            <Image
              src={"/icons/Shared.svg"}
              alt="Shared Icon"
              width={15}
              height={12}
            />
            <p className="w-[110px] h-[22px] text-[14px] font-normal text-[#3D4366] leading-[22px]">
              Shared with me
            </p>
          </div>
          <div
            onClick={() => handleClick("Deleted files")}
            className={`w-full h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] flex items-center cursor-pointer ${
              isActive("Deleted files") ? "bg-[#DBEAFE]" : ""
            }`}
          >
            <Image
              src={"/icons/Delete.svg"}
              alt="Delete Icon"
              width={12}
              height={13}
            />
            <p className="w-[110px] h-[22px] text-[14px] font-normal text-[#3D4366] leading-[22px]">
              Deleted files
            </p>
          </div>
        </div>
        <div className="flex items-center w-[127px] h-[21px] mx-3 gap-2 cursor-pointer">
          <p className="w-full h-[21px] text-[14px] font-medium text-[#3D4366] leading-[21px]">
            Quick access
          </p>
          <Image
            src={"/icons/Plus.svg"}
            alt="Plus Icon"
            width={12}
            height={13}
          />
        </div>
        <div className="w-[90%] h-[126px] gap-1">
          <div
            onClick={() => handleClick("Starred")}
            className={`w-full h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] flex items-center cursor-pointer ${
              isActive("Starred") ? "bg-[#DBEAFE]" : ""
            }`}
          >
            <Image
              src={"/icons/Starred.svg"}
              alt="Starred Icon"
              width={12}
              height={13}
            />
            <p className="w-[110px] h-[22px] text-[14px] font-normal text-[#3D4366] leading-[22px]">
              Starred
            </p>
          </div>
          <div
            // onClick={() => handleClick("Custom")}
            className={`w-full h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] flex items-center cursor-pointer`}
          >
            <Image
              src={"/icons/Custom.svg"}
              alt="Custom Icon"
              width={14}
              height={12}
            />
            <p className="w-[110px] h-[22px] text-[14px] font-normal text-[#3D4366] leading-[22px]">
              Custom
            </p>
          </div>
        </div>
        <div className="w-[90%] h-[61px] mx-3 flex flex-col gap-1">
          <p className="w-[132px] h-[21px] text-[14px] font-medium text-[#3D4366] leading-[21px]">
            Storage
          </p>
          <div className="w-[80%] h-[6px] rounded-[10px] bg-[#D3DBE0]">
            <div className="w-[62px] h-[6px] rounded-[20px] bg-gradient-to-r from-[#46BFFB] to-[#298DFF]"></div>
          </div>
          <p className="w-[132px] h-[22px] text-[14px] font-normal leading-[22px] text-[#44475B]">
            250 GB left
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
