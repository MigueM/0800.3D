import { useEffect, useState } from "react";

export default function useCheckMobileScreen () {
    const [width, setWidth] = useState(typeof window !== "undefined" && window.innerWidth);
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);
  
    return Number(width) <= 768;
  };