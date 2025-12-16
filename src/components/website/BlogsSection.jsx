import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import blog1 from "../../assets/images/blogs/1.png";
import blog2 from "../../assets/images/blogs/2.png";
import blog3 from "../../assets/images/blogs/3.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogsSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
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
    <section className="pt-[4rem] wrapper">
      <h2 data-aos="fade-up" className="section-heading text-center capitalize">
        Browse our latest blog articles
      </h2>
      <div data-aos="fade-up" ref={sliderRef} className="keen-slider mt-7">
        {[blog1, blog2, blog3].map((item, i) => (
          <Link
            to="/blogs/1"
            key={item}
            className="keen-slider__slide space-y-2 p-5 rounded-xl border border-black/20"
          >
            <img src={item} alt="" className="w-full rounded-xl" />
            <h6 className="text-lg font-semibold line-clamp-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h6>
            <p className="line-clamp-3">
              Boluptatum dolores porro ex laborum officiis magnam deleniti ea
              velit dolore inventore consequuntur voluptas sit doloribus vero?
              Eos dolorum deleniti provident!
            </p>
          </Link>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-4 mt-10"
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
    </section>
  );
};

export default BlogsSection;
