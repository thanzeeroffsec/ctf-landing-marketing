import React from "react";
import { Shield, Linkedin, Github, Instagram, ArrowUp } from "lucide-react";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark-light pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              {/* <Shield className="h-8 w-8 text-accent mr-2" />
              <span className="text-xl font-bold text-light">
                The Hogwards <span className="text-accent">CTF</span>
              </span> */}
              <img src="/logohwt.png" width={200} height={100} />
            </div>
            <p className="text-light-darker mb-4">
              The ultimate cybersecurity competition for enthusiasts and
              professionals. Test your skills, win prizes, and join the elite.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-light-darker hover:text-accent transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-light-darker hover:text-accent transition-colors duration-300"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="#"
                className="text-light-darker hover:text-accent transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-light font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#hero" },
                { name: "Prizes", href: "#prizes" },
                { name: "Location", href: "#location" },
                { name: "Schedule", href: "#schedule" },
                { name: "Rules", href: "#rules" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light-darker hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Information */}
          {/* <div>
            <h4 className="text-light font-bold mb-4">Important Info</h4>
            <ul className="space-y-2">
              {[
                { name: "Code of Conduct", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms & Conditions", href: "#" },
                { name: "Refund Policy", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light-darker hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Information */}
          <div>
            <h4 className="text-light font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-light-darker">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:technical@offensoacademy.com"
                  className="hover:text-accent transition-colors duration-300"
                >
                  technical@offensoacademy.com
                </a>
              </li>
              <li>
                <strong>Location:</strong> kochi, Palarivattom
              </li>
              <li>
                <strong>Organized by:</strong> Arc Community
              </li>
            </ul>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="p-3 bg-dark-lighter rounded-full hover:bg-accent hover:text-dark transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-dark-lighter">
          <p className="text-light-darker text-sm">
            &copy; {new Date().getFullYear()} Arc Community. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
