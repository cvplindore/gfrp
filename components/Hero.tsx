"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeInOnScroll from "./animation/FadeInOnScroll";
import axios from "axios";
import { useLoader } from "./LoaderContext";


const Hero = () => {
  const [hero, setHero] = useState(null);

  const { setHideLoader } = useLoader();

  function doReverse(e) {
    // e.preventDefault();
    setHideLoader(false);

    setTimeout(() => {
      setHideLoader(true);
    }, 4000);
  }

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
    // <section
    //   className="section_hero home-page"
    //   style={{
    //     backgroundImage: `linear-gradient(#0000, #000), url(${hero.image})`,
    //   }}
    // >
    //   <div className="padding-global padding-0">
    //     <div className="container-large">
    //       <div className="hero_wrapper home-page">
    //         <FadeInOnScroll>
    //           <div
    //             data-w-id="22769b06-e0f4-5b0b-4c2b-dc7382896b95"
    //             // style="opacity: 0"
    //             className="hero_review-wrap"
    //           >
    //             {/* <div className="hero_review-wrapper">
    //               <div className="hero_review-image-wrap">
    //                 <img
    //                   src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea986b3a53a8cd2c289a2e_Ellipse%207.webp"
    //                   loading="lazy"
    //                   alt=""
    //                   className="hero_review-image"
    //                 />
    //               </div>
    //               <div className="hero_review-image-wrap negative-margin">
    //                 <img
    //                   src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea986b692aca8a0971d2ca_Ellipse%209.webp"
    //                   loading="lazy"
    //                   alt=""
    //                   className="hero_review-image"
    //                 />
    //               </div>
    //               <div className="hero_review-image-wrap negative-margin">
    //                 <img
    //                   src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea986bc004a226f75d1969_Ellipse%208.webp"
    //                   loading="lazy"
    //                   alt=""
    //                   className="hero_review-image"
    //                 />
    //               </div>
    //             </div> */}
    //             <div className="hero_review-text">{hero.small_title}</div>
    //           </div>
    //         </FadeInOnScroll>
    //         <FadeInOnScroll delay={0.1}>
    //           <h1
    //             data-w-id="93c907b7-127c-1482-a173-e2a53a66fc9d"
    //             // style="opacity: 0"
    //             className="hero_heading cc-heading-h1"
    //           >
    //             {/* Composite-Tech{" "}
    //             <span style={{ color: "#ff6b35 !important" }}>GFRP</span> rebar
    //             production lines manufacturing */}
    //             {hero.title}
    //           </h1>
    //         </FadeInOnScroll>
    //         <FadeInOnScroll delay={0.2}>
    //           <p
    //             data-w-id="0419ad32-b9c3-021f-05fb-eb62d26de996"
    //             // style="opacity: 0"
    //             className="hero_subtext cc-title-small"
    //             dangerouslySetInnerHTML={{ __html: hero.description }}
    //           >
    //             {/* {hero.description} */}
    //           </p>
    //         </FadeInOnScroll>
    //         <FadeInOnScroll delay={0.3}>
    //           <div className="hero_cta-group button-group">
    //             <Link
    //               data-wf--cta-link--variant="primary"
    //               href="/contact"
    //               className="cta-linkblock cc-is-primary w-inline-block"
    //               onClick={doReverse}
    //             >
    //               <div className="cta-linkblock_text">Let's talk</div>
    //               <div className="cta-icon_wrap">
    //                 <div className="cta-btn_icon w-embed">
    //                   <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
    //                 </div>
    //                 <div className="cta-btn_icon is-absolute w-embed">
    //                   <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
    //                 </div>
    //               </div>
    //             </Link>
    //             {/* <Link href="/contact" className="cta-link" onClick={doReverse}>
    //               get started
    //             </Link> */}
    //           </div>
    //         </FadeInOnScroll>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section
      className="section_hero projects-page"
      // style={{
      //   backgroundImage:
      //     "url(https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      // }}
      style={{
        backgroundImage: `linear-gradient(#0000, #000), url(${hero.image})`,
        objectFit: 'cover'
      }}
      //   style={{
      //     backgroundImage: `linear-gradient(#0000, #000), url(${hero.image})`,
      //   }}
    >
      <div className="padding-global padding-0">
        <div className="container-large lolo">
          <div className="hero_wrapper projects-page">
            <div className="hero_left-wrapper">
              <FadeInOnScroll>
                <div className="about-us_text-dot-wrap projects-page">
                  <div
                  // className="about-us_heading-dot"
                  // style="background-color: #ff6b35 !important"
                  ></div>
                  <div className="about-us_heading">3 MONTHS ROI</div>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <h1
                  data-w-id="93c907b7-127c-1482-a173-e2a53a66fc9d"
                  //   style="opacity: 0"
                  className="hero_heading cc-heading-h1 projects-page"
                >
                  {hero.title}
                </h1>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.3}>
                <p
                  data-w-id="0419ad32-b9c3-021f-05fb-eb62d26de996"
                  //   style="opacity: 0"
                  className="hero_subtext cc-title-small projects-page"
                  dangerouslySetInnerHTML={{ __html: hero.description }}
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
                    onClick={doReverse}
                  >
                    <div className="cta-linkblock_text">Let's talk</div>
                    <div className="cta-icon_wrap">
                      <div className="cta-btn_icon w-embed">
                        <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
                      </div>
                      <div className="cta-btn_icon is-absolute w-embed">
                        <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
                      </div>
                    </div>
                  </Link>
                  {/* <Link
                    href="/contact"
                    className="cta-link"
                    onClick={doReverse}
                  >
                    get started
                  </Link> */}
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import FadeInOnScroll from "./animation/FadeInOnScroll";
// import axios from "axios";
// import { useLoader } from "./LoaderContext";
// import EditableText from "./EditableText";
// import EditableImage from "./EditableImage";
// import EditButton from "./EditButton";

