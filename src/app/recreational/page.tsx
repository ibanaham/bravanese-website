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

export default function RecreationalPage() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const upcomingEvents = [
    {
      title: "Bravanese Cultural Festival",
      date: "June 15, 2025",
      time: "12:00 PM - 8:00 PM",
      location: "Community Center, London",
      description: "A celebration of Bravanese culture featuring traditional food, music, dance, and art.",
    },
    {
      title: "Youth Sports Tournament",
      date: "July 10, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Local Sports Center",
      description: "A day of friendly competition featuring football, basketball, and traditional Bravanese games.",
    },
    {
      title: "Women's Craft Workshop",
      date: "August 5, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "The Bravanese Society Center",
      description: "Learn traditional Bravanese crafts including weaving and embroidery techniques.",
    }
  ];
  
  const pastEvents = [
    {
      title: "Community Eid Celebration",
      date: "April 10, 2025",
      location: "Community Hall, London",
      description: "A joyous celebration of Eid with the Bravanese community featuring food, games, and cultural performances.",
    },
    {
      title: "Youth Poetry Night",
      date: "March 15, 2025",
      location: "The Bravanese Society Center",
      description: "An evening showcasing poetry and storytelling by Bravanese youth, in both English and Chimwiini.",
    },
    {
      title: "Family Game Night",
      date: "February 20, 2025",
      location: "Community Center",
      description: "A fun evening of traditional and modern games for families to enjoy together.",
    }
  ];
  
  const activities = [
    {
      title: "Cultural Celebrations",
      description: "Regular events celebrating Bravanese holidays, traditions, and customs to maintain cultural connections.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      )
    },
    {
      title: "Sports Programs",
      description: "Regular sports activities including football, basketball, and traditional Bravanese games for all ages.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Arts & Crafts Workshops",
      description: "Workshops teaching traditional Bravanese arts and crafts, preserving cultural artistic traditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Music & Dance",
      description: "Classes and performances featuring traditional Bravanese music and dance for all ages.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      title: "Community Outings",
      description: "Group trips to museums, parks, and cultural sites to build community bonds and create shared experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Intergenerational Activities",
      description: "Programs that bring together different generations to share knowledge, stories, and experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <MainLayout>
      <Hero 
        title="Recreational Services"
        subtitle="Building community through cultural events, sports programs, and arts activities for all ages."
        imagePath="/images/Barawe2.jpg"
      />

      {/* Overview Section */}
      <Section
        title="Community Activities"
        subtitle="Our recreational programs foster community connections and cultural pride."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-gray-700 mb-6">
              The Bravanese Society offers a wide range of recreational activities designed to bring our community together, celebrate our cultural heritage, and create meaningful connections between community members of all ages.
            </p>
            <p className="text-gray-700 mb-6">
              Our recreational programs provide spaces for cultural expression, physical activity, artistic creativity, and social connection. Through these activities, we aim to strengthen community bonds, preserve cultural traditions, and create joyful shared experiences.
            </p>
            <p className="text-gray-700">
              From traditional celebrations to sports programs, arts workshops to community outings, there's something for everyone in our recreational services.
            </p>
          </div>
          
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/[Placeholder for Recreational Activities Image].jpg"
              alt="Recreational Activities"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
            />
          ))}
        </div>
      </Section>

      {/* Events Calendar Section */}
      <Section
        dark
        className="bg-primary-900"
        title="Events Calendar"
        subtitle="Join us for upcoming events and activities."
      >
        <div className="bg-primary-800 rounded-lg overflow-hidden mb-8">
          <div className="flex border-b border-primary-700">
            <button
              className={`py-4 px-6 font-medium text-lg ${
                activeTab === 'upcoming'
                  ? 'bg-primary-700 text-white'
                  : 'text-gray-300 hover:bg-primary-700/50'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </button>
            <button
              className={`py-4 px-6 font-medium text-lg ${
                activeTab === 'past'
                  ? 'bg-primary-700 text-white'
                  : 'text-gray-300 hover:bg-primary-700/50'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'upcoming' ? (
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    className="bg-primary-700 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3">
                      <div className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-md font-medium text-sm transition"
                    >
                      Register for Event
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {pastEvents.map((event, index) => (
                  <motion.div 
                    key={index}
                    className="bg-primary-700 rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3">
                      <div className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                    <p className="text-gray-300">{event.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center">
          <PrimaryButton href="/get-involved">
            Subscribe to Event Updates
          </PrimaryButton>
        </div>
      </Section>

      {/* Photo Gallery Section */}
      <Section
        title="Photo Gallery"
        subtitle="Memories from our past events and activities."
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <motion.div 
            key={1}
            className="relative h-64 bg-gray-200 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/[Placeholder for Gallery Image 1].jpg"
              alt="Gallery Image 1"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            key={2}
            className="relative h-64 bg-gray-200 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/[Placeholder for Gallery Image 2].webp"
              alt="Gallery Image 2"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            key={3}
            className="relative h-64 bg-gray-200 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/[Placeholder for Gallery Image 3].webp"
              alt="Gallery Image 3"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            key={4}
            className="relative h-64 bg-gray-200 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/[Placeholder for Gallery Image 4].jpeg"
              alt="Gallery Image 4"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            key={5}
            className="relative h-64 bg-gray-200 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/[Placeholder for Gallery Image 5].jpeg"
              alt="Gallery Image 5"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            key={6}
            className="relative h-64 bg-gray-200 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/[Placeholder for Gallery Image 6].jpeg"
              alt="Gallery Image 6"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            key={7}
            className="relative h-64 bg-gray-200 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/[Placeholder for Gallery Image 7].jpeg"
              alt="Gallery Image 7"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </motion.div>
          
          <motion.div 
            key={8}
            className="relative h-64 bg-gray-200 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/[Placeholder for Gallery Image 8].jpg"
              alt="Gallery Image 8"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            href="#"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
          >
            View Full Gallery
            <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* Sign-Up Section */}
      <Section
        dark
        className="bg-secondary-700"
        title="Get Involved"
        subtitle="Join our recreational activities and events."
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/90 mb-8 text-lg">
            Our recreational activities are open to all members of the Bravanese community. Whether you're interested in sports, arts, cultural celebrations, or community outings, there's a place for you in our programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton href="/get-involved">
              Sign Up for Activities
            </PrimaryButton>
            <PrimaryButton href="/get-involved">
              Volunteer as an Organizer
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
} 