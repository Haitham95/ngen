import { Features, HowItWorksSection } from '@/components/pages/NgenFor';
import { PageWrapper } from '@/components/general';

import React from 'react';
const howItWorksData = [
  { bgColor: 'bg-[#EFE8FD]', imgSrc: '/account-group.svg', altText: 'user-group', title: 'Registration', desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen' },
  { bgColor: 'bg-[#E5E9FE]', imgSrc: '/account-group.svg', altText: 'user-group', title: 'Registration', desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen' },
  { bgColor: 'bg-[#FDE7D9]', imgSrc: '/account-group.svg', altText: 'user-group', title: 'Registration', desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen' },
  { bgColor: 'bg-[#FDDDFB]', imgSrc: '/account-group.svg', altText: 'user-group', title: 'Registration', desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen' },
];

const features = ['Live sessions', 'Live sessions', 'courses and tutorials', 'courses and tutorials', 'Interaction lessons', 'Interaction lessons', 'Assessments', 'Assessments', 'Assessments', 'Assessments']


const NgenForParents = () => {
  return (
    <PageWrapper classNames="px-5 py-6 md:px-12 md:pt-8 md:pb-6 xl:px-24 xl:pt-16 xl:pb-9 ">
      <h2>for parents</h2>{/* TODO: USE THE HEADING COMPONENT INSTEAD OF THE h2 TAG*/}
      <HowItWorksSection data={howItWorksData} />

      <Features features={features} imgSrc='/features-for-parents.svg' />
    </PageWrapper>
  );
};

export default NgenForParents;
