"use client";

import { useRef } from "react";
import { HOBBIES } from "@/constants";
import { motion } from "motion/react";

export default function HobbiesList() {
  const constraintRef = useRef(null);

  return (
    <div className="relative flex-1" ref={constraintRef}>
      {HOBBIES.map((item) => (
        <motion.div
          key={item.title}
          className="absolute inline-flex select-none gap-x-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5 hover:cursor-grab active:cursor-grabbing"
          style={{
            left: item.position.left,
            top: item.position.top,
          }}
          drag
          dragConstraints={constraintRef}
          dragElastic={0.2}
        >
          <span>{item.emoji}</span>
          <span className="font-medium text-gray-950">{item.title}</span>
        </motion.div>
      ))}
    </div>
  );
}
