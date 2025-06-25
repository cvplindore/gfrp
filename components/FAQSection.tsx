"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import "./FAQSection.css"

import { motion } from "framer-motion";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import { useLoader } from "./LoaderContext";
import axios from "axios";

interface FAQItem {
  question: string;
  answer: string;
}

// const faqs: FAQItem[] = [
//   {
//     question:
//       "What are the main benefits of using fiber-reinforced polymer (FRP) rebar?",
//     answer:
//       "FRP rebar offers superior corrosion resistance, is lightweight yet strong, and provides excellent durability in harsh environments. Unlike traditional steel rebar, FRP won't rust or corrode, making it ideal for marine structures, bridges, and buildings in corrosive environments.",
//   },
//   {
//     question:
//       "How does FRP rebar compare to traditional steel rebar in terms of strength?",
//     answer:
//       "FRP rebar has a tensile strength comparable to or exceeding that of steel rebar, while being significantly lighter. The modulus of elasticity may be different, so proper engineering design is essential to ensure optimal performance in your specific application.",
//   },
//   {
//     question: "What types of projects are best suited for FRP rebar?",
//     answer:
//       "FRP rebar is ideal for marine structures, parking garages, bridges, tunnels, and any concrete structure exposed to de-icing salts or chemical environments. It's also excellent for projects requiring non-magnetic properties or where future MRI compatibility is needed.",
//   },
//   {
//     question: "Is FRP rebar more expensive than steel rebar?",
//     answer:
//       "While the initial cost of FRP rebar may be higher than steel, the long-term savings from reduced maintenance, longer lifespan, and elimination of corrosion-related repairs often make it more cost-effective over the structure's lifetime.",
//   },
//   {
//     question: "How do I properly install FRP rebar?",
//     answer:
//       "FRP rebar installation is similar to steel rebar but requires specific techniques. Use proper cutting tools, maintain adequate concrete cover, and follow manufacturer guidelines for bending radii and connection methods. We provide detailed installation guides and technical support.",
//   },
//   {
//     question: "What design codes and standards apply to FRP rebar?",
//     answer:
//       "FRP rebar design follows standards such as ACI 440.1R, CSA S806, and various international codes. Our technical team can help ensure your project meets all applicable standards and provide necessary documentation for approvals.",
//   },
// ];


const faqs: FAQItem[] = [
  {
    question: "What types of GFRP machinery do you offer?",
    answer:
      "We provide production lines for GFRP rebar, fiberglass mesh, bent elements, and fiber cutting systems, with models tailored for different capacities and automation needs.",
  },
  {
    question: "What is the expected ROI for a GFRP production line?",
    answer:
      "Most clients recover their investment within 3 months, depending on production scale and local market conditions.",
  },
  {
    question: "What raw materials are needed for GFRP production?",
    answer:
      "You will need fiberglass roving, thermosetting resin (polyester, vinyl ester, or epoxy), catalysts, and optional sand coating for construction applications.",
  },
  {
    question: "Can your machines work with other fibers like basalt or carbon?",
    answer:
      "Yes, with specific adaptations, our machines can process basalt or carbon fiber for specialized applications.",
  },
  {
    question: "How long does installation and training take?",
    answer:
      "Standard installation takes 2–3 working days, with operator training usually completed in 1–2 days.",
  },
  {
    question: "Do you provide post-installation technical support?",
    answer:
      "Yes, we offer lifetime remote support, technical consultations, and spare parts supply globally.",
  },
  {
    question: "What is the production capacity of your machines?",
    answer:
      "Our high-capacity lines can produce up to 6 GFRP rods simultaneously, yielding over 50,000 meters per day.",
  },
  {
    question: "Are your machines compliant with international standards?",
    answer:
      "Yes, our equipment is designed to produce GFRP rebar that meets ASTM, ISO, and other international standards.",
  },
  {
    question: "What is the minimum investment required?",
    answer:
      "A small-scale GFRP rebar production line starts at around $80,000–$95,000, depending on capacity and automation.",
  },
  {
    question:
      "Can the machines be customized for different rebar sizes and shapes?",
    answer:
      "Yes, we offer custom mandrels for various diameters and can design molds for special profiles.",
  },
  {
    question: "Do you help with factory layout and site setup?",
    answer:
      "We provide detailed layout plans and guidance for optimal equipment placement and workflow after order confirmation.",
  },
];

