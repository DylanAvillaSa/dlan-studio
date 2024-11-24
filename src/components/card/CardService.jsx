import React from "react";
import Image from "next/image";

const CardService = ({ img, title }) => {
  return (
    <div className="text-sm text-slate-700  w-[250px] h-[250px] rounded-md gap-3 flex flex-col bg-white items-center shadow-md">
      <Image
        src={`/${img}.png`}
        width={300}
        height={250}
        className="object-cover w-full h-[200px] bg-white rounded-md hover:scale-110 duration-700 transition-all ease-in-out cursor-pointer"
        alt="img1"
      />
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default CardService;
