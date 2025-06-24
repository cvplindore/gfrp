"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import axios from "axios";
import { motion } from "framer-motion";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import Link from "next/link";
import { useLoader } from "./LoaderContext";



const ProductSection = () => {
  const [pro, setPro] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/production_section/") // your Django endpoint
      .then((response) => {
        setPro(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  if (!pro) return;
  
  const { setHideLoader } = useLoader();
  
    function doReverse(e) {
      // e.preventDefault();
      setHideLoader(false);
  
      setTimeout(() => {
        setHideLoader(true);
      }, 4000);
    }

    return (
      <section className="section_services">
        <div className="padding-global padding-0">
          <div className="container-large">
            <div className="services_wrapper">
              <div className="services_top-container">
                <FadeInOnScroll>
                  <div className="about-us_text-dot-wrap">
                    <div
                      className="about-us_heading-dot"
                      // style="background-color: #ff6b35 !important"
                    ></div>
                    <div className="about-us_heading text-color-white">
                      Production
                    </div>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll delay={0.2}>
                  <h2
                    data-w-id="6fd54922-a902-7954-8109-83971e914c84"
                    //   style="opacity: 0"
                    className="services_main-heading cc-heading-h3 text-color-white"
                  >
                    {pro.title}
                  </h2>
                </FadeInOnScroll>
              </div>
              <div className="services_block-list">
                {pro.production_sections.map((item, index) => (
                  <motion.div
                    // className="services_block"
                    className={`services_block ${
                      index % 2 !== 0 ? "alternate" : ""
                    }`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="services_block-image-wrap">
                      {/* <iframe
                        className="services_block-image"
                        src="https://www.youtube.com/embed/A29mMdhdqCk"
                        title="Composite reinforcement manufacturing: The best business of 2025"
                      ></iframe> */}
                      <img
                        className="services_block-image"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="services_content-wrap">
                      <div className="services_content-top-wrap">
                        <img
                          src="https://i.postimg.cc/WbzjdxX3/svgviewer-png-output-6.png"
                          loading="lazy"
                          alt=""
                          className="services_content-intro-icon"
                        />
                        <h3
                          className="services_block-heading cc-heading-h6"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        >
                          {/* {item.title} */}
                        </h3>
                        <p
                          className="services_block-subtext cc-title-small"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        >
                          {/* Our FRP Rebar production line has been perfected over
                          the course of the last 10 years and has now reached
                          its peak product stage. */}
                        </p>
                        <ul
                          role="list"
                          className="about-us_content-iist services-list"
                        >
                          {item.sections.map((listItem, idx) => (
                            <React.Fragment key={idx}>
                              <li className="about-us_list-item">
                                <svg
                                  className="about_list-icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="25"
                                  viewBox="0 0 24 25"
                                  fill="none"
                                >
                                  <circle
                                    cx="12"
                                    cy="12.3596"
                                    r="12"
                                    fill="#FF6B35"
                                  />
                                  <path
                                    d="M17 8.60962L10.125 15.4846L7 12.3596"
                                    stroke="#143A2B"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <div
                                  className="about-us_list-text cc-title-small"
                                  dangerouslySetInnerHTML={{
                                    __html: listItem.title,
                                  }}
                                >
                                  {/* Diameter of products:
                                  <span style={{ color: "#ff6b35 !important" }}>
                                    from 2 mm to 30 mm.
                                  </span> */}
                                </div>
                              </li>
                            </React.Fragment>
                          ))}
                        </ul>
                      </div>
                      <Link
                        data-wf--cta-link--variant="primary"
                        href="/contact"
                        className="cta-linkblock cc-is-primary w-inline-block"
                        onClick={doReverse}
                      >
                        <div className="cta-linkblock_text">Contact Us</div>
                        <div className="cta-icon_wrap">
                          <div className="cta-btn_icon w-embed">
                            <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
                          </div>
                          <div className="cta-btn_icon is-absolute w-embed">
                            <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ProductSection;
