"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ContactTwo from "@/components/contact/contact-two";
import ContactLocation from "@/components/contact/contact-location";
import FooterTwo from "@/layouts/footers/footer-two";
import BigText from "@/components/big-text";
// animation
// import { charAnimation } from "@/utils/title-animation";

const ContactMain = () => {
  // useScrollSmooth();

  // useGSAP(() => {
  //   const timer = setTimeout(() => {
  //     charAnimation();
  //   }, 100);
  //   return () => clearTimeout(timer);
  // });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* hero area start */}
              <div className="tm-hero-area tm-hero-ptb">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Great !dea</span>
                        <h4 className="tm-hero-title tp-char-animation">
                          Kontakt
                        </h4>
                      </div>
                      <div className="tm-hero-text tp_title_anim">
                        <p>
                          Máte dotaz? Napište nám přes kontaktní formulář nebo využijte kontakty níže.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* hero area end */}

              {/* contact area */}
              <ContactTwo/>
              {/* contact area */}

              {/* contact location */}
              <ContactLocation/>
              {/* contact location */}

              {/* big text */}
              <BigText />
              {/* big text */}
            </main>

            {/* footer area */}
            <FooterTwo topCls="" />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactMain;
