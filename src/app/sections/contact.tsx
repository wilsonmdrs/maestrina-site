"use client";

import Image from "next/image";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { Service } from "@/components/Service";
import { InputText } from "@/components/InputText";
import { useState } from "react";
import { TextArea } from "@/components/TextArea";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isValid =
    !!form.email && !!form.name && !!form.subject && !!form.message;
  return (
    <section className="py-4  flex bg-background-secondary items-center flex-col min-h-screen">
      <div id="contact" className="translate-y-[-90px]  " />
      <Typography
        variant="h2"
        className="text-primary font-Fahkwang text-[32px] pb-10"
      >
        Contact
      </Typography>
      <div className="container h-full flex gap-4 xl:flex-row lg:flex-row  flex-col">
        <div className="flex w-2/5 flex-col h-full p-10  ">
          <div className="flex pb-10 ">
            <Image
              width={100}
              height={100}
              src={`/logos/logo.svg`}
              alt={"logo"}
              className="w-40"
            />
          </div>
          <Typography
            variant="h4"
            className="text-white font-Fahkwang pt-10 text-base"
          >
            Contact
          </Typography>
          <Typography
            variant="paragraph"
            className="text-secondary font-Fahkwang text-base"
          >
            Tv. Barrosa 16, 4430-999
          </Typography>
          <Typography
            variant="paragraph"
            className="text-secondary font-Fahkwang text-base"
          >
            Vila Nova de Gaia
          </Typography>
          <Typography
            variant="paragraph"
            className="text-secondary font-Fahkwang text-base"
          >
            Portugal
          </Typography>
          <Typography
            variant="h4"
            className="text-white font-Fahkwang text-base pt-4"
          >
            Email us
          </Typography>
          <Typography
            variant="paragraph"
            className="text-secondary font-Fahkwang text-base"
          >
            maestrina.pt@gmail.com
          </Typography>
          <Typography
            variant="h4"
            className="text-white font-Fahkwang text-base pt-2"
          >
            Call us
          </Typography>
          <Typography
            variant="paragraph"
            className="text-secondary font-Fahkwang text-base"
          >
            Call: +351 913 502 727
          </Typography>
          <Typography
            variant="paragraph"
            className="text-secondary font-Fahkwang text-base"
          >
            Monday - Thursday: 09:00 am to 6:00 am
          </Typography>
          <div className="flex w-fit gap-4 pt-4">
            <IconButton
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
              <i className="fa-brands fa-instagram fa-lg" />
            </IconButton>
            <IconButton
              size="md"
              className="text-background-secondary bg-primary"
            >
              <i className="fa-brands fa-whatsapp fa-lg" />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-1 p-10  ">
          <div className="flex flex-col bg-white rounded-sm px-10 py-8 w-full h-fit items-center">
            <Typography
              variant="h2"
              className="text-primary font-Fahkwang text-[28px]"
            >
              Send us a message
            </Typography>
            <Typography
              variant="h2"
              className="text-text-dark-800 font-Fahkwang text-base font-medium"
            >
              Fill this out so we can learn more about you and your needs
            </Typography>
            <div className="flex flex-col pt-10 p-12 w-full gap-6">
              <InputText
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
              <InputText
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
              <InputText
                placeholder="Subject"
                value={form.subject}
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    subject: e.target.value,
                  }))
                }
              />
              <TextArea
                placeholder="Message"
                value={form.message}
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    message: e.target.value,
                  }))
                }
              />
            </div>
            <Button
              variant="filled"
              size="lg"
              disabled={!isValid}
              className="bg-primary  rounded-sm w-[70%]"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
