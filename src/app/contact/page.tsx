'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import MainLayout from '@/components/Layout/MainLayout';
import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section/Section';
import ContactForm from '@/components/Form/ContactForm';
import PrimaryButton from '@/components/Button/PrimaryButton';

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Email Us',
      details: 'info@bravanesecommunity.org',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Call Us',
      details: '+44 123 456 7890',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Visit Us',
      details: 'Frenford Clubs, Jack Carter Centre, The Drive, Ilford, IG1 3PS',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <MainLayout>
      <Hero 
        title="Contact Us"
        subtitle="Reach out to us for more information, support, or collaboration opportunities."
        imagePath="/images/SomalaiMap.webp"
      />

      {/* Contact Information Section */}
      <Section
        title="Get In Touch"
        subtitle="We'd love to hear from you. Here's how you can reach us."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.details}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <ContactForm />
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6 bg-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Location</h3>
              <p className="text-gray-600">
                Visit our community center in Ilford. We're easily accessible via public transportation.
              </p>
              <p className="text-gray-600 mt-4">
                <strong>Address:</strong><br />
                Frenford Clubs, Jack Carter Centre<br />
                The Drive<br />
                Ilford<br />
                Postcode: IG1 3PS
              </p>

              <div className="mt-4">
                <PrimaryButton
                  href="https://maps.google.com/?q=Frenford+Clubs,+Jack+Carter+Centre,+The+Drive,+Ilford,+IG1+3PS"
                  className="text-sm"
                >
                  <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Google Maps
                </PrimaryButton>
              </div>
            </div>
            <div className="h-96 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.6528334512765!2d0.0665119!3d51.557883999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a5c5b7beb3a9%3A0x9c37f85fce668f0c!2sFrenford%20Clubs%2C%20Jack%20Carter%20Centre!5e0!3m2!1sen!2suk!4v1715512000000!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        className="bg-gray-50"
        title="Frequently Asked Questions"
        subtitle="Find answers to commonly asked questions about The Bravanese Society."
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">What are your operating hours?</h3>
              <p className="text-gray-600">Our community center is open Monday to Friday from 9:00 AM to 6:00 PM, and Saturdays from 10:00 AM to 4:00 PM. We are closed on Sundays and public holidays.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How can I volunteer with The Bravanese Society?</h3>
              <p className="text-gray-600">We welcome volunteers! Please visit our "Get Involved" page to learn about volunteer opportunities and fill out our volunteer application form.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Do you offer language classes for non-Bravanese speakers?</h3>
              <p className="text-gray-600">Yes, we offer introductory courses in the Bravanese language (Chimwiini/Chimbalazi) for interested individuals. Please contact us for the current schedule and registration details.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">How can I make a donation to support your work?</h3>
              <p className="text-gray-600">You can make a donation through our website on the "Get Involved" page, or contact us directly for information on other ways to support our initiatives.</p>
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
} 