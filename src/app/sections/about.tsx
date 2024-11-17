"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function AboutSection() {
  return (
    <section className="flex p-6 bg-background-primary h-fit pb-12 min-h-screen justify-center relative">
      <Image
        src="/logos/about-logo.png"
        alt="logo"
        width={300}
        height={600}
        className="absolute xl:left-[250px] lg:left-[150px] top-0 justify-center"
      />
      <div id="about" className="translate-y-[-90px]  " />
      <div className="container flex items-end flex-col gap-6 ">
        <div className="lg:w-1/2 sm:w-auto ">
          <Typography variant="h2" className="text-primary font-Fahkwang">
            About us
          </Typography>
          <Typography
            variant="paragraph"
            className="text-text-enabled font-Fahkwang text-justify text-sm pt-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography
            variant="paragraph"
            className="text-text-enabled font-Fahkwang text-justify text-sm pt-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </div>
        <div className="flex w-[100%]  flex-wrap  md:flex:wrap  justify-center xl:pt-[150px] pt-8 lg:pt-10 lg:flex-row lg:flex-nowrap sm:flex-col sm:gap-6 md:gap-0 gap-0 items-center pb-8">
          <Image
            src="/image/about-image-1.png"
            alt="image-about"
            width={400}
            height={150}
            className="lg:translate-x-[20px] lg:w-[300px] lg:h-auto sm:translate-x-0 sm:w-[100%] xl:w-[400px] pb-6 "
          />
          <Image
            src="/image/about-image-3.png"
            alt="image-about"
            width={400}
            height={150}
            className="z-[2] lg:translate-y-[20px] lg:w-[300px] lg:h-auto sm:translate-x-0 sm:w-[100%]  xl:w-[400px] pb-6  "
          />
          <Image
            src="/image/about-image-2.png"
            alt="image-about"
            width={400}
            height={150}
            className="z-[3] lg:translate-y-[40px] lg:translate-x-[-20px] lg:w-[300px]  xl:w-[400px] lg:h-auto sm:translate-x-0 sm:w-[100%] "
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
