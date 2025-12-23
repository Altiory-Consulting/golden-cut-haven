import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    // Skip first render to avoid scroll on initial load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    // Force immediate scroll to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
