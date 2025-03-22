'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-4 py-20">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-[#E2A240] mb-4 md:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Democratizing Solar Energy for Every Indian Home
      </motion.h1>
      
      <motion.h2
        className="text-2xl md:text-3xl text-white mb-4 md:mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Where Technology Meets Sustainability
      </motion.h2>
      
      <motion.p
        className="text-xl md:text-2xl text-[#E2A240] max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        AI-Powered Solar Solutions for a Brighter Tomorrow
      </motion.p>
    </section>
  );
};

export default HeroSection;