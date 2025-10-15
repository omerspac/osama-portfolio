"use client";
import { useEffect, useState, useRef } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);
      animationFrame.current = requestAnimationFrame(updateProgress);
    };

    const handleScroll = () => {
      if (animationFrame.current === null) {
        animationFrame.current = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[4px] bg-green-500 z-50 transition-[width] duration-75 ease-linear shadow-md"
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
}
