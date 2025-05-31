import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  // FAQ data
  const faqItems: FAQItem[] = [
    {
      question: "Who can participate in Hogwards CTF?",
      answer:
        "Hogwards CTF is open to cybersecurity enthusiasts, professionals, and students who are at least 18 years old. All skill levels are welcome, from beginners to experts.",
    },
    {
      question: "Do I need to be physically present at the venue?",
      answer:
        "Yes, Hogwards CTF is an in-person event taking place in San Francisco. Remote participation is not available for this competition.",
    },
    {
      question: "What should I bring to the competition?",
      answer:
        "You should bring your laptop, charger, and any peripherals you prefer using (mouse, keyboard, etc.). Make sure your devices are secure and up-to-date. We'll provide power, internet, and a comfortable working environment.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Yes, there is a $75 registration fee to cover event costs, including meals during the competition days. Early bird registration (before March 1, 2025) is available at a discounted rate of $50.",
    },
    {
      question: "What types of challenges will be included?",
      answer:
        "The competition will feature challenges across various cybersecurity domains, including web exploitation, cryptography, reverse engineering, forensics, binary exploitation, and more. Challenges will range from beginner to expert difficulty levels.",
    },
    {
      question: "How are winners determined?",
      answer:
        "Winners are determined based on the total points accumulated from solving challenges. In case of a tie, the participant who reached their score first will be ranked higher.",
    },
    {
      question: "Are there any prerequisites or required skills?",
      answer:
        "While there are no specific prerequisites, having basic knowledge of cybersecurity concepts, programming, and problem-solving skills will be beneficial. Challenges will be available for all skill levels.",
    },
    {
      question: "Will food be provided during the event?",
      answer:
        "Yes, lunch and refreshments will be provided on all three days of the competition. We'll accommodate dietary restrictions indicated during registration.",
    },
    {
      question:
        "Can I use the internet and external resources during the competition?",
      answer:
        "Yes, you can use the internet and any publicly available resources. However, collaborating with other participants or seeking direct assistance for solving challenges is prohibited.",
    },
    {
      question: "How do I claim my prize if I win?",
      answer:
        "Prize winners will be announced during the closing ceremony. You must be present to claim your prize. We'll collect necessary information for prize distribution at that time.",
    },
  ];

  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  // Function to toggle expansion of a FAQ item
  const toggleItem = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <section id="faq" className="py-20 bg-dark-light relative">
      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading mx-auto after:left-1/2 after:-translate-x-1/2">
            <HelpCircle className="inline-block mr-2 text-accent" /> Frequently
            Asked Questions
          </h2>
          <p className="text-xl text-light-darker max-w-3xl mx-auto mt-6">
            Everything you need to know about Hogwards CTF. Can't find your
            answer? Feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="reveal mb-4 border border-dark-lighter rounded-lg overflow-hidden"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                className="w-full text-left p-5 bg-dark-light hover:bg-dark-lighter transition-colors duration-300 flex justify-between items-center"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-bold">{item.question}</span>
                {expandedItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-accent" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-accent" />
                )}
              </button>

              {expandedItems.includes(index) && (
                <div className="p-5 bg-dark border-t border-dark-lighter animate-fade-in">
                  <p className="text-light-darker">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-light-darker mb-6">
            Contact us at{" "}
            <a
              href="mailto:info@offensohackersaccademy.com"
              className="text-accent hover:underline"
            >
              info@offensohackersaccademy.com
            </a>{" "}
            or reach out on social media.
          </p>
          <a href="#register" className="btn-primary">
            Register Interest
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
