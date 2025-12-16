import React from "react";
import blog1 from "../assets/images/blogs/1.png";
import blog2 from "../assets/images/blogs/2.png";
import blog3 from "../assets/images/blogs/3.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="pt-[10rem] pb-[4rem] bg-gradient-to-b from-[#f8e4de] to-[#f5f5f5]">
      <div className="wrapper">
        <h1 data-aos="fade-up" className="section-heading text-center">
          Blogs
        </h1>
        <div className="max-w-5xl mx-auto mt-7 grid sm:grid-cols-2 gap-5">
          {[blog1, blog2, blog3, blog1, blog2, blog3].map((item, i) => (
            <div
              key={item}
              data-aos="fade-up"
              className="group space-y-2 p-5 rounded-xl border border-black/20"
            >
              <Link to={`/blogs/${i + 1}`}>
                <img
                  src={item}
                  alt=""
                  className="group-hover:brightness-90 w-full rounded-xl transition-all duration-300"
                />
              </Link>
              <Link
                to={`/blogs/${i + 1}`}
                className="text-lg font-semibold line-clamp-2 group-hover:text-purpleColor transition-all duration-300"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Link>
              <p className="line-clamp-3">
                Boluptatum dolores porro ex laborum officiis magnam deleniti ea
                velit dolore inventore consequuntur voluptas sit doloribus vero?
                Eos dolorum deleniti provident!
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
