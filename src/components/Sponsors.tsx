import React from "react";
import { Award, Shield } from "lucide-react";

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-20 bg-dark relative">
      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">
            <Award className="inline-block mr-2 text-accent" /> Organized By
          </h2>
          <p className="text-xl text-light-darker max-w-3xl mx-auto mt-6">
            Proudly presented by leaders in cybersecurity education
          </p>
        </div>

        {/* Logos Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto reveal">
          {/* Sponsor */}
          <div className="text-center bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <p className="uppercase text-light-darker text-sm mb-4 tracking-widest">
              Sponsored by
            </p>
            <img
              src="/offenso.webp"
              alt="Offenso Hackers Academy"
              className="h-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-white">
              Offenso Hackers Academy
            </h3>
          </div>

          {/* Conducted by */}
          <div className="text-center bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <p className="uppercase text-light-darker text-sm mb-4 tracking-widest">
              Conducted by
            </p>
            <img
              src="/arc.png"
              alt="ARC Community"
              className="h-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-white">ARC Community</h3>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 max-w-4xl mx-auto text-center text-light-darker text-lg reveal">
          <p className="mb-6">
            Offenso Hackers Academy, powered by ARC Community, is committed to
            training the next generation of cybersecurity experts through
            hands-on, practical education.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="feature-card bg-dark">
              <h4 className="font-bold text-xl mb-2">2+ Years</h4>
              <p className="text-light-darker">Industry Experience</p>
            </div>
            <div className="feature-card bg-dark">
              <h4 className="font-bold text-xl mb-2">5000+</h4>
              <p className="text-light-darker">Students Trained</p>
            </div>
            <div className="feature-card bg-dark">
              <h4 className="font-bold text-xl mb-2">100%</h4>
              <p className="text-light-darker">Practical Training</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-16 text-center reveal">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-light-darker max-w-2xl mx-auto mb-8">
            Want to learn more about our cybersecurity programs and training
            opportunities?
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://offensoacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Academy Website
            </a>
            <a href="mailto:info@offensoacademy.com" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
