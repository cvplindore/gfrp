import axios from "axios";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import FadeInOnScroll from "../animation/FadeInOnScroll";
import Link from "next/link";

export default function StorySection() {
  const [aboutStory, setAboutStory] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/get_about_story/") // your Django endpoint
      .then((response) => {
        setAboutStory(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  if (!aboutStory) return;

    return (
      <section className="section_story">
        <div className="padding-global padding-0">
          <div className="container-large">
            <div className="story_wrapper">
              <FadeInOnScroll>
                <div
                  data-w-id="839ab982-bc30-534c-baa7-3f6f503a481d"
                  //   style="opacity:0"
                  className="story_left-wrapper"
                >
                  <img
                    src={aboutStory.image}
                    loading="lazy"
                    sizes="(max-width: 581px) 100vw, 581px"
                  //   srcSet={`
                  //   ${aboutStory.image} 500w,
                  //   ${aboutStory.image} 540w
                  // `}
                    // srcSet="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebc9cd565a25f4f309d278_image%20(1)-p-500.webp 500w, https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebc9cd565a25f4f309d278_image%20(1).webp 581w"
                    alt="A group of friends standing and watching the sun set"
                    className="story_left-wrapper-image"
                  />
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <div className="story_right-wrapper">
                  <h2
                    data-w-id="9c017f97-2372-f945-bf92-2d29b54f6dbe"
                    //   style="opacity:0"
                    className="story_main-heading cc-heading-h3"
                  >
                    {aboutStory.title}
                  </h2>
                  <p
                    data-w-id="16eb3e15-2abd-6d76-86e3-e2922a80a625"
                    //   style="opacity:0"
                    className="story_subtext cc-title-small"
                    dangerouslySetInnerHTML={{ __html: aboutStory.description }}
                  >
                    {/* At GFRP_india, we are committed to revolutionizing the future
                  of construction with advanced, sustainable materials like GFRP
                  (Glass Fiber Reinforced Polymer). Designed to outperform
                  traditional steel rebar, our GFRP solutions offer unmatched
                  durability, corrosion resistance, and long-term cost
                  efficiency—making.
                  <br />
                  <br />
                  Our mission is to make high-performance composite materials
                  accessible across industries by delivering innovative,
                  environmentally friendly solutions that support structural
                  integrity and longevity. With GFRP, we empower builders,
                  architects, and engineers to reduce maintenance costs */}
                  </p>
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebcab0a4078f56000563cd_image%2027.svg"
                    loading="lazy"
                    //   style="opacity:0"
                    data-w-id="9b1affcd-db5b-b5de-534c-a2390c588f12"
                    alt="Jakob Stanton Signature"
                    className="story_signature-image"
                  />
                  <div className="testi_author-wrap">
                    <div className="testi_author-image-wrap">
                      <img
                        src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67eb30fb6430868c6d4e7c02_services%20(1).webp"
                        loading="lazy"
                        alt="Jakob Stanton portrait"
                        className="testi_author-image"
                      />
                    </div>
                    <div className="testi_author-details">
                      <h3 className="testi_author-name">SOmeone hehe</h3>
                      <div className="testi_author-position">
                        CEO &amp;Founder
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>
    );
}