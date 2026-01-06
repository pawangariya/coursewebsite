import Image from "next/image";
import AnimatedElement from "./AnimatedElement";

export default function HeroSection() {
  return (
    <div className="section-hero-banner">
      <div className="padding-global">
        <div className="container-content">
          <div className="center-headlines">
            <div className="margin-bottom-xxs">
              <AnimatedElement as="h1" delay={0.1} threshold={0.1}>
                Smarter Learning for Modern Professionals
              </AnimatedElement>
            </div>
            <div className="margin-bottom-xxs">
              <AnimatedElement
                className="text-size-md"
                delay={0.2}
                threshold={0.1}
              >
                Upskill your team with industy-ready courses, real world
                projects, and expert-led training-anytime, anywhere
              </AnimatedElement>
            </div>
          </div>
          <AnimatedElement
            className="video-holder"
            animation="fadeInUpLarge"
            delay={0.3}
            threshold={0.1}
          >
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/jIAbJ2yb6Tk"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            />
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}
