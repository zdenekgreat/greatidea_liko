'use client';
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from '@/plugins';
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerOne from "@/components/hero-banner/hero-banner-one";
import VideOne from "@/components/video/video-one";
import BrandOne from "@/components/brand/brand-one";

// Dynamické importy pro sekce pod ohybem (snižuje TBT a velikost počátečního balíčku)
const ServiceOne = dynamic(() => import("@/components/service/service-one"));
const ProjectOne = dynamic(() => import("@/components/project/project-one"));
const AwardOne = dynamic(() => import("@/components/award/award-one"));
const TeamOne = dynamic(() => import("@/components/team/team-one"));
const TestimonialOne = dynamic(() => import("@/components/testimonial/testimonial-one"));
const FooterOne = dynamic(() => import("@/layouts/footers/footer-one"));

// images
import shape_1 from '@/assets/img/home-01/footer/footer-circle-shape-1.png';
import shape_2 from '@/assets/img/home-01/footer/footer-circle-shape-2.png';

// animation
import { videoAnimOne } from "@/utils/video-anim";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { hoverBtn } from "@/utils/hover-btn";
import { footerTwoAnimation } from "@/utils/footer-anim";
import { bounceAnimation, charAnimation, fadeAnimation } from "@/utils/title-animation";

const HomeMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    }
  }, []);

  useEffect(() => {
    if(typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
      cursorAnimation();
    }
  },[]);

  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();
      // portfolio image wrap
      gsap.timeline({
        scrollTrigger: {
           trigger: ".tp-project-full-img-wrap",
           start: "top 65",
           end: "bottom 0%",
           pin: ".tp-project-full-img",
           pinSpacing: false,
        }
      });
      // team marquee
      teamMarqueAnim();
      hoverBtn();
      footerTwoAnimation();
      fadeAnimation();
      charAnimation();
      bounceAnimation();
    }, 100)
    return () => clearTimeout(timer);
  });


  return (
    <Wrapper showBackToTop={false}>

      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}


      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            
            {/* hero area start */}
            <HeroBannerOne />
            {/* hero area end */}

            {/* video area */}
            <VideOne />
            {/* video area */}

            {/* brand area */}
            <BrandOne />
            {/* brand area */}

            {/* service area */}
            <ServiceOne />
            {/* service area */}

            {/* project area */}
            <ProjectOne />
            {/* project area */}

            {/* award area */}
            <AwardOne />
            {/* award area */}

            {/* team area */}
            <TeamOne />
            {/* team area */}

            {/* testimonial area */}
            <TestimonialOne />
            {/* testimonial area */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>

      {/* footer shape odstraněn */}
    </Wrapper>
  );
};

export default HomeMain;