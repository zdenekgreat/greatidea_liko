'use client';
import { gsap } from "gsap";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { ScrollSmoother, ScrollTrigger, SplitText } from '@/plugins';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderTwo from "@/layouts/headers/header-two";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import AboutOne from "@/components/about/about-one";

// Dynamické importy pro sekce pod ohybem
const VideoTwo = dynamic(() => import("@/components/video/video-two"));
const ServiceTwo = dynamic(() => import("@/components/service/service-two"));
const ProjectTwo = dynamic(() => import("@/components/project/project-two"));
const AwardTwo = dynamic(() => import("@/components/award/award-two"));
const LineText = dynamic(() => import("@/components/line-text/line-text"));
const InstagramArea = dynamic(() => import("@/components/instagram/instagram-area"));
const FooterTwo = dynamic(() => import("@/layouts/footers/footer-two"));

// animation
import { bounceAnimation, heroBgAnimation, heroTitleAnim } from "@/utils/title-animation";
import { videoAnimTwo } from "@/utils/video-anim";
import { panelOneAnimation } from "@/utils/panel-animation";
import { awardAnimOne } from "@/utils/award-anim";
import { instagramAnim } from "@/utils/instagram-anim";
import { hoverBtn } from "@/utils/hover-btn";
import { aboutAnim } from "@/utils/about-anim";

const HomeTwoMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    }
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      // hero animation
      heroTitleAnim();
      heroBgAnimation();
      // about animation
      aboutAnim()
      // bounce animation
      bounceAnimation();
      // video anim
      videoAnimTwo();
      // panel animation
      panelOneAnimation();
      // award animation
      awardAnimOne();
      // instagram animation
      instagramAnim();
      hoverBtn();
    }, 100)
    return () => clearTimeout(timer);
  });


  return (
    <Wrapper>
      {/* header area start */}
      <HeaderTwo />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <HeroBannerTwo />
            {/* hero area end */}

            {/* about area start */}
            <AboutOne />
            {/* about area end */}

            {/* video area start */}
            <VideoTwo />
            {/* video area end */}

            {/* service area start */}
            <ServiceTwo />
            {/* service area end */}

            {/* project area */}
            <ProjectTwo />
            {/* project area */}

            {/* award area */}
            <AwardTwo />
            {/* award area */}

            {/* line text area */}
            <LineText />
            {/* line text area */}

            {/* instagram area */}
            <InstagramArea />
            {/* instagram area */}
          </main>

          {/* footer area */}
          <FooterTwo />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeTwoMain;
