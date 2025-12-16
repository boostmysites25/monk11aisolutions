import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { services } from "../../data/services";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="py-[3rem] overflow-hidden border-t border-secondary/50 relative">
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-8 w-[12rem] aspect-square bg-primary/50 blur-[100px]"></div>
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-8 w-[12rem] aspect-square bg-secondary/50 blur-[100px]"></div>
      <div className="wrapper space-y-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 items-start gap-10">
          <div className="space-y-3 grid justify-start">
            <h5 className="text-lg font-semibold">Our Services</h5>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={`/services/${service.title}`} className="link">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 grid sm:justify-center">
            <h5 className="text-lg font-semibold">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="link">
                  About Us
                </Link>
              </li>
              <li>
                <Scroll
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="link"
                >
                  Services
                </Scroll>
              </li>
              <li>
                <Link to="/blogs" className="link">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 items-center sm:justify-end">
            <Link to="/" className="link">
              <Linkedin className="w-6 h-6 link" strokeWidth={1.5} />
            </Link>
            <Link to="/" className="link">
              <Instagram className="w-6 h-6 link" strokeWidth={1.5} />
            </Link>
            <Link to="/" className="link">
              <Facebook className="w-6 h-6 link" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
        <hr className="border-secondary/50" />
        <div className="text-center">
          <p className="">
            Copyright &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
