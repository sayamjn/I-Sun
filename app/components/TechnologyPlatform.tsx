'use client';
import React from 'react';
import { motion } from 'framer-motion';

const TechnologyPlatform = () => {
  const technologies = [
    "AI-powered assessment and optimization algorithms",
    "Blockchain-based verification and transaction systems",
    "IoT sensor networks for real-time system monitoring",
    "Cloud-based marketplace and project management platform",
    "Machine learning price prediction models",
    "Automated permit generation and submission tools",
    "Digital twin technology for system optimization"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-[#E2A240] mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technology Platform Highlight
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.p 
            className="text-white text-lg text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our commitment to innovation is reflected in our advanced technological infrastructure:
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <p className="text-[#E2A240] font-semibold">{tech}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="text-white text-lg mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Our experienced development team combines expertise in artificial intelligence, renewable energy systems, and user experience design, ensuring our platform delivers unprecedented value while remaining accessible to users of all technical backgrounds. This technology-first approach allows us to continuously enhance our services, incorporate emerging innovations, and scale our impact across Indias diverse energy landscape.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPlatform;