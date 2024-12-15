"use client";
import Image from "next/image";
import React from "react";
import Logo from "../Logo";

interface ICallToActionProps {
  cta: string;
}

const CallToAction: React.FC<ICallToActionProps> = ({ cta }) => {
  return (
    <div className="bg-[url('/callToAction.svg')] bg-cover bg-no-repeat bg-center relative flex items-center justify-between min-h-96">
      <Image
        src="/callToActionRockets.svg"
        alt="rocket"
        width={308}
        height={388}
        className="max-w-[80px] md:max-w-[160px] xl:max-w-[308px] max-h-[388px] lg:ms-20 lg:mt-[10rem] hidden md:block"
      />

      <Image
        src="/callToActionRocketsSmall.svg"
        alt="rocket"
        width={45}
        height={128}
        className="block md:hidden"
      />

      <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-100%] lg:mt-[5rem] flex flex-col items-center justify-center gap-5 lg:gap-7">
        <p className="font-protestRiot text-2xl text-white xl:text-[64px] mb-5 lg:mb-7">
          Work smart not hard
        </p>
        <Logo
          width={320}
          height={95}
          classNames="max-w-[250px] lg:max-w-[320px]"
        />
        <a
          target="_blank"
          href="https://wa.me/+201000312381"
          className="w-44 lg:w-56 bg-orange-500 text-center text-white py-2 rounded-lg hover:bg-orange-600 transition font-bold"
        >
          {cta}
        </a>
      </div>

      <Image
        src="/callToActionRobot.svg"
        alt="rocket"
        width={620}
        height={688}
        className="max-w-[155px] md:max-w-[310px] xl:max-w-[620px] max-h-[688px] lg:mt-[10rem] hidden md:block"
      />
      <Image
        src="/callToActionRobotSmall.svg"
        alt="rocket"
        width={51}
        height={133}
        className="block md:hidden"
      />
    </div>
  );
};

export default CallToAction;
