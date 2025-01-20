"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoSearch, IoLinkOutline, IoMoveSharp } from "react-icons/io5";
import { RxUpload } from "react-icons/rx";
import { VscNewFolder } from "react-icons/vsc";
import { HiOutlineDownload, HiOutlineDotsVertical } from "react-icons/hi";
import { BsGrid3X3 } from "react-icons/bs";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import ListView from "./ListView";
import { dataset } from "../data/dataset";
import GridView from "./GridView";

const MainContent = () => {
  const [selectedCount, setSelectedCount] = useState(0); // Track the number of selected checkboxes
  const [isListView, setIsListView] = useState(true); // Track whether the ListView or GridView is active

  // Update the selected count when a checkbox is toggled
  const handleSelect = (selected: boolean) => {
    setSelectedCount((prev) => (selected ? prev + 1 : prev - 1));
  };

  return (
    <div className="h-full flex flex-col">
      {/* Search and Logo Section */}
      <div className="w-full max-w-[1038px] h-[40px] mt-3 flex justify-between items-center ml-10">
        <div className="w-[510px] h-[40px] px-4 rounded-[10px] border border-[#BCC0E0] flex items-center gap-2">
          <IoSearch className="text-[#44475B] text-[18px]" />
          <input
            type="text"
            placeholder="AirVault"
            className="w-full h-full outline-none bg-transparent placeholder-[#44475B]"
          />
        </div>
        <div className="ml-auto">
          <Image src="/assets/Logo2.png" alt="Logo2" width={26} height={26} />
        </div>
      </div>

      {/* Title and Buttons */}
      <div className="w-full max-w-[1038px] h-[38px] flex justify-between items-center mt-4 ml-10">
        <p className="w-[77px] h-[33px] font-medium text-[22px] leading-[33px] text-[#3D4366]">
          All files
        </p>
        <div className="flex w-[348px] h-[38px] gap-[20px]">
          <button className="w-[164px] h-[38px] p-[8px_16px] flex items-center justify-start gap-2 rounded-[8px] bg-[#298DFF] text-white">
            <RxUpload className="text-[16px]" />
            <span className="w-[51px] h-[22px] font-medium text-[14px] leading-[22px] text-[#FFFFFF]">
              Upload
            </span>
          </button>
          <button className="w-[164px] h-[38px] p-[8px_16px] flex items-center justify-start gap-2 rounded-[8px] border border-[#BCC0E0]">
            <VscNewFolder className="text-[16px] text-[#44475B]" />
            <span className="w-[75px] h-[22px] font-medium text-[14px] leading-[22px] text-[#44475B]">
              New folder
            </span>
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="w-[1038px] h-[30px] mt-2 flex justify-between ml-10 relative">
        {selectedCount > 0 && (
          <div className="w-[532px] h-[30px] flex gap-2">
            <button className="w-[74px] h-[30px] rounded-[8px] bg-[#298DFF] text-white">
              <p className="w-[43px] h-[22px] font-medium text-[14px] leading-[22px] text-[#FFFFFF] mx-auto">
                Share
              </p>
            </button>
            <button className="w-[110px] h-[30px] flex items-center justify-start gap-1 py-2 px-3 rounded-[8px] bg-[#EDF3FA]">
              <IoLinkOutline className="text-[16px] text-[#44475B]" />
              <span className="w-[64px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B]">
                Copy link
              </span>
            </button>
            <button className="w-[117px] h-[30px] flex items-center justify-start gap-1 py-2 px-3 rounded-[8px] bg-[#EDF3FA]">
              <HiOutlineDownload className="text-[16px] text-[#44475B]" />
              <span className="w-[64px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B]">
                Download
              </span>
            </button>
            <button className="w-[84px] h-[30px] flex items-center justify-start gap-1 py-2 px-3 rounded-[8px] bg-[#EDF3FA]">
              <IoMoveSharp className="text-[16px] text-[#44475B]" />
              <span className="w-[64px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B]">
                Move
              </span>
            </button>
            <button className="w-[91px] h-[30px] flex items-center justify-start gap-1 py-2 px-3 rounded-[8px] bg-[#EDF3FA]">
              <RiDeleteBin6Line className="text-[16px] text-[#44475B]" />
              <span className="w-[64px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B]">
                Delete
              </span>
            </button>
            <HiOutlineDotsVertical className="text-[16px] text-[#44475B] mt-2" />
          </div>
        )}

        {/* View Toggle */}
        <div className="absolute right-0 top-0 w-[176px] h-[24px] flex gap-[16px] items-center">
          <p className="w-[100px] h-[22px] text-[14px] leading-[22px] font-medium text-[#44475B] ">
            {selectedCount} selected
          </p>
          <MdOutlineFormatListBulleted
            className={`text-[22px] cursor-pointer ${
              isListView ? "text-blue-500" : "text-[#44475B]"
            }`}
            onClick={() => {
              setIsListView(true);
              setSelectedCount(0); // Reset selectedCount to 0
            }}
          />
          <BsGrid3X3
            className={`text-[16px] cursor-pointer ${
              !isListView ? "text-blue-500" : "text-[#44475B]"
            }`}
            onClick={() => {
              setIsListView(false);
              setSelectedCount(0); // Reset selectedCount to 0
            }}
          />
        </div>
      </div>

      {/* Conditional Rendering */}
      {dataset.length === 0 ? (
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center items-center w-full my-auto h-[200px] mt-36">
            <p className="w-[227px] h-[33px] text-[22px] font-medium leading-[33px] text-[#3D4366] text-center">
              Welcome to AirVault
            </p>
            <p className="w-[408px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B] text-center mt-2">
              Drag your files and folders here or use the{" "}
              <span className="font-semibold text-[14px] leading-[22px]">
                “Upload”
              </span>{" "}
              button
            </p>
          </div>
        </div>
      ) : isListView ? (
        <ListView onSelect={handleSelect} />
      ) : (
        <GridView onSelect={handleSelect} />
      )}
    </div>
  );
};

export default MainContent;
