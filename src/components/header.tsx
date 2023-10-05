"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="
        inset-x-0 max-w-max mx-auto
        fixed top-3 rounded-xl 
        border border-white border-opacity-80 shadow-lg 
        shadow-black/[0.03] backdrop-blur-[0.5rem] 
        px-5
        py-2
        "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex justify-evenly">
          <h3 className="p-2">Home</h3>
          <h3 className="p-2">About</h3>
          <h3 className="p-2">Projects</h3>
          <h3 className="p-2">Skills</h3>
          <h3 className="p-2">Contact</h3>
        </div>
      </motion.div>
    </header>
  );
}
