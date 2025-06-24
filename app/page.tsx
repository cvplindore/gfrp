"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResourcesSection from "@/components/ResourcesSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ProductSection from "@/components/Products";


export default function Home() {
  return (
    <>
      <main className="main-wrapper">
        <Hero />
        <LogoSection />
        <AboutSection />
        <ProductSection />
        <ProjectsSection />
        <ResourcesSection />
        <BlogSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
