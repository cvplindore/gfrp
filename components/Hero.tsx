"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import axios from "axios";


const Hero = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/hero_section/") // your Django endpoint
      .then((response) => {
        setHero(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  if (!hero) return ;

  return (
    <section
      className="section_hero home-page"
      style={{
        backgroundImage: `linear-gradient(#0000, #000), url(${hero.image})`,
      }}
    >
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="hero_wrapper home-page">
            <FadeInOnScroll>
              <div
                data-w-id="22769b06-e0f4-5b0b-4c2b-dc7382896b95"
                // style="opacity: 0"
                className="hero_review-wrap"
              >
                <div className="hero_review-wrapper">
                  <div className="hero_review-image-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea986b3a53a8cd2c289a2e_Ellipse%207.webp"
                      loading="lazy"
                      alt=""
                      className="hero_review-image"
                    />
                  </div>
                  <div className="hero_review-image-wrap negative-margin">
                    <img
                      src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea986b692aca8a0971d2ca_Ellipse%209.webp"
                      loading="lazy"
                      alt=""
                      className="hero_review-image"
                    />
                  </div>
                  <div className="hero_review-image-wrap negative-margin">
                    <img
                      src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea986bc004a226f75d1969_Ellipse%208.webp"
                      loading="lazy"
                      alt=""
                      className="hero_review-image"
                    />
                  </div>
                </div>
                <div className="hero_review-text">{hero.small_title}</div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.1}>
              <h1
                data-w-id="93c907b7-127c-1482-a173-e2a53a66fc9d"
                // style="opacity: 0"
                className="hero_heading cc-heading-h1"
              >
                {/* Composite-Tech{" "}
                <span style={{ color: "#ff6b35 !important" }}>GFRP</span> rebar
                production lines manufacturing */}
                {hero.title}
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.2}>
              <p
                data-w-id="0419ad32-b9c3-021f-05fb-eb62d26de996"
                // style="opacity: 0"
                className="hero_subtext cc-title-small"
                dangerouslySetInnerHTML={{ __html: hero.description }}
              >
                {/* {hero.description} */}
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.3}>
              <div className="hero_cta-group button-group">
                <Link
                  data-wf--cta-link--variant="primary"
                  href="/contact"
                  className="cta-linkblock cc-is-primary w-inline-block"
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
                <Link href="/contact" className="cta-link">
                  get started
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
