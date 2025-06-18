import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import FadeInOnScroll from "../animation/FadeInOnScroll";


export default function BlogSection() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/blog_home_list/") // your Django endpoint
      .then((response) => {
        setBlog(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  if (!blog) return ;

  return (
    <section className="section_blog uhm">
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="blog_wrapper">
            <div className="blog_featured-wrapper">
              <FadeInOnScroll>
                <div className="about-us_text-dot-wrap">
                  <div
                    className="about-us_heading-dot"
                    // style="background-color: #ff6b35 !important"
                    style={{ backgroundColor: "#ff6b35" }}
                  ></div>
                  <div className="about-us_heading">FEATURED BLOG</div>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <div className="featured-collection-list-wrapper w-dyn-list">
                  <div
                    role="list"
                    className="featured-collection-list w-dyn-items"
                  >
                    <div
                      role="listitem"
                      className="featured-collection-item w-dyn-item"
                    >
                      <Link
                        href={`/blog/${blog[0].slug}`}
                        className="blogs_linkblock featured w-inline-block"
                      >
                        <div className="blogs_image-wrapper featured">
                          <img
                            src={blog[0].image}
                            loading="lazy"
                            alt=""
                            className="blogs_main-image"
                          />
                        </div>
                        <div className="blogs_content-wrap featured">
                          <div className="blogs_middle-container-wrap">
                            <div className="blogs_tag">{blog[0].tag}</div>
                            <div className="blog_reading-time">
                              {blog[0].min_read} mins read
                            </div>
                          </div>
                          <h2 className="blog_title featured">
                            {blog[0].title}
                          </h2>
                          <p className="blog_summary">{blog[0].description}</p>
                          <div className="blog_author-wrap">
                            <div className="blog_author-image-wrap">
                              <img
                                src={blog[0].author.profile_picture}
                                loading="lazy"
                                alt=""
                                className="blog_author-image"
                              />
                            </div>
                            <div className="blog_author-detail-wrap">
                              <h3 className="blog_author-name featured">
                                {blog[0].author.name}
                              </h3>
                              <p className="blog_author-position">
                                {new Date(
                                  blog[0].created_at
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
            <div className="blog_featured-wrapper recent-blog">
              <FadeInOnScroll delay={0.3}>
                <div className="about-us_text-dot-wrap recent-blog-header">
                  <div
                    className="about-us_heading-dot"
                    // style="background-color: #ff6b35 !important"
                    style={{ backgroundColor: "#ff6b35" }}
                  ></div>
                  <div className="about-us_heading">RECENT BLOGS</div>
                </div>
              </FadeInOnScroll>
              <div className="blogs_collection-list-wrapper w-dyn-list">
                <div role="list" className="blogs_collection-list w-dyn-items">
                  {/* {blog.slice(1).map((item) => ( */}
                  {blog.slice(1).map((item, index) => (
                    <motion.div
                      role="listitem"
                      className="blogs_collection-item w-dyn-item"
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
                      <Link
                        href={`/blog/${item.slug}`}
                        className="blogs_linkblock w-inline-block"
                      >
                        <div className="blogs_image-wrapper">
                          <img
                            src={item.image}
                            loading="lazy"
                            alt=""
                            className="blogs_main-image"
                          />
                        </div>
                        <div className="blogs_content-wrap">
                          <div className="blogs_middle-container-wrap">
                            <div className="blogs_tag">{item.tag}</div>
                            <div className="blog_reading-time">
                              {item.min_read} mins read
                            </div>
                          </div>
                          <h3 className="blog_title">
                            {/* Government incentives for solar */}
                            {item.title}
                          </h3>
                          <p className="blog_summary">
                            {item.description}
                            {/* Take advantage of grants, tax credits, and rebates
                              to make your switch to solar more affordable. We
                              break down the latest government incentives and
                              how to qualify. */}
                          </p>
                          <div className="blog_author-wrap">
                            <div className="blog_author-image-wrap">
                              <img
                                src={item.author.profile_picture}
                                loading="lazy"
                                alt=""
                                className="blog_author-image"
                              />
                            </div>
                            <div className="blog_author-detail-wrap">
                              <h4 className="blog_author-name">
                                {item.author.name}
                              </h4>
                              <p className="blog_author-position">
                                {new Date(item.created_at).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  {/* <div
                      role="listitem"
                      className="blogs_collection-item w-dyn-item"
                    >
                      <a
                        href="/blogs/government-incentives-for-solar"
                        className="blogs_linkblock w-inline-block"
                      >
                        <div className="blogs_image-wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb28fc3ad3c2e678c81db6_image-2.webp"
                            loading="lazy"
                            alt=""
                            className="blogs_main-image"
                          />
                        </div>
                        <div className="blogs_content-wrap">
                          <div className="blogs_middle-container-wrap">
                            <div className="blogs_tag">Energy saving</div>
                            <div className="blog_reading-time">8 mins read</div>
                          </div>
                          <h3 className="blog_title">
                            Government incentives for solar
                          </h3>
                          <p className="blog_summary">
                            Take advantage of grants, tax credits, and rebates
                            to make your switch to solar more affordable. We
                            break down the latest government incentives and how
                            to qualify.
                          </p>
                          <div className="blog_author-wrap">
                            <div className="blog_author-image-wrap">
                              <img
                                src="https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb2915e0e115cb81c57ba6_Ellipse%203-2.webp"
                                loading="lazy"
                                alt=""
                                className="blog_author-image"
                              />
                            </div>
                            <div className="blog_author-detail-wrap">
                              <h4 className="blog_author-name">
                                Jakob Ekstrom Bothman
                              </h4>
                              <p className="blog_author-position">
                                March 31, 2025
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role="listitem"
                      className="blogs_collection-item w-dyn-item"
                    >
                      <a
                        href="/blogs/understanding-heat-pumps"
                        className="blogs_linkblock w-inline-block"
                      >
                        <div className="blogs_image-wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb28ce611a87f86a2652b1_image-1.webp"
                            loading="lazy"
                            alt=""
                            className="blogs_main-image"
                          />
                        </div>
                        <div className="blogs_content-wrap">
                          <div className="blogs_middle-container-wrap">
                            <div className="blogs_tag">Energy saving</div>
                            <div className="blog_reading-time">8 mins read</div>
                          </div>
                          <h3 className="blog_title">
                            Understanding heat pumps
                          </h3>
                          <p className="blog_summary">
                            Heat pumps provide year-round comfort while cutting
                            energy costs and carbon emissions. Find out how they
                            work and why they’re a game-changer for modern
                            homes.
                          </p>
                          <div className="blog_author-wrap">
                            <div className="blog_author-image-wrap">
                              <img
                                src="https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb28e0e1777d5c154a9daa_Ellipse%203-1.webp"
                                loading="lazy"
                                alt=""
                                className="blog_author-image"
                              />
                            </div>
                            <div className="blog_author-detail-wrap">
                              <h4 className="blog_author-name">
                                Marley Vetrovs
                              </h4>
                              <p className="blog_author-position">
                                March 31, 2025
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      role="listitem"
                      className="blogs_collection-item w-dyn-item"
                    >
                      <a
                        href="/blogs/the-future-of-solar-energy"
                        className="blogs_linkblock w-inline-block"
                      >
                        <div className="blogs_image-wrapper">
                          <img
                            src="https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb27d4e0e115cb81c44181_image.webp"
                            loading="lazy"
                            alt=""
                            className="blogs_main-image"
                          />
                        </div>
                        <div className="blogs_content-wrap">
                          <div className="blogs_middle-container-wrap">
                            <div className="blogs_tag">Energy saving</div>
                            <div className="blog_reading-time">8 mins read</div>
                          </div>
                          <h3 className="blog_title">
                            The future of solar energy
                          </h3>
                          <p className="blog_summary">
                            Discover the latest advancements in solar technology
                            and how they’re making renewable energy more
                            accessible, efficient, and cost-effective for
                            homeowners and businesses.
                          </p>
                          <div className="blog_author-wrap">
                            <div className="blog_author-image-wrap">
                              <img
                                src="https://cdn.prod.website-files.com/67eb18d3f05c10fed17c4eba/67eb27f7258f8ffb9172cc07_Ellipse%203.webp"
                                loading="lazy"
                                alt=""
                                className="blog_author-image"
                              />
                            </div>
                            <div className="blog_author-detail-wrap">
                              <h4 className="blog_author-name">Ahmad Dias</h4>
                              <p className="blog_author-position">
                                March 31, 2025
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
