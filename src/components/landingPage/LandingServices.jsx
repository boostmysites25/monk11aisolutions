import React from "react";
import { services } from "../../data/services"; // Importing new services data
import { ArrowScrollButton } from "../ArrowButtons";
import { ArrowRight } from "lucide-react";

const LandingServices = ({ isWeb }) => {
  // Filter services or show all? 
  // User asked to use the services list: Web Applications, SAAS Solutions, Mobile Applications, AI Calling Agency, AI Automation.
  // The LandingPage passes `isWeb` but the new services list seems inclusive. 
  // Let's show relevant services based on the toggle, or all if appropriate.
  // Given the limited number (5), showing all might be good, or filtering.
  // Let's filter: Web = Web Apps, SAAS, Automation. App = Mobile Apps, AI Calling?
  // Actually, the user request said "Landing pages should be for web development and app development". 
  // But the services provided are specific. Let's try to map them or just show all 5 with a "Focus" based on the page.
  // Current logic was `isWeb ? webDevelopmentServices : appDevelopmentServices`.
  // Let's adapt: if isWeb, show Web Apps, SAAS, AI Automation. If !isWeb, show Mobile Apps, AI Calling.

  const relevantServices = isWeb
    ? services.filter(s => ["Web Applications", "SAAS Solutions", "AI Automation"].includes(s.title))
    : services.filter(s => ["Mobile Applications", "AI Calling Agency"].includes(s.title));

  return (
    <div id="services" className="wrapper relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 data-aos="fade-up" className="heading-2 mb-4">
          {isWeb ? "Web & AI Architectures" : "Mobile & Voice AI Solutions"}
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600">
          We don't just write code; we build intelligent systems. Explore our core capabilities designed for the modern enterprise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relevantServices.map((item, i) => (
          <div
            data-aos="fade-up"
            data-aos-delay={i * 100}
            key={item.title}
            className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/40 to-white/10 hover:to-primary/20 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-2xl z-0 shadow-sm border border-white/50 group-hover:shadow-neon transition-all duration-500"></div>

            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {/* Placeholder for icon, using text or generic if image is complex */}
                <img src={item.image} alt={item.title} className="w-8 h-8 object-contain" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {item.shortDesc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-primary font-semibold text-sm group/link cursor-pointer">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <ArrowScrollButton to="contact" className="secondary-btn mx-auto">
          Get a Custom Proposal
        </ArrowScrollButton>
      </div>
    </div>
  );
};

export default LandingServices;
