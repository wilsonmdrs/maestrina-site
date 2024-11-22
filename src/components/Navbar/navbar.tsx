import React, { useEffect } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  selected: boolean;
  onClick(): void;
}

function NavItem({ children, href, selected, onClick }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={"_self"}
        variant="paragraph"
        className={`flex items-center gap-2 font-medium ${
          selected ? "text-primary underline" : ""
        }`}
        onClick={onClick}
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [selected, setSelected] = React.useState("#home");

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0 bg-background-primary"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Image
          width={100}
          height={100}
          src={`/logos/logo.svg`}
          alt={"logo"}
          className="w-40"
        />
        {/* <ul
          className={`ml-10 hidden items-center gap-[100px] lg:flex text-secondary`}
        >
          {NAV_MENU.map(({ name, href }) => (
            <NavItem
              key={name}
              href={href}
              onClick={() => setSelected(href)}
              selected={href === selected}
            >
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <IconButton
          variant="text"
          color={isScrolling ? "white" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton> */}
      </div>
      {/* <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem
                key={name}
                href={href}
                onClick={() => setSelected(href)}
                selected={href === selected}
              >
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse> */}
    </MTNavbar>
  );
}

export default Navbar;
