import React, { lazy } from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vids/banner.mp4";
import {
  Activity,
  BarChart3,
  BrainCircuit,
  CodeXml,
  Globe,
  Layers,
  Smartphone,
  Zap,
} from "lucide-react";
import howWeBuildCover from "../assets/images/how-we-build.jpeg";
import whyWorkWithUs1 from "../assets/images/whyworkwithus1.png";
import whyWorkWithUs2 from "../assets/images/whyworkwithus2.png";
import whyWorkWithUs3 from "../assets/images/whyworkwithus3.png";
import whyWorkWithUs4 from "../assets/images/whyworkwithus4.png";
import LandingServices from "../components/landingPage/LandingServices";
import { ArrowScrollButton } from "../components/ArrowButtons";
import Portfolio from "../components/Portfolio";

const ContactForm = lazy(() => import("../components/ContactForm"));
const Testimonials = lazy(() => import("../components/Testimonials"));

const industries = [
  { icon: BrainCircuit, title: "Artificial\nIntelligence" },
  { icon: Activity, title: "Healthcare\nTech" },
  { icon: Layers, title: "SaaS\nPlatforms" },
  { icon: Smartphone, title: "Mobile\nEcosystems" },
  { icon: Globe, title: "Global\nConnect" },
  { icon: Zap, title: "Automation\nSystems" },
  { icon: BarChart3, title: "FinTech\nSolutions" },
  { icon: CodeXml, title: "Developer\nTools" },
];

