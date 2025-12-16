import React, { lazy } from "react";
import { Navigate, useParams } from "react-router-dom";
import { services } from "../data/services";

const BlogsSection = lazy(() => import("../components/website/BlogsSection"));

const ServiceDetails = () => {
  const { name } = useParams();
  const data = services.find((service) => service.title === name);
  if (!data) return <Navigate to="/" />;
  return (
    <div className="pt-[10rem] pb-[4rem] bg-gradient-to-b from-[#f8e4de] to-[#f5f5f5]">
      <div className="wrapper">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-heading">{data.title}</h1>
          <img
            src={data.detailsPageImages.first}
            className="w-full aspect-video object-cover rounded-xl my-5"
            alt={data.title}
          />
          <div
            dangerouslySetInnerHTML={{ __html: data.html.firstSection }}
          ></div>
          <div className="flex flex-col md:grid grid-cols-2 items-center mt-[3rem] gap-5">
            <div className="w-full sm:w-1/2 md:w-full">
              <img
                src={data.detailsPageImages.second}
                classNames="object-contain"
                alt={data.title}
              />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: data.html.secondSection }}
            ></div>
          </div>
          <div className="flex flex-col-reverse md:grid grid-cols-2 items-center gap-5 mt-[3rem]">
            <div
              dangerouslySetInnerHTML={{ __html: data.html.thirdSection }}
            ></div>
            <div className="w-full sm:w-1/2 md:w-full">
              <img
                src={data.detailsPageImages.third}
                classNames="object-contain"
                alt={data.title}
              />
            </div>
          </div>
        </div>
      </div>
      <BlogsSection />
    </div>
  );
};

export default ServiceDetails;
