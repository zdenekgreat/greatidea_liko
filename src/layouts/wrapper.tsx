"use client";
import React, { useEffect } from "react";
import BackToTop from "@/components/back-to-top";

interface WrapperProps {
  children: React.ReactNode;
  showBackToTop?: boolean;
}

const Wrapper = ({ children, showBackToTop=true }: WrapperProps) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <React.Fragment>
      {children}
      {showBackToTop && <BackToTop />}
    </React.Fragment>
  );
};

export default Wrapper;
