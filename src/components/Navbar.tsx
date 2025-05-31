import React, { useState, useEffect } from "react";
import { Menu, X, Shield } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Prizes", href: "#prizes" },
    { name: "Location", href: "#location" },
    { name: "Schedule", href: "#schedule" },
    { name: "Rules", href: "#rules" },
    // { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark shadow-lg" : "bg-transparent"
      } ${isMenuOpen ? "bg-dark" : ""}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* <span className="text-xl font-bold text-light">
              The Hogwards <span className="text-accent">CTF</span>
            </span> */}
            <img src="/logohwt.png" width={200} height={100} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a href="#register" className="btn-primary">
              Register Interest
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-light hover:text-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-dark border-t border-dark-lighter animate-fade-in">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-base text-light-dark hover:text-accent transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#register"
                className="block w-full text-center btn-primary mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Interest
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
