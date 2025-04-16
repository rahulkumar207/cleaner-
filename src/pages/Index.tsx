
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import ServicesCarousel from "@/components/home/ServicesCarousel";
import TrustBadges from "@/components/home/TrustBadges";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <IntroSection />
        <ServicesPreview />
        <ServicesCarousel />
        <TrustBadges />
        <Testimonials />
        <WhyChooseUs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
