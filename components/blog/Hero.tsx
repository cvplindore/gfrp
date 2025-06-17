import axios from "axios";
import { useEffect, useState } from "react";

const BlogHero = () => {
  const [blogPage, setBlogPage] = useState(null);

  useEffect(() => {
    axios
      .get("https://gfrp-india.onrender.com/api/blog_page/") // your Django endpoint
      .then((response) => {
        setBlogPage(response.data); // it's a single object, not an array
      })
      .catch((error) => {
        console.error("Error fetching hero section:", error);
      });
  }, []);

  if (!blogPage) return ;

  return (
    <section
      className="section_hero projects-page"
      // style={{
      //   backgroundImage:
      //     "url(https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      // }}
      style={{ backgroundImage: `url(${blogPage.image})` }}
    >
      <div className="padding-global padding-0">
        <div className="container-large lolo">
          <div className="hero_wrapper projects-page">
            <div className="hero_left-wrapper">
              <div className="about-us_text-dot-wrap projects-page">
                <div
                  className="about-us_heading-dot"
                  // style="background-color: #ff6b35 !important"
                ></div>
                <div className="about-us_heading">Blogs</div>
              </div>
              <h1
                data-w-id="93c907b7-127c-1482-a173-e2a53a66fc9d"
                //   style="opacity: 0"
                className="hero_heading cc-heading-h1 projects-page"
              >
                {blogPage.title}
              </h1>
              <p
                data-w-id="0419ad32-b9c3-021f-05fb-eb62d26de996"
                //   style="opacity: 0"
                className="hero_subtext cc-title-small projects-page"
                dangerouslySetInnerHTML={{ __html: blogPage.description }}
              >
                {/* Explore how GRPF is reshaping industries with advanced,
                sustainable solutions. Real stories of growth and impact, from
                concept to execution. */}
              </p>
              <div className="hero_cta-group button-group">
                <a
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
                </a>
                <a href="/contact" className="cta-link">
                  get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
