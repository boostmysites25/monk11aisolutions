import React from "react";
import { services } from "../data/services";
import ContactForm from "../components/ContactForm";

const Services = () => {
  return (
    <div className="pt-[5rem]">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20 text-center">
        <h1 data-aos="fade-up" className="heading mb-4">
          Our <span className="text-primary">Expertise</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600 max-w-2xl mx-auto px-4">
          Comprehensive digital solutions powered by refined strategy and cutting-edge technology.
        </p>
      </div>

      <section className="wrapper flex flex-col gap-[5rem] py-[4rem]">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.title}
              className="flex flex-col gap-16 md:gap-24"
              id={service.title.replace(/\s+/g, '-').toLowerCase()} // Add ID for anchor linking
            >
              {/* Service Header Section */}
              <div
                data-aos="fade-up"
                className={`flex flex-col md:flex-row items-center gap-10 ${isEven ? "" : "md:flex-row-reverse"
                  }`}
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    {service.technologies[0]} & More
                  </div>
                  <h2 className="heading-2">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-700 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${isEven ? 'from-primary/20 to-blue-200' : 'from-secondary/20 to-purple-200'} rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6`}></div>
                  <img
                    src={service.detailsPageImages.first}
                    alt={service.title}
                    className="relative z-10 w-full h-[300px] md:h-[400px] object-cover rounded-3xl shadow-lg"
                  />
                </div>
              </div>

              {/* Service Details HTML Content */}
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div
                  data-aos="fade-up"
                  className="md:col-span-2 space-y-8 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: service.html.firstSection }}
                ></div>
                <div className="md:col-span-1 space-y-6">
                  <img
                    src={service.detailsPageImages.second}
                    alt="Detail 1"
                    className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                  />
                  <img
                    src={service.detailsPageImages.third}
                    alt="Detail 2"
                    className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{ __html: service.html.secondSection }}
                ></div>
                <div
                  className="space-y-4"
                  dangerouslySetInnerHTML={{ __html: service.html.thirdSection }}
                ></div>
              </div>
            </div>
          );
        })}
      </section>
      <ContactForm />
    </div>
  );
};

export default Services;
