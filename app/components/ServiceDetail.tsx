'use client'; 
import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contact from '@/app/components/Contact';
import { notFound } from 'next/navigation';
import HeaderOnSlider from '@/app/components/HeaderOnSlider';
import ClientSlider from '@/app/components/ClientSlider';
import { supabase } from "@/lib/supabase";
import Image from 'next/image';

interface ServiceDetailProps {
  slug: string; 
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug }) => {
  const [liveUrl, setLiveUrl] = useState("");

  useEffect(() => {
    const fetchLiveUrl = async () => {
      try {
        const { data, error } = await supabase
          .from("live_url")
          .select("url")
          .eq("id", 1) // Use integer ID
          .single();

        if (error) throw error;
        setLiveUrl(data?.url || "");
      } catch (error) {
        console.error("Error fetching live URL:", error);
      }
    };

    fetchLiveUrl();
  }, []);

  const handleLive = () => {
    if (liveUrl) {
      window.open(liveUrl, "_blank");
    } else {
      alert("Live monitoring dashboard is not available.");
    }
  };

  const services = [
    {
      slug: 'solar-assessment',
      title: 'AI-Powered Solar Assessment',
      image: '/images/solar-assessment.webp',
      description:
        'At I-Sun Synergy, we understand that the first step in your solar journey is understanding the true potential of your property. Our proprietary AI-powered assessment uses advanced satellite imagery, machine learning algorithms, and your historical energy consumption patterns to create a precise solar potential analysis.',
      details: [
        'Precise roof orientation and shading analysis',
        'Weather pattern and regional solar irradiance calculation',
        'Optimal system sizing recommendations',
        'Accurate energy production estimates',
        'Detailed cost savings projections',
        'Environmental impact calculations',
        'User-friendly interface for technical information',
      ],
      carouselImages: [
        '/images/Solar-Assessment/Assessment-01.jpg',
        '/images/Solar-Assessment/Assessment-02.jpg',
        '/images/Solar-Assessment/Assessment-03.jpg',
        '/images/Solar-Assessment/Assessment-04.jpg',
        '/images/Solar-Assessment/Assessment-05.jpg',
        '/images/Solar-Assessment/Assessment-06.jpg',
        '/images/Solar-Assessment/Assessment-07.jpg',
      ],
    },
    {
      slug: 'solar-marketplace',
      title: 'SolarConnect™ Marketplace',
      image: '/images/solar-marketplace.webp',
      description:
        'Your path to solar adoption deserves complete transparency and choice. Our revolutionary SolarConnect™ marketplace transforms how Indians shop for solar solutions by creating a standardized, transparent platform where pre-verified vendors compete for your business.',
      details: [
        'Standardized quality metrics for easy comparison',
        'Pre-verified vendor network',
        'Dynamic bidding system for competitive pricing',
        'Uniform technical specifications',
        'Transparent pricing structures',
        'Wide range of customizable options',
        'Strict quality control standards',
      ],
      carouselImages: [
        '/images/Marketplace/Marketplace-01.jpg',
        '/images/Marketplace/Marketplace-02.jpg',
        '/images/Marketplace/Marketplace-03.jpg',
        '/images/Marketplace/Marketplace-04.jpg',
        '/images/Marketplace/Marketplace-05.jpg',
        '/images/Marketplace/Marketplace-06.jpg',
        '/images/Marketplace/Marketplace-07.jpg',
      ],
    },
    {
      slug: 'project-management',
      title: 'End-to-End Project Management',
      image: '/images/project-management.webp',
      description:
        'We transform the traditionally complex solar installation process into a streamlined, stress-free experience. Our comprehensive digital project management system guides you from contract signing through installation and grid connection.',
      details: [
        'Real-time project tracking via mobile app and web',
        'Automated documentation system for paperwork',
        'Quality assurance protocols',
        'Milestone-based progress monitoring',
        'Permit application support',
        'Equipment delivery tracking',
        'Personalized installation support',
      ],
      carouselImages: [
        '/images/Project-Management/Project-01.jpg',
        '/images/Project-Management/Project-02.jpg',
        '/images/Project-Management/Project-03.jpg',
        '/images/Project-Management/Project-04.jpg',
        '/images/Project-Management/Project-05.jpg',
        '/images/Project-Management/Project-06.jpg',
        '/images/Project-Management/Project-07.jpg',
      ],
    },
    {
      slug: 'financing-solutions',
      title: 'Integrated Financing Solutions',
      image: '/images/financing-solutions.webp',
      description:
        'We recognize that financial considerations are often the biggest hurdle to solar adoption. Our embedded fintech platform revolutionizes solar financing by providing instant access to a range of personalized payment options.',
      details: [
        'Multiple financing options (loans, leases, PPAs)',
        'Transparent ROI calculations',
        'Partnerships with leading financial institutions',
        'Competitive interest rates',
        'Flexible term options',
        'Quick approval timelines',
        'Paperless application process',
      ],
      carouselImages: [
        '/images/Financing/Financing-01.jpg',
        '/images/Financing/Financing-02.jpg',
        '/images/Financing/Financing-03.jpg',
        '/images/Financing/Financing-04.jpg',
        '/images/Financing/Financing-05.jpg',
        '/images/Financing/Financing-06.jpg',
        '/images/Financing/Financing-07.jpg',
      ],
    },
    {
      slug: 'performance-monitoring',
      title: 'Performance Monitoring System',
      image: '/images/performance-monitoring.webp',
      description:
        'Our relationship with customers extends well beyond installation. Our IoT-enabled performance monitoring system provides continuous, real-time visibility into your solar system\'s operation.',
      details: [
        'Real-time energy production tracking',
        'Consumption pattern analysis',
        'Financial savings monitoring',
        'AI-powered predictive maintenance',
        'System performance benchmarking',
        'Proactive issue identification',
        'Educational insights for optimization',
      ],
      carouselImages: [
        '/images/Monitoring/Monitoring-01.jpg',
        '/images/Monitoring/Monitoring-02.jpg',
        '/images/Monitoring/Monitoring-03.jpg',
        '/images/Monitoring/Monitoring-04.jpg',
        '/images/Monitoring/Monitoring-05.jpg',
        '/images/Monitoring/Monitoring-06.jpg',
        '/images/Monitoring/Monitoring-07.jpg',
      ],
    },
    {
      slug: 'live-monitoring',
      title: 'Live System Monitoring',
      image: '/images/live-monitoring.webp',
      description:
        'At I-Sun Synergy, we bring transparency to your solar investment through our professional live monitoring dashboard. Our advanced monitoring system provides real-time performance data, energy production metrics, and system health indicators all in one unified interface. Our dedicated team ensures high-quality, uninterrupted data collection with professional-grade sensors and reliable connectivity solutions, delivering a seamless monitoring experience that captures the true value of your solar installation.',
      carouselImages: [
        '/images/Live-Monitoring/Live-01.jpg',
        '/images/Live-Monitoring/Live-02.jpg',
        '/images/Live-Monitoring/Live-03.jpg',
        '/images/Live-Monitoring/Live-04.jpg',
        '/images/Live-Monitoring/Live-05.jpg',
        '/images/Live-Monitoring/Live-06.jpg',
        '/images/Live-Monitoring/Live-07.jpg',
      ],
      keyServices: [ 
        'Real-time Production Monitoring - Track your system\'s energy generation in real-time with minute-by-minute updates and visualization',
        'Performance Analytics - Access detailed charts and graphs showing daily, weekly, monthly, and yearly production patterns',
        'Financial Returns Dashboard - Monitor your investment returns, savings, and payback timeline with accurate financial metrics',
        'Weather Integration - See how local weather conditions affect your system\'s performance with integrated weather data',
        'Comparative Analysis - Benchmark your system against similar installations in your region to ensure optimal performance',
        'Maintenance Alerts - Receive instant notifications about system issues or maintenance requirements',
        'Mobile Accessibility - Monitor your system from anywhere using our mobile-optimized dashboard',
      ],
      equip: 
        "Our live monitoring packages include high-precision sensors, reliable data transmission systems, secure cloud storage, customizable alert parameters, and user-friendly dashboards accessible from any device. With I-Sun Synergy's live monitoring services, you gain complete visibility into your solar investment's performance, ensuring maximum returns and system longevity."
    }
  ];

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return notFound(); 
  }

  return (
    <div className="bg-black text-[#4CAF50] min-h-screen py-8 md:py-16 px-4 md:px-12">
  <HeaderOnSlider />
  <div className="max-w-6xl mx-auto bg-gray-900 p-4 md:p-8 lg:p-16 rounded-lg shadow-lg">
    {/* Image and Title Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-cursive mb-4 text-[#4CAF50]">
          {service.title}
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-white font-serif tracking-wide leading-relaxed">
          {service.description}
        </p>
        {/* Add Live Monitoring Button */}
        {slug === 'live-monitoring' && (
          <button
            onClick={handleLive}
            className="mt-4 md:mt-6 bg-green-500 text-black px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-green-400 transition duration-300"
          >
            Access Live Dashboard
          </button>
        )}
      </div>
    </div>


    {/* Key Services or Details Section */}
    {slug === 'live-monitoring' ? (
      <div className="mt-6 md:mt-10">
        <h2 className="text-2xl md:text-3xl underline font-cursive mb-4 text-start text-[#4CAF50]">
          Key Monitoring Features
        </h2>
        <ul className="list-disc list-inside font-serif mb-8 md:mb-16 text-base md:text-lg lg:text-xl space-y-2 md:space-y-3 text-white">
          {service.keyServices?.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    ) : (
      <div className="mt-6 md:mt-8">
        <h2 className="text-2xl md:text-3xl font-cursive mb-4 text-start text-[#4CAF50]">
          Service Features
        </h2>
        <ul className="list-disc list-inside font-serif text-base md:text-lg lg:text-xl space-y-2 md:space-y-3 text-white">
          {service.details?.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Equipment Description */}
    {service.equip && (
      <p className="text-base md:text-lg lg:text-xl text-white font-serif tracking-wide leading-relaxed mt-6 md:mt-8">
        {service.equip}
      </p>
    )}
  </div>

  {/* Carousel Section */}
  <div className="max-w-6xl mx-auto mt-8">
    <ClientSlider images={service.carouselImages} title={service.title} />
  </div>

  {/* Contact Section */}
  <section id="contact" className="min-h-screen p-4 md:p-8">
    <Contact />
  </section>
</div>
  );
};

export default ServiceDetail;