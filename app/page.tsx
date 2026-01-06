import CourseTabSection from "./components/home/CourseTabSection";

import Footer from "./components/home/Footer";
import HeroSection from "./components/home/HeroSection";
import IntroSection from "./components/home/IntroSection";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="main-wrapper bg-pattern">
        <HeroSection />
        <IntroSection />
        <CourseTabSection />
        <Footer />
      </div>
    </div>
  );
}
