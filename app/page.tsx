import WhyUs from "@/components/about/about";
import FAQ from "@/components/faq/faq";

import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
