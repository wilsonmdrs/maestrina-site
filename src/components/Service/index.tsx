import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export const Service = () => {
  return (
    <div className="justify-center text-center lg:w-1/3 md:w-1/2 px-3 py-6 pb-10 flex flex-col items-center">
      <Image src="/icons/service-1.svg" alt="service" width={70} height={50} />
      <Typography
        variant="h3"
        className="text-center font-Fahkwang text-text-dark-800 text-lg pt-4"
      >
        Cidadania Portuguesa
      </Typography>
      <Typography variant="paragraph" className="text-text-dark text-sm">
        Welcome to the AI Conference 2023, where the future unfolds! Whether
        you&apos;re a seasoned AI professional, a curious newcomer, or a
        business leader looking to harness the power of AI, this conference is
        designed to inspire, educate, and connect.
      </Typography>
    </div>
  );
};
