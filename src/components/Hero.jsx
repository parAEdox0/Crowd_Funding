import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRightRef = useRef(null);
  const heroImageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      heroImageRef.current,
      { x: 150, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    )
      .fromTo(
        heroRightRef.current,
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        headingRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power3.out" },
        "+=0.1"
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.3, ease: "power3.out" },
        "+=0.1"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8, x: 30 },
        { opacity: 1, scale: 1, x: 0, duration: 0.2, ease: "back.out(1.7)" },
        "+=0.1"
      );
  }, []);

  return (
    <section id="Hero" className="h-[83vh] bg-cover bg-center relative flex">
      <div id="hero-left" className="min-w-[50%] pl-[100px]">
        <img
          ref={heroImageRef}
          src="background1.png"
          className="h-[83vh]"
          alt=""
        />
      </div>
      <div
        ref={heroRightRef}
        className="w-[50%] flex justify-center flex-col pl-10 pb-20 opacity-100"
      >
        <h1
          ref={headingRef}
          className="text-[50px] font-bold text-[#8A6B7D] uppercase w-[45vw] leading-normal mb-5"
        >
          The Best Ideas Start with You Make Them Happen!
        </h1>
        <p ref={paragraphRef} className="w-[30vw] text-[#8A6B7D] text-md">
          From passion projects to life-changing ventures, fund what matters
          most—whether it’s personal causes, creative ideas, or equity-based
          growth. Support, invest, and get rewarded while making an impact!
        </p>
        <button
          ref={buttonRef}
          className="bg-[#FFD37A] w-[15vw] h-10 rounded-3xl mt-8 text-[#8A6B7D] font-semibold"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
