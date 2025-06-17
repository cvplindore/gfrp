"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="navbar navbar_var-seven">
    //   <div className="navbar_container navbar_var-seven">
    //     <Link
    //       href="/"
    //       aria-current="page"
    //       className="navbar_linkblock navbar_var-seven w-inline-block w--current"
    //     >
    //       <Image
    //         src="https://i.postimg.cc/sX0kRg7R/svgviewer-png-output-4.png"
    //         loading="lazy"
    //         alt="Solvance Logo"
    //         className="navbar_logobrand"
    //         width={200}
    //         height={60}
    //       />
    //     </Link>
    //     <div className="navbar_menu navbar_var-seven">
    //       <Link href="/about" className="navbar_links-item cc-button-text">
    //         About
    //       </Link>
    //       <Link href="/services" className="navbar_links-item cc-button-text">
    //         Resources
    //       </Link>
    //       <Link href="/projects" className="navbar_links-item cc-button-text">
    //         Products
    //       </Link>
    //       <Link href="/blog" className="navbar_links-item cc-button-text">
    //         Blog
    //       </Link>
    //       <div className="nav-cta_wrapper">
    //         <Link
    //           data-wf--cta-link--variant="for-nav"
    //           href="/contact"
    //           className="lulu cta-linkblock cc-is-primary w-variant-cb7e7ac9-56ca-8112-2f3f-c44bb51323a6 w-inline-block"
    //         >
    //           <div className="cta-linkblock_text">Contact Us</div>
    //           <div className="cta-icon_wrap w-variant-cb7e7ac9-56ca-8112-2f3f-c44bb51323a6">
    //             <div className="cta-btn_icon w-embed">
    //               <Image
    //                 src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
    //                 alt="Arrow"
    //                 width={16}
    //                 height={16}
    //               />
    //             </div>
    //             <div className="cta-btn_icon is-absolute w-embed">
    //               <Image
    //                 src="https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea760380058367c484cea3_right-arrow.svg"
    //                 alt="Arrow"
    //                 width={16}
    //                 height={16}
    //               />
    //             </div>
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //     <div
    //       data-w-id="cf2bb12c-f649-5908-a36a-ac795226fe80"
    //       data-is-ix2-target="1"
    //       className="navbar_lottie-menu-nav"
    //       data-animation-type="lottie"
    //       data-src="https://cdn.prod.website-files.com/678f627ca3c72851d3ed6838/67918081f5c215b9e43c8add_lottie-menu-nav.json"
    //       data-loop="0"
    //       data-direction="1"
    //       data-autoplay="0"
    //       data-renderer="svg"
    //       data-default-duration="0"
    //       data-duration="2.0208333333333335"
    //       data-ix2-initial-state="0"
    //     ></div>
    //   </div>
    // </nav>

    <nav className="navbar navbar_var-seven">
      <div className="navbar_container navbar_var-seven">
        <Link
          href="/"
          aria-current="page"
          className="navbar_linkblock navbar_var-seven w-inline-block w--current"
        >
          <img
            src="https://i.postimg.cc/sX0kRg7R/svgviewer-png-output-4.png"
            loading="lazy"
            alt="Solvance Logo"
            className="navbar_logobrand"
          />
        </Link>
        <div className="navbar_menu navbar_var-seven">
          <Link href="/about" className="navbar_links-item cc-button-text">
            About
          </Link>
          <Link href="/resource" className="navbar_links-item cc-button-text">
            Resources
          </Link>
          <Link href="/product" className="navbar_links-item cc-button-text">
            Products
          </Link>
          <Link href="/blog" className="navbar_links-item cc-button-text">
            Blog
          </Link>
          <div className="nav-cta_wrapper">
            <Link
              data-wf--cta-link--variant="for-nav"
              href="/contact"
              className="lulu cta-linkblock cc-is-primary w-variant-cb7e7ac9-56ca-8112-2f3f-c44bb51323a6 w-inline-block"
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
          data-w-id="cf2bb12c-f649-5908-a36a-ac795226fe80"
          data-is-ix2-target="1"
          className="navbar_lottie-menu-nav"
          data-animation-type="lottie"
          data-src="https://cdn.prod.website-files.com/678f627ca3c72851d3ed6838/67918081f5c215b9e43c8add_lottie-menu-nav.json"
          data-loop="0"
          data-direction="1"
          data-autoplay="0"
          data-renderer="svg"
          data-default-duration="0"
          data-duration="2.0208333333333335"
          data-ix2-initial-state="0"
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
