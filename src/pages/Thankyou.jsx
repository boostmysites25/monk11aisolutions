import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../data/constant";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-gradient-to-b from-[#f8e4de] to-[#f5f5f5]">
      <div className="fixed top-0 left-0 py-4 z-50 w-full backdrop-blur-sm bg-white">
        <div className="flex wrapper items-center gap-8 justify-between">
          <Link to="/" className="cursor-pointer">
            <img
              loading="lazy"
              src={logo}
              alt="logo"
              width="75"
              height="75"
              className="h-[3.5rem] lg:h-[5rem] object-contain"
            />
          </Link>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center pt-[4rem]">
        <div className="wrapper">
          <h1 className="section-heading text-center">Thank You</h1>
          <p className="text-center text-lg mt-2">
            Your message has been sent. We will get back to you soon.
          </p>
          <Link to="/" className="primary-btn w-fit mx-auto mt-10">
            Back to Home
          </Link>
        </div>
      </div>
      <div className="py-[3rem] z-10 overflow-hidden border-t border-secondary/50 relative">
        <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-8 w-[12rem] aspect-square bg-primary/50 blur-[100px]"></div>
        <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-8 w-[12rem] aspect-square bg-secondary/50 blur-[100px]"></div>
        <div className="wrapper flex justify-between gap-10">
          <p className="">
            Copyright &copy; {new Date().getFullYear()} All rights reserved.
          </p>
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
      </div>
    </div>
  );
};

export default Thankyou;
