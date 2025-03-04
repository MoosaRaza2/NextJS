import React from "react";
import { SectionWrapper } from "../hoc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next and Previous buttons
const SampleNextArrow = ({ onClick }) => (
  <button
    className="absolute top-[-60px] right-0 z-10 p-2  rounded-[10px] border border-white hover:bg-black transition-all"
    onClick={onClick}
  >
    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-if5g1u" focusable="false" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"><path d="M9.4 19.1L8 17.7L13.7 12L8.1 6.4L9.5 5L16.5 12L9.4 19.1Z"></path></svg>
  </button>
);

const SamplePrevArrow = ({ onClick }) => (
  <button
    className="absolute top-[-60px] right-12 z-10 p-2 rounded-[10px] border border-white hover:bg-black transition-all"
    onClick={onClick}
  >
   <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-if5g1u" focusable="false" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"><path d="M14.1 19.1L7 12L14 5L15.4 6.4L9.8 12L15.5 17.7L14.1 19.1Z"></path></svg>
  </button>
);

const Highlight = ({ highlightsData = [] }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative p-4">
      <Slider {...settings}>
        {highlightsData.map((highlight, index) => (
          <div key={index} className="px-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-white text-lg font-semibold">
                  {highlight.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SectionWrapper(Highlight, '');