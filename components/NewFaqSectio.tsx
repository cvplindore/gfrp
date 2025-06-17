import React, { useState } from "react";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import "./FAQSection.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question:
      "What are the main benefits of using fiber-reinforced polymer (FRP) rebar?",
    answer:
      "FRP rebar offers superior corrosion resistance, is lightweight yet strong, and provides excellent durability in harsh environments. Unlike traditional steel rebar, FRP won't rust or corrode, making it ideal for marine structures, bridges, and buildings in corrosive environments.",
  },
  {
    question:
      "How does FRP rebar compare to traditional steel rebar in terms of strength?",
    answer:
      "FRP rebar has a tensile strength comparable to or exceeding that of steel rebar, while being significantly lighter. The modulus of elasticity may be different, so proper engineering design is essential to ensure optimal performance in your specific application.",
  },
  {
    question: "What types of projects are best suited for FRP rebar?",
    answer:
      "FRP rebar is ideal for marine structures, parking garages, bridges, tunnels, and any concrete structure exposed to de-icing salts or chemical environments. It's also excellent for projects requiring non-magnetic properties or where future MRI compatibility is needed.",
  },
  {
    question: "Is FRP rebar more expensive than steel rebar?",
    answer:
      "While the initial cost of FRP rebar may be higher than steel, the long-term savings from reduced maintenance, longer lifespan, and elimination of corrosion-related repairs often make it more cost-effective over the structure's lifetime.",
  },
  {
    question: "How do I properly install FRP rebar?",
    answer:
      "FRP rebar installation is similar to steel rebar but requires specific techniques. Use proper cutting tools, maintain adequate concrete cover, and follow manufacturer guidelines for bending radii and connection methods. We provide detailed installation guides and technical support.",
  },
  {
    question: "What design codes and standards apply to FRP rebar?",
    answer:
      "FRP rebar design follows standards such as ACI 440.1R, CSA S806, and various international codes. Our technical team can help ensure your project meets all applicable standards and provide necessary documentation for approvals.",
  },
];

const NewFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <div className="faq-badge">
            <div className="faq-badge-dot"></div>
            <span className="faq-badge-text">FAQ</span>
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Get answers to common questions about FRP rebar and our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-items-container">
          <div className="faq-items-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-question-button"
                  aria-expanded={openFAQ === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    className={`faq-chevron ${
                      openFAQ === index ? "rotated" : ""
                    }`}
                  />
                </button>

                <div
                  className={`faq-answer-container ${
                    openFAQ === index ? "open" : "closed"
                  }`}
                >
                  <div className="faq-answer-text">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="faq-contact-cta">
          <div className="faq-contact-card">
            <HelpCircle className="faq-contact-icon" />
            <h3 className="faq-contact-title">Still have questions?</h3>
            <p className="faq-contact-text">
              We're here for you! Whether it's about performance, pricing, or
              project suitability — our team is ready to assist.
            </p>
            <div className="faq-contact-buttons">
              <button className="faq-btn-primary">
                Contact Us
                <ArrowRight className="faq-btn-icon" />
              </button>
              <button className="faq-btn-secondary">Get Started</button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="faq-bottom-cta">
          <div className="faq-bottom-content">
            <div>
              <h3 className="faq-bottom-title">
                Ready to build stronger? Let's get started.
              </h3>
              <p className="faq-bottom-text">
                See how simple it is to strengthen your project with advanced,
                corrosion-free rebar solutions. Whether you're ready to build or
                just exploring, we're here to support every step.
              </p>
              <div className="faq-bottom-buttons">
                <button className="faq-btn-white">
                  Contact Us
                  <ArrowRight className="faq-btn-icon" />
                </button>
                <button className="faq-btn-outline">Get Started</button>
              </div>
            </div>
            <div className="faq-decorative-shapes">
              <div className="faq-shape-large"></div>
              <div className="faq-shape-small"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFAQSection;
