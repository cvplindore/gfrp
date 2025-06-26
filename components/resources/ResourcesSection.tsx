import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeInOnScroll from "../animation/FadeInOnScroll";
import Link from "next/link";

const ResourcesSection = () => {
  const [resource, setResources] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/technical_resource_section/") // your Django endpoint
      .then((response) => {
        setResources(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  if (!resource) return;
  return (
    <section
      className="sections_whys"
      style={{ background: "none !important" }}
    >
      <div className="padding-global padding-0" style={{ marginTop: "100px" }}>
        <div className="container-large">
          <div className="why_wrapper">
            <div className="why_top-container home-page">
              <div className="why_left-wrapper home-page">
                <FadeInOnScroll>
                  <div className="about-us_text-dot-wrap">
                    <div
                      className="about-us_heading-dot cc-white"
                      //   style="background-color: #ff6b35 !important"
                      style={{ backgroundColor: "#ff6b35 !important" }}
                    ></div>
                    <div className="about-us_heading">Resources</div>
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll delay={0.2}>
                  <h2
                    className="why_main-heading cc-heading-h3 home-page"
                    // style="color: #000 !important;"
                    style={{ color: "#000" }}
                  >
                    {resource.title}
                  </h2>
                </FadeInOnScroll>
              </div>
              <FadeInOnScroll delay={0.3}>
                <div className="why_right-wrapper">
                  <p
                    className="why_subtext cc-title-small"
                    // style="color: #000 !important;"
                    style={{ color: "#000" }}
                    dangerouslySetInnerHTML={{ __html: resource.description }}
                  >
                    {/* All our products are certified and fully compliant with
                    industry standards — ensuring unmatched quality,
                    performance, and reliability in every application. */}
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
            <div className="why-us_grid">
              {resource.technical_resources.map((res, index) => (
                <motion.div
                  key={index}
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <a href={res.file} target="_blank" rel="noopener noreferrer">
                    <svg
                      viewBox="0 0 512 512"
                      width="38"
                      height="36"
                      xmlns="http://www.w3.org/2000/svg"
                      className="why-us_block-icon"
                    >
                      <path
                        d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                        fill="#FF6B35"
                      />
                    </svg>
                  </a>
                  <h3 className="why-us_block-heading cc-subtitle">
                    {res.title}
                  </h3>
                  <p
                    className="why-us_block-subtext cc-title-small"
                    dangerouslySetInnerHTML={{ __html: res.description }}
                  >
                    {/* {resource.description} */}
                  </p>
                </motion.div>
              ))}
              {/* <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <svg
                    viewBox="0 0 512 512"
                    width="38"
                    height="36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="why-us_block-icon"
                  >
                    <path
                      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                      fill="#FF6B35"
                    />
                  </svg>

                  <h3 className="why-us_block-heading cc-subtitle">
                    RAPORT ICECON - TESTARI BARE COMPOZITE
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    ICECON-certified test report showcasing the performance of
                    composite rebars.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <svg
                    viewBox="0 0 512 512"
                    width="38"
                    height="36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="why-us_block-icon"
                  >
                    <path
                      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                      fill="#FF6B35"
                    />
                  </svg>

                  <h3 className="why-us_block-heading cc-subtitle">
                    RAPORT ICECON - TESTARI BARE COMPOZITE
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    ICECON-certified test report showcasing the performance of
                    composite rebars.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <svg
                    viewBox="0 0 512 512"
                    width="38"
                    height="36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="why-us_block-icon"
                  >
                    <path
                      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                      fill="#FF6B35"
                    />
                  </svg>

                  <h3 className="why-us_block-heading cc-subtitle">
                    RAPORT ICECON - TESTARI BARE COMPOZITE
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    ICECON-certified test report showcasing the performance of
                    composite rebars.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <svg
                    viewBox="0 0 512 512"
                    width="38"
                    height="36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="why-us_block-icon"
                  >
                    <path
                      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                      fill="#FF6B35"
                    />
                  </svg>

                  <h3 className="why-us_block-heading cc-subtitle">
                    RAPORT ICECON - TESTARI BARE COMPOZITE
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    ICECON-certified test report showcasing the performance of
                    composite rebars.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <svg
                    viewBox="0 0 512 512"
                    width="38"
                    height="36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="why-us_block-icon"
                  >
                    <path
                      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                      fill="#FF6B35"
                    />
                  </svg>

                  <h3 className="why-us_block-heading cc-subtitle">
                    RAPORT ICECON - TESTARI BARE COMPOZITE
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    ICECON-certified test report showcasing the performance of
                    composite rebars.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <svg
                    viewBox="0 0 512 512"
                    width="38"
                    height="36"
                    xmlns="http://www.w3.org/2000/svg"
                    className="why-us_block-icon"
                  >
                    <path
                      d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                      fill="#FF6B35"
                    />
                  </svg>

                  <h3 className="why-us_block-heading cc-subtitle">
                    RAPORT ICECON - TESTARI BARE COMPOZITE
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    ICECON-certified test report showcasing the performance of
                    composite rebars.
                  </p>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
