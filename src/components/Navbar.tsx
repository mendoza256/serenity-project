"use client";

import { useState, useEffect } from "react";
import { useWindowSize } from "../../utils/useWindowSize";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { width } = useWindowSize();
  const isTouch = width < 768;

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector(
        "main > section:first-of-type"
      ) as HTMLElement;
      if (
        firstSection &&
        window.scrollY >= firstSection?.offsetTop + firstSection?.offsetHeight
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`text-bold ${isVisible ? "visible" : ""}`}>
      <div className="container flex-between">
        <div className="navbar-brand uppercase">Serenity</div>
        <div className="menu">
          {isTouch ? (
            // TODO add mobile menu
            <div>Menu</div>
          ) : (
            <li className="flex-row">
              <ul>Link</ul>
              <ul>Link</ul>
              <ul>Find a Retailer</ul>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
