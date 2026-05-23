import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/MO-logo.png";
const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-primary/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-[#915eff]/5" : "bg-transparent"}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className=" h-12 object-contain" />
          <p className="text-white-100 text-[18px] font-bold cursor-pointer flex">
            {" "}
            Mohamed &nbsp; <span className="sm:block hidden">| Software Engineer</span>
          </p>
        </Link>

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white-100" : "text-secondary"
                } hover:text-white-100 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Social Links - Desktop */}
          <div className="flex items-center gap-3 border-l border-white/10 pl-5">
            <a
              href="https://github.com/MoOsman5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center hover:bg-[#915eff] transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[#915eff] shadow-lg shadow-[#915eff]/5 cursor-pointer"
              title="GitHub Profile"
            >
              <svg className="w-5 h-5 fill-white-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/mohamedosmanm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center hover:bg-[#915eff] transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[#915eff] shadow-lg shadow-[#915eff]/5 cursor-pointer"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-white-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center hover:bg-[#915eff] transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-[#915eff] shadow-lg shadow-[#915eff]/5 cursor-pointer"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0-9c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1zm0 20c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1zM2 11h2c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zm20 0h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1zM5.27 4.86c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L5.27 6.27c-.39-.39-.39-1.02 0-1.41zm12.02 12.02c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0l-1.41-1.41c-.39-.39-.39-1.02 0-1.41zM6.68 15.89c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-1.41 1.41c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l1.41-1.41zm12.02-9.62c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-1.41 1.41c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l1.41-1.41z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 fill-indigo-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3c.132 0 .263 0 .393.007a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.999z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation & Theme Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
          {/* Social Links - Mobile */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/MoOsman5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-tertiary flex justify-center items-center border border-white/10 hover:border-[#915eff] shadow-lg cursor-pointer"
              title="GitHub Profile"
            >
              <svg className="w-4.5 h-4.5 fill-white-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/mohamedosmanm"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-tertiary flex justify-center items-center border border-white/10 hover:border-[#915eff] shadow-lg cursor-pointer"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-white-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 rounded-full bg-tertiary flex justify-center items-center border border-white/10 shadow-lg cursor-pointer"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <svg className="w-4.5 h-4.5 fill-amber-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0-9c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1zm0 20c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1zM2 11h2c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zm20 0h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1zM5.27 4.86c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L5.27 6.27c-.39-.39-.39-1.02 0-1.41zm12.02 12.02c.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0l-1.41-1.41c-.39-.39-.39-1.02 0-1.41zM6.68 15.89c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-1.41 1.41c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l1.41-1.41zm12.02-9.62c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-1.41 1.41c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l1.41-1.41z"/>
              </svg>
            ) : (
              <svg className="w-4.5 h-4.5 fill-indigo-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3c.132 0 .263 0 .393.007a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.999z"/>
              </svg>
            )}
          </button>


          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white-100" : "text-secondary"
                  } hover:text-white-100 text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
