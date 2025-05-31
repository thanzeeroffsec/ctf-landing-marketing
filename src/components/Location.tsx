import React from "react";
import { MapPin, Calendar, Building, Clock } from "lucide-react";

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-dark relative code-pattern">
      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">
            <MapPin className="inline-block mr-2 text-accent" /> Event Location
          </h2>
          <p className="text-xl text-light-darker max-w-3xl mx-auto mt-6">
            Join us at Offenso Hackers Academy in kochi for one night of
            Hogwarts Eternal CTF
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Location Details */}
          <div className="reveal">
            <div className="feature-card bg-dark-light">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Building className="mr-2 text-accent" /> Venue Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">
                      {" "}
                      Offenso Hackers Academy, Kochi
                    </h4>
                    <p className="text-light-darker">
                      1st floor, Bethesda Tower, Pillar number 535, Palarivattom
                      - Edappally Rd, Janatha, Palarivattom, Kochi, Ernakulam,
                      Kerala 682025
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Event Dates</h4>
                    <p className="text-light-darker">June 21, 2025</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Event Hours</h4>
                    <p className="text-light-darker">
                      6:00 PM - 6:00 AM (overnight CTF)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-2">Transportation</h4>
                <p className="text-light-darker mb-4">
                  Offenso Hackers Academy is located near Palarivattom in Kochi.
                  The nearest metro station is{" "}
                  <strong>Palarivattom Metro Station</strong>, approximately 700
                  meters away (about a 9-minute walk). Additionally, Edappally
                  Metro Station is around 2.5 km away, connecting the academy
                  with major city areas. Frequent buses and auto-rickshaws are
                  available nearby. Limited parking spaces are available
                  on-site.
                </p>

                <h4 className="font-bold mb-2">Accommodations</h4>
                <p className="text-light-darker">
                  We do not provide accommodations for participants. However,
                  there are multiple hotels and guesthouses near Palarivattom
                  and Edappally, offering convenient options for out-of-town
                  attendees.
                </p>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="reveal h-full min-h-[400px]">
            <div className="h-full rounded-lg overflow-hidden border-2 border-dark-lighter">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.178704887882!2d76.30148813308604!3d10.002092898161408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d7f8337f8cb%3A0x3fb5f1f2bcb24522!2sOffenso%20Hackers%20Academy!5e0!3m2!1sen!2sin!4v1748459537928!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Nearby Attractions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Ferry Building Marketplace",
                distance: "0.7 miles",
                description:
                  "Iconic marketplace with artisanal food vendors and restaurants.",
              },
              {
                name: "Yerba Buena Gardens",
                distance: "0.5 miles",
                description:
                  "Urban oasis with beautiful landscaping and cultural attractions.",
              },
              {
                name: "Museum of Modern Art",
                distance: "0.4 miles",
                description:
                  "World-class contemporary art museum with extensive collections.",
              },
            ].map((attraction, index) => (
              <div
                key={attraction.name}
                className="reveal feature-card"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="font-bold">{attraction.name}</h4>
                <p className="text-accent text-sm">{attraction.distance}</p>
                <p className="text-light-darker mt-2">
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Location;
