"use client";
import About from "@/components/about";
import Carousel from "@/components/carousel";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Modal from "@/components/modal";
import Services from "@/components/services";
import WorkWith from "@/components/workWith";
import { useRef, useState } from "react";

export default function Home() {

  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const homeRef = useRef(null);

  const images = [
    "https://depor.com/resizer/xjQQIRWQbRxeaPYA4mzr1V7zsDQ=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DAYT2F5NUNB7VPAFKUPHNDXVQA.jpg",
    "https://www.mundodeportivo.com/alfabeta/hero/2023/09/goku-colores.jpg?width=1200&aspect_ratio=16:9",

    // ... more image URLs ...
  ];

  return (
    <>
      <Hero contactRef={contactRef} aboutRef={aboutRef} servicesRef={servicesRef} homeRef={homeRef} />
      <WorkWith />
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <Contact contactRef={contactRef} />
      <Footer homeRef={homeRef} servicesRef={servicesRef} aboutRef={aboutRef} contactRef={contactRef} />
    </>
  );
}
