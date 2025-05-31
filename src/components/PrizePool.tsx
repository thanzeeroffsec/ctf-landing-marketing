import React, { useState, useEffect } from "react";
import { Trophy, Award, Medal } from "lucide-react";

const PrizePool: React.FC = () => {
  const [animatedValues, setAnimatedValues] = useState({
    firstPlace: 0,
    secondPlace: 0,
    thirdPlace: 0,
    totalPool: 0,
  });

  const finalValues = {
    firstPlace: 25000,
    secondPlace: 15000,
    thirdPlace: 10000,
    totalPool: 40000,
  };

  useEffect(() => {
    const animationDuration = 2000;
    const steps = 50;
    const interval = animationDuration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;

      if (currentStep <= steps) {
        const percentage = currentStep / steps;

        setAnimatedValues({
          firstPlace: Math.round(finalValues.firstPlace * percentage),
          secondPlace: Math.round(finalValues.secondPlace * percentage),
          thirdPlace: Math.round(finalValues.thirdPlace * percentage),
          totalPool: Math.round(finalValues.totalPool * percentage),
        });
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    // <section id="prizes" className="py-20 bg-dark-light relative">
    //   <div className="container-custom relative z-10">
    //     <div className="text-center mb-16">
    //       <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">
    //         <Trophy className="inline-block mr-2 text-accent" /> Prize Pool
    //       </h2>
    //       <p className="text-xl text-light-darker max-w-3xl mx-auto mt-6">
    //         Compete for a share of our $50,000 prize pool and earn recognition in the cybersecurity community.
    //       </p>
    //     </div>

    //     <div className="reveal mb-16 text-center">
    //       <div className="bg-dark inline-block px-8 py-4 rounded-lg border-2 border-accent shadow-lg shadow-accent/20">
    //         <div className="text-sm text-light-darker uppercase tracking-wider mb-1">Total Prize Pool</div>
    //         <div className="font-mono text-5xl md:text-6xl font-bold text-accent">
    //           ${animatedValues.totalPool.toLocaleString()}
    //         </div>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    //       <div className="reveal transform hover:-translate-y-2 transition-all duration-300">
    //         <div className="relative bg-dark rounded-xl overflow-hidden">
    //           <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent"></div>
    //           <div className="relative p-8 text-center">
    //             <div className="w-16 h-16 bg-dark-lighter rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-accent">
    //               <Award className="h-8 w-8 text-accent" />
    //             </div>
    //             <h3 className="text-2xl font-bold mb-4">1st Place</h3>
    //             <div className="font-mono text-4xl font-bold text-accent mb-4">
    //               ${animatedValues.firstPlace.toLocaleString()}
    //             </div>
    //             <p className="text-light-darker">
    //               Plus an invitation to DEFCON 2025 with all expenses paid
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="reveal transform hover:-translate-y-2 transition-all duration-300" style={{ transitionDelay: '100ms' }}>
    //         <div className="relative bg-dark rounded-xl overflow-hidden">
    //           <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-transparent"></div>
    //           <div className="relative p-8 text-center">
    //             <div className="w-16 h-16 bg-dark-lighter rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary-500">
    //               <Medal className="h-8 w-8 text-primary-500" />
    //             </div>
    //             <h3 className="text-2xl font-bold mb-4">2nd Place</h3>
    //             <div className="font-mono text-4xl font-bold text-primary-500 mb-4">
    //               ${animatedValues.secondPlace.toLocaleString()}
    //             </div>
    //             <p className="text-light-darker">
    //               Plus exclusive security certifications from our sponsors
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="reveal transform hover:-translate-y-2 transition-all duration-300" style={{ transitionDelay: '200ms' }}>
    //         <div className="relative bg-dark rounded-xl overflow-hidden">
    //           <div className="absolute inset-0 bg-gradient-to-b from-secondary-500/20 to-transparent"></div>
    //           <div className="relative p-8 text-center">
    //             <div className="w-16 h-16 bg-dark-lighter rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-secondary-500">
    //               <Medal className="h-8 w-8 text-secondary-500" />
    //             </div>
    //             <h3 className="text-2xl font-bold mb-4">3rd Place</h3>
    //             <div className="font-mono text-4xl font-bold text-secondary-500 mb-4">
    //               ${animatedValues.thirdPlace.toLocaleString()}
    //             </div>
    //             <p className="text-light-darker">
    //               Plus premium software licenses and security tools
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="mt-16 text-center">
    //       <h3 className="text-2xl font-bold mb-4">Special Category Prizes</h3>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
    //         {['Web Exploitation', 'Reverse Engineering', 'Cryptography', 'Forensics'].map((category, index) => (
    //           <div
    //             key={category}
    //             className="reveal bg-dark p-6 rounded-xl border border-dark-lighter transform hover:-translate-y-1 transition-all duration-300"
    //             style={{ transitionDelay: `${index * 100}ms` }}
    //           >
    //             <h4 className="font-bold mb-2">{category}</h4>
    //             <p className="text-accent font-mono text-xl">$2,000</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      id="prizes"
      className="py-24 bg-dark-light relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">
            <Trophy className="inline-block mr-2 text-accent" /> Prize Pool
          </h2>
          <p className="text-xl text-light-darker max-w-2xl mx-auto mt-6">
            showcase your cybersecurity mastery, compete for rewards from a
            <span className="text-accent font-semibold"> ₹40,000 </span> prize
            pool, and gain elite recognition in the prestigious Hogwarts Eternal
            CTF
          </p>
        </div>

        {/* Total Prize Pool */}
        <div className="reveal mb-20 text-center">
          <div className="inline-block px-10 py-6 rounded-xl border-2 border-accent bg-dark shadow-2xl shadow-accent/30">
            <div className="text-sm text-light-darker uppercase tracking-wider mb-2">
              Total Prize Pool
            </div>
            <div className="font-mono text-5xl md:text-6xl font-bold text-accent drop-shadow-[0_0_10px_rgba(255,204,0,0.5)]">
              ₹{animatedValues.totalPool.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Top Prizes */}
        {/* Top Prizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="h-full">
            <PrizeCard
              rank={1}
              delay="0ms"
              title="1st Place"
              amount={animatedValues.firstPlace}
              description="The Golden Snitch Seeker – You Caught Victory!"
            />
          </div>
          <div className="h-full">
            <PrizeCard
              rank={2}
              delay="100ms"
              title="2nd Place"
              amount={animatedValues.secondPlace}
              description="The Chaser’s Triumph – Points on the Board, Pride in the Sky!"
            />
          </div>
        </div>

        {/* Special Category Prizes */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-4">The Forbidden Fun Zone </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              "Video Games",
              "Physical Games",
              "Movie Show",
              "Surprise Coupon",
            ].map((category, index) => (
              <div
                key={category}
                className="reveal bg-dark p-6 rounded-xl border border-dark-lighter hover:shadow-md hover:border-accent transform hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="font-bold text-light mb-2">{category}</h4>
                <p className="text-accent font-mono text-xl">0xb{index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;
const PrizeCard = ({ rank, delay, title, amount, description }) => {
  const prizeIcons = {
    1: "🥇",
    2: "🥈",
    3: "🥉",
  };

  const colorClass = {
    1: "text-accent",
    2: "text-primary-500",
    3: "text-secondary-500",
  };

  const borderClass = {
    1: "border-accent",
    2: "border-primary-500",
    3: "border-secondary-500",
  };

  return (
    <div
      className="reveal transform transition-all duration-300 hover:-translate-y-3 h-full"
      style={{ transitionDelay: delay }}
    >
      <div
        className={`relative flex flex-col justify-between h-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 border shadow-xl hover:shadow-2xl transition-all duration-300 ${borderClass[rank]}`}
      >
        {/* Floating Medal Emoji */}
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto -mt-16 mb-6 text-5xl ${colorClass[rank]}`}
        >
          {prizeIcons[rank]}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-extrabold text-white mb-2">{title}</h3>
          <div
            className={`font-mono text-4xl font-bold mb-4 ${colorClass[rank]}`}
          >
            ₹{amount.toLocaleString()}
          </div>
          <p className="text-sm text-light-darker">{description}</p>
        </div>
      </div>
    </div>
  );
};
