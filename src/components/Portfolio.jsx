import React from "react";
import { appPortfolio, webPortfolio } from "../data/constant";

const Portfolio = ({ page }) => {
  let portfolioList;

  if (page === "web") {
    portfolioList = webPortfolio;
  } else if (page === "app") {
    portfolioList = appPortfolio;
  } else {
    portfolioList = webPortfolio.slice(0, 3).concat(appPortfolio.slice(0, 3));
  }
  return (
    <div className="pb-[4rem]">
      <div className="wrapper flex flex-col items-start sm:items-center gap-5">
        <h2
          data-aos="fade-up"
          className="section-heading max-w-[60rem] mx-auto text-start sm:text-center"
        >
          Work Speaks Volumes: Discover Our Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto mt-5">
          {portfolioList.map(({ img, id, title }) => (
            <div
              data-aos="fade-up"
              key={id}
              className="p-3 border-2 border-secondary group rounded-xl aspect-square shadow-inner_shadow shadow-secondary/20"
            >
              <div className="overflow-hidden relative h-full rounded-xl">
                <div className="absolute z-[5] top-0 w-full h-full bg-gradient-to-b from-transparent to-secondary/5"></div>
                <img
                  loading="lazy"
                  src={img}
                  width="200"
                  height="200"
                  className={`-z-10 h-full w-full object-cover group-hover:scale-110 transition-all duration-200 rounded-xl`}
                  alt={title}
                />
                <h3 className="text-xl z-20 absolute p-3 bottom-0 left-0 w-full bg-secondary text-center text-white">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
