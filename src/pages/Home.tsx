import React, { useEffect } from "react";
import useIntersectionObserver from "../utils/useIntersectionObserver";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PrizePool from "../components/PrizePool";
import Schedule from "../components/Schedule";
import Location from "../components/Location";
import Rules from "../components/Rules";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

const Home = () => {
  // Initialize intersection observer for reveal animations
  useIntersectionObserver();

  // Update page title
  useEffect(() => {
    document.title = "The Hogwards CTF 2025 | The Ultimate Hacking Competition";
  }, []);
  return (
    <div className="min-h-screen bg-dark text-light-dark">
      <Navbar />
      <main>
        <Hero />
        <PrizePool />
        <Location />
        <Schedule />
        <Rules />
        <Sponsors />
        {/* <FAQ />
        <Register /> */}
        <div
          className="fixed bottom-4 left-0 w-full z-50 flex justify-center px-4"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div
            className="flex items-center justify-between px-6 py-3 rounded-full border shadow-lg max-w-md w-full text-white"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <span className="text-sm sm:text-base font-semibold">
              Register now –{" "}
              <span className="text-accent font-bold">₹499 only</span>
            </span>
            <a
              href="#register"
              className="bg-accent text-dark font-bold px-4 py-2 rounded-full text-sm sm:text-base hover:brightness-110 transition-all"
            >
              Register
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
