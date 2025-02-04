import WhyUs from "@/components/about/about";

import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";

export default function Home() {
  return (
    <main>
      <Hero />

      <WhyUs />
      <Services />
      <Footer />
    </main>
  );
}
