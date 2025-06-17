"use client";

import React from "react";

import LogoSection from "@/components/LogoSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resources/Hero";
import ResourcesSection from "@/components/resources/ResourcesSection";
import ProductHero from "@/components/products/Hero";
import ProductSection from "@/components/products/ProductSection";
import ContactHero from "@/components/contact/Hero";

export default function Contact() {
  return (
    <>
      <main className="main-wrapper sub-pages">
        <ContactHero />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
