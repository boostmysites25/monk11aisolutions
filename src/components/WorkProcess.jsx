import React, { useState } from "react";
import img from "../assets/images/work-process.png";
import { workingProcess } from "../data/constant";
import { ArrowDown } from "lucide-react";

const WorkProcess = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  return (
    <div className="relative flex justify-end">
      <img
        data-aos="fade-up"
        src={img}
        className="absolute inset-0 -z-10 object-cover h-full w-full"
        alt="Work Process"
      />
      <div
        data-aos="fade-up"
        className="bg-white/60 sm:w-3/5 md:w-5/12 h-full px-5 py-[4rem] space-y-5"
      >
        <h3 className="section-heading">How We Build</h3>
        <div className="">
          {workingProcess.map((item, i) => (
            <div
              key={item.title}
              className="py-5 transition-all duration-700 space-y-3 border-t border-white/30"
            >
              <button
                onClick={() => setCurrentIdx(i)}
                className="w-full flex gap-2 justify-between"
              >
                <div className="flex gap-3">
                  <item.icon size={30} strokeWidth={1.5} />
                  <p className="text-lg font-medium text-start">{item.title}</p>
                </div>
                <ArrowDown
                  className={`${
                    currentIdx === i && "rotate-180"
                  } text-white min-w-5 w-5 h-5`}
                />
              </button>
              {currentIdx === i && <p>{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
