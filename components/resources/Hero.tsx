import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeInOnScroll from "../animation/FadeInOnScroll";
import Link from "next/link";

const ResourcesHero = () => {
  const [heroresource, setHeroResources] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/technical_resources/") // your Django endpoint
      .then((response) => {
        setHeroResources(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  if (!heroresource) return;

  return (
    <section
      className="section_hero projects-page"
      style={{ backgroundImage: `url(${heroresource.image})` }}
    >
      <div className="padding-global padding-0">
        <div className="container-large lolo">
          <div className="hero_wrapper projects-page">
            <div className="hero_left-wrapper">
              <FadeInOnScroll>
                <div className="about-us_text-dot-wrap projects-page">
                  <div
                    className="about-us_heading-dot"
                    // style="background-color: #ff6b35 !important"
                  ></div>
                  <div className="about-us_heading">Resources</div>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <h1
                  data-w-id="93c907b7-127c-1482-a173-e2a53a66fc9d"
                  //   style="opacity: 0"
                  className="hero_heading cc-heading-h1 projects-page"
                >
                  {heroresource.title}
                </h1>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.3}>
                <p
                  data-w-id="0419ad32-b9c3-021f-05fb-eb62d26de996"
                  //   style="opacity: 0"
                  className="hero_subtext cc-title-small projects-page"
                  dangerouslySetInnerHTML={{
                    __html: heroresource.description,
                  }}
                >
                  {/* Explore how GRPF is reshaping industries with advanced,
                  sustainable solutions. Real stories of growth and impact, from
                  concept to execution. */}
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.4}>
                <div className="hero_cta-group button-group">
                  <Link
                    data-wf--cta-link--variant="primary"
                    href="/contact"
                    className="cta-linkblock cc-is-primary w-inline-block"
                  >
                    <div className="cta-linkblock_text">Contact us</div>
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
      </div>
    </section>
  );
};

export default ResourcesHero;
