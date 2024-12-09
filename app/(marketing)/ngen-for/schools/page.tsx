import { Features, HowItWorksSection, TracksOverviewSection } from '@/components/pages/NgenFor';
import { ContactUs, PageWrapper } from '@/components/general';

import React from 'react';

const howItWorksData = [
  { bgColor: 'bg-[#EFE8FD]', imgSrc: '/account-group.svg', altText: 'user-group', title: 'Registration', desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen' },
  { bgColor: 'bg-[#E5E9FE]', imgSrc: '/account-group.svg', altText: 'user-group', title: 'Registration', desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen' },
  { bgColor: 'bg-[#FDE7D9]', imgSrc: '/account-group.svg', altText: 'user-group', title: 'Registration', desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen' },
  { bgColor: 'bg-[#FDDDFB]', imgSrc: '/account-group.svg', altText: 'user-group', title: 'Registration', desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen' },
];

const features = ['Live sessions', 'Live sessions', 'courses and tutorials', 'courses and tutorials', 'Interaction lessons', 'Interaction lessons', 'Assessments', 'Assessments', 'Assessments', 'Assessments']

const overviewData = [
  { text: 'Our mission is simple: to make modern, industry-relevant skills accessible and enjoyable for teenagers. We combine live, expert-led courses with interactive tools to help students discover new interests, connect with mentors, and develop practical skills they can apply both in school and in the real world.', imgSrc: '/tracks-overview.svg' },
  { text: 'Our mission is simple: to make modern, industry-relevant skills accessible and enjoyable for teenagers. We combine live, expert-led courses with interactive tools ', imgSrc: '/certificate.svg' }
]

const NgenForSchools = () => {
  return (
    <PageWrapper classNames="px-5 py-6 md:px-12 md:pt-8 md:pb-6 xl:px-24 xl:pt-16 xl:pb-9 container mx-auto">
      <h2>for schools</h2>{/* TODO: USE THE HEADING COMPONENT INSTEAD OF THE h2 TAG*/}
      <HowItWorksSection data={howItWorksData} />
      
      <Features features={features} imgSrc='/features-for-schools.svg' />
      <TracksOverviewSection data={overviewData} />
      
      {/* TODO: USE OUR TRACKS COMPONENTS HERE */}

      <ContactUs />
    </PageWrapper>
  );
};

export default NgenForSchools;
