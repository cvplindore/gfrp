import axios from "axios";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import FadeInOnScroll from "../animation/FadeInOnScroll";
import Link from "next/link";

export default function ValueFunction() 
{
  const [value, setValue] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/get_value/") // your Django endpoint
      .then((response) => {
        setValue(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  if (!value) return;

    return (
      <section className="section_values">
        <div className="padding-global padding-0">
          <div className="container-large">
            <div className="values_wrapper">
              <FadeInOnScroll>
                <h2
                  data-w-id="6741c502-08a9-4ab7-b31c-f6da834828d4"
                  // style="opacity:0"
                  className="values_main-heading cc-heading-h3"
                >
                  Our values
                </h2>
              </FadeInOnScroll>
              <div className="why-us_grid">
                {/* <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ebcde2a62837e189461bcb_Vector%20(2).svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    Sustainability first
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    Committed to reducing carbon footprints and promoting
                    renewable energy.
                  </p>
                </div> */}
                {value.map((v, index) => (
                  <motion.div
                    data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                    className="why-us_block"
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
                      src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ee71cbbb23448e875f82cf_card-icon%20(1).svg"
                      loading="lazy"
                      alt=""
                      className="why-us_block-icon"
                    />
                    <h3 className="why-us_block-heading cc-subtitle">
                      {v.title}
                    </h3>
                    <p
                      className="why-us_block-subtext cc-title-small"
                      dangerouslySetInnerHTML={{
                        __html: v.description,
                      }}
                    >
                      {/* Using the latest technology for efficient, future-ready
                      systems. */}
                    </p>
                  </motion.div>
                ))}
                {/* <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ee71cbbb23448e875f82cf_card-icon%20(1).svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    Innovation-driven
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    Using the latest technology for efficient, future-ready
                    systems.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ee71cbb518cdbd3fd5f68e_card-icon%20(3).svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    Customer-focused
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    Tailoring solutions to meet the unique needs of every
                    client.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ee731327c2504688e4d7a0_crown.svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    Integrity &amp;transparency
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    Honest communication, fair pricing, and delivering on promi
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ee72d36f9db5dff03fd722_huobi-token-(ht).svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    Reliability &amp;excellence
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    High-quality installations built for long-term performance.
                  </p>
                </div>
                <div
                  data-w-id="4a36a7ce-9ad2-b919-d7ad-e058ddd21af3"
                  className="why-us_block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ee71cb38a5742f7dde160d_card-icon%20(2).svg"
                    loading="lazy"
                    alt=""
                    className="why-us_block-icon"
                  />
                  <h3 className="why-us_block-heading cc-subtitle">
                    Efficiency at every step
                  </h3>
                  <p className="why-us_block-subtext cc-title-small">
                    Ensuring a smooth and hassle-free installation experience.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}