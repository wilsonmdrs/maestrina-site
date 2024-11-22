"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

function HomeSection() {
  const handleClick = () => {
    const phoneNumber = "+351 913 502 727";
    const encodedMessage = encodeURIComponent(
      "Hello, I'm interested in your service"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank"); // Opens WhatsApp in a new tab/window
  };
  return (
    <div
      id="home"
      className="relative min-h-screen w-full bg-[url('/image/home.jpg')] bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h2"
            className="lg:max-w-3xl text-primary font-Fahkwang  w-full"
          >
            Orchestrating Business Success
          </Typography>
          <Typography
            variant="lead"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl text-secondary"
          >
            Exclusive Solutions for Visionary Entrepreneurs
          </Typography>
          <div className="flex items-center gap-4">
            {/* <div className="flex w-fit gap-4 pt-4"> */}
            {/* <IconButton
                size="md"
                className="text-background-secondary bg-primary"
              >
                <i className="fas fa-brands fa-linkedin fa-lg" />
              </IconButton>
              <IconButton
                size="md"
                className="text-background-secondary bg-primary"
              >
                <i className="fa-brands fa-x fa-lg" />
              </IconButton>
              <IconButton
                size="md"
                className="text-background-secondary bg-primary"
              >
                <i className="fa-brands fa-instagram fa-lg" /> */}
            {/* </IconButton> */}
            <Button
              size="md"
              className="text-background-secondary bg-primary gap-4 text-[16px]"
              onClick={handleClick}
            >
              <i className="fa-brands fa-whatsapp fa-lg mr-2" />
              Contact
            </Button>
            {/* </div> */}
            {/* <IconButton className="rounded-full bg-transparent p-6 border-2 border-primary hover:bg-primary transition-all first:text-primary hover:first:text-white ">
              <ArrowDownIcon className="h-7 w-7" />
            </IconButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
