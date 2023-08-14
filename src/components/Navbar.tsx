"use client";

import { useState, useEffect } from "react";
import { useWindowSize } from "../../utils/useWindowSize";
import Link from "next/link";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { width } = useWindowSize();
  const isTouch = width < 768;

  // TODO make this into client component that takes children as props
  useEffect(() => {
    if (window.location.pathname !== "/") {
      setIsVisible(true);
      return;
    }

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
        <Link href="/" title="Home" aria-label="Back to home page">
          <span className="navbar-brand uppercase">Serenity</span>
        </Link>
        <div className="menu">
          {isTouch ? (
            // TODO add mobile menu
            <div>Menu</div>
          ) : (
            <li className="flex-row">
              <ul>Link</ul>
              <ul>
                <Link
                  href="/about"
                  title="About Page"
                  aria-label="Link to about page"
                >
                  About
                </Link>
              </ul>
              <ul>Find a Retailer</ul>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
