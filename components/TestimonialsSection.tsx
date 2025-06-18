"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeInOnScroll from "./animation/FadeInOnScroll";

const TestimonialsSection = () => {
  const testimonials = Array(3).fill({
    quote:
      "Switching to GFRP was the best decision for our project. It's lighter, corrosion-free, and saved us both time and cost. Truly the future of construction materials.",
    author: {
      name: "Someone hehe",
      position: "CEO & Founder",
      image:
        "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb30fb6430868c6d4e7c02_services%20(1).webp",
    },
  });

  return (
    <section className="section_testimonials">
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="testimonials_wrapper">
            <div className="projects_top-container">
              <div className="services_top-container project-section quotes-section">
                <FadeInOnScroll>
                  <div className="about-us_text-dot-wrap">
                    <div
                      className="about-us_heading-dot"
                      style={{ backgroundColor: "#ff6b35" }}
                    ></div>
                    <div className="about-us_heading">TESTIMONIALS</div>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll delay={0.2}>
                  <h2 className="services_main-heading cc-heading-h3">
                    Real results, real feedback
                  </h2>
                </FadeInOnScroll>
              </div>
            </div>
            <div className="testimonials_wrap">
              <div className="testimonials_block">
                <div
                  data-w-id="fb0d7b91-07ea-728e-9666-f2f77af72078"
                  className="testi-content_wrap"
                >
                  <div className="test_content-top-wrap">
                    <Image
                      src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb2fbe031551176edd3db8_icon%20(1).svg"
                      loading="lazy"
                      alt=""
                      className="testi_quote-icon"
                      width={48}
                      height={48}
                    />
                    <p className="testi_quote-text">
                      From consultation to installation, Solvance exceeded our
                      expectations. Our business now runs on clean energy, and
                      we're seeing major savings.
                    </p>
                    <div className="testi_stars-wrap">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb2fbe61da538d1de86982_icon%20(2).svg"
                          loading="lazy"
                          alt=""
                          className="tseti_star-image"
                          width={16}
                          height={16}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="testi_author-wrap">
                    <div className="testi_author-image-wrap">
                      <Image
                        src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb30fb6430868c6d4e7c02_services%20(1).webp"
                        loading="lazy"
                        alt="Jakob Stanton portrait"
                        className="testi_author-image"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="testi_author-details">
                      <h3 className="testi_author-name">Jakob Stanton</h3>
                      <div className="testi_author-position">
                        CEO &amp; Founder
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials_content-container">
              <div
                data-delay="2000"
                data-animation="slide"
                className="quotes_slider w-slider"
                data-autoplay="true"
                data-easing="ease"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-autoplay-limit="0"
                data-nav-spacing="3"
                data-duration="500"
                data-infinite="true"
              >
                <div className="quotes_slider-mask w-slider-mask">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className="quotes_slider-slide w-slide"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div className="quotes_slider-container">
                        <div className="quotes_slider-top-container">
                          <svg
                            className="quotes_slider-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="54"
                            height="44"
                            viewBox="0 0 54 44"
                          >
                            <path
                              fill="#FF6B35"
                              d="M4.84251 6.737C8.58384 2.681 14.2452 0.625 21.6665 0.625H24.3332V8.14233L22.1892 8.57166C18.5358 9.30233 15.9945 10.7397 14.6345 12.849C13.9247 13.9852 13.5222 15.2864 13.4665 16.625H21.6665C22.3738 16.625 23.052 16.9059 23.5521 17.406C24.0522 17.9061 24.3332 18.5844 24.3332 19.2917V37.9583C24.3332 40.8997 21.9412 43.2917 18.9998 43.2917H2.99984C2.2926 43.2917 1.61432 43.0107 1.11422 42.5106C0.614125 42.0105 0.333174 41.3322 0.333174 40.625V27.2917L0.341174 19.5077C0.317174 19.2117 -0.189493 12.1983 4.84251 6.737ZM48.3332 43.2917H32.3332C31.6259 43.2917 30.9477 43.0107 30.4476 42.5106C29.9475 42.0105 29.6665 41.3322 29.6665 40.625V27.2917L29.6745 19.5077C29.6505 19.2117 29.1438 12.1983 34.1758 6.737C37.9172 2.681 43.5785 0.625 50.9998 0.625H53.6665V8.14233L51.5225 8.57166C47.8692 9.30233 45.3278 10.7397 43.9678 12.849C43.258 13.9852 42.8555 15.2864 42.7998 16.625H50.9998C51.7071 16.625 52.3854 16.9059 52.8855 17.406C53.3856 17.9061 53.6665 18.5844 53.6665 19.2917V37.9583C53.6665 40.8997 51.2745 43.2917 48.3332 43.2917Z"
                            />
                          </svg>
                          <p className="quotes_slider-text">
                            {testimonial.quote}
                          </p>
                          <svg
                            className="quotes_slider-icon right-aligned"
                            xmlns="http://www.w3.org/2000/svg"
                            width="54"
                            height="44"
                            viewBox="0 0 54 44"
                            fill="none"
                          >
                            <path
                              fill="#FF6B35"
                              d="M49.1575 37.3802C45.4162 41.4362 39.7548 43.4922 32.3335 43.4922L29.6668 43.4922L29.6668 35.9749L31.8108 35.5455C35.4642 34.8149 38.0055 33.3775 39.3655 31.2682C40.0753 30.1319 40.4778 28.8308 40.5335 27.4922L32.3335 27.4922C31.6263 27.4922 30.948 27.2112 30.4479 26.7111C29.9478 26.211 29.6668 25.5328 29.6668 24.8255L29.6668 6.15886C29.6668 3.21753 32.0588 0.825529 35.0002 0.825529L51.0002 0.825531C51.7074 0.825531 52.3857 1.10648 52.8858 1.60658C53.3859 2.10667 53.6668 2.78495 53.6668 3.4922L53.6668 16.8255L53.6588 24.6095C53.6828 24.9055 54.1895 31.9189 49.1575 37.3802ZM5.66683 0.825527L21.6668 0.825528C22.3741 0.825528 23.0524 1.10648 23.5524 1.60658C24.0525 2.10667 24.3335 2.78495 24.3335 3.49219L24.3335 16.8255L24.3255 24.6095C24.3495 24.9055 24.8562 31.9189 19.8242 37.3802C16.0828 41.4362 10.4215 43.4922 3.00016 43.4922L0.333488 43.4922L0.333489 35.9749L2.47749 35.5455C6.13083 34.8149 8.67215 33.3775 10.0322 31.2682C10.742 30.1319 11.1445 28.8308 11.2002 27.4922L3.00016 27.4922C2.29291 27.4922 1.61463 27.2112 1.11454 26.7111C0.614439 26.211 0.33349 25.5328 0.33349 24.8255L0.333492 6.15886C0.333492 3.21752 2.72549 0.825527 5.66683 0.825527Z"
                            />
                          </svg>
                        </div>
                        <div className="testi_author-wrap">
                          <div className="testi_author-image-wrap">
                            <Image
                              src={testimonial.author.image}
                              loading="lazy"
                              alt={`${testimonial.author.name} portrait`}
                              className="testi_author-image"
                              width={60}
                              height={60}
                            />
                          </div>
                          <div className="testi_author-details">
                            <h3 className="testi_author-name">
                              {testimonial.author.name}
                            </h3>
                            <div className="testi_author-position">
                              {testimonial.author.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="quotes_slider-arrow left-arrow w-slider-arrow-left">
                  <Image
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/683d6fc35c7d2f6b118a9445_Vector%20(2).svg"
                    loading="lazy"
                    alt=""
                    className="quotes_slider-arrow-icon"
                    width={16}
                    height={16}
                  />
                </div>
                <div
                  data-w-id="f518b70b-ea65-64cb-40a4-566f0dccef2a"
                  className="quotes_slider-arrow w-slider-arrow-right"
                >
                  <Image
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/683d6fc35c7d2f6b118a9445_Vector%20(2).svg"
                    loading="lazy"
                    alt=""
                    className="quotes_slider-arrow-icon rotate-right"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="quotes_slider-slide-nav hide w-slider-nav w-round w-num"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
