'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import MainLayout from '@/components/Layout/MainLayout';
import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section/Section';
import Card from '@/components/Card/Card';
import Testimonial from '@/components/Testimonial/Testimonial';
import PrimaryButton from '@/components/Button/PrimaryButton';

export default function Home() {
  const services = [
    {
      title: 'Educational Services',
      description: 'Supporting academic achievement through tutoring, workshops, and study support for Bravanese youth.',
      imageUrl: '/images/Educational Services.jpg',
      linkUrl: '/education',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: 'Recreational Activities',
      description: 'Building community through cultural events, sports programs, and arts activities for all ages.',
      imageUrl: '/images/Playing Football.jpg',
      linkUrl: '/recreational',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Language Research',
      description: 'Preserving and promoting the Bravanese/Chimwiini language through documentation and research.',
      imageUrl: '/images/Writing.jpg',
      linkUrl: '/language',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "I am excited to see how The Bravanese Society will empower our youth through educational programs.",
      name: "Ali Ahmed",
      title: "Future Beneficiary"
    },
    {
      quote: "I look forward to participating in cultural events that will strengthen our community bonds.",
      name: "Fatima Mudhir",
      title: "Future Participant"
    },
    {
      quote: "I believe that the language programs will help preserve our heritage for future generations.",
      name: "Omar Badawi",
      title: "Future Advocate"
    }
  ];

  const sponsors = [
    { name: "Sponsor 1", logo: "/images/placeholder-logo1.png" },
    { name: "Sponsor 2", logo: "/images/placeholder-logo2.png" },
    { name: "Sponsor 3", logo: "/images/placeholder-logo3.png" },
    { name: "Sponsor 4", logo: "/images/placeholder-logo4.png" }
  ];

  return (
    <MainLayout>
      <Hero 
        title="Preserving Heritage, Building Future"
        subtitle="The Bravanese Society is dedicated to supporting the Bravanese community through education, cultural preservation, and community building."
        buttonText="Learn More"
        buttonLink="/about"
        isHomepage={true}
      />

      {/* Services Section */}
      <Section
        title="Our Services"
        subtitle="Supporting the Bravanese community through a range of educational, recreational, and cultural programs."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              linkUrl={service.linkUrl}
            >
              {service.title === 'Educational Services' ? (
                <div className="mb-6 w-full aspect-video rounded overflow-hidden flex items-center justify-center">
                  <Image 
                    src="/images/Educational Services.jpg"
                    alt="Educational Services" 
                    width={400}
                    height={225}
                    className="rounded-lg"
                  />
                </div>
              ) : service.title === 'Recreational Activities' ? (
                <div className="mb-6 w-full aspect-video rounded overflow-hidden flex items-center justify-center">
                  <Image 
                    src="/images/Playing Football.jpg"
                    alt="Recreational Activities" 
                    width={400}
                    height={225}
                    className="rounded-lg"
                  />
                </div>
              ) : service.title === 'Language Research' ? (
                <div className="mb-6 w-full aspect-video rounded overflow-hidden flex items-center justify-center">
                  <Image 
                    src="/images/Writing.jpg"
                    alt="Language Research" 
                    width={400}
                    height={225}
                    className="rounded-lg"
                  />
                </div>
              ) : (
                <div className="mb-6 w-full aspect-video bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                  <div className="text-gray-400 text-lg font-medium">
                    Placeholder for {service.title} Image
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section 
        dark
        className="bg-primary-900"
        title="About The Bravanese Society"
        subtitle="We are a newly established charity committed to supporting and empowering the Bravanese community."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-6">
              The Bravanese Society was founded with a mission to preserve Bravanese culture and identity while providing essential services to our community members.
            </p>
            <p className="text-gray-300 mb-6">
              Our work spans educational support for youth, cultural activities for all ages, and documentation of the Bravanese language to ensure it thrives for generations to come.
            </p>
            <PrimaryButton 
              href="/about" 
              darkBg={true}
            >
              <span className="flex items-center">
                Learn More About Us
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </PrimaryButton>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/Tower Bridge.webp"
              alt="Tower Bridge" 
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section
        title="Testimonials"
        subtitle="Read what our community members aspire to achieve with The Bravanese Society."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </Section>

      {/* Sponsors Section */}
      <Section
        title="Our Partners & Sponsors"
        subtitle="The Bravanese Society is a newly established charity seeking partnerships and sponsors to support our mission."
        className="bg-gray-50"
      >
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <p className="text-gray-700 mb-4 text-center">
            We are looking for organizations and individuals who share our vision to support our educational, cultural, and community initiatives. Your partnership can make a significant impact in the lives of the Bravanese community.
          </p>
        </div>
      </Section>

      {/* Call to Action */}
      <Section dark className="bg-secondary-700">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Us in Making a Difference</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Support our mission to strengthen the Bravanese community through education, culture, and unity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton 
              href="/get-involved" 
              darkBg={true}
            >
              Get Involved
            </PrimaryButton>
            <PrimaryButton 
              href="/contact" 
              darkBg={true}
            >
              Contact Us
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}
