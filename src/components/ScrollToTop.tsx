import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Zakážeme automatické scroll restoration prohlížeče
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Nastavíme scroll pozici okamžitě, bez animace
  useLayoutEffect(() => {
    // Okamžitý scroll bez animace
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Fallback pro starší prohlížeče
    if (window.scrollY !== 0) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};
