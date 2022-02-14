import React from "react";
import {
  IoHome,
  IoSearch,
  IoPlayCircle,
  IoImage,
  IoSchool,
  IoBulb,
} from "react-icons/io5";
// import { icons } from "react-icons/lib";

const iconStyle = {
  fontSize: "25px",
};

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-20 h-screen px-4 bg-neutral-50 border-r-2 border-neutral-200">
      <ul className="w-full h-full my-4 flex flex-col justify-start items-center list-none ">
        <li className="cursor-pointer p-4 rounded-lg bg-black text-white transition-all duration-150 ease-in hover:rounded-3xl hover:text-green-500">
          <IoHome style={iconStyle} />
        </li>
        <li className="cursor-pointer p-4 mt-6 rounded-lg bg-black text-white transition-all duration-150 ease-in hover:rounded-3xl hover:text-green-500 ">
          <IoSearch style={iconStyle} />
        </li>
        <li className="cursor-pointer p-4 mt-6 rounded-lg bg-black text-white transition-all duration-150 ease-in hover:rounded-3xl hover:text-green-500 ">
          <IoPlayCircle style={iconStyle} />
        </li>
        <li className="cursor-pointer p-4 mt-6 rounded-lg bg-black text-white transition-all duration-150 ease-in hover:rounded-3xl hover:text-green-500 ">
          <IoImage style={iconStyle} />
        </li>
        <li className="cursor-pointer p-4 mt-6 rounded-lg bg-black text-white transition-all duration-150 ease-in hover:rounded-3xl hover:text-green-500 ">
          <IoSchool style={iconStyle} />
        </li>
        <li className="cursor-pointer p-4 mt-auto mb-7 rounded-lg bg-black text-white transition-all duration-150 ease-in hover:rounded-3xl hover:text-green-500 ">
          <IoBulb style={iconStyle} />
        </li>
      </ul>
    </div>
  );
};
