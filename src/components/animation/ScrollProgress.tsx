"use client";

import { motion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 transform origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
