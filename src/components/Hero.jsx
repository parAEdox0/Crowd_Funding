import React from "react";

const Hero = () => {
  return (
    <section id="Hero" className="h-[83vh] bg-cover bg-center relative flex">
      <div id="hero-right" className="min-w-[50%] pl-[100px]">
        <img src="background1.png" className="h-[83vh]" alt="" />
      </div>
      <div
        id="hero-left"
        className="w=[50%] flex justify-center flex-col pl-10 pb-20"
      >
        <h1 className="text-[50px] font-bold text-[#8A6B7D] uppercase w-[45vw] leading-normal mb-5">
          The Best Ideas Start with You Make Them Happen!
        </h1>
        <p className="w-[30vw] text-[#8A6B7D] text-md text">
          From passion projects to life-changing ventures, fund what matters
          most—whether it’s personal causes, creative ideas, or equity-based
          growth. Support, invest, and get rewarded while making an impact!
        </p>
        <button className="bg-[#FFD37A] w-[15vw] h-10 rounded-3xl mt-8 text-[#8A6B7D] font-semibold">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
