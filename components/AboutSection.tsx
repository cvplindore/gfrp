"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import axios from "axios";
import Link from "next/link";

const AboutSection = () => {
  const benefits = [
    {
      icon: "https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png",
      title: "Corrosion-Free",
      description:
        "FRP rebars are completely corrosion-resistant, making them ideal for coastal and moisture-prone structures.",
    },
    {
      icon: "https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png",
      title: "High Strength",
      description:
        "With superior tensile strength, FRP offers a much stronger alternative to traditional steel rebars.",
    },
    {
      icon: "https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png",
      title: "Lightweight",
      description:
        "Composite rebars are up to 8 times lighter than steel, allowing for easier handling and faster installation.",
    },
  ];

  const [about, setABout] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/about_section/") // your Django endpoint
      .then((response) => {
        setABout(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);


  const [how, setHow] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/how_to_start_section/") // your Django endpoint
      .then((response) => {
        setHow(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  if (!about) return ;

  if (!how) return ;

  return (
    <section className="section_about-us">
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="about-us_wrapper">
            <div className="about-us_top-container">
              <div className="about-us_images-grid">
                <div
                  id="w-node-_915a36c4-37fe-00ae-37a7-db87cf94b5f3-18425dd7"
                  className="about-us_grid-top-wrap"
                >
                  <motion.div
                    id="w-node-_9c513581-2080-3560-20e3-952e82ee7585-18425dd7"
                    data-w-id="9c513581-2080-3560-20e3-952e82ee7585"
                    // style="opacity: 0"
                    className="about-us_grid-child"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <p className="about-us_grid-child-subtext">
                      {about.testimonial_title}
                    </p>
                    <a href="#" className="about-us_grid-child-link">
                      Read Testimonials
                    </a>
                  </motion.div>
                  <motion.div
                    data-w-id="1ff4d81f-0706-48c0-e636-48ee6329b544"
                    // style="opacity: 0"
                    className="about-us_image-wrap hide-mobile-portrait"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img
                      src={about.image}
                      loading="lazy"
                      alt="two engineers working on the installation of solar"
                      className="about-us_image"
                    />
                  </motion.div>
                </div>
                <motion.div
                  id="w-node-_2901abc5-3e28-7c5f-54ec-8a6273958884-18425dd7"
                  data-w-id="2901abc5-3e28-7c5f-54ec-8a6273958884"
                  // style="opacity: 0"
                  className="about-us_image-wrap ar-video"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <img
                    src={about.image2}
                    loading="lazy"
                    sizes="(max-width: 540px) 100vw, 540px"
                    //   srcSet="
                    //   https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?q=80&w=3046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 500w,
                    //   https://images.unsplash.com/photo-1582540730843-f4418d96ccbe?q=80&w=3046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 540w
                    // "
                    srcSet={`
                      ${about.image2} 500w,
                      ${about.image2} 540w
                    `}
                    alt="view of a house powered by solar"
                    className="about-us_image"
                  />
                </motion.div>
              </div>
              <div className="about-us_heading-subtext-wrap">
                <div>
                  <div className="about-us_text-dot-wrap">
                    <div
                      className="about-us_heading-dot"
                      // style="background-color: #ff6b35 !important"
                      style={{ backgroundColor: "#ff6b35 !important" }}
                    ></div>
                    <div className="about-us_heading">ABOUT US</div>
                  </div>
                  <div className="about-us_header-subtext-wrap">
                    <FadeInOnScroll delay={0.3}>
                      <h2
                        data-w-id="b12550fd-ad1f-7bc9-939e-0399354ddc25"
                        // style="opacity: 0"
                        className="about-us_main-heading cc-heading-h4 cc-about-main"
                      >
                        {about.title}
                      </h2>
                    </FadeInOnScroll>
                    <FadeInOnScroll delay={0.4}>
                      <p
                        data-w-id="c93eee5d-da80-f602-50df-57f01ac036dc"
                        // style="opacity: 0"
                        className="about-us_subtext cc-title-small"
                        dangerouslySetInnerHTML={{ __html: about.description }}
                      >
                        {/* {about.description} */}
                      </p>
                    </FadeInOnScroll>
                  </div>
                </div>
                <motion.div
                  data-w-id="e100a69e-b520-381e-c9c4-8afc7fe2a7bd"
                  // style="opacity: 0"
                  className="about-us_cta-wrapper"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Link
                    data-wf--cta-link--variant="primary"
                    href="/about"
                    className="cta-linkblock cc-is-primary w-inline-block"
                  >
                    <div className="cta-linkblock_text">About Us</div>
                    <div className="cta-icon_wrap">
                      <div className="cta-btn_icon w-embed">
                        <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
                      </div>
                      <div className="cta-btn_icon is-absolute w-embed">
                        <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div
              className="about-us_bottom-container"
              // style="margin-bottom: 70px !important"
            >
              <div className="about_bottom-top-container">
                <div className="about_top-container">
                  <div className="about-us_text-dot-wrap">
                    <div
                      className="about-us_heading-dot"
                      // style="background-color: #ff6b35 !important"
                      style={{ backgroundColor: "#ff6b35 !important" }}
                    ></div>
                    <div className="about-us_heading">How to start</div>
                  </div>
                  <FadeInOnScroll delay={0.2}>
                    <h3
                      data-w-id="b1a5b916-ad4b-ec09-8b9a-178fceef58ae"
                      // style="opacity: 0"
                      className="about-us_subheading cc-heading-h3 cc-about-heading"
                    >
                      {how.title}
                    </h3>
                  </FadeInOnScroll>
                </div>
                <FadeInOnScroll delay={0.3}>
                  <p
                    data-w-id="b50b08c2-3d46-f4f6-a545-016aace99180"
                    // style="opacity: 0"
                    className="about_bottom-container-subtext"
                    dangerouslySetInnerHTML={{ __html: how.description }}
                  ></p>
                </FadeInOnScroll>
              </div>
              <div
                data-w-id="6bd5d468-d52c-5635-0162-90086809d6c9"
                // style="opacity: 0"
                className="about-us_content-grid"
              >
                <motion.div
                  className="about-us_left-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <img
                    src={how.image}
                    loading="lazy"
                    sizes="(max-width: 595px) 100vw, 595px"
                    srcSet={`
                      ${how.image} 500w,
                      ${how.image} 540w
                    `}
                    alt="an engineer installing solar panels on a roof"
                    className="about-us_content-image"
                  />
                </motion.div>
                <div className="about_content-grid">
                  {how.sub_sections.map((step, index) => (
                    <motion.div
                      data-w-id="7d450072-5c84-03cd-4f31-f9966a48dbfd"
                      key={index}
                      // style="opacity: 0"
                      className="about_block"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <img
                        src="https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png"
                        loading="lazy"
                        alt=""
                        className="about_block-icon"
                      />
                      <h3 className="about_block-heading">{step.title}</h3>
                      <p
                        className="about_block-subtext"
                        dangerouslySetInnerHTML={{ __html: step.description }}
                      ></p>
                    </motion.div>
                  ))}
                  {/* <motion.div
                    data-w-id="7d450072-5c84-03cd-4f31-f9966a48dbfd"
                    // style="opacity: 0"
                    className="about_block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img
                      src="https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png"
                      loading="lazy"
                      alt=""
                      className="about_block-icon"
                    />
                    <h3 className="about_block-heading">Corrosion-Free</h3>
                    <p className="about_block-subtext">
                      FRP rebars are completely corrosion-resistant, making them
                      ideal for coastal and moisture-prone structures.
                    </p>
                  </motion.div>
                  <motion.div
                    data-w-id="7d450072-5c84-03cd-4f31-f9966a48dbfd"
                    // style="opacity: 0"
                    className="about_block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img
                      src="https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png"
                      loading="lazy"
                      alt=""
                      className="about_block-icon"
                    />
                    <h3 className="about_block-heading">Corrosion-Free</h3>
                    <p className="about_block-subtext">
                      FRP rebars are completely corrosion-resistant, making them
                      ideal for coastal and moisture-prone structures.
                    </p>
                  </motion.div>
                  <motion.div
                    data-w-id="7d450072-5c84-03cd-4f31-f9966a48dbfd"
                    // style="opacity: 0"
                    className="about_block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img
                      src="https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png"
                      loading="lazy"
                      alt=""
                      className="about_block-icon"
                    />
                    <h3 className="about_block-heading">Corrosion-Free</h3>
                    <p className="about_block-subtext">
                      FRP rebars are completely corrosion-resistant, making them
                      ideal for coastal and moisture-prone structures.
                    </p>
                  </motion.div>
                  <motion.div
                    data-w-id="7d450072-5c84-03cd-4f31-f9966a48dbfd"
                    // style="opacity: 0"
                    className="about_block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img
                      src="https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png"
                      loading="lazy"
                      alt=""
                      className="about_block-icon"
                    />
                    <h3 className="about_block-heading">Corrosion-Free</h3>
                    <p className="about_block-subtext">
                      FRP rebars are completely corrosion-resistant, making them
                      ideal for coastal and moisture-prone structures.
                    </p>
                  </motion.div>
                  <motion.div
                    data-w-id="7d450072-5c84-03cd-4f31-f9966a48dbfd"
                    // style="opacity: 0"
                    className="about_block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img
                      src="https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png"
                      loading="lazy"
                      alt=""
                      className="about_block-icon"
                    />
                    <h3 className="about_block-heading">Corrosion-Free</h3>
                    <p className="about_block-subtext">
                      FRP rebars are completely corrosion-resistant, making them
                      ideal for coastal and moisture-prone structures.
                    </p>
                  </motion.div>
                  <motion.div
                    data-w-id="7d450072-5c84-03cd-4f31-f9966a48dbfd"
                    // style="opacity: 0"
                    className="about_block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img
                      src="https://i.postimg.cc/P5bDPL6T/svgviewer-png-output-5.png"
                      loading="lazy"
                      alt=""
                      className="about_block-icon"
                    />
                    <h3 className="about_block-heading">Corrosion-Free</h3>
                    <p className="about_block-subtext">
                      FRP rebars are completely corrosion-resistant, making them
                      ideal for coastal and moisture-prone structures.
                    </p>
                  </motion.div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
