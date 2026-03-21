import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"
import WhyChoose from "@/components/WhyChoose"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Services />
      <Properties />
      <Contact />
      <Footer />
    </main>
  );
}