import React from "react";

interface EmptyFilesProps {
  text1: string;
  text2: string;
  bold: string;
  afterBold: string;
}

const EmptyFiles: React.FC<EmptyFilesProps> = ({
  text1,
  text2,
  bold,
  afterBold,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col justify-center items-center w-full my-auto h-[200px] mt-48">
        <p className="w-[227px] h-[33px] text-[22px] font-medium leading-[33px] text-[#3D4366] text-center">
          {text1}
        </p>
        <p className="w-[408px] h-[22px] font-normal text-[14px] leading-[22px] text-[#44475B] text-center mt-2">
          {text2}
          <span className="font-semibold text-[14px] leading-[22px]">
            {bold}
          </span>{" "}
          {afterBold}
        </p>
      </div>
    </div>
  );
};

export default EmptyFiles;
