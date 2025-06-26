"use client";

import React from "react";

import LogoSection from "@/components/LogoSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resources/Hero";
import ResourcesSection from "@/components/resources/ResourcesSection";
import ProductHero from "@/components/products/Hero";
import ProductSection from "@/components/products/ProductSection";
import BlogHero from "@/components/blog/Hero";
import BlogSection from "@/components/blog/BlogSection";

export default function Blog() {
  return (
    <>
      <main className="main-wrapper sub-pages">
        {/* <BlogHero /> */}
        <BlogSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
