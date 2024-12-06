"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Playground() {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="flex-1 flex flex-col justify-center items-center content-center bg-slate-900 h-svh space-y-4 overflow-x-hidden">
      <motion.div
        initial={true}
        transition={{
          stiffness: 200,
          type: "spring",
          damping: 25,
        }}
        animate={{
          y: isEnabled ? -60 : 1,
          zoom: isEnabled ? 3 : 1,
        }}
        className="
      yellow w-[100px] 
      h-[100px] 
      flex  
      rounded-full 
      text-center 
      bg-yellow-400"
      ></motion.div>

      <button
        className="text-white border z-10 px-4 py-1 rounded-full 
        bg-slate-900 hover:bg-slate-800 active:bg-slate-700"
        onClick={() => setIsEnabled(!isEnabled)}
      >
        Toggle
      </button>
    </div>
  );
}

export default Playground;