// const Hero = () => {
//   const [hero, setHero] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedHero, setEditedHero] = useState(null);

//   const { setHideLoader } = useLoader();

//   function doReverse(e) {
//     setHideLoader(false);
//     setTimeout(() => {
//       setHideLoader(true);
//     }, 4000);
//   }

//   useEffect(() => {
//     axios
//       .get("https://gfrp-india.onrender.com/api/hero_section/")
//       .then((response) => {
//         setHero(response.data);
//         setEditedHero(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching hero section:", error);
//       });
//   }, []);

//   const handleToggleEdit = () => {
//     if (isEditing) {
//       // Save changes
//       setHero(editedHero);
//     }
//     setIsEditing(!isEditing);
//   };

//   const handleCancel = () => {
//     setEditedHero(hero);
//     setIsEditing(false);
//   };

//   const updateHeroField = (field, value) => {
//     setEditedHero((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   if (!hero) return null;

//   const currentHero = isEditing ? editedHero : hero;

//   return (
//     <>
//       <EditButton
//         isEditing={isEditing}
//         onToggleEdit={handleToggleEdit}
//         onCancel={handleCancel}
//       />

//       <section
//         className="section_hero projects-page"
//         style={{
//           backgroundImage: `linear-gradient(#0000, #000), url(${currentHero.image})`,
//           objectFit: "cover",
//         }}
//       >
//         {isEditing && (
//           <div
//             style={{
//               position: "absolute",
//               top: "20px",
//               left: "20px",
//               zIndex: 10,
//             }}
//           >
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => {
//                 const file = e.target.files?.[0];
//                 if (file) {
//                   const reader = new FileReader();
//                   reader.onload = (event) => {
//                     if (event.target?.result) {
//                       updateHeroField("image", event.target.result);
//                     }
//                   };
//                   reader.readAsDataURL(file);
//                 }
//               }}
//               style={{
//                 background: "#ff6b35",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "4px",
//                 padding: "8px 12px",
//                 cursor: "pointer",
//               }}
//             />
//           </div>
//         )}

//         <div className="padding-global padding-0">
//           <div className="container-large lolo">
//             <div className="hero_wrapper projects-page">
//               <div className="hero_left-wrapper">
//                 <FadeInOnScroll>
//                   <div className="about-us_text-dot-wrap projects-page">
//                     <div></div>
//                     <div className="about-us_heading">3 MONTHS ROI</div>
//                   </div>
//                 </FadeInOnScroll>
//                 <FadeInOnScroll delay={0.2}>
//                   <h1
//                     data-w-id="93c907b7-127c-1482-a173-e2a53a66fc9d"
//                     className="hero_heading cc-heading-h1 projects-page"
//                   >
//                     <EditableText
//                       value={currentHero.title}
//                       onChange={(value) => updateHeroField("title", value)}
//                       isEditing={isEditing}
//                     />
//                   </h1>
//                 </FadeInOnScroll>
//                 <FadeInOnScroll delay={0.3}>
//                   <p
//                     data-w-id="0419ad32-b9c3-021f-05fb-eb62d26de996"
//                     className="hero_subtext cc-title-small projects-page"
//                   >
//                     <EditableText
//                       value={currentHero.description}
//                       onChange={(value) =>
//                         updateHeroField("description", value)
//                       }
//                       isEditing={isEditing}
//                       multiline={true}
//                       dangerouslySetInnerHTML={true}
//                     />
//                   </p>
//                 </FadeInOnScroll>
//                 <FadeInOnScroll delay={0.4}>
//                   <div className="hero_cta-group button-group">
//                     <Link
//                       data-wf--cta-link--variant="primary"
//                       href="/contact"
//                       className="cta-linkblock cc-is-primary w-inline-block"
//                       onClick={doReverse}
//                     >
//                       <div className="cta-linkblock_text">Let's talk</div>
//                       <div className="cta-icon_wrap">
//                         <div className="cta-btn_icon w-embed">
//                           <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
//                         </div>
//                         <div className="cta-btn_icon is-absolute w-embed">
//                           <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 </FadeInOnScroll>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;