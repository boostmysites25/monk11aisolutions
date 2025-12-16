import React from "react";
import { useKeenSlider } from "keen-slider/react";
import cornIcon from "../assets/images/Corn_Icon.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "../data/constant";

const Testimonials = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slides: {
        perView: 1,
        spacing: 25,
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="py-[4rem] wrapper grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
      <div data-aos="fade-up" className="grid grid-cols-2 gap-3 sm:gap-5">
        {[
          "Leading Staff Augmentation Providers",
          "Best Software Development Firms",
          "Premier AI Development Experts",
          "Top App Development Agencies",
        ].map((text, idx) => (
          <div
            key={idx}
            className="p-3 bg-white rounded-xl flex items-center gap-3"
          >
            <p className="font-semibold text-[.9rem] sm:text-base">{text}</p>
            <img src={cornIcon} alt="" className="h-10 object-contain" />
          </div>
        ))}
      </div>
      <div className="bg-white space-y-6 p-6 rounded-xl">
        <div data-aos="fade-up" ref={sliderRef} className="keen-slider">
          {testimonials.map((item) => (
            <div key={item.name} className="keen-slider__slide space-y-5">
              <p>"{item.desc}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt=""
                  className="h-14 aspect-square object-cover rounded-full"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div
            data-aos="fade-up"
            className="flex items-center justify-end gap-4"
          >
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-black/5 p-3 rounded-full hover:bg-black/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-black/5 p-3 rounded-full hover:bg-black/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
