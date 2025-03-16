'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import MainLayout from '@/components/Layout/MainLayout';
import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section/Section';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Ahmed Hassan",
      role: "Founder & Director",
      bio: "Ahmed has been working with the Bravanese community for over 15 years and founded The Bravanese Society to address the educational and cultural needs of the community.",
    },
    {
      name: "Fatima Omar",
      role: "Educational Programs Lead",
      bio: "Fatima brings her experience as an educator to develop and implement effective educational support programs for Bravanese youth.",
    },
    {
      name: "Mohammed Ali",
      role: "Cultural Programs Coordinator",
      bio: "Mohammed is passionate about preserving Bravanese cultural traditions and organizes community events and activities.",
    },
    {
      name: "Amina Ibrahim",
      role: "Language Research Lead",
      bio: "Amina is a linguist specializing in East African languages and leads our efforts to document and preserve the Bravanese language.",
    }
  ];

  return (
    <MainLayout>
      <Hero 
        title="About The Bravanese Society"
        subtitle="Learn about our mission, vision, and the team behind our work."
        imagePath="/images/Chilaani.jpg"
      />

      {/* Mission & Vision Section */}
      <Section
        title="Our Mission & Vision"
        subtitle="Working together to preserve culture and build a stronger community."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              The Bravanese Society is dedicated to supporting the Bravanese community through educational services, recreational activities, and language preservation efforts. We aim to empower community members of all ages while preserving our rich cultural heritage.
            </p>
            
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              We envision a thriving Bravanese community where our cultural identity is preserved and celebrated, where our youth have access to quality educational support, and where our language continues to be spoken and documented for future generations.
            </p>
          </div>
          
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/[Placeholder for Mission & Vision Image].jpg"
              alt="Our Mission and Vision"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Why This Matters Section */}
      <Section
        dark
        className="bg-primary-900"
        title="Why This Matters"
        subtitle="The importance of preserving Bravanese identity, culture, and language."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/[Placeholder for Cultural Preservation Image].webp"
              alt="Cultural Preservation"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <p className="text-gray-300 mb-6">
              The Bravanese community has a rich cultural heritage that is at risk of being lost as younger generations grow up in diaspora communities. Our language, Chimwiini/Chimbalazi, is classified as endangered by UNESCO, with fewer speakers each generation.
            </p>
            <p className="text-gray-300 mb-6">
              By providing educational support, we help Bravanese youth succeed academically while maintaining a connection to their cultural roots. Our recreational activities build community bonds and provide spaces for cultural expression and celebration.
            </p>
            <p className="text-gray-300">
              Our language documentation efforts ensure that this unique linguistic heritage is preserved for future generations, contributing to global linguistic diversity and cultural understanding.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Team Section */}
      <Section
        title="Meet Our Team"
        subtitle="The dedicated individuals working to support the Bravanese community."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-64 bg-gray-200 relative">
                {member.name === "Ahmed Hassan" ? (
                  <Image 
                    src="/images/[Placeholder for Ahmed Hassan's Photo].png"
                    alt="Ahmed Hassan"
                    fill
                    className="object-cover"
                  />
                ) : member.name === "Fatima Omar" ? (
                  <Image 
                    src="/images/[Placeholder for Fatima Omar's Photo].webp"
                    alt="Fatima Omar"
                    fill
                    className="object-cover"
                  />
                ) : member.name === "Mohammed Ali" ? (
                  <Image 
                    src="/images/[Placeholder for Mohammed Ali's Photo].jpg"
                    alt="Mohammed Ali"
                    fill
                    className="object-cover"
                  />
                ) : member.name === "Amina Ibrahim" ? (
                  <Image 
                    src="/images/[Placeholder for Amina Ibrahim's Photo].jpeg"
                    alt="Amina Ibrahim"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                    [Placeholder for {member.name}'s Photo]
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Impact Statement */}
      <Section
        className="bg-secondary-50"
        title="Our Impact"
        subtitle="Why funders should support this initiative."
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-secondary-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Supporting The Bravanese Society Means:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  <span className="font-semibold">Preserving Cultural Heritage:</span> Helping to document and maintain the unique cultural traditions and language of the Bravanese community.
                </p>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  <span className="font-semibold">Educational Empowerment:</span> Supporting academic achievement and educational opportunities for Bravanese youth.
                </p>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  <span className="font-semibold">Community Building:</span> Fostering connections and support networks within the Bravanese community.
                </p>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  <span className="font-semibold">Cultural Diversity:</span> Contributing to the rich tapestry of cultural diversity in our society.
                </p>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">
                  <span className="font-semibold">Linguistic Preservation:</span> Helping to document and revitalize an endangered language.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
} 