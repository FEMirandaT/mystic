"use client";
import { useEffect, useState } from "react";

const breakpoints = {
  sm: 640, // Mobile devices and above
  md: 768, // Tablet devices and above
  lg: 1024, // Desktop devices and above
  xl: 1280, // Large desktop devices and above
  "2xl": 1536, // Extra large desktop devices
};

const useResponsive = () => {
  const [screenType, setScreenType] = useState({
    isMobile: true,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    isLargerThanMobile: false,
    isLargerThanTablet: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setScreenType({
        isMobile: screenWidth < breakpoints.md,
        isTablet: screenWidth >= breakpoints.md && screenWidth < breakpoints.lg,
        isDesktop:
          screenWidth >= breakpoints.lg && screenWidth < breakpoints["2xl"],
        isLargeDesktop: screenWidth >= breakpoints["2xl"],
        isLargerThanMobile: screenWidth >= breakpoints.md,
        isLargerThanTablet: screenWidth >= breakpoints.lg,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenType;
};

export default useResponsive;
