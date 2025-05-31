import React from "react";
import { UserPlus, Mail, Send } from "lucide-react";

const Register: React.FC = () => {
  return (
    <section id="register" className="py-20 bg-dark relative code-pattern">
      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">
            <UserPlus className="inline-block mr-2 text-accent" /> Register
            Interest
          </h2>
          <p className="text-xl text-light-darker max-w-3xl mx-auto mt-6">
            Be the first to know when registration opens. Sign up for our
            notification list.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="reveal feature-card text-center bg-gradient-to-b from-dark-light to-dark">
            <div className="mb-8">
              <Mail className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="text-light-darker mt-4">
                Official registration opens on January 15, 2025. Enter your
                email to receive updates, early bird registration details, and
                exclusive content.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-stretch gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-dark border border-dark-lighter text-light-dark rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Email address"
              />
              <button className="btn-primary whitespace-nowrap">
                <Send className="h-5 w-5 mr-2" /> Notify Me
              </button>
            </div>

            <p className="text-sm text-light-darker mt-4">
              We respect your privacy and will never share your information with
              third parties.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Early Access",
                description:
                  "Get exclusive early bird registration with discounted rates.",
              },
              {
                title: "Preparation Materials",
                description:
                  "Receive practice challenges and preparation resources.",
              },
              {
                title: "Community",
                description:
                  "Join our Discord community for networking and updates.",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="reveal feature-card text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="font-bold text-xl mb-2">{benefit.title}</h4>
                <p className="text-light-darker">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            What People Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et lacus ac elit vehicula tincidunt. Nulla facilisi. Sed fringilla vitae lorem eget laoreet.",
                author: "Thanzeer",
                company: "Cyber Security Researher",
              },
              {
                quote:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac sem a libero ultrices scelerisque. In vel odio vitae justo lacinia posuere.",
                author: "Thanzeer",
                company: "Cyber Security Researher",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="reveal feature-card bg-gradient-to-r from-dark to-dark-light h-full"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col justify-between h-full p-4">
                  <p className="italic text-light-darker mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-accent">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
