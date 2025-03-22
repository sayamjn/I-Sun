'use client';
import React from 'react';
import { motion } from 'framer-motion';
import AdditionalServiceCard from './AdditionalServiceCard';
import Link from 'next/link';

export const AdditionalServices = () => {
  const services = [
    {
      title: 'Carbon Credits Marketplace',
      imageUrl: '/images/Corporate Event Photography.webp', 
    },
    {
      title: 'Virtual Power Plant Participation',
      imageUrl: '/images/Family Portrait Sessions.webp',
    },
    {
      title: 'Solar Education Programs',
      imageUrl: '/images/Maternity Photography.webp', 
    },
    {
      title: 'Commercial Solar Consulting',
      imageUrl: '/images/Newborn Photography.webp', 
    },
    {
      title: 'Solar-Ready Construction Advisory',
      imageUrl: '/images/Fashion and Portfolio Photography.webp',
    },
    {
      title: 'Rural Electrification Projects',
      imageUrl: '/images/Product Photography.webp', 
    },
    {
      title: 'Energy Storage Solutions',
      imageUrl: '/images/Real Estate Photography.webp', 
    },
    {
      title: 'Green Building Certification Support',
      imageUrl: '/images/School Event Photography.webp', 
    },
    {
      title: 'Industrial Solar Solutions',
      imageUrl: '/images/Food Photography.webp', 
    },
    {
      title: 'Community Solar Programs',
      imageUrl: '/images/Social Media Content Photography.webp',
    },
    {
      title: 'Technology Platform',
      imageUrl: '/images/professional-euipments.webp', 
    },
  ];

  const titleToSlug = (title:string) => {
    return title
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  return (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-4 text-[#E2A240]">
      <h2 className="text-4xl font-bold text-center mb-16">Additional Professional Services</h2>
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
                <Link href={`/AddtionalServices/${slug}`}>
                  <AdditionalServiceCard
                    title={service.title}
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