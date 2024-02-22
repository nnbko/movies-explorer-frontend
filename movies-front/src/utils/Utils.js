import { useState, useEffect } from "react";
import { Screen_size_S, Screen_size_M, Screen_size_B} from "./Constants";

export function durationToHours(duration = 100) {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  return `${hours} ч ${minutes} мин`
}

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = (event) => {
          setWidth(event.target.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return {
      width,
      isScreenSm: width >= Screen_size_S,
      isScreenLg: width >= Screen_size_M,
      isScreenXl: width >= Screen_size_B,

  };
};