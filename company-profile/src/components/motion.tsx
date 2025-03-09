"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface MotionProps {
  children: ReactNode;
  scale?: number;
  rotate?: number;
  stiffness?: number;
}

export default function Motion({
  children,
  scale = 0,
  rotate = 360,
  stiffness = 260,
}: MotionProps) {
  return (
    <motion.div
      initial={{ scale }}
      animate={{ rotate, scale: 1 }}
      transition={{
        type: "spring",
        stiffness,
        damping: 20,
        duration:5000,
      }}
    >
        {children}
    </motion.div>
  );
}
