import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <div className="py-[3rem] overflow-hidden border-t border-secondary/50 relative">
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
  );
};

export default LandingFooter;
