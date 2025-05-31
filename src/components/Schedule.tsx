import React from "react";
import { Calendar, Clock } from "lucide-react";

const Schedule: React.FC = () => {
  const scheduleData = [
    {
      time: "6:00 PM - 7:00 PM",
      title: "Registration & Check-in",
      description: "Get your participant badge and competition materials",
    },
    {
      time: "7:00 PM - 7:30 PM",
      title: "Opening Ceremony",
      description: "Welcome address and competition briefing",
    },
    {
      time: "7:30 PM - 8:00 PM",
      title: "Platform Introduction",
      description: "Technical overview and system access setup",
    },
    {
      time: "8:00 PM - 12:00 AM",
      title: "Evening Challenge Session",
      description: "First round of intensive challenges across all categories",
    },
    {
      time: "12:00 AM - 1:00 AM",
      title: "LAN Party",
      description:
        "Late-night gaming session with friends and fellow participants.",
    },
    {
      time: "1:00 AM - 4:00 AM",
      title: "Midnight Challenge session ",
      description: "Advanced challenges and special bonus rounds",
    },
    {
      time: "4:00 AM - 5:00 AM ",
      title: "Final Sprint",
      description: "Last chance to solve challenges and submit solutions",
    },
    {
      time: "5:00 AM - 6:00 AM",
      title: "Awards Ceremony",
      description: "Winner announcements and prize distribution",
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-dark-light relative">
      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">
            <Calendar className="inline-block mr-2 text-accent" /> Competition
            Day Schedule
          </h2>
          <p className="text-xl text-light-darker max-w-3xl mx-auto mt-6">
            One intense day of hacking challenges, learning, and competition
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative ml-4 pl-8 border-l-2 border-dark-lighter">
            {scheduleData.map((event, index) => (
              <div
                key={event.title}
                className="reveal mb-8 last:mb-0 relative"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Time indicator dot */}
                <div className="absolute -left-[41px] w-5 h-5 bg-dark rounded-full border-2 border-accent"></div>

                <div className="feature-card">
                  <div className="flex flex-col md:flex-row md:items-center mb-2">
                    <div className="flex items-center text-accent font-mono mb-2 md:mb-0">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="hidden md:block mx-4 text-light-darker">
                      •
                    </div>
                    <h4 className="text-xl font-bold">{event.title}</h4>
                  </div>
                  <p className="text-light-darker">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-16 text-center bg-dark p-6 rounded-lg border border-dark-lighter reveal">
          <h3 className="text-xl font-bold mb-4">Important Notes</h3>
          <ul className="text-light-darker text-left max-w-2xl mx-auto space-y-2">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>
                No refunds – Once registration is complete, no cancellations or
                refunds will be entertained.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Bring your laptop and any preferred peripherals</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>
                Don’t get stuck too long – If you're stuck on a challenge, move
                on and come back later.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>
                Submit flags as you solve – Don’t wait till the last minute;
                submit early to avoid errors.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
