"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoSection = () => {
  const logos = [
    {
      src: "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea9dee7c8df3ac99a11cd2_Logo(1).svg",
      alt: "Leafe Logo",
    },
    {
      src: "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea9deec9a84e62b937bcec_logo.svg",
      alt: "Blossom Logo",
    },
    {
      src: "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea9deedaf5a52d1b048c53_Homey.svg",
      alt: "Homey Logo",
    },
    {
      src: "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea9ded4f2eddefdc0e3657_logo-2.svg",
      alt: "Hitech Logo",
    },
    {
      src: "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea9ded35dea8e8396f5bce_logo-1.svg",
      alt: "Orbitc Logo",
    },
    {
      src: "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea9ded09675b2c2cd9d3e0_Logo-1(1).svg",
      alt: "Invert Logo",
    },
    {
      src: "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea9ded4f2eddefdc0e3657_logo-2.svg",
      alt: "Hitech Logo",
    },
    {
      src: "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea9ded35dea8e8396f5bce_logo-1.svg",
      alt: "Orbitc Logo",
    },
    {
      src: "https://cdn.prod.website-files.com/67ea6645891c299018425dd4/67ea9ded09675b2c2cd9d3e0_Logo-1(1).svg",
      alt: "Invert Logo",
    },
  ];

  return (
    <div className="home_logo-wrapper">
      <Marquee speed={50} gradient={false}>
        <div
          className="home_logo-inner"
          style={{ display: "flex", gap: "7rem", marginLeft: '7rem' }}
        >
          {logos.map((logo, index) => (
            <Image
              key={`logo-${index}`}
              src={logo.src}
              loading="lazy"
              alt={logo.alt}
              className={`home_logo-image ${
                logo.alt === "Invert Logo" ? "revert-filter" : ""
              }`}
              width={120}
              height={60}
            />
          ))}
        </div>
      </Marquee>
      {/* <div className="home_logo-inner">
        {logos.map((logo, index) => (
          <Image
            key={`second-${index}`}
            src={logo.src}
            loading="lazy"
            alt={logo.alt}
            className="home_logo-image"
            width={120}
            height={60}
          />
        ))}
      </div> */}
    </div>
  );
};

export default LogoSection;
