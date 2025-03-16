'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import MainLayout from '@/components/Layout/MainLayout';
import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section/Section';
import Card from '@/components/Card/Card';
import PrimaryButton from '@/components/Button/PrimaryButton';

export default function EducationPage() {
  const programs = [
    {
      title: "After-School Tutoring",
      description: "One-on-one and small group tutoring sessions for primary and secondary school students in core subjects.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Homework Club",
      description: "A supportive environment where students can complete homework with access to resources and assistance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "GCSE & A-Level Support",
      description: "Specialized support for students preparing for GCSE and A-Level examinations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "University Application Support",
      description: "Guidance for students applying to universities, including personal statement writing and interview preparation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Cultural Education Workshops",
      description: "Workshops that combine academic learning with cultural education to strengthen students' connection to their heritage.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Parent Education Sessions",
      description: "Workshops for parents to help them support their children's education and navigate the UK education system.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const resources = [
    {
      title: "Study Guides",
      description: "Downloadable study guides for various subjects and educational levels.",
      downloadLink: "#"
    },
    {
      title: "Educational Videos",
      description: "Video resources explaining key concepts in core subjects.",
      downloadLink: "#"
    },
    {
      title: "Cultural Learning Materials",
      description: "Resources that combine academic content with cultural knowledge.",
      downloadLink: "#"
    }
  ];

  return (
    <MainLayout>
      <Hero 
        title="Educational Services"
        subtitle="Supporting academic achievement and cultural learning for the Bravanese community."
        imagePath="/images/Chilaani2.jpeg"
      />

      {/* Overview Section */}
      <Section
        title="Educational Support Programs"
        subtitle="We offer a range of educational services to support Bravanese youth at all stages of their academic journey."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-gray-700 mb-6">
              Education is a cornerstone of our mission at The Bravanese Society. We believe that by providing strong educational support, we can empower Bravanese youth to achieve their full potential while maintaining a connection to their cultural heritage.
            </p>
            <p className="text-gray-700 mb-6">
              Our educational programs are designed to complement school-based learning, providing additional support in core subjects while also incorporating elements of cultural education. We work with qualified tutors and educators who understand both the UK education system and the specific needs of the Bravanese community.
            </p>
            <p className="text-gray-700">
              Whether a student needs help with homework, preparation for exams, or guidance on university applications, our programs provide the support they need to succeed.
            </p>
          </div>
          
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/[Placeholder for Educational Services Image].jpg"
              alt="Educational Services"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
            />
          ))}
        </div>
      </Section>

      {/* How to Join Section */}
      <Section
        dark
        className="bg-primary-900"
        title="How to Join Our Programs"
        subtitle="Simple steps to access our educational services."
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-primary-800 rounded-lg p-8 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-primary-700 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Register</h3>
              <p className="text-gray-300">
                Complete our simple registration form to join our educational programs.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-800 rounded-lg p-8 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-primary-700 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
              <p className="text-gray-300">
                We'll assess your educational needs to match you with the right programs.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-800 rounded-lg p-8 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-primary-700 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Begin Learning</h3>
              <p className="text-gray-300">
                Start attending sessions and accessing resources to support your education.
              </p>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <PrimaryButton href="/get-involved">
              Register Now
            </PrimaryButton>
          </div>
        </div>
      </Section>

      {/* Learning Materials Section */}
      <Section
        title="Learning Materials"
        subtitle="Access educational resources to support learning."
        className="bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {resources.map((resource, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.downloadLink} 
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                >
                  Download
                  <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-primary-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need More Resources?</h3>
            <p className="text-gray-700 mb-6">
              We're constantly developing new educational materials to support our community. If you need specific resources or have suggestions for materials that would be helpful, please let us know.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              Contact Us
              <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* Volunteer Section */}
      <Section
        title="Become a Volunteer Tutor"
        subtitle="Share your knowledge and skills to support Bravanese youth."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/[Placeholder for Volunteer Tutors Image].jpg"
              alt="Volunteer Tutors"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Become a Volunteer Tutor</h3>
            <p className="text-gray-700 mb-6">
              We're always looking for dedicated volunteers to support our educational programs. Whether you're a qualified teacher, a university student, or simply someone with knowledge to share, you can make a difference in the lives of Bravanese youth.
            </p>
            <p className="text-gray-700 mb-6">
              As a volunteer tutor, you'll have the opportunity to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Share your knowledge and skills</li>
              <li>Support students in achieving their academic goals</li>
              <li>Learn about Bravanese culture and community</li>
              <li>Make a meaningful impact on young people's lives</li>
            </ul>
            <PrimaryButton href="/get-involved">
              Volunteer With Us
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
} 