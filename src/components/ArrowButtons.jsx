import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

export const ArrowLinkButton = ({ children, to }) => {
  return (
    <div data-aos="fade-up">
      <Link to={to} className="primary-btn text-black mt-5 w-fit mx-auto">
        {children} <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

export const ArrowScrollButton = ({ children, to }) => {
  return (
    <div data-aos="fade-up">
      <Scroll
        to={to}
        spy={true}
        smooth={true}
        offset={-80}
        duration={1000}
        className="primary-btn cursor-pointer text-black mt-5 w-fit mx-auto"
      >
        {children} <ArrowRight className="w-5 h-5" />
      </Scroll>
    </div>
  );
};
