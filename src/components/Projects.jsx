import React from "react";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Centers cards in all views
    centerPadding: "0px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      category: "DESIGN",
      title: "Sample Project 1",
      raised: "$2,097",
      percentage: "17.48%",
      goal: "$12,000",
      daysLeft: 307,
      image:
        "https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGRlc2lnbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      category: "DESIGN",
      title: "Sample Project 2",
      raised: "$1,500",
      percentage: "10.00%",
      goal: "$15,000",
      daysLeft: 200,
      image:
        "https://plus.unsplash.com/premium_photo-1681487895790-d3b93fb22766?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3Jvd2RmdW5kaW5nfGVufDB8fDB8fHww",
    },
    {
      category: "TECHNOLOGY",
      title: "Sample Project 3",
      raised: "$4,000",
      percentage: "13.33%",
      goal: "$30,000",
      daysLeft: 124,
      image:
        "https://plus.unsplash.com/premium_photo-1663091701962-2ae72a2ad2ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VlJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      category: "DESIGN",
      title: "Sample Project 4",
      raised: "$4,134",
      percentage: "20.67%",
      goal: "$20,000",
      daysLeft: 124,
      image:
        "https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMG5vdGVib29rfGVufDB8fDB8fHww",
    },
  ];

  // Ref to control the slider
  const sliderRef = React.useRef(null);

  const handlePrev = () => sliderRef.current.slickPrev();
  const handleNext = () => sliderRef.current.slickNext();

  return (
    <section className="min-h-[90vh] flex flex-col items-center pt-12 sm:pt-16 bg-[#8A6B7D]/10">
      <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-10">
        Explore Projects / Campaigns
      </h2>
      <div className="bg-gray-100 w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 gap-6">
        <Slider
          ref={sliderRef}
          {...settings}
          className="w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-6xl"
        >
          {projects.map((project, index) => (
            <div key={index} className="px-2">
              <Card {...project} />
            </div>
          ))}
        </Slider>

        {/* Custom Arrows Below Slider */}
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
