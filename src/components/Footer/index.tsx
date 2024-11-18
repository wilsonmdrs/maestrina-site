import { Typography, Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [
  { title: "Home", href: "#home" },
  { title: "Services", href: "#services" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-background-primary">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Image
            width={100}
            height={100}
            src={`/logos/footer-logo.png`}
            alt={"logo"}
            className="w-40"
          />
          <div className="flex w-fit gap-4 pt-2 pb-4">
            <IconButton
              size="sm"
              className="text-background-secondary bg-secondary"
            >
              <i className="fas fa-brands fa-linkedin fa-lg" />
            </IconButton>
            <IconButton
              size="sm"
              className="text-background-secondary bg-secondary"
            >
              <i className="fa-brands fa-x fa-lg" />
            </IconButton>
            <IconButton
              size="sm"
              className="text-background-secondary bg-secondary"
            >
              <i className="fa-brands fa-instagram fa-lg" />
            </IconButton>
            <IconButton
              size="sm"
              className="text-background-secondary bg-secondary"
            >
              <i className="fa-brands fa-whatsapp fa-lg" />
            </IconButton>
          </div>
        </div>
        <ul className="flex justify-center  w-max mx-auto items-center gap-10">
          {LINKS.map((link, index, href) => (
            <li key={index}>
              <Typography
                as="a"
                href={link.href || "#"}
                variant="small"
                color="white"
                className="font-normal text-text-enabled hover:text-primary hover:underline transition-colors"
              >
                {link.title}
              </Typography>
            </li>
          ))}
        </ul>

        <Typography
          color="blue-gray"
          className="text-center mt-6 font-normal !text-text-enabled"
        >
          Maestrina - {CURRENT_YEAR} - &copy; All rights reserved - Developed by
          Innovatia OÜ.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
