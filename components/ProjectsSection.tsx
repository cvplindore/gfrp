"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

import { motion } from "framer-motion";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import { useLoader } from "./LoaderContext";

const ProjectsSection = () => {
  const applications = [
    {
      title: "Industrial construction",
      icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/subway-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
    },
    {
      title: "Civil construction",
      icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/house-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
    },
    {
      title: "Road construction",
      icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/road-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
    },
    {
      title: "Marine and harbor",
      icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/electric-factory-r1c6owc7oqhxevs3jl6ulurdtuqvywejyj7p37ci1k.png",
    },
    {
      title: "Agricultural structures",
      icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/school-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
    },
    {
      title: "Reinforcement",
      icon: "https://composite-tech.com/wp-content/uploads/elementor/thumbs/bridge-r1c6ovedhwgn39tgp2s81czx8gvir7atmek7lxdw7s.png",
    },
  ];

  const sliderImages = [
    "https://i.postimg.cc/DZST0Mrs/8822efb512bc43b32ba7a801e2ccfc83.jpg",
    "https://i.postimg.cc/g0wSZF7Y/22-r1c6ovelaknvu32s7gtck3rekd3nuf5eg18o2u977c.jpg",
    "https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb1b5b7337bfcaa94d911d_services%20(3).webp",
  ];

  const [productss, setProductss] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/single_product_section/") // your Django endpoint
      .then((response) => {
        setProductss(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  

  if (!productss) return;
  
  const { setHideLoader } = useLoader();
  
    function doReverse(e) {
      // e.preventDefault();
      setHideLoader(false);
  
      setTimeout(() => {
        setHideLoader(true);
      }, 4000);
    }

  const ProjectBlock = () => (
    <div className="project_block">
      <div className="projects_left-container">
        <h2 className="projects_main-heading cc-heading-h5">
          FIBERGLASS REBAR (GFRP)
        </h2>
        <p className="projects_block-subtext cc-title-small">
          GFRP, or Glass Fiber Reinforced Polymer, is a composite material that
          has the potential to be transformative in various constructive
          industries.
        </p>
        <div className="projects_tags-wrap">
          <div className="projects_tag-icon-text">
            <Image
              src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1e9f259878c435a4903e_SolarPanel.webp"
              loading="lazy"
              alt=""
              className="projects_tag-icon"
              width={24}
              height={24}
            />
            <div className="projects_tag-text">FIBERGLASS</div>
          </div>
        </div>
        <div className="projects_result-wrap">
          <h3 className="project_result-heading cc-caption">Application</h3>
          <div className="projects_result-grid">
            {applications.map((app, index) => (
              <div key={index} className="projects_result-stats-wrap">
                <h4 className="project_result-stat-heading cc-caption">
                  {app.title}
                </h4>
                <p className="projects_result-wrap-value cc-subtitle">
                  <Image
                    height={35}
                    width={34}
                    className="about_list-icon"
                    src={app.icon}
                    alt=""
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
        <Link
          data-wf--cta-link--variant="primary"
          href=""
          className="cta-linkblock cc-is-primary w-inline-block"
          onClick={doReverse}
        >
          <div className="cta-linkblock_text">VIEW product</div>
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
      <div className="projects_right-container">
        <div
          data-delay="4000"
          data-animation="slide"
          className="project_slider w-slider"
          data-autoplay="false"
          data-easing="ease"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="500"
          data-infinite="true"
        >
          <div className="project_slider-mask w-slider-mask">
            {sliderImages.map((img, index) => (
              <div key={index} className="project_slider-slide w-slide">
                <div className="project_slider-image-wrapper">
                  <Image
                    src={img}
                    loading="lazy"
                    alt=""
                    sizes="100vw"
                    className="project_slider-image"
                    width={560}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="project_slider-arrow left-arrow w-slider-arrow-left">
            <Image
              src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb21d820eccea2746fab96_Vector.svg"
              loading="lazy"
              alt=""
              className="project_slider-arrow-icon left-arrow"
              width={16}
              height={16}
            />
          </div>
          <div className="project_slider-arrow w-slider-arrow-right">
            <Image
              src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb21d820eccea2746fab96_Vector.svg"
              loading="lazy"
              alt=""
              className="project_slider-arrow-icon"
              width={16}
              height={16}
            />
          </div>
          <div className="project_silder-nav hide w-slider-nav w-round w-num"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="section_projects">
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="projects_wrapper">
            <div className="projects_top-container">
              <div className="services_top-container project-section">
                <FadeInOnScroll>
                  <div className="about-us_text-dot-wrap">
                    <div
                      className="about-us_heading-dot"
                      style={{ backgroundColor: "#ff6b35" }}
                    ></div>
                    <div className="about-us_heading">Machine</div>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll delay={0.2}>
                  <h2 className="services_main-heading cc-heading-h3">
                    {productss.title}
                  </h2>
                </FadeInOnScroll>
              </div>
              <FadeInOnScroll delay={0.2}>
                <Link
                  href="/product"
                  className="projects_linkblock w-inline-block"
                  onClick={doReverse}
                >
                  <div className="projects_cta-text">View all products</div>
                  <Image
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1d94ffa650511871a81c_Vector%20(1).svg"
                    loading="lazy"
                    alt=""
                    className="projects_cta-arrow"
                    width={16}
                    height={16}
                  />
                </Link>
              </FadeInOnScroll>
            </div>
            <div className="projects-collection-list-wrapper w-dyn-list">
              <div role="list" className="projects-collection-list w-dyn-items">
                {productss?.single_products
                  ?.slice(0, 3)
                  .map((product, index) => (
                    <React.Fragment key={index}>
                      <motion.div
                        role="listitem"
                        className="projects-collection-item w-dyn-item"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.7,
                          ease: "easeOut",
                          delay: index * 0.2,
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <div className="project_block">
                          <div className="projects_left-container">
                            <h2 className="projects_main-heading cc-heading-h5">
                              {product.title}
                            </h2>
                            <p
                              className="projects_block-subtext cc-title-small"
                              dangerouslySetInnerHTML={{
                                __html: product.description,
                              }}
                            >
                              {/* GFRP, or Glass Fiber Reinforced Polymer, is a
                          composite material that has the potential to be
                          transformative in various constructive industries. */}
                            </p>
                            <div className="projects_tags-wrap">
                              <div className="projects_tag-icon-text">
                                <Image
                                  src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1e9f259878c435a4903e_SolarPanel.webp"
                                  loading="lazy"
                                  alt=""
                                  className="projects_tag-icon"
                                  width={24}
                                  height={24}
                                />
                                <div className="projects_tag-text">
                                  {product.tag}
                                </div>
                              </div>
                            </div>
                            <div className="projects_result-wrap">
                              <h3 className="project_result-heading cc-caption">
                                Application
                              </h3>
                              <div className="projects_result-grid">
                                {product.application?.map((app, indexS) => (
                                  <div
                                    key={indexS}
                                    className="projects_result-stats-wrap"
                                  >
                                    <h4 className="project_result-stat-heading cc-caption">
                                      {app.title}
                                    </h4>
                                    <p className="projects_result-wrap-value cc-subtitle">
                                      <Image
                                        height={35}
                                        width={34}
                                        className="about_list-icon"
                                        src={app.image}
                                        alt=""
                                      />
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <Link
                              data-wf--cta-link--variant="primary"
                              href="/contact"
                              className="cta-linkblock cc-is-primary w-inline-block"
                              onClick={doReverse}
                            >
                              <div className="cta-linkblock_text">
                                Contact us
                              </div>
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
                          <div className="projects_right-container">
                            <div
                              data-delay="100"
                              data-animation="slide"
                              className="project_slider w-slider"
                              data-autoplay="false"
                              data-easing="ease"
                              data-hide-arrows="true"
                              data-disable-swipe="false"
                              data-autoplay-limit="0"
                              data-nav-spacing="3"
                              data-duration="100"
                              data-infinite="true"
                            >
                              <div className="project_slider-mask w-slider-mask">
                                {/* {product.image?.map((img, inD) => ( */}
                                <div
                                  // key={inD}
                                  className="project_slider-slide w-slide"
                                >
                                  <div className="project_slider-image-wrapper">
                                    <Image
                                      src={product.image}
                                      loading="lazy"
                                      alt=""
                                      sizes="100vw"
                                      className="project_slider-image"
                                      width={560}
                                      height={400}
                                    />
                                  </div>
                                </div>
                                {/* // ))} */}
                                {/* {sliderImages.map((img, index) => (
                                <div
                                  key={index}
                                  className="project_slider-slide w-slide"
                                >
                                  <div className="project_slider-image-wrapper">
                                    <Image
                                      src={img}
                                      loading="lazy"
                                      alt=""
                                      sizes="100vw"
                                      className="project_slider-image"
                                      width={560}
                                      height={400}
                                    />
                                  </div>
                                </div>
                              ))} */}
                              </div>
                              {/* <div className="project_slider-arrow left-arrow w-slider-arrow-left">
                              <Image
                                src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb21d820eccea2746fab96_Vector.svg"
                                loading="lazy"
                                alt=""
                                className="project_slider-arrow-icon left-arrow"
                                width={16}
                                height={16}
                              />
                            </div>
                            <div className="project_slider-arrow w-slider-arrow-right">
                              <Image
                                src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb21d820eccea2746fab96_Vector.svg"
                                loading="lazy"
                                alt=""
                                className="project_slider-arrow-icon"
                                width={16}
                                height={16}
                              />
                            </div> */}
                              <div className="project_silder-nav hide w-slider-nav w-round w-num"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </React.Fragment>
                  ))}
                <div
                  role="listitem"
                  className="projects-collection-item w-dyn-item"
                >
                  {/* <ProjectBlock /> */}
                </div>
                <div
                  role="listitem"
                  className="projects-collection-item w-dyn-item"
                >
                  {/* <ProjectBlock /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
