import React from 'react';
import ImageSlider from './components/ImageSlider';
import HeaderOnSlider from './components/HeaderOnSlider';
import About from './components/About';
import styles from "../styles/Home.module.css";
import KeyServices from "./components/KeyServices";
import {AdditionalServices}  from "./components/AdditionalServices";
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
import TechnologyPlatform from './components/TechnologyPlatform';

export default async function Home() {
  return (
    <main className="p-0 bg-black overflow-x-hidden">
      <HeaderOnSlider />
      <ImageSlider />
      <HeroSection />
      
      <section id="about" className="py-12">
        <About />
      </section>

      <section id="services" className="p-8">
        <div className={styles.serviceGrid}>
          <KeyServices />
        </div>
      </section>

      <section id="additional-services" className="p-10">
        <AdditionalServices />
      </section>
      
      <section id="technology" className="p-8">
        <TechnologyPlatform />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}