const LandingPage = ({ page }) => {
  const isWeb = page === "web";

  return (
    <>
      <section id="banner" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Futuristic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/5 z-[1]"></div>

        <div className="wrapper relative z-10 text-center space-y-8 pt-20">
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white mx-auto shadow-neon"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium tracking-wide">Next-Gen Digital Solutions</span>
          </div>

          <h1 data-aos="fade-up" className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-tight">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary animate-pulse-glow">
              Future of Tech
            </span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            {isWeb
              ? "We architect scalable web ecosystems and AI-driven automation layers that propel your business into the next decade of innovation."
              : "Crafting immersive mobile experiences and intelligent agents that redefine user interaction and operational efficiency."}
          </p>

          <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center gap-4">
            <ArrowScrollButton to="contact" className="primary-btn">
              Start Building
            </ArrowScrollButton>
          </div>
        </div>

        <div className="absolute inset-0 z-0">
          <ReactPlayer
            url={bannerVid}
            playing
            muted
            loop
            playsinline
            width="100%"
            height="100%"
            className="react-player"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            config={{
              file: {
                attributes: {
                  style: { objectFit: "cover", width: "100%", height: "100%" },
                },
              },
            }}
          />
        </div>

        {/* Animated scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section with Glassmorphism */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-[80px] pointer-events-none"></div>
        <LandingServices isWeb={isWeb} />
      </section>

      <section className="py-[4rem] bg-[#D8D8D8A3]">
        <div className="wrapper space-y-3">
          <h2 data-aos="fade-up" className="section-heading text-center">
            Industries We Serve
          </h2>
          <p data-aos="fade-up" className="text-center">
            Using powerful, industry-specific software solutions, our team can
            help you achieve your business goals.
          </p>
          <div className="pt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {industries.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  data-aos="fade-up"
                  key={item.title}
                  className="text-center p-5 bg-white rounded-xl space-y-3"
                >
                  <IconComponent className="w-8 h-8 mx-auto text-primary" />
                  <p className="font-medium text-[.9rem] whitespace-pre-line">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pt-[4rem]">
        <h2 data-aos="fade-up" className="wrapper section-heading text-center">
          How Monk 11 AI Solutions helps you deliver the best results
        </h2>
        <div
          data-aos="fade-up"
          className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[3rem] mt-10"
        >
          {[
            {
              title: "Collaborative Partnerships",
              desc: "We foster strong partnerships by working closely with clients, ensuring alignment with your vision and delivering results that exceed expectations.",
              styles: "bg-[#7C42DA] lg:rotate-[-18deg] lg:translate-y-[8rem]",
            },
            {
              title: "Agility and Adaptability",
              desc: "Our team thrives on flexibility, quickly adapting to changing requirements and industry trends to keep your business ahead of the curve.",
              styles: "bg-[#F8B000] lg:rotate-[-10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Commitment to Quality",
              desc: "Quality is at the heart of everything we do, from initial planning to final delivery, ensuring solutions that stand the test of time.",
              styles: "bg-[#B94391]",
            },
            {
              title: "Customer Satisfaction",
              desc: "Your satisfaction is our top priority. We go the extra mile to ensure our solutions not only meet but exceed your expectations.",
              styles: "bg-[#D1B9F7] lg:rotate-[10deg] lg:translate-y-[3rem]",
            },
            {
              title: "Transparency and Accountability",
              desc: "We maintain open communication, provide regular updates, and take responsibility for delivering on our commitments to ensure your trust and confidence.",
              styles:
                "bg-[#E85535] col-span-2 md:col-span-1 w-1/2 mx-auto md:w-full lg:rotate-[18deg] lg:translate-y-[8rem]",
            },
          ].map((item) => (
            <div
              className={`p-5 ${item.styles} h-full w-full flex items-center hover:rotate-[180deg] group text-center rounded-xl transition-all duration-300`}
              key={item.title}
            >
              <div className="space-y-3 group-hover:scale-y-[-1] group-hover:scale-x-[-1] transition-all duration-300 text-white">
                <p className="md:text-lg font-bold leading-tight">
                  {item.title}
                </p>
                <p className="text-[.9rem]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrapper pt-[4rem] lg:mt-[9rem]">
        <div
          data-aos="fade-up"
          className="relative min-h-[40vh] rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-[-1]"></div>
          <img
            loading="lazy"
            src={howWeBuildCover}
            alt="hero banner"
            className="w-full h-full object-cover absolute inset-0 z-[-2]"
          />
          <div className="p-10 text-white text-start space-y-3">
            <h3 className="text-2xl font-semibold">How we build</h3>
            <p className="max-w-xs">
              We prioritize your success, understand your unique needs, and
              deliver tailored solutions that drive your business growth.
            </p>
            <div className="pt-7">
              <ArrowScrollButton to="contact" className="primary-btn border-none text-white">
                Let's Chat
              </ArrowScrollButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[4rem] wrapper space-y-3">
        <h2
          data-aos="fade-up"
          className="section-heading text-center md:mb-[2rem]"
        >
          Why Work With Us?
        </h2>
        <div className="flex flex-col gap-5">
          <div
            data-aos="fade-up"
            className="bg-[#6B308C] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  Our team combines creativity, technical expertise, and a
                  passion for excellence to bring your vision to life. With
                  attention to detail and a client-first approach, we ensure
                  every project meets your unique requirements and delivers
                  lasting results.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs1}
              alt=""
              className="md:absolute right-0 top-1/2 md:-translate-y-1/2 max-h-[16rem] md:max-h-[25rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#FE7624] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  At Monk 11 AI Solutions, we deliver excellence across web and app
                  development, UI/UX design, game development, and blockchain
                  solutions. Our expertise ensures innovative, scalable results
                  tailored to your goals.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs2}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[24rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#F45C7B] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  Transform your digital presence with our robust web and app
                  solutions. From feature-rich websites to high-performing
                  mobile apps, we ensure seamless functionality and cutting-edge
                  design to achieve your business goals.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs3}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#507FD7] min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col md:w-8/12 lg:w-9/12">
              <div className="md:px-[2.5rem]">
                <p className="md:text-lg text-white font-semibold">
                  At Monk 11 AI Solutions, we deliver tailored solutions across industries.
                  From enhancing patient care in Healthcare to empowering
                  E-commerce and driving innovation in Technology, we cater to
                  diverse business needs with precision.
                </p>
                <Quote
                  className="size-10 fill-white/20 self-end mt-3"
                  strokeWidth={0}
                />
              </div>
            </div>
            <img
              src={whyWorkWithUs4}
              alt=""
              className="md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <Testimonials />
      </section>

      <Portfolio page={page} />

      <ContactForm id="contact" headline="Ready to Build the Future?" />
    </>
  );
};

export default LandingPage;

// Helper component for Quote icon to avoid import error if lucide-react version varies
const Quote = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
  </svg>
);
