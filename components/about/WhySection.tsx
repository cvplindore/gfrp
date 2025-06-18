import axios from "axios";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import FadeInOnScroll from "../animation/FadeInOnScroll";
import Link from "next/link";


export default function WhySection() {
  const [why, setWhy] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/get_why/") // your Django endpoint
      .then((response) => {
        setWhy(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  if (!why) return;


    return (
      <section className="section_why">
        <div className="padding-global padding-0">
          <div className="container-large">
            <div className="why_wrapper">
              <div className="why_top-container">
                <div className="why_left-wrapper">
                  <FadeInOnScroll>
                    <div className="about-us_text-dot-wrap">
                      <div className="about-us_heading-dot cc-white"></div>
                      <div className="about-us_heading cc-white">WHY US</div>
                    </div>
                  </FadeInOnScroll>
                  <FadeInOnScroll delay={0.2}>
                    <h2 className="why_main-heading cc-heading-h3">
                      {why.title}
                    </h2>
                  </FadeInOnScroll>
                </div>
                <FadeInOnScroll delay={0.2}>
                  <div className="why_right-wrapper">
                    <p
                      className="why_subtext cc-title-small"
                      dangerouslySetInnerHTML={{
                        __html: why.description,
                      }}
                    >
                      {/* We take pride in delivering high-quality, future-proof
                    renewable energy solutions. With years of experience and a
                    team of certified experts, we ensure every project meets the
                    highest standards of performance and reliability. */}
                    </p>
                  </div>
                </FadeInOnScroll>
              </div>
              <div className="why-us_grid">
                {why.why.map((w, index) => (
                  <motion.div
                    data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                    className="why-us_block"
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img
                      src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eab008007707e9347a34fc_Vector.svg"
                      loading="lazy"
                      alt=""
                      className="why-us_block-icon"
                    />
                    <h3 className="why-us_block-heading cc-subtitle">
                      {w.title}
                    </h3>
                    <p
                      className="why-us_block-subtext cc-title-small"
                      dangerouslySetInnerHTML={{
                        __html: w.description,
                      }}
                    >
                      {/* Our team is skilled in designing and implementing energy
                      systems for all types of properties. */}
                    </p>
                  </motion.div>
                ))}
                {/* <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eab008007707e9347a34fc_Vector.svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    Expert installation
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    Our team is skilled in designing and implementing energy
                    systems for all types of properties.
                  </p>
                </div> */}
                {/* <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eab00819cf6f33d14688de_Vector-1.svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    Premium technology
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    We partner with leading manufacturers to bring you the best
                    solar, battery, and EV charging solutions.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eab008455fd1b585bf093d_Vector-2.svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    Long-term savings
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    Our energy solutions are designed to reduce electricity
                    costs and maximize efficiency.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eab008942f40cdf59bee82_Vector-3.svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    End-to-end support
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    From consultation to installation and maintenance, we
                    provide full-service solutions tailored to your needs.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eab008d8f2df5cf6634279_Vector-4.svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    Financing options available
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    Flexible payment plans and financing solutions to make
                    renewable energy accessible for everyone.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eab0081b077cfe120d8c83_Vector-5.svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    Proven track record
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    Thousands of successful installations and satisfied
                    customers across residential, commercial, and industrial
                    sectors.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}