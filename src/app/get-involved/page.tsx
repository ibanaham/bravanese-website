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

export default function GetInvolvedPage() {
  const involvementOptions = [
    {
      title: 'Become a Member',
      description: 'Join The Bravanese Society as a member and participate in community decision-making, attend member events, and support our mission.',
      icon: '🧑‍🤝‍🧑'
    },
    {
      title: 'Volunteer With Us',
      description: 'Share your skills and time by volunteering for our educational programs, events, or administrative support.',
      icon: '🤲'
    },
    {
      title: 'Make a Donation',
      description: 'Support our work financially with a one-time or recurring donation to fund our programs and initiatives.',
      icon: '💝'
    },
    {
      title: 'Partner With Us',
      description: 'Organizations can partner with us on projects, provide resources, or help expand our reach and impact.',
      icon: '🤝'
    }
  ];

  const volunteerOpportunities = [
    {
      title: 'Teaching Assistant',
      description: 'Assist in our educational programs by supporting tutors and helping students with their studies.',
      commitment: '2-4 hours per week',
      skills: 'Patience, good communication, basic knowledge of core subjects'
    },
    {
      title: 'Event Coordinator',
      description: 'Help plan and organize community events, cultural celebrations, and recreational activities.',
      commitment: 'Varies by event, approximately 5-10 hours per month',
      skills: 'Organization, planning, attention to detail'
    },
    {
      title: 'Language Researcher',
      description: 'Contribute to our language documentation project by conducting interviews, transcribing recordings, or helping develop learning materials.',
      commitment: 'Flexible, minimum 4 hours per month',
      skills: 'Knowledge of Bravanese language (preferred but not required), research interest, good writing skills'
    }
  ];

  const supportLevels = [
    {
      title: "Friend",
      amount: "£5-£20 per month",
      benefits: [
        "Regular newsletter updates",
        "Invitation to annual community event",
        "Recognition on our website"
      ]
    },
    {
      title: "Supporter",
      amount: "£21-£50 per month",
      benefits: [
        "All Friend benefits",
        "Exclusive updates on our projects",
        "Invitation to special events",
        "Annual impact report"
      ]
    },
    {
      title: "Champion",
      amount: "£51+ per month",
      benefits: [
        "All Supporter benefits",
        "VIP access to all events",
        "Recognition as a major supporter",
        "Personalized impact updates",
        "Input on future initiatives"
      ]
    }
  ];

  return (
    <MainLayout>
      <Hero 
        title="Get Involved"
        subtitle="Join us in supporting the Bravanese community through various engagement opportunities."
        imagePath="/images/Brava3.jpg"
      />

      <Section
        title="Ways to Get Involved"
        subtitle="There are many ways to support The Bravanese Society and our community initiatives."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {involvementOptions.map((option, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Join Our Community?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Becoming a member of The Bravanese Society gives you a voice in our community and supports our ongoing work.
          </p>
          <PrimaryButton href="/contact">
            Become a Member
          </PrimaryButton>
        </div>
      </Section>

      <Section
        className="bg-gray-50"
        title="Volunteer Opportunities"
        subtitle="Share your time and skills to make a difference in our community."
      >
        <div className="space-y-8 mb-12">
          {volunteerOpportunities.map((opportunity, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{opportunity.title}</h3>
              <p className="text-gray-600 mb-4">{opportunity.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Time Commitment</p>
                  <p className="text-gray-700">{opportunity.commitment}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Skills Needed</p>
                  <p className="text-gray-700">{opportunity.skills}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Interested in volunteering but don't see a role that fits your skills? Contact us to discuss other opportunities.
          </p>
          <PrimaryButton href="/contact">
            Contact Us to Learn More
          </PrimaryButton>
        </div>
      </Section>

      <Section
        title="The Impact of Your Support"
        subtitle="How your involvement helps strengthen our community."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6">
              Your support, whether through membership, volunteering, or donations, directly contributes to the success of our programs and the well-being of the Bravanese community.
            </p>
            <p className="text-gray-600 mb-6">
              With your help, we can provide educational support to more students, organize larger cultural events, expand our language preservation efforts, and create a stronger sense of community among Bravanese people in the UK.
            </p>
            <p className="text-gray-600">
              Every contribution, no matter how small, makes a difference in our ability to fulfill our mission of preserving Bravanese culture and supporting our community members.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/[Placeholder for Impact Image].jpg"
              alt="Impact of Your Support"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Membership Section */}
      <Section
        dark
        className="bg-secondary-800"
        title="Become a Member"
        subtitle="Join The Bravanese Society and be part of our community."
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg text-center mb-12">
            Membership in The Bravanese Society connects you to our community and supports our mission. Members receive regular updates, invitations to events, and opportunities to participate in our programs.
          </p>
          
          <div className="bg-secondary-700 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Membership Benefits</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-secondary-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Community</h4>
                <p className="text-gray-300">
                  Connect with others who share your interest in Bravanese culture and community.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Events</h4>
                <p className="text-gray-300">
                  Receive invitations to special events, workshops, and cultural celebrations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary-600 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Updates</h4>
                <p className="text-gray-300">
                  Stay informed about our programs, initiatives, and impact through regular updates.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact"
              className="bg-white text-secondary-700 hover:bg-secondary-50 px-8 py-4 rounded-full font-semibold text-lg transition inline-flex items-center"
            >
              Become a Member
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* Donate Section */}
      <Section
        title="Support Our Work"
        subtitle="Your donations help us provide vital services to the Bravanese community."
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg text-center mb-12">
            The Bravanese Society relies on the generosity of supporters to fund our educational programs, recreational activities, and language preservation efforts. Your donation, no matter the size, makes a real difference in our community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {supportLevels.map((level, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden h-full border border-gray-200"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary-600 py-4">
                  <h3 className="text-xl font-bold text-white text-center">{level.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-2xl font-bold text-gray-800 text-center mb-6">{level.amount}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <Link 
                      href="/contact"
                      className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-md font-medium transition w-full"
                    >
                      Donate as a {level.title}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Other Ways to Support</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">One-Time Donations</h4>
                <p className="text-gray-700 mb-4">
                  Make a one-time donation of any amount to support our work. Every contribution helps us provide services to the Bravanese community.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                >
                  Make a One-Time Donation
                  <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">In-Kind Donations</h4>
                <p className="text-gray-700 mb-4">
                  Donate supplies, equipment, or services that support our programs. Contact us to discuss your in-kind donation.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                >
                  Learn About In-Kind Donations
                  <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact Section */}
      <Section
        dark
        className="bg-accent-900"
        title="Your Impact"
        subtitle="See how your support makes a difference in our community."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="bg-accent-800 rounded-lg p-6 text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <p className="text-accent-200 text-lg">Students supported through our educational programs each year</p>
          </motion.div>
          
          <motion.div 
            className="bg-accent-800 rounded-lg p-6 text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl font-bold text-white mb-2">20+</div>
            <p className="text-accent-200 text-lg">Community events organized annually to celebrate Bravanese culture</p>
          </motion.div>
          
          <motion.div 
            className="bg-accent-800 rounded-lg p-6 text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <p className="text-accent-200 text-lg">Hours of Chimwiini/Chimbalazi language recordings preserved</p>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/contact"
            className="bg-white text-accent-700 hover:bg-accent-50 px-8 py-4 rounded-full font-semibold text-lg transition inline-flex items-center"
          >
            Contact Us to Learn More
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </Section>
    </MainLayout>
  );
} 