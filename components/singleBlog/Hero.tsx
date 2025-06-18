
import { motion } from "framer-motion";
import FadeInOnScroll from "../animation/FadeInOnScroll";
import Link from "next/link";

export default function Hero({ singleblog  }) {
  return (
    <section className="section_hero project-collection-page blog-collection-page">
      <div className="padding-global padding-0">
        <div className="container-large nwe">
          <div className="blog-collection_hero-wrapper">
            <div className="blog-collection_left-container">
              <div
                data-w-id="b68bb75e-fa23-e150-b1ce-f0dbbebcb998"
                //   style="opacity: 0"
                className="blog-collection_hero-top-wrap"
              >
                <FadeInOnScroll>
                  <div className="blog-collection_project-tag">
                    {/* Battery Storage */}
                    {singleblog.tag}
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll delay={0.2}>
                  <div className="blog-collection_reading-time">
                    {singleblog.min_read} mins read
                  </div>
                </FadeInOnScroll>
                <FadeInOnScroll delay={0.3}>
                  <div className="blog-collection_created-date">
                    {new Date(singleblog.created_at).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </div>
                </FadeInOnScroll>
              </div>
              <FadeInOnScroll delay={0.4}>
                <h1
                  data-w-id="7dfcc045-7afb-7d22-5c5d-e204e0053540"
                  //   style="opacity: 0"
                  className="blog-collection_title cc-heading-h4"
                >
                  {singleblog.title}
                </h1>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.5}>
                <p
                  data-w-id="2e41dd0f-ee61-c7c9-d774-5964e14bfa62"
                  //   style="opacity: 0"
                  className="blog-collection_subtext"
                >
                  {singleblog.description}
                </p>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.6}>
                <div className="blog_author-wrap">
                  <div className="blog_author-image-wrap">
                    <img
                      src={singleblog.author.profile_picture}
                      loading="lazy"
                      alt=""
                      className="blog_author-image"
                    />
                  </div>
                  <div className="blog_author-detail-wrap">
                    <h2 className="blog_author-name blog-collection-page">
                      {singleblog.author.name}
                    </h2>
                    <p className="blog_author-position blog-collection-page">
                      {new Date(singleblog.created_at).toLocaleDateString(
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
              </FadeInOnScroll>
            </div>
            <FadeInOnScroll delay={0.7}>
              <div
                data-w-id="ce4d142b-616e-6735-a306-f5e846db2133"
                // style="opacity: 0"
                className="blog-collection_right-container"
              >
                <img
                  src={singleblog.image}
                  loading="lazy"
                  alt=""
                  className="blog-collection_container-image"
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}