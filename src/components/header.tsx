"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="
        inset-x-0 max-w-max mx-auto
        fixed top-3 
        rounded-xl 
        border border-white border-opacity-80 shadow-lg 
        shadow-black/[0.03] backdrop-blur-[0.5rem] 
        bg-white bg-opacity-80
        "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex justify-content items-center flex-wrap">
          {links.map((link) => {
            return (
              <motion.li
                className="h-3/4 flex justify-center items-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className="px-3 py-3 text-gray-500 hover:text-gray-950 transition"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </header>
  );
}
