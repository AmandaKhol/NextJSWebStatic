"use client";

import Image from "next/image";
import logo from "../../../public/logo_small.jpg";

const NavBar = () => {
  return (
    <div className="w-full min-h-[50px] sm:min-h-[100px] flex flex-col justify-center items-center">
      <div className="max-w-[130px] sm:max-w-[150px] mt-5">
        <Image src={logo} alt="logo" />
      </div>

      <div className="flex justify-between space-x-4 my-5">
        <p>Vegan</p>
        <p>Vegetarian</p>
      </div>
    </div>
  );
};

export default NavBar;
