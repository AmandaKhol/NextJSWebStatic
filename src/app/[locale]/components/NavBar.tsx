"use client";

import Image from "next/image";
import logo from "../../../../public/logo_small.jpg";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import LocalSwitcherSelect from "./LocalSwitcherSelect";
import { useTranslations } from "next-intl";

export enum PagesName {
  main = "/",
  about = "/about",
  vegan = "/vegan",
  vegetarian = "/vegetarian",
  details = "/details",
}

const NavBar = () => {
  const pathname = usePathname();
  const t = useTranslations("header");
  return (
    <div className="w-full min-h-[50px] sm:min-h-[100px] flex flex-col justify-center items-center">
      <LocalSwitcherSelect />
      <div className="max-w-[130px] sm:max-w-[150px] mt-5">
        <Link href={PagesName.main}>
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex justify-between space-x-4 my-5">
        <Link
          href={PagesName.vegan}
          className={`text-lg sm:text-xl ${
            pathname === PagesName.vegan ? "underline underline-offset-8" : ""
          } `}
        >
          {t("link2")}
        </Link>
        <Link
          href={PagesName.vegetarian}
          className={`text-lg sm:text-xl ${
            pathname === PagesName.vegetarian
              ? "underline underline-offset-8"
              : ""
          } `}
        >
          {t("link3")}
        </Link>
        <Link
          href={PagesName.about}
          className={`text-lg sm:text-xl ${
            pathname === PagesName.about ? "underline underline-offset-8" : ""
          } `}
        >
          {t("link1")}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
