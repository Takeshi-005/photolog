import { useState, useCallback, useEffect } from 'react';
import { MIN_SCREEN_SIZE } from './../constants/config';

function isMobileWindowSize() {
  if (typeof window !== 'undefined') {
    if (window.matchMedia(`(max-width: ${MIN_SCREEN_SIZE}px)`).matches) {
      return true;
    }
  }

  return false;
}

export default () => {
  const [isMobile, setIsMobile] = useState(isMobileWindowSize());

  const resizeEvent = useCallback(() => {
    setIsMobile(isMobileWindowSize());
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resizeEvent);

    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, [resizeEvent]);

  return { isMobile };
};
