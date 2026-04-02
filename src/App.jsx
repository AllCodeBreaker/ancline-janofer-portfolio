import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}