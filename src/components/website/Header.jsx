import React from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import "react-modern-drawer/dist/index.css";
import { X } from "lucide-react";
import { companyDetails, logo } from "../../data/constant";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  return (
    <div className="fixed top-0 left-0 py-2 z-50 w-full backdrop-blur-sm bg-white">
      <div className="flex wrapper items-center gap-8 justify-between">
        <Link to="/" className="cursor-pointer">
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            width="75"
            height="75"
            className="w-[7rem] md:w-[9rem] object-contain"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`link ${
                pathname === link.path && "font-semibold text-purpleColor"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to={`https://wa.me/${companyDetails.phone}`}
            target="_blank"
            className="primary-btn"
          >
            Let's Chat <i class="fa fa-whatsapp text-xl"></i>
          </Link>
        </div>
        <div
          className="block lg:hidden justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger
            color="#000000"
            size="26"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2"
      >
        <div className="mb-6 flex items-center justify-between px-[.7rem] py-[.4rem]">
          <img
            src={logo}
            width="auto"
            height="auto"
            alt="logo"
            className="h-[2.5rem] object-contain"
          />
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-4 text-black">
          {links.map((link) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={link.name}
              to={link.path}
              className="text-2xl font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
