import { motion } from "framer-motion";
import FadeInOnScroll from "../animation/FadeInOnScroll";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";


export default function AboutHero() {
  const [aboutHero, setAboutHero] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/get_about_hero/") // your Django endpoint
      .then((response) => {
        setAboutHero(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  if (!aboutHero) return;

  return (
    <section className="section_hero about-page">
      <div className="padding-global padding-0">
        <div className="container-large max-width-none">
          <div className="about-page_hero-wrapper">
            <div className="about-hero_top-wrap">
              <FadeInOnScroll>
                <div className="about-us_text-dot-wrap">
                  <div className="about-us_heading-dot"></div>
                  <div className="about-us_heading">ABOUT</div>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <h1
                  data-w-id="d9b30469-0fb7-1cd8-d5e0-dd736b8e2169"
                  //   style="opacity:0"
                  className="about-hero_main-heading"
                >
                  {aboutHero.title}
                </h1>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.3}>
                <p
                  data-w-id="f29c73b4-3c6d-aff4-d062-663ca98478c8"
                  //   style="opacity:0"
                  className="about-hero_subtext cc-title-small"
                  dangerouslySetInnerHTML={{ __html: aboutHero.description }}
                >
                  {/* Learn how storing excess gfrp power can reduce your something
                bills and increase strength independence. */}
                </p>
              </FadeInOnScroll>
            </div>
            <div className="project-carousel_wrapper about-page">
              <div className="project_carousel-image-inner">
                {aboutHero.image.map((about, index) => (
                  <motion.div
                    className="project_carousel-image-wrapper"
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
                      src={about.image}
                      loading="lazy"
                      alt="A group of girls hands placed on each other. "
                      className="project_carousel-image"
                    />
                  </motion.div>
                ))}
                {/* <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebc83b160ce9bf8058ba95_image-1.webp"
                    loading="lazy"
                    alt="A group of girls hands placed on each other. "
                    className="project_carousel-image"
                  />
                </div>
                <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb471861da538d1dfaad06_services%20(2).webp"
                    loading="lazy"
                    sizes="(max-width: 560px) 100vw, 560px"
                    srcSet="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb471861da538d1dfaad06_services%20(2)-p-500.webp 500w, https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb471861da538d1dfaad06_services%20(2).webp 560w"
                    alt="Two engineers installing solar panels on a roof. "
                    className="project_carousel-image"
                  />
                </div>
                <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebc83bc58eb5a96266c246_image.webp"
                    loading="lazy"
                    alt="A mna sitting in an office whilst a meeting is going on. "
                    className="project_carousel-image"
                  />
                </div>
                <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb4717c07bed2fe1f9069f_services%20(10).webp"
                    loading="lazy"
                    alt="Two men installing solar panels on a roof.  "
                    className="project_carousel-image"
                  />
                </div> */}
              </div>
              {/* <div className="project_carousel-image-inner">
                <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebc83bc58eb5a96266c246_image.webp"
                    loading="lazy"
                    alt="A mna sitting in an office whilst a meeting is going on. "
                    className="project_carousel-image"
                  />
                </div>
                <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb471861da538d1dfaad06_services%20(2).webp"
                    loading="lazy"
                    sizes="(max-width: 560px) 100vw, 560px"
                    srcSet="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb471861da538d1dfaad06_services%20(2)-p-500.webp 500w, https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb471861da538d1dfaad06_services%20(2).webp 560w"
                    alt="Two engineers installing solar panels on a roof. "
                    className="project_carousel-image"
                  />
                </div>
                <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebc83b160ce9bf8058ba95_image-1.webp"
                    loading="lazy"
                    alt="A group of girls hands placed on each other. "
                    className="project_carousel-image"
                  />
                </div>
                <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb4717c07bed2fe1f9069f_services%20(10).webp"
                    loading="lazy"
                    alt="Two men installing solar panels on a roof.  "
                    className="project_carousel-image"
                  />
                </div>
              </div>
              <div className="project_carousel-image-inner">
                <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebc83bc58eb5a96266c246_image.webp"
                    loading="lazy"
                    alt="A mna sitting in an office whilst a meeting is going on. "
                    className="project_carousel-image"
                  />
                </div>
                <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb471861da538d1dfaad06_services%20(2).webp"
                    loading="lazy"
                    sizes="(max-width: 560px) 100vw, 560px"
                    srcSet="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb471861da538d1dfaad06_services%20(2)-p-500.webp 500w, https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb471861da538d1dfaad06_services%20(2).webp 560w"
                    alt="Two engineers installing solar panels on a roof. "
                    className="project_carousel-image"
                  />
                </div>
                <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebc83b160ce9bf8058ba95_image-1.webp"
                    loading="lazy"
                    alt="A group of girls hands placed on each other. "
                    className="project_carousel-image"
                  />
                </div>
                <div className="project_carousel-image-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb4717c07bed2fe1f9069f_services%20(10).webp"
                    loading="lazy"
                    alt="Two men installing solar panels on a roof.  "
                    className="project_carousel-image"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
