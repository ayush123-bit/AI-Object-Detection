"use client"; // Ensure this runs as a client component

import ObjectDetection from "@/components/object-detection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      {/* Reduced Heading Size */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="gradient-title font-extrabold text-2xl md:text-5xl lg:text-7xl tracking-tighter md:px-6 text-center"
      >
        Thief Detection Alarm
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="text-base md:text-lg lg:text-xl text-gray-300 mt-3 text-center"
      >
        Real-time AI-powered security system for enhanced protection.
      </motion.p>

      {/* Moved Object Detection Up */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-6 w-full flex justify-center" // Reduced top margin (from 8 to 6)
      >
        <ObjectDetection />
      </motion.div>

      {/* Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700"
      >
        Start Detection
      </motion.button>
    </main>
  );
}
