import About from "@/components/about/About";
import Consume from "@/components/consume/Consume";
import Faqs from "@/components/faqs/Faqs";
import Footer from "@/components/footer/Footer";
import GetInTouch from "@/components/get-in-touch/GetInTouch";
import Header from "@/components/header/Header";
import HeroBanner from "@/components/hero-banner/HeroBanner";
import Join from "@/components/join/Join";
import OurProducts from "@/components/our-products/OurProducts";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChoose from "@/components/why-choose/WhyChoose";

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <HeroBanner />
        <About />
        <WhyChoose />
        <Join />
        <OurProducts />
        <Consume />
        <Faqs />
        <Testimonials />
        <GetInTouch />
      </section>
      <Footer />
    </main>
  );
}
