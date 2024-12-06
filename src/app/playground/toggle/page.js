"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Toggle() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="flex-1 flex flex-col justify-center items-center content-center bg-slate-900 h-svh space-y-4 overflow-x-hidden">
      <button
        type="button"
        role="switch"
        aria-checked={isEnabled}
        onClick={() => setIsEnabled(!isEnabled)}
        className="block w-24 h-12 p-1 bg-transparent cursor-pointer box-content rounded-full  border-4 outline-offset-4 overflow-hidden"
      >
        <motion.span
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 40,
          }}
          animate={{
            x: isEnabled ? "100%" : "0%",
          }}
          className="block h-full bg-yellow-400 rounded-full aspect-square"
        ></motion.span>
      </button>
    </div>
  );
}

export default Toggle;
