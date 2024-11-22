// components
import { Navbar, Footer } from "@/components";

// sections
import HomeSection from "./sections/home";
import ServicesSection from "./sections/services";
import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <HomeSection />
      {/* <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer /> */}
    </>
  );
}
