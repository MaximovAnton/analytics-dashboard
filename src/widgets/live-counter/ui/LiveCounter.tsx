"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LiveCounter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => v + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-6 rounded-xl bg-white/5 shadow-lg backdrop-blur"
    >
      <div className="text-sm opacity-70">Live counter</div>

      <div className="mt-2 h-[48px] flex items-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value} // каждое новое число — новая анимация
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="text-4xl font-bold"
          >
            {value}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
