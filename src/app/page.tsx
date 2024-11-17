// components
import { Navbar, Footer } from "@/components";

// sections
import HomeSection from "./sections/home";
import ServicesSection from "./sections/services";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import AboutSection from "./sections/about";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      {/* <AboutEvent />
      <OurStats />
      <EventContent /> */}
      {/* <Faq /> */}
      <Footer />
    </>
  );
}
