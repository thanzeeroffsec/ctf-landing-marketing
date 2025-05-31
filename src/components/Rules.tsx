import React from "react";
import {
  FileText,
  AlertTriangle,
  Check,
  Shield,
  Target,
  Award,
} from "lucide-react";

const Rules: React.FC = () => {
  const generalRules = [
    "Participants can register individually or in teams of up to 3 members.",
    "Once a team is registered, members cannot be changed.",
    "Each participant must belong to only one team.",
    "Sharing flags between teams is strictly prohibited.",
    "Do not attack the CTF infrastructure (servers, platform, scoreboard).",
    "Any form of hate speech, harassment, or misconduct will lead to disqualification.",
    "Ensure correct flag format as specified in the challenges.",

    "All teams must confirm their presence 15 minutes before the game starts.",
  ];

  const challengeCategories = [
    {
      name: "Web Exploitation",
      description:
        "Test your skills in finding and exploiting web vulnerabilities",
      points: "2500 points",
    },
    {
      name: "Reverse Engineering",
      description:
        "Analyze and break down compiled programs to understand their functionality",
      points: "2500 points",
    },
    {
      name: "Cryptography",
      description: "Crack codes and solve complex encryption challenges",
      points: "2500 points",
    },
    {
      name: "Forensic ",
      description: "Investigate compromised systems and recover secrets",
      points: "2500 points",
    },
  ];

  const scoringSystem = [
    "Each challenge has a fixed point value based on its difficulty",

    "Points do not change after solving — the score remains the same for all participants",

    "The team with the highest total points ranks at the top of the leaderboard",

    "In the case of a tie, the team that reached the score first will be ranked higher",

    "Solve more challenges to increase your score and climb the leaderboard!",
  ];

  return (
    <section id="rules" className="py-20 bg-dark relative code-pattern">
      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">
            <FileText className="inline-block mr-2 text-accent" /> Competition
            Rules
          </h2>
          <p className="text-xl text-light-darker max-w-3xl mx-auto mt-6">
            Master these guidelines to maximize your success in the CTF
            challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* General Rules */}
          <div className="reveal">
            <div className="feature-card h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Shield className="mr-2 text-accent" /> General Rules
              </h3>
              <ul className="space-y-4">
                {generalRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-accent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-light-darker">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenge Categories */}
          <div className="reveal">
            <div className="feature-card h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="mr-2 text-accent" /> Challenge Categories
              </h3>
              <div className="space-y-6">
                {challengeCategories.map((category, index) => (
                  <div
                    key={index}
                    className="border-b border-dark-lighter pb-4 last:border-0"
                  >
                    <h4 className="font-bold text-lg mb-2 flex items-center">
                      <span className="text-accent mr-2">{category.name}</span>
                      {/* <span className="text-sm text-light-darker">
                        ({category.points})
                      </span> */}
                    </h4>
                    <p className="text-light-darker">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scoring System */}
        <div className="reveal mb-12">
          <div className="feature-card">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2 text-accent" /> Scoring System
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scoringSystem.map((item, index) => (
                <div
                  key={index}
                  className="bg-dark p-4 rounded-lg border border-dark-lighter"
                >
                  <p className="text-light-darker">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disqualification Warnings */}
        <div className="reveal">
          <div className="feature-card bg-gradient-to-r from-dark to-dark-light border-l-4 border-red-500">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-red-400">
              <AlertTriangle className="mr-2" /> Grounds for Immediate
              Disqualification
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-light-darker">
                  Sharing flags or solutions with other participants
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-light-darker">
                  Attacking the competition infrastructure
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-light-darker">
                  Harassment or Misconduct
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                <span className="text-light-darker">
                  Collaborating with other participants
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Resources */}
        {/* <div className="mt-12 text-center reveal">
          <h3 className="text-xl font-bold mb-4">Preparation Resources</h3>
          <p className="text-light-darker mb-6">
            Access our comprehensive guide and practice challenges to prepare
            for the competition.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="btn-secondary">
              <FileText className="mr-2 h-5 w-5" /> Download Guide
            </a>
            <a href="#" className="btn-secondary">
              <Target className="mr-2 h-5 w-5" /> Practice Challenges
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Rules;
