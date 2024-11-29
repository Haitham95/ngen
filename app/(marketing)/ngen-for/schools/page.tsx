import { HowItWorksSection } from '@/components/pages/NgenFor';
import { PageWrapper } from '@/components/general';

import React from 'react';

const HowItWorksData = [
  {
    bgColor: 'bg-[#EFE8FD]',
    imgSrc: '/account-group.svg',
    altText: 'user-group',
    title: 'Registration',
    desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen',
  },
  {
    bgColor: 'bg-[#E5E9FE]',
    imgSrc: '/account-group.svg',
    altText: 'user-group',
    title: 'Registration',
    desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen',
  },
  {
    bgColor: 'bg-[#FDE7D9]',
    imgSrc: '/account-group.svg',
    altText: 'user-group',
    title: 'Registration',
    desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen',
  },
  {
    bgColor: 'bg-[#FDDDFB]',
    imgSrc: '/account-group.svg',
    altText: 'user-group',
    title: 'Registration',
    desc: 'We envision a world where every teenager has the resources to pursue their passions and reach their full potential. NGen',
  },
];

const NgenForSchools = () => {
  return (
    <PageWrapper classNames="px-5 py-6 md:px-12 md:pt-8 md:pb-6 xl:px-24 xl:pt-16 xl:pb-9 ">
      <h2>for schools</h2>{/* TODO: USE THE HEADING COMPONENT INSTEAD OF THE h2 TAG*/}
      <HowItWorksSection data={HowItWorksData} />
    </PageWrapper>
  );
};

export default NgenForSchools;
