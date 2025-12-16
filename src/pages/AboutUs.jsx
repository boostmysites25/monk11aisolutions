import React, { lazy } from "react";
import bannerImg from "../assets/images/aboutus-banner.webp";
import ourValuesBg from "../assets/images/our-values-bg.jpeg";
import { ArrowRight, Gem, MessagesSquare, PersonStanding } from "lucide-react";
import img1 from "../assets/images/aboutus-1.png";
import img2 from "../assets/images/aboutus-2.png";
import { Link } from "react-router-dom";
import { ArrowLinkButton } from "../components/ArrowButtons";

const ContactForm = lazy(() => import("../components/ContactForm"));
const WorkProcess = lazy(() => import("../components/WorkProcess"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const ServicesWeProvide = lazy(() =>
  import("../components/website/ServicesWeProvide")
);

const AboutUs = () => {
  return (
    <>
      <section
        className="min-h-screen relative flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 h-full w-full">
          <div
            data-aos="fade-up"
            className="pt-[10rem] pb-[3rem] h-full wrapper text-white z-10 flex flex-col gap-3 justify-center items-center"
          >
            <h1 className="heading-2 max-w-5xl text-center">
              We are expert professionals. We can turn your business idea into a
              real software solution.
            </h1>
            <p className="max-w-5xl text-center text-[1.1rem]">
              We are a team of dedicated professionals passionate about
              transforming business ideas into cutting-edge software solutions.
              With decades of combined experience, we specialize in custom web
              and app development, UI/UX design, blockchain technology, and game
              development. Our approach is rooted in understanding the unique
              needs of our clients, offering tailored solutions that drive
              growth and innovation.
            </p>
            <ArrowLinkButton to="/contact">Contact Us</ArrowLinkButton>
          </div>
        </div>
      </section>
      <ServicesWeProvide />
      <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section>
      <section
        className="py-[7rem]"
        style={{ backgroundImage: `url(${ourValuesBg})` }}
      >
        <div className="wrapper">
          <h2
            data-aos="fade-up"
            className="section-heading text-center text-white"
          >
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-7 mt-7">
            {[
              {
                title: "Integrity and Transparency",
                desc: "We prioritize honesty and accountability in everything we do, ensuring open communication and trust with our clients and partners.",
                Icon: MessagesSquare,
              },
              {
                title: "Innovation and Excellence",
                desc: "By embracing creativity and staying ahead of technology trends, we deliver cutting-edge solutions that consistently exceed expectations.",
                Icon: PersonStanding,
              },
              {
                title: "Customer-Centric Focus",
                desc: "Your success is our mission. We understand your unique needs and provide tailored solutions that drive meaningful business growth.",
                Icon: Gem,
              },
            ].map(({ title, desc, Icon }) => {
              return (
                <div
                  data-aos="fade-up"
                  key={title}
                  className="p-5 bg-white/5 backdrop-blur-sm text-white space-y-3 rounded-xl"
                >
                  <GradientIcon>
                    <Icon stroke="url(#myGradient)" strokeWidth={1} size={45} />
                  </GradientIcon>
                  <h6 className="text-xl font-semibold">{title}</h6>
                  <p>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-[4rem] wrapper">
        <div
          data-aos="fade-up"
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden grid md:grid-cols-2"
        >
          <div className="overflow-hidden relative">
            <img
              src={img1}
              className="h-full w-full object-cover"
              alt="About Us"
            />
            <div className="aspect-square w-[14rem] sm:w-[16rem] flex flex-col justify-between bg-gradient-to-tr p-7 from-[#CD21E9] via-[#E03D3D] to-[#FFBD12] absolute right-0 bottom-0">
              <h4 className="text-xl font-semibold text-white">
                Hire Developers for Your Next Project
              </h4>
              <Link
                to="/contact"
                className="font-medium text-[.9rem] flex items-center gap-2 mt-5 w-fit text-white hover:text-primary transition-colors duration-200"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="">
            <div className="grid sm:grid-cols-2 h-fit relative">
              <img
                src={img2}
                className="hidden sm:block h-full w-full object-cover"
                alt="About Us"
              />
              <div className="py-[3rem] px-7 sm:aspect-square flex flex-col justify-between bg-gradient-to-tr sm:p-7 from-[#992FED] to-[#2F80ED]">
                <h4 className="text-xl font-semibold text-white">
                  Monk 11 AI Solutions Partners with Optimizely for Enhanced Digital
                  Experiences
                </h4>
                <Link
                  to="/contact"
                  className="font-medium text-[.9rem] flex items-center gap-2 mt-5 w-fit text-white hover:text-primary transition-colors duration-200"
                >
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="p-7 h-full text-white bg-[#131426] flex flex-col gap-3">
              <p className="border-b border-dotted border-white/20 pb-3">
                The Importance of a Strong Digital Presence in 2024
              </p>
              <p className="border-b border-dotted border-white/20 pb-3">
                Web Development Trends to Watch This Year
              </p>
              <p className="border-b border-dotted border-white/20 pb-3">
                The Role of UX-UI Design in Business Success
              </p>
              <div className="mt-7 self-end">
                <Link
                  to="/blogs"
                  className="font-medium capitalize text-[.9rem] flex items-center gap-2 w-fit text-white hover:text-primary transition-colors duration-200"
                >
                  Read more in our blogs <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[4rem]">
        <WorkProcess />
      </section>
      <ContactForm />
    </>
  );
};

export default AboutUs;

const GradientIcon = ({ children }) => (
  <svg width="48" height="48">
    <defs>
      <linearGradient id="myGradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#9935E8" />
        <stop offset="100%" stopColor="#F8B000" />
      </linearGradient>
    </defs>
    {children}
  </svg>
);
