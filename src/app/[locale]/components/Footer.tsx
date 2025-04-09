"use client";

import { useContext } from "react";
import { ModalContext } from "./modals/Provider";

const Footer = () => {
  const { setShowLegalModal } = useContext(ModalContext);

  return (
    <footer className="p-3 flex flex-col justify-center items-center bg-gray-100 mt-2">
      <div className="space-x-8">
        <button onClick={() => setShowLegalModal(true)}>Legal</button>
      </div>
      <hr className="my-2 w-[300px] border-t border-gray-400" />
    </footer>
  );
};

export default Footer;
