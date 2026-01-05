import CTAButton from "./components/home/ChecklistSection";
import CourseTabSection from "./components/home/CourseTabSection";
import FAQSection from "./components/home/FAQSection";
import Footer from "./components/home/Footer";
import HeroSection from "./components/home/HeroSection";
import IntroSection from "./components/home/IntroSection";
import SellerFinancingSection from "./components/home/SellerFinancingSection";



export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="main-wrapper bg-pattern">
        <HeroSection />
        <IntroSection />
        <SellerFinancingSection />
        <CTAButton/>
        <CourseTabSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}