import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Home", "Services", "About", "Contact"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-background-secondary">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h6"
            className="text-text-enabled"
          >
            Maestrina
          </Typography>
          <div className="flex w-fit justify-center gap-2">
            <IconButton
              size="sm"
              color="gray"
              variant="text"
              className="text-primary"
            >
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton
              size="sm"
              color="gray"
              variant="text"
              className="text-primary"
            >
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton
              size="sm"
              color="gray"
              variant="text"
              className="text-primary"
            >
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton
              size="sm"
              color="gray"
              variant="text"
              className="text-primary"
            >
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
          {LINKS.map((link, index) => (
            <li key={index}>
              <Typography
                as="a"
                href="#"
                variant="small"
                color="white"
                className="font-normal !text-text-enabled hover:!text-gray-900 transition-colors"
              >
                {link}
              </Typography>
            </li>
          ))}
        </ul>

        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-text-enabled"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            Material Tailwind
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Creative Tim
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
