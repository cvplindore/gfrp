import Link from "next/link";

import { motion } from "framer-motion";
import FadeInOnScroll from "../animation/FadeInOnScroll";
import { useLoader } from "../LoaderContext";


export default function SingleBlog({ singleblog }) {
  const { setHideLoader } = useLoader();
    
      function doReverse(e) {
        // e.preventDefault();
        setHideLoader(false);
    
        setTimeout(() => {
          setHideLoader(true);
        }, 4000);
      }
  return (
    <section className="section_blog">
      <div className="padding-global padding-0">
        <div className="container-large">
          <div className="blog_wrapper">
            <motion.div
              className="blog-collection_body w-richtext"
              dangerouslySetInnerHTML={{ __html: singleblog.content }}
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              // transition={{
              //   duration: 0.7,
              //   ease: "easeOut",
              //   delay: 0.2,
              // }}
              // viewport={{ once: true, amount: 0.2 }}
            >
              
            </motion.div>
            <div className="blog_featured-wrapper recent-blog">
              <FadeInOnScroll>
                <div className="projects_top-container">
                  <div className="services_top-container project-section">
                    <h2 className="services_main-heading cc-heading-h3">
                      More Blogs
                    </h2>
                  </div>
                  <Link
                    href="/blog"
                    className="projects_linkblock w-inline-block"
                    onClick={doReverse}
                  >
                    <div className="projects_cta-text">View all blogs</div>
                    <img
                      src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb1d94ffa650511871a81c_Vector%20(1).svg"
                      loading="lazy"
                      alt=""
                      className="projects_cta-arrow"
                    />
                  </Link>
                </div>
              </FadeInOnScroll>
              <div className="blogs_collection-list-wrapper more-blogs w-dyn-list">
                <div role="list" className="blogs_collection-list w-dyn-items">
                  {singleblog.related_blogs.map((item, index) => (
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
                        onClick={doReverse}
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
                          <h3 className="blog_title">{item.title}</h3>
                          <p className="blog_summary">{item.description}</p>
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
                        <h3 className="blog_title">Understanding heat pumps</h3>
                        <p className="blog_summary">
                          Heat pumps provide year-round comfort while cutting
                          energy costs and carbon emissions. Find out how they
                          work and why they’re a game-changer for modern homes.
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
                            <h4 className="blog_author-name">Marley Vetrovs</h4>
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