"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const aboutRef = React.useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });

  const leadershipRef = React.useRef(null);
  const leadershipInView = useInView(leadershipRef, { once: true });

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 bg-black text-[#E2A240]">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-[#E2A240] mb-8 md:mb-16 uppercase tracking-wider">
        About Us
      </h1>

      <div
        ref={aboutRef}
        className="flex flex-col lg:flex-row items-start gap-8 md:gap-12"
      >
        <motion.div
          className="flex-1 space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed px-4 md:px-0 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-justify">
            Led by a team of <span className="font-semibold text-white">renewable energy innovators and technology experts</span>, I-Sun Synergy has rapidly emerged as a pioneering force in Indias solar landscape. Based in <span className="font-semibold text-white">Bhopal, Madhya Pradesh</span>, our journey began with a transformative vision: to make <span className="italic text-white">clean, affordable solar energy accessible to every Indian household and business</span>. Today, we continue to pursue this mission by leveraging cutting-edge AI technology and innovative marketplace solutions that remove traditional barriers to solar adoption.
          </p>

          <p className="text-justify">
            Our philosophy centers on the belief that <span className="font-semibold text-white">renewable energy should be available to all</span>, regardless of technical expertise or financial constraints. As a tech-driven company with deep roots in Indias emerging clean energy ecosystem, we understand the unique challenges facing solar adoption in our country - from complex vendor landscapes to financing hurdles and technical uncertainties. Our <span className="italic text-white">SolarConnect™ platform</span> addresses these challenges head-on, creating a seamless pathway to sustainable energy independence.
          </p>

          <p className="text-justify">
            What sets us apart is our unwavering commitment to <span className="font-semibold text-white">transparency and customer empowerment</span>. We take pride in demystifying the solar journey, providing clear information, verified vendors, and real-time performance data that builds trust and confidence. Under the guidance of our founding team, whose expertise spans renewable energy, artificial intelligence, and fintech, I-Sun Synergy has built a reputation for <span className="italic text-white">innovation that truly serves the needs of Indian consumers and businesses</span>.
          </p>

          <p className="text-justify">
            In an era of climate consciousness and rising energy costs, we remain dedicated to our core mission of <span className="font-semibold text-white">democratizing solar energy</span> while continuously evolving our technology platform to deliver ever-greater value and impact for our growing community of solar adopters across India.
          </p>
        </motion.div>

        <motion.div
          className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/About us left side pic.webp"
            alt="About Us"
            width={400}
            height={500} 
            className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
            priority
          />
        </motion.div>
      </div>

      <div
        ref={leadershipRef}
        className="mt-12 md:mt-16 flex flex-col lg:flex-row items-center gap-8 md:gap-12"
      >
        <motion.div
          className="flex-1 p-6 md:p-8 bg-black border-2 border-[#E2A240] rounded-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={leadershipInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-6 uppercase tracking-wider">
            Meet Our Leadership
          </h2>
          <p className="text-base md:text-lg text-justify leading-relaxed">
            At I-Sun Synergy, our leadership team combines <span className="font-semibold text-white">deep expertise in renewable energy, technology innovation, and marketplace development</span>. Founded by professionals with backgrounds spanning solar engineering, artificial intelligence, and financial technology, our company brings together the perfect blend of skills needed to revolutionize Indias approach to solar energy adoption.
          </p>

          <p className="text-base md:text-lg text-justify leading-relaxed mt-4 md:mt-6">
            Our founders share a passionate commitment to sustainability and democratizing access to clean energy. Their unique approach combines <span className="font-semibold text-white">technical excellence with user-friendly design</span>, ensuring that every aspect of the solar adoption journey is accessible to all Indians regardless of technical background. From advanced AI algorithms that accurately assess solar potential to transparent marketplace mechanics that ensure fair pricing, our leadership team has built a platform that puts customers first at every step.
          </p>

          <p className="text-base md:text-lg text-justify leading-relaxed mt-4 md:mt-6">
            As mentors and innovators, our founding team has cultivated a company culture that values <span className="italic text-white">continuous improvement, data-driven decision making, and customer-centered design</span>. Their hands-on involvement in product development and strategic partnerships ensures that I-Sun Synergy maintains its position at the forefront of Indias renewable energy revolution.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={leadershipInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/About us Right side pic.webp" 
            alt="Our Leadership"
            width={400}
            height={500} 
            className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}