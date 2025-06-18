"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useLoader } from "./LoaderContext";

const Navbar = () => {
  const { setHideLoader } = useLoader();

  const [isOpen, setIsOpen] = useState(false);

  function re() {
    document.getElementById("ss").style.transform =
      "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";

    document.getElementById("ss").style.transformStyle = "preserve-3d";
  }

  function ra() {
    document.getElementById("ss").style.transform =
      "translate3d(0px, -120%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";

    document.getElementById("ss").style.transformStyle = "preserve-3d";
  }

  function doReverse(e) {
    // e.preventDefault();
    setHideLoader(false);

    setTimeout(() => {
      setHideLoader(true);
      ra()
      setIsOpen(false);
    }, 4000);
  }

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileOrTablet(width <= 991);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <nav className="navbar navbar_var-seven">
      <div className="navbar_container navbar_var-seven">
        <Link
          href="/"
          aria-current="page"
          className="navbar_linkblock navbar_var-seven w-inline-block w--current"
          onClick={doReverse}
        >
          <img
            src="https://i.postimg.cc/sX0kRg7R/svgviewer-png-output-4.png"
            loading="lazy"
            alt="Solvance Logo"
            className="navbar_logobrand"
          />
        </Link>
        <div
          className="navbar_menu navbar_var-seven"
          {...(isMobileOrTablet ? { id: "ss" } : {})}
        >
          <Link
            href="/about"
            className="navbar_links-item cc-button-text"
            onClick={doReverse}
          >
            About
          </Link>
          <Link
            href="/resource"
            className="navbar_links-item cc-button-text"
            onClick={doReverse}
          >
            Resources
          </Link>
          <Link
            href="/product"
            className="navbar_links-item cc-button-text"
            onClick={doReverse}
          >
            Products
          </Link>
          <Link
            href="/blog"
            className="navbar_links-item cc-button-text"
            onClick={doReverse}
          >
            Blog
          </Link>
          <div className="nav-cta_wrapper">
            <Link
              data-wf--cta-link--variant="for-nav"
              href="/contact"
              className="lulu cta-linkblock cc-is-primary w-variant-cb7e7ac9-56ca-8112-2f3f-c44bb51323a6 w-inline-block"
              onClick={doReverse}
            >
              <div className="cta-linkblock_text">Contact Us</div>
              <div className="cta-icon_wrap w-variant-cb7e7ac9-56ca-8112-2f3f-c44bb51323a6">
                <div className="cta-btn_icon w-embed">
                  <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
                </div>
                <div className="cta-btn_icon is-absolute w-embed">
                  <img src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div
          // data-w-id="cf2bb12c-f649-5908-a36a-ac795226fe80"
          // data-is-ix2-target="1"
          className="navbar_lottie-menu-nav"
          // data-animation-type="lottie"
          // data-src="https://cdn.prod.website-files.com/678f627ca3c72851d3ed6838/67918081f5c215b9e43c8add_lottie-menu-nav.json"
          // data-loop="0"
          // data-direction="1"
          // data-autoplay="0"
          // data-renderer="svg"
          // data-default-duration="0"
          // data-duration="2.0208333333333335"
          // data-ix2-initial-state="0"
          // onClick={() => { setIsOpen(!isOpen);  open ? ra() : re()}}
          onClick={() => {
            setIsOpen((prev) => {
              const newState = !prev;
              newState ? re() : ra();
              return newState;
            });
          }}
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 712 712"
              width="712"
              height="712"
              preserveAspectRatio="xMidYMid meet"
              style={{
                width: "100%",
                height: "100%",
                transform: "translate3d(0px, 0px, 0px)",
                contentVisibility: "visible",
              }}
              // style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
            >
              <defs>
                <clipPath id="__lottie_element_2">
                  <rect width="712" height="712" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_2)">
                <g
                  transform="matrix(1,0,0,1,356,356)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="10"
                      stroke="rgb(0,0,0)"
                      stroke-opacity="1"
                      stroke-width="60"
                      d=" M-324,250 C-324,250 324,250 324,250"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(1,0,0,1,356,356)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="10"
                      stroke="rgb(0,0,0)"
                      stroke-opacity="1"
                      stroke-width="60"
                      d=" M-324,-250 C-324,-250 324,-250 324,-250"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(1,0,0,1,356,356)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="10"
                      stroke="rgb(0,0,0)"
                      stroke-opacity="1"
                      stroke-width="60"
                      d=" M-324,0 C-324,0 324,0 324,0"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 712 712"
              width="712"
              height="712"
              preserveAspectRatio="xMidYMid meet"
              style={{
                width: "100%",
                height: "100%",
                transform: "translate3d(0px, 0px, 0px)",
                contentVisibility: "visible",
              }}
              // style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
            >
              <defs>
                <clipPath id="__lottie_element_2">
                  <rect width="712" height="712" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_2)">
                <g
                  transform="matrix(1,0,0,1,356,335)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="10"
                      stroke="rgb(0,0,0)"
                      stroke-opacity="1"
                      stroke-width="60"
                      d=" M-230.0266876220703,252.02671813964844 C-230.0266876220703,252.02671813964844 -0.02674666792154312,21.776775360107422 -0.02674666792154312,21.776775360107422"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(1,0,0,1,356,377)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="10"
                      stroke="rgb(0,0,0)"
                      stroke-opacity="1"
                      stroke-width="60"
                      d=" M-228.50473022460938,208.50579833984375 C-228.50473022460938,208.50579833984375 230.0288543701172,-250.0288543701172 230.0288543701172,-250.0288543701172"
                    ></path>
                  </g>
                </g>
                <g
                  transform="matrix(1,0,0,1,356,356)"
                  opacity="1"
                  // style="display: block;"
                >
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="miter"
                      fill-opacity="0"
                      stroke-miterlimit="10"
                      stroke="rgb(0,0,0)"
                      stroke-opacity="1"
                      stroke-width="60"
                      d=" M-229.02659606933594,-230.02671813964844 C-229.02659606933594,-230.02671813964844 230.02659606933594,231.02671813964844 230.02659606933594,231.02671813964844"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          )}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 712 712"
            width="712"
            height="712"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "100%",
              height: "100%",
              transform: "translate3d(0px, 0px, 0px)",
              contentVisibility: "visible",
            }}
            // style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
          >
            <defs>
              <clipPath id="__lottie_element_2">
                <rect width="712" height="712" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clip-path="url(#__lottie_element_2)">
              <g
                transform="matrix(1,0,0,1,356,356)"
                opacity="1"
                // style="display: block;"
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(0,0,0)"
                    stroke-opacity="1"
                    stroke-width="60"
                    d=" M-324,250 C-324,250 324,250 324,250"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,356,356)"
                opacity="1"
                // style="display: block;"
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(0,0,0)"
                    stroke-opacity="1"
                    stroke-width="60"
                    d=" M-324,-250 C-324,-250 324,-250 324,-250"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,356,356)"
                opacity="1"
                // style="display: block;"
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(0,0,0)"
                    stroke-opacity="1"
                    stroke-width="60"
                    d=" M-324,0 C-324,0 324,0 324,0"
                  ></path>
                </g>
              </g>
            </g>
          </svg> */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 712 712"
            width="712"
            height="712"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "100%",
              height: "100%",
              transform: "translate3d(0px, 0px, 0px)",
              contentVisibility: "visible",
            }}
            // style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;"
          >
            <defs>
              <clipPath id="__lottie_element_2">
                <rect width="712" height="712" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clip-path="url(#__lottie_element_2)">
              <g
                transform="matrix(1,0,0,1,356,335)"
                opacity="1"
                // style="display: block;"
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(0,0,0)"
                    stroke-opacity="1"
                    stroke-width="60"
                    d=" M-230.0266876220703,252.02671813964844 C-230.0266876220703,252.02671813964844 -0.02674666792154312,21.776775360107422 -0.02674666792154312,21.776775360107422"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,356,377)"
                opacity="1"
                // style="display: block;"
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(0,0,0)"
                    stroke-opacity="1"
                    stroke-width="60"
                    d=" M-228.50473022460938,208.50579833984375 C-228.50473022460938,208.50579833984375 230.0288543701172,-250.0288543701172 230.0288543701172,-250.0288543701172"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(1,0,0,1,356,356)"
                opacity="1"
                // style="display: block;"
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    stroke="rgb(0,0,0)"
                    stroke-opacity="1"
                    stroke-width="60"
                    d=" M-229.02659606933594,-230.02671813964844 C-229.02659606933594,-230.02671813964844 230.02659606933594,231.02671813964844 230.02659606933594,231.02671813964844"
                  ></path>
                </g>
              </g>
            </g>
          </svg> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

