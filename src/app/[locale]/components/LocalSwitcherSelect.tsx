"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "next-intl";

const LocalSwitcherSelect = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (localSelected: string) => {
    router.replace({ pathname }, { locale: localSelected as Locale });
  };

  return (
    <div className=" w-full flex justify-end space-x-2 text-sm sm:text-lg text-gray-500 pr-10 pt-5">
      <button onClick={() => handleLocaleChange("es")}>ES</button>
      <span>/</span>
      <button onClick={() => handleLocaleChange("en")}>EN</button>
    </div>
  );
};

export default LocalSwitcherSelect;
