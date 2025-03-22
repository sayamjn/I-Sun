'use client'; 
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contact from '@/app/components/Contact';
import { notFound } from 'next/navigation';
import HeaderOnSlider from '@/app/components/HeaderOnSlider';
import ClientSlider from '@/app/components/ClientSlider';
import Image from 'next/image';

interface AdditionalServiceDetailProps {
    slug: string; 
  }

const AdditionalServiceDetail: React.FC<AdditionalServiceDetailProps> = ({ slug }) => {
  // console.log("Slug in AdditionalServiceDetail:", slug);


const services = [
    {
      slug: 'ai-powered-solar-assessment',
      title: 'AI-Powered Solar Assessment',
      image: '/images/ai-powered-assessment.webp', 
      description:
        "At I-Sun Synergy, we understand that the first step in your solar journey is understanding the true potential of your property. Our proprietary AI-powered assessment uses advanced satellite imagery, machine learning algorithms, and your historical energy consumption patterns to create a precise solar potential analysis.",
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
      slug: 'solarconnect-marketplace',
      title: 'SolarConnect™ Marketplace',
      image: '/images/solarconnect-marketplace.webp',
      description:
        "Your path to solar adoption deserves complete transparency and choice. Our revolutionary SolarConnect™ marketplace transforms how Indians shop for solar solutions by creating a standardized, transparent platform where pre-verified vendors compete for your business.",
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
      slug: 'end-to-end-project-management',
      title: 'End-to-End Project Management',
      image: '/images/project-management.webp',
      description:
        "We transform the traditionally complex solar installation process into a streamlined, stress-free experience. Our comprehensive digital project management system guides you from contract signing through installation and grid connection.",
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
      slug: 'integrated-financing-solutions',
      title: 'Integrated Financing Solutions',
      image: '/images/financing-solutions.webp',
      description:
        "We recognize that financial considerations are often the biggest hurdle to solar adoption. Our embedded fintech platform revolutionizes solar financing by providing instant access to a range of personalized payment options.",
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
      slug: 'performance-monitoring-system',
      title: 'Performance Monitoring System',
      image: '/images/performance-monitoring.webp',
      description:
        "Our relationship with customers extends well beyond installation. Our IoT-enabled performance monitoring system provides continuous, real-time visibility into your solar system's operation.",
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
      slug: 'carbon-credits-marketplace',
      title: 'Carbon Credits Marketplace',
      image: '/images/carbon-credits.webp',
      description:
        "Our innovative carbon credits marketplace transforms your solar installation into an additional revenue stream. Through our platform, we aggregate, verify, and trade carbon offsets generated by our network of solar producers.",
      details: [
        'Carbon impact calculation and certification',
        'Aggregation of credits across our network',
        'Blockchain-verified emissions tracking',
        'International carbon market access',
        'Quarterly carbon revenue distributions',
        'Impact reporting and verification',
        'Optimization recommendations for carbon generation',
      ],
      carouselImages: [
        '/images/Carbon/Carbon-01.jpg',
        '/images/Carbon/Carbon-02.jpg',
        '/images/Carbon/Carbon-03.jpg',
        '/images/Carbon/Carbon-04.jpg',
        '/images/Carbon/Carbon-05.jpg',
        '/images/Carbon/Carbon-06.jpg',
        '/images/Carbon/Carbon-07.jpg',
      ],
    },
    {
      slug: 'virtual-power-plant',
      title: 'Virtual Power Plant Participation',
      image: '/images/virtual-power-plant.webp',
      description:
        "Building on our network of distributed solar installations, our Virtual Power Plant (VPP) program connects solar producers to create a powerful, collective energy resource. Participants can opt-in to share excess production capacity, forming a unified power generation network that can respond to grid demands and market opportunities.",
      details: [
        'Seamless integration with existing solar installations',
        'Smart battery and storage optimization',
        'Dynamic response to grid pricing opportunities',
        'Collective bargaining for higher energy prices',
        'Automated participation with customizable limits',
        'Real-time earnings tracking',
        'Enhanced grid resilience contributions',
      ],
      carouselImages: [
        '/images/VPP/VPP-01.jpg',
        '/images/VPP/VPP-02.jpg',
        '/images/VPP/VPP-03.jpg',
        '/images/VPP/VPP-04.jpg',
        '/images/VPP/VPP-05.jpg',
        '/images/VPP/VPP-06.jpg',
        '/images/VPP/VPP-07.jpg',
      ],
    },
    {
      slug: 'solar-education',
      title: 'Solar Education Programs',
      image: '/images/solar-education.webp',
      description:
        "Our comprehensive solar education services build knowledge and confidence in renewable energy adoption. Under expert guidance, we offer workshops, webinars, and personalized consultations that demystify solar technology and economics.",
      details: [
        'Community solar workshops',
        'Corporate sustainability training',
        'School educational programs',
        'DIY maintenance guidance',
        'Solar technology masterclasses',
        'Regulatory and policy updates',
        'Custom training for specific audiences',
      ],
      carouselImages: [
        '/images/Education/Education-01.jpg',
        '/images/Education/Education-02.jpg',
        '/images/Education/Education-03.jpg',
        '/images/Education/Education-04.jpg',
        '/images/Education/Education-05.jpg',
        '/images/Education/Education-06.jpg',
        '/images/Education/Education-07.jpg',
      ],
    },
    {
      slug: 'commercial-solar-consulting',
      title: 'Commercial Solar Consulting',
      image: '/images/commercial-consulting.webp',
      description:
        "Our commercial solar consulting service delivers expert guidance for businesses seeking to optimize their energy strategy. We provide comprehensive analysis, custom system design, and ROI modeling specifically adapted to commercial energy needs and operational patterns.",
      details: [
        'Comprehensive energy audits',
        'Custom system design and optimization',
        'Financial modeling and ROI analysis',
        'Regulatory compliance guidance',
        'Utility negotiation support',
        'Tax incentive and subsidy maximization',
        'Integration with existing energy systems',
      ],
      carouselImages: [
        '/images/Commercial/Commercial-01.jpg',
        '/images/Commercial/Commercial-02.jpg',
        '/images/Commercial/Commercial-03.jpg',
        '/images/Commercial/Commercial-04.jpg',
        '/images/Commercial/Commercial-05.jpg',
        '/images/Commercial/Commercial-06.jpg',
        '/images/Commercial/Commercial-07.jpg',
      ],
    },
    {
      slug: 'technology-platform',
      title: 'Technology Platform Highlight',
      image: '/images/technology-platform.webp',
      description:
        "Our commitment to innovation is reflected in our advanced technological infrastructure:",
      details: [
        'AI-powered assessment and optimization algorithms',
        'Blockchain-based verification and transaction systems',
        'IoT sensor networks for real-time system monitoring',
        'Cloud-based marketplace and project management platform',
        'Machine learning price prediction models',
        'Automated permit generation and submission tools',
        'Digital twin technology for system optimization',
      ],
      equip: 
        "Our experienced development team combines expertise in artificial intelligence, renewable energy systems, and user experience design, ensuring our platform delivers unprecedented value while remaining accessible to users of all technical backgrounds. This technology-first approach allows us to continuously enhance our services, incorporate emerging innovations, and scale our impact across India's diverse energy landscape."
    },
  ];
  
  const service = services.find((s) => s.slug === slug);

if (!service) {
    return notFound(); 
}

return (
    <div className="bg-black text-[#4CAF50] min-h-screen py-8 px-4 md:px-12">
    <HeaderOnSlider />
    <div className="max-w-6xl mx-auto bg-gray-900 p-4 md:p-8 lg:p-16 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cursive mb-4 text-[#4CAF50]">{service.title}</h2>
            <p className="text-base md:text-lg lg:text-xl text-white font-serif tracking-wide leading-relaxed">
            {service.description}
            </p>
        </div>
        </div>

      
        <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-cursive mb-4 text-center">Service Features</h2>
            <div className="flex justify-center mb-8 md:mb-12"> 
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-4 list-none font-serif text-base md:text-lg max-w-7xl">
            {service.details?.map((detail, index) => (
                <li key={index} className="text-white flex items-center text-center p-2">
                <span className="text-[#4CAF50] mr-2">•</span> 
                {detail}
              </li>
            ))}
            </ul>
            </div>
        <p className="text-base md:text-lg lg:text-xl text-white font-serif tracking-wide leading-relaxed">
        {service.equip}
        </p>
    </div>
    </div>

    <div className="max-w-6xl mx-auto mt-8">
        <ClientSlider images={service.carouselImages || []} title={service.title} />
    </div>

    <section id="contact" className="min-h-screen p-4 md:p-8">
        <Contact />
    </section>

    </div>
);
};
export default AdditionalServiceDetail;