import Image from "next/image";
import React from "react";
import { GoHome } from "react-icons/go";
import { LuFiles } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { PiFolder } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="w-[188px] h-[720px] border bg-[#F7F9FC]">
      <div className="w-[164px] h-[360px] mt-3 ml-2 flex flex-col gap-3 ">
        <Image
          src={"assets/Logo.png"}
          alt="Logo"
          width={26}
          height={26}
          className="ml-3 "
        />
        <div className="w-[164px] h-[126px] gap-1">
          <div className="w-[164px] h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] bg-[#DBEAFE] flex items-center">
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
          <div className="w-[164px] h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] flex items-center">
            <Image
              src={"/icons/Files.svg"}
              alt="Files Icon"
              width={12}
              height={13}
            />{" "}
            <p className="w-[110px] h-[22px] text-[14px] font-normal text-[#3D4366] leading-[22px]">
              My files
            </p>
          </div>
          <div className="w-[164px] h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] flex items-center">
            <Image
              src={"/icons/Shared.svg"}
              alt="Shared Icon"
              width={15}
              height={12}
            />{" "}
            <p className="w-[110px] h-[22px] text-[14px] font-normal text-[#3D4366] leading-[22px]">
              Shared with me
            </p>
          </div>
          <div className="w-[164px] h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] flex items-center">
            <Image
              src={"/icons/Delete.svg"}
              alt="Delete Icon"
              width={12}
              height={13}
            />{" "}
            <p className="w-[110px] h-[22px] text-[14px] font-normal text-[#3D4366] leading-[22px]">
              Deleted files
            </p>
          </div>
        </div>
        <div className="flex items-center w-[127px] h-[21px] mx-3 gap-2">
          <p className="w-[94px] h-[21px] text-[14px] font-medium text-[#3D4366] leading-[21px]">
            Quick access
          </p>
          <Image
            src={"/icons/Plus.svg"}
            alt="Plus Icon"
            width={12}
            height={13}
          />{" "}
        </div>
        <div className="w-[164px] h-[126px] gap-1">
          <div className="w-[164px] h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] flex items-center">
            <Image
              src={"/icons/Starred.svg"}
              alt="Starred Icon"
              width={12}
              height={13}
            />{" "}
            <p className="w-[110px] h-[22px] text-[14px] font-normal text-[#3D4366] leading-[22px]">
              Starred
            </p>
          </div>
          <div className="w-[164px] h-[30px] p-[4px_16px] gap-[8px] rounded-[8px] flex items-center">
            <Image
              src={"/icons/Custom.svg"}
              alt="Custom Icon"
              width={14}
              height={12}
            />{" "}
            <p className="w-[110px] h-[22px] text-[14px] font-normal text-[#3D4366] leading-[22px]">
              Custom
            </p>
          </div>
        </div>
        <div className="w-[164px] h-[61px] mx-3 flex flex-col gap-1">
          <p className="w-[132px] h-[21px] text-[14px] font-medium text-[#3D4366] leading-[21px]">
            Storage
          </p>
          <div className="w-[132px] h-[6px] rounded-[10px] bg-[#D3DBE0]">
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
