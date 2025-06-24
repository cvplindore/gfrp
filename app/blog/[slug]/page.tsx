"use client";

import React, { useEffect, useState } from "react";

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
import Hero from "@/components/singleBlog/Hero";
import SingleBlog from "@/components/singleBlog/SingleBlog";
import { useParams } from "next/navigation";
import axios from "axios";

export default function SingleBlogPage() {
    const params = useParams()
    console.log("params", params.slug);

    const [singleblog, setSingleBlog] = useState(null);

    useEffect(() => {
      axios
        .get(`https://gfrp-india.onrender.com/api/blog_detail/${params.slug}/`) // your Django endpoint
        .then((response) => {
          setSingleBlog(response.data); // it's a single object, not an array
        })
        .catch((error) => {
          console.error("Error fetching hero section:", error);
        });
    }, [params.slug]);

    if (!singleblog) return ;

    console.log("singleblog", singleblog);

  return (
    <>
      <main className="main-wrapper sub-pages">
        <Hero singleblog={singleblog} />
        <SingleBlog singleblog={singleblog} />
        {/* <TestimonialsSection /> */}
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