const FAQSection = () => {
  // const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // const faqs = Array(5).fill({
  //   question: "What's the lifespan of GFRP rebar?",
  //   answer:
  //     "GFRP rebar lasts over 100 years without rusting, unlike steel which corrodes over time.",
  // });

  // const toggleFAQ = (index: number) => {
  //   setOpenFAQ(openFAQ === index ? null : index);
  // };


  // the correctd one

  // const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  //   const toggleFAQ = (index: number) => {
  //     setOpenFAQ(openFAQ === index ? null : index);
  //   };
  
  // const { setHideLoader } = useLoader();


  const [faqs, setFaqs] = useState([]); // ✅ state to hold FAQ list
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const { setHideLoader } = useLoader();

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  
    function doReverse(e) {
      // e.preventDefault();
      setHideLoader(false);
  
      setTimeout(() => {
        setHideLoader(true);
      }, 4000);
    }
  
  
    useEffect(() => {
      axios
        .get("https://gfrp-india.onrender.com/api/faq_section_list/") // your Django endpoint
        .then((response) => {
          setFaqs(response.data); // it's a single object, not an array
        })
        .catch((error) => {
          console.error("Error fetching hero section:", error);
        });
    }, []);

  return (
    <section data-wf--faqs-section--variant="base" className="section_faqs">
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="faqs_wrapper">
            <div className="faqs_top-container">
              <div className="services_top-container project-section faqs-section">
                <FadeInOnScroll>
                  <div className="about-us_text-dot-wrap">
                    <div
                      className="about-us_heading-dot"
                      style={{ backgroundColor: "#ff6b35" }}
                    ></div>
                    <div className="about-us_heading">FAQ</div>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll delay={0.2}>
                  <h2 className="services_main-heading cc-heading-h3">
                    Frequently Asked Questions
                  </h2>
                </FadeInOnScroll>
              </div>
            </div>
            <div className="faqs_middle-container">
              {/* <div className="faqs_list-wrapper">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    data-delay="0"
                    data-hover="false"
                    data-w-id="8d08a1a1-6066-6e37-084e-8d676de86fa7"
                    className="faq_item w-dropdown"
                  >
                    <div
                      className="faq_header w-dropdown-toggle"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="faq_text cc-subtitle">{faq.question}</div>
                      <Image
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb358822200a634bc281ce_Frame.webp"
                        alt=""
                        className="faq_icon"
                        width={24}
                        height={24}
                      />
                    </div>
                    <nav
                      className={`faq_body w-dropdown-list ${
                        openFAQ === index ? "w--open" : ""
                      }`}
                    >
                      <div className="faq_body-wrap">
                        <p className="faq_answer cc-subtitle">{faq.answer}</p>
                      </div>
                    </nav>
                  </div>
                ))}
              </div> */}
              <div className="faq-items-container">
                <div className="faq-items-list">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="faq-item"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="faq-question-button"
                        aria-expanded={openFAQ === index}
                      >
                        <span className="faq-question-text">
                          {faq.question}
                        </span>
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
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="faqs_cta-text-wrap">
                <FadeInOnScroll>
                  <div className="faqs_cta-wrap">
                    <Link
                      data-wf--cta-link--variant="primary"
                      href="/contact"
                      className="cta-linkblock cc-is-primary w-inline-block"
                      onClick={doReverse}
                    >
                      <div className="cta-linkblock_text">Contact Us</div>
                      <div className="cta-icon_wrap">
                        <div className="cta-btn_icon w-embed">
                          <Image
                            src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
                            alt="Arrow"
                            width={16}
                            height={16}
                          />
                        </div>
                        <div className="cta-btn_icon is-absolute w-embed">
                          <Image
                            src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
                            alt="Arrow"
                            width={16}
                            height={16}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                  <p className="faqs_contact-text">
                    Still have questions? We're here for you! Whether it's about
                    performance, pricing, or project suitability — our team is
                    ready to assist.
                  </p>
                </FadeInOnScroll>
              </div>
            </div>
            {/* <FadeInOnScroll delay={0.2}>
              <div className="faqs_bottom-container">
                <h3 className="faqs_footer-heading cc-heading-h3">
                  Ready to build stronger? Let's get started.
                </h3>
                <div className="faqs_footer-right-container">
                  <p className="faqs_footer-text">
                    See how simple it is to strengthen your project with
                    advanced, corrosion-free rebar solutions. Whether you're
                    ready to build or just exploring, we're here to support
                    every step.
                  </p>
                  <div className="faqs_cta-group">
                    <Link
                      data-wf--cta-link--variant="primary"
                      href="/contact"
                      className="cta-linkblock cc-is-primary w-inline-block"
                      onClick={doReverse}
                    >
                      <div className="cta-linkblock_text">Contact Us</div>
                      <div className="cta-icon_wrap">
                        <div className="cta-btn_icon w-embed">
                          <Image
                            src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
                            alt="Arrow"
                            width={16}
                            height={16}
                          />
                        </div>
                        <div className="cta-btn_icon is-absolute w-embed">
                          <Image
                            src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
                            alt="Arrow"
                            width={16}
                            height={16}
                          />
                        </div>
                      </div>
                    </Link>
                    <Link href="/contact" className="cta-link" onClick={doReverse}>
                      Get started
                    </Link>
                  </div>
                </div>
                <Image
                  src="https://i.postimg.cc/13PtYySz/Untitled-design.png"
                  loading="lazy"
                  sizes="(max-width: 2880px) 100vw, 2880px"
                  alt=""
                  className="faqs_bottom-container-bg"
                  width={2880}
                  height={800}
                />
              </div>
            </FadeInOnScroll> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
