import React, { useEffect, useRef } from "react";
import { ArrowDown, Shield, Terminal, Code } from "lucide-react";
import CountdownTimer from "../utils/CountdownTimer";
import Typed from "typed.js";

const Hero: React.FC = () => {
  const targetDate = new Date("2025-06-21T00:00:00");
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "root@linux:~$ ./start_ctf",
          "Initializing competition environment...",
          "Loading challenges...",
          "System ready. Begin hacking.",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: "█",
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between py-20 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-pattern opacity-10 animate-fade"></div>
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary-700 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col flex-grow items-center justify-center">
        <div className="w-full max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-light border border-dark-lighter mb-6 animate-slide-top">
            <Shield className="h-4 w-4 text-accent mr-2" />
            <span className="text-light-dark text-sm">
              June, 21 2025 • Kochi, Offenso
            </span>
          </div>

          {/* Terminal Effect */}
          <div className="bg-dark-light border border-dark-lighter rounded-lg p-4 mb-8 font-mono text-sm md:text-base animate-slide-left">
            <span ref={typedRef} className="text-accent"></span>
          </div>

          {/* Heading */}
          <div className="animate-slide-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-3xl mx-auto">
              <span className="block mb-2">Enter the Battleground of</span>
              <span className="text-accent">HOGWARTS</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-light-darker mb-8 max-w-xl mx-auto">
              An offline overnight CTF journey into the unknown — face the
              darkness, capture the flag.
            </p>
          </div>

          {/* Countdown Timer */}
          <div
            className="mb-10 animate-fade"
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-lg sm:text-xl mb-4 text-light">
              Competition Starts In:
            </h3>
            <CountdownTimer targetDate={targetDate} />
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="#register" className="btn-primary text-base sm:text-lg">
              <Terminal className="mr-2 h-5 w-5" /> Register Now
            </a>
            <a href="#rules" className="btn-secondary text-base sm:text-lg">
              <Code className="mr-2 h-5 w-5" /> View Rules
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="text-center mt-8 animate-fade"
        style={{ animationDelay: "1s" }}
      >
        <span className="text-light-darker text-sm block mb-2">
          Scroll to Learn More
        </span>
        <ArrowDown className="h-5 w-5 text-accent animate-bounce mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
