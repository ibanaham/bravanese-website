'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import MainLayout from '@/components/Layout/MainLayout';
import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section/Section';
import Card from '@/components/Card/Card';
import PrimaryButton from '@/components/Button/PrimaryButton';

export default function LanguagePage() {
  const [wordOfTheDay, setWordOfTheDay] = useState({
    word: 'Barawa',
    pronunciation: '/bə-ˈrä-wə/',
    meaning: 'The historical name for the coastal city in Somalia where the Bravanese community originated.',
    example: 'My grandparents were born in Barawa before migrating to the UK.'
  });
  
  const researchAreas = [
    {
      title: "Language Documentation",
      description: "Recording and transcribing Chimwiini/Chimbalazi to create comprehensive documentation of the language.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Oral History Collection",
      description: "Recording stories, poems, and songs in Chimwiini/Chimbalazi to preserve cultural narratives.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: "Dictionary Development",
      description: "Creating a comprehensive Chimwiini-English dictionary to support language learning and preservation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Grammar Analysis",
      description: "Studying and documenting the grammatical structures of Chimwiini/Chimbalazi for linguistic preservation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Language Teaching",
      description: "Developing materials and methods for teaching Chimwiini/Chimbalazi to new generations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: "Digital Preservation",
      description: "Creating digital archives and resources to ensure long-term preservation of the language.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];
  
  const publications = [
    {
      title: "The Phonology of Chimwiini: A Preliminary Study",
      author: "Dr. Amina Ibrahim",
      year: "2024",
      description: "An analysis of the sound system of Chimwiini, examining its distinctive phonological features.",
      link: "#"
    },
    {
      title: "Preserving Bravanese Cultural Identity Through Language",
      author: "Mohammed Ali & Sarah Johnson",
      year: "2023",
      description: "A study on the relationship between language preservation and cultural identity in the Bravanese diaspora.",
      link: "#"
    },
    {
      title: "Chimwiini Verb Structures: Documentation and Analysis",
      author: "Prof. David Smith & Fatima Omar",
      year: "2023",
      description: "A detailed examination of verb forms and structures in the Chimwiini language.",
      link: "#"
    }
  ];

  return (
    <MainLayout>
      <Hero 
        title="Language Research"
        subtitle="Documenting and preserving the Bravanese/Chimwiini language for future generations."
        imagePath="/images/Birds-Eye.jpg"
      />

      {/* Overview Section */}
      <Section
        title="Language Preservation"
        subtitle="Our efforts to document and revitalize the Bravanese language."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-gray-700 mb-6">
              The Bravanese language, also known as Chimwiini or Chimbalazi, is a unique linguistic treasure that is at risk of being lost as fewer young people learn and speak it. As a UNESCO-classified endangered language, it requires dedicated efforts to document, preserve, and revitalize it.
            </p>
            <p className="text-gray-700 mb-6">
              At The Bravanese Society, we are committed to preserving this vital aspect of Bravanese cultural heritage through comprehensive research, documentation, and teaching initiatives. Our language research program works with linguists, community elders, and young people to ensure that Chimwiini/Chimbalazi continues to be spoken and understood for generations to come.
            </p>
            <p className="text-gray-700">
              Through our work, we aim not only to preserve the language itself but also the rich cultural knowledge, oral traditions, and community wisdom that is embedded within it.
            </p>
          </div>
          
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/[Placeholder for Language Research Image].jpg"
              alt="Language Research"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <Card
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
            />
          ))}
        </div>
      </Section>

      {/* Word of the Day Section */}
      <Section
        dark
        className="bg-accent-900"
        title="Word of the Day"
        subtitle="Learn a new Chimwiini word every day."
      >
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-accent-800 rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white mb-2 md:mb-0">{wordOfTheDay.word}</h3>
              <p className="text-accent-200 font-mono">{wordOfTheDay.pronunciation}</p>
            </div>
            
            <div className="bg-accent-700/50 p-4 rounded-md mb-6">
              <p className="text-white text-lg">{wordOfTheDay.meaning}</p>
            </div>
            
            <div>
              <h4 className="text-accent-200 font-semibold mb-2">Example:</h4>
              <p className="text-white italic">"{wordOfTheDay.example}"</p>
            </div>
          </motion.div>
          
          <div className="mt-8 text-center">
            <PrimaryButton href="/get-involved">
              Subscribe to Daily Words
            </PrimaryButton>
          </div>
        </div>
      </Section>

      {/* Research Publications Section */}
      <Section
        title="Research & Publications"
        subtitle="Academic work on the Bravanese language."
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-500"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{publication.title}</h3>
                <p className="text-primary-600 mb-3">By {publication.author} ({publication.year})</p>
                <p className="text-gray-600 mb-4">{publication.description}</p>
                <a 
                  href={publication.link} 
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                >
                  Read Publication
                  <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Submit Your Research</h3>
            <p className="text-gray-700 mb-6">
              Are you a researcher working on the Bravanese language or culture? We welcome submissions of academic papers, articles, and research findings related to Chimwiini/Chimbalazi language and the Bravanese community.
            </p>
            <PrimaryButton href="/contact">
              Contact Our Research Team
            </PrimaryButton>
          </div>
        </div>
      </Section>

      {/* Language Learning Section */}
      <Section
        className="bg-gray-50"
        title="Language Learning"
        subtitle="Resources for learning the Bravanese language."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/[Placeholder for Language Learning Image].jpg"
              alt="Language Learning"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Learn Chimwiini/Chimbalazi</h3>
            <p className="text-gray-700 mb-6">
              We offer language classes and resources for community members of all ages who want to learn or improve their Chimwiini/Chimbalazi. Our approach combines traditional language teaching methods with modern techniques to make learning engaging and effective.
            </p>
            <p className="text-gray-700 mb-6">
              Our language learning resources include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Weekly language classes for different proficiency levels</li>
              <li>Online learning materials and videos</li>
              <li>Conversation practice groups</li>
              <li>Cultural immersion activities</li>
              <li>Intergenerational language exchange programs</li>
            </ul>
            <PrimaryButton href="/contact">
              Join Our Language Classes
            </PrimaryButton>
          </div>
        </div>
      </Section>

      {/* Get Involved Section */}
      <Section
        dark
        className="bg-primary-900"
        title="Contribute to Language Preservation"
        subtitle="Help us document and preserve the Bravanese language."
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/90 mb-8 text-lg">
            Our language preservation efforts rely on community participation. There are many ways you can contribute to this important work, whether you're a fluent speaker, a learner, or simply interested in supporting cultural preservation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="bg-primary-800 rounded-lg p-6 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-primary-700 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Share Your Knowledge</h3>
              <p className="text-gray-300">
                If you speak Chimwiini/Chimbalazi, volunteer to be recorded for our language documentation project.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-800 rounded-lg p-6 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-primary-700 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Volunteer as a Teacher</h3>
              <p className="text-gray-300">
                Help teach the language to new learners through our language classes and workshops.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-800 rounded-lg p-6 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-primary-700 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Support Our Work</h3>
              <p className="text-gray-300">
                Donate to fund our language documentation, research, and teaching initiatives.
              </p>
            </motion.div>
          </div>
          
          <PrimaryButton href="/get-involved">
            Get Involved
          </PrimaryButton>
        </div>
      </Section>
    </MainLayout>
  );
} 