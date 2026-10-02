"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for cursor follow
  const cursorX = useSpring(x, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(y, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Check if it's a touch device to hide custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  // Set spring values manually when mouse position changes
  useEffect(() => {
    cursorX.set(x);
    cursorY.set(y);
  }, [x, y, cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[100] transition-opacity duration-300 mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
};
