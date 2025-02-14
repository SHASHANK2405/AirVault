import React from "react";
import Image from "next/image";
import { BsGrid3X3 } from "react-icons/bs";

type SidebarMenuHeaderProps = {
  isListView: boolean;
  setSelectedCount: React.Dispatch<React.SetStateAction<number>>;
  setIsListView: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCount: number;
  activeComponent: string;
};

const SidebarMenuHeader: React.FC<SidebarMenuHeaderProps> = ({
  isListView,
  setSelectedCount,
  setIsListView,
  selectedCount,
  activeComponent,
}) => {
  return (
    <div className="w-full flex flex-col p-3">
      <div className="w-full h-[40px] mt-3 flex justify-between items-center ml-10">
        <div className="w-[510px] h-[40px] px-4 rounded-[10px] border border-[#BCC0E0] flex items-center gap-2">
          <Image
            src={"/icons/Vector.svg"}
            alt="Search Icon"
            width={18}
            height={18}
          />
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
      <div className="w-full h-[38px] flex justify-between items-center mt-4 ml-10">
        <p className="w-[160px] h-[33px] font-medium text-[22px] leading-[33px] text-[#3D4366]">
          {activeComponent}
        </p>
        <div className="flex w-[348px] h-[38px] gap-[20px]">
          <button className="w-[164px] h-[38px] p-[8px_16px] flex items-center justify-start gap-2 rounded-[8px] bg-[#298DFF] text-white">
            <Image
              src={"/icons/Upload.svg"}
              alt="Upload Icon"
              width={16}
              height={16}
            />
            <span className="w-[51px] h-[22px] font-medium text-[14px] leading-[22px] text-[#FFFFFF]">
              Upload
            </span>
          </button>
          <button className="w-[164px] h-[38px] p-[8px_16px] flex items-center justify-start gap-2 rounded-[8px] border border-[#BCC0E0]">
            <Image
              src={"/icons/NewFolder.svg"}
              alt="NewFolder Icon"
              width={16}
              height={16}
            />{" "}
            <span className="w-[75px] h-[22px] font-medium text-[14px] leading-[22px] text-[#44475B]">
              New folder
            </span>
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="w-full h-[30px] mt-2 flex justify-between ml-10 relative">
        {selectedCount > 0 && (
          <div className="w-[532px] h-[30px] flex gap-2">
            {activeComponent === "Deleted files" ? (
              <>
                <button className="w-[99px] h-[30px] flex items-center justify-start gap-1 py-2 px-3 rounded-[8px] bg-[#EDF3FA]">
                  <Image
                    src={"/icons/Restore.svg"}
                    alt="Restore Icon"
                    width={16}
                    height={16}
                  />{" "}
                  <span className="w-[64px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B]">
                    Restore
                  </span>
                </button>
                <button className="w-[144px] h-[30px] flex items-center justify-start gap-1 py-2 px-3 rounded-[8px] bg-[#EDF3FA]">
                  <Image
                    src={"/icons/Delete.svg"}
                    alt="Delete Icon"
                    width={16}
                    height={16}
                  />{" "}
                  <span className="w-[98px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B]">
                    Delete forever
                  </span>
                </button>
              </>
            ) : (
              <>
                <button className="w-[74px] h-[30px] rounded-[8px] bg-[#298DFF] text-white">
                  <p className="w-[43px] h-[22px] font-medium text-[14px] leading-[22px] text-[#FFFFFF] mx-auto">
                    Share
                  </p>
                </button>
                <button className="w-[110px] h-[30px] flex items-center justify-start gap-1 py-2 px-3 rounded-[8px] bg-[#EDF3FA]">
                  <Image
                    src={"/icons/Link.svg"}
                    alt="Link Icon"
                    width={16}
                    height={16}
                  />{" "}
                  <span className="w-[64px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B]">
                    Copy link
                  </span>
                </button>
                <button className="w-[117px] h-[30px] flex items-center justify-start gap-1 py-2 px-3 rounded-[8px] bg-[#EDF3FA]">
                  <Image
                    src={"/icons/Download.svg"}
                    alt="Download Icon"
                    width={16}
                    height={16}
                  />{" "}
                  <span className="w-[64px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B]">
                    Download
                  </span>
                </button>
                <button className="w-[84px] h-[30px] flex items-center justify-start gap-1 py-2 px-3 rounded-[8px] bg-[#EDF3FA]">
                  <Image
                    src={"/icons/Move.svg"}
                    alt="Move Icon"
                    width={16}
                    height={16}
                  />{" "}
                  <span className="w-[64px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B]">
                    Move
                  </span>
                </button>
                <button className="w-[91px] h-[30px] flex items-center justify-start gap-1 py-2 px-3 rounded-[8px] bg-[#EDF3FA]">
                  <Image
                    src={"/icons/Delete.svg"}
                    alt="Delete Icon"
                    width={16}
                    height={16}
                  />{" "}
                  <span className="w-[64px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B]">
                    Delete
                  </span>
                </button>
                <Image
                  src="/icons/Dots.svg"
                  alt="Dots Icon"
                  width={1.42}
                  height={11.72}
                  className="mt-2"
                  style={{ width: "10.42px", height: "11.72px" }}
                />
              </>
            )}
          </div>
        )}

        {/* View Toggle */}
        <div className="absolute right-0 top-0 w-[176px] h-[24px] flex gap-[16px] items-center">
          <p className="w-[100px] h-[22px] text-[14px] leading-[22px] font-medium text-[#44475B] ">
            {selectedCount} selected
          </p>
          <div className="flex items-center gap-[16px] relative">
            {/* List Icon */}
            <div className="relative">
              <Image
                src={"/icons/List.svg"}
                alt="List Icon"
                width={16}
                height={16}
                className={`cursor-pointer ${
                  isListView ? "text-blue-500" : "text-[#44475B]"
                }`}
                onClick={() => {
                  setIsListView(true);
                  setSelectedCount(0); // Reset selectedCount to 0
                }}
              />
              {isListView && (
                <div className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#298DFF]" />
              )}
            </div>

            {/* Grid Icon */}
            <div className="relative">
              <BsGrid3X3
                className={`text-[16px] cursor-pointer text-[#44475B]`}
                onClick={() => {
                  setIsListView(false);
                  setSelectedCount(0); // Reset selectedCount to 0
                }}
              />
              {!isListView && (
                <div className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#298DFF]" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenuHeader;
