import Image from "next/image";

import avatar from "../../../public/avatar.jpg";

export default function About() {
  return (
    <div className="w-max-[1300px] mt-5 py-5 bg-yellow-50 ">
      <div className="px-[25px] flex flex-col items-center justify-center sm:flex-row-reverse ">
        <Image src={avatar} alt={"portrait"} width={300} height={200} />
        <div className=" mt-5 max-w-[300px] text-center sm:mr-10 sm:mt-0 sm:text-left">
          <p className="">Salutation</p>
          <p>Presentation</p>

          <p className="mt-5">Contact</p>
          <a
            href="https://www.linkedin.com/in/amanda-garcia-garcia-phd/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            LinkedIn Link
          </a>
          <p>email: amanda.gar.berlin@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
