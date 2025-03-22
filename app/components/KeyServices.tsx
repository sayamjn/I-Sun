'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import Link from 'next/link';

const KeyServices = () => {
  const services = [
    {
      title: 'AI-Powered Solar Assessment',
      description:
        'At I-Sun Synergy, we understand that the first step in your solar journey is understanding the true potential of your property. Our proprietary AI-powered assessment uses advanced satellite imagery and machine learning algorithms to create a precise solar potential analysis.',
      imageUrl: '/images/Pre-Wedding Photography.webp',
    },
    {
      title: 'SolarConnect™ Marketplace',
      description:
        'Your path to solar adoption deserves complete transparency and choice. Our revolutionary SolarConnect™ marketplace transforms how Indians shop for solar solutions by creating a standardized, transparent platform where pre-verified vendors compete for your business.',
      imageUrl: '/images/Wedding Photography.webp',
    },
    {
      title: 'End-to-End Project Management',
      description:
        'We transform the traditionally complex solar installation process into a streamlined, stress-free experience. Our comprehensive digital project management system guides you from contract signing through installation and grid connection.',
      imageUrl: '/images/Post-Wedding Photography.webp',
    },
    {
      title: 'Integrated Financing Solutions',
      description:
        'We recognize that financial considerations are often the biggest hurdle to solar adoption. Our embedded fintech platform revolutionizes solar financing by providing instant access to a range of personalized payment options.',
      imageUrl: '/images/Baptism Photography.webp',
    },
    {
      title: 'Carbon Credits Marketplace',
      description:
        'Our innovative carbon credits marketplace transforms your solar installation into an additional revenue stream. Through our platform, we aggregate, verify, and trade carbon offsets generated by our network of solar producers.',
      imageUrl: '/images/LIVE _20250307_125532_0000.webp',
    },
  ];

  const titleToSlug = (title:string) => {
    return title
      .trim()
      .toLowerCase()
      .replace(/[^\\w\\s-]/g, '')
      .replace(/\\s+/g, '-');
  };

  return (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-4 text-[#E2A240]">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Solar Adoption Platform
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const slug = titleToSlug(service.title);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: index * 0 }}
                viewport={{ once: true }}
              >
                <Link href={`/services/${slug}`}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;