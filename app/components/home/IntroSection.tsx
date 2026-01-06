import Image from "next/image";
import AnimatedElement from "./AnimatedElement";
import CTAButton from "./CTAButton";

export default function IntroSection() {
  return (
    <div className="section-introduce">
      <div className="padding-global">
        <div className="container-content">
          <div className="center-headlines">
            <div className="margin-bottom-sm">
              <div className="margin-bottom-xs">
                <AnimatedElement className="content-box wide">
                  <div className="heading-lg line-1">
                    <span className="font-hand-of-sean">Introducing...</span>
                    <br />A Smarter Way to Learn
                  </div>
                </AnimatedElement>
              </div>
              <AnimatedElement as="h2" delay={0.1}>
                Your All-in-One Learning Management System
                <span className="text-style-underline">
                  {" "}
                  Learn,manage and track courses effortlessly with a powerful
                  platform built for students, professionals and growing teams.{" "}
                </span>
              </AnimatedElement>
            </div>
          </div>
        </div>
        <div className="container-large">
          <div>
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  );
}
