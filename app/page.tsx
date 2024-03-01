import About from "@/components/About";
import Hero from "../components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
    </main>
  );
}
