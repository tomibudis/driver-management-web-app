import { useEffect, useMemo, useState, useContext } from "react";

import { ResponsiveType } from "~types/components";
import { ResponsiveContext } from "~contexts/responsive";

enum Size {
  Mobile = 550,
  Tablet = 768,
  Desktop = 1024,
}

const getSizeScreen = (width: number) => {
  if (width <= Size.Mobile) {
    return Size.Mobile;
  } else if (width <= Size.Desktop && width >= Size.Mobile) {
    return Size.Tablet;
  } else if (width >= Size.Desktop) {
    return Size.Desktop;
  } else {
    return 0;
  }
};

const useCalculationResponsive = (): ResponsiveType => {
  const [currentDisplaySize, setCurrentDisplaySize] = useState(0);

  useEffect(() => {
    const handleResize = () =>
      setCurrentDisplaySize(getSizeScreen(window.innerWidth));

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentDisplaySize(getSizeScreen(window.innerWidth));
  }, []);

  return useMemo(() => {
    if (currentDisplaySize <= Size.Mobile) {
      return {
        isMobile: true,
      };
    } else if (
      currentDisplaySize < Size.Desktop &&
      currentDisplaySize > Size.Mobile
    ) {
      return { isTablet: true };
    } else if (currentDisplaySize >= Size.Desktop) {
      return { isDesktop: true };
    } else {
      return {};
    }
  }, [currentDisplaySize]);
};

const useResponsive = () => {
  return useContext(ResponsiveContext);
};

export { useCalculationResponsive, useResponsive };
export default useResponsive;
