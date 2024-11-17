"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Service } from "@/components/Service";

export function ServicesSection() {
  return (
    <section className="py-4 h-fit flex">
      <div
        id="services"
        className="lg:translate-y-[-350px] translate-y-[-100px]"
      />
      <div className="container lg:translate-y-[-250px] sm:translate-y-0 bg-white w-fit mx-auto text-center rounded-sm flex flex-row flex-wrap justify-center">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </section>
  );
}

export default ServicesSection;
