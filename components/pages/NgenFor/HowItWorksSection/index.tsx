import React from 'react';
import HowItWorksCard from '../HowItWorksCard';
import { IHowItWorksData } from '../types';

const HowItWorksSection: React.FC<IHowItWorksData> = ({ data }) => {
  return (
    <div>
      <h3 className="font-bold text-xl text-pumpkin mb-3 md:text-2xl xl:text-3xl md:mb-0">
        How It Works
      </h3>
      <p className="text-purple-dark md:text-lg xl:text-xl">
        Follow the steps to start your journey
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-4 pb-6 xl:pt-6 xl:pb-11">
        {data.map((item, index) => (
          <HowItWorksCard
            key={index}
            bgColor={item.bgColor}
            imgSrc={item.imgSrc}
            altText={item.altText}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
