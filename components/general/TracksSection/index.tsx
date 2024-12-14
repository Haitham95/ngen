import Card from "@/components/general/Cards";
import { H2 } from "@/components/general/Heading";
import React from "react";

function HomepageTracksSection({ title }: { title: string }) {
  const DATA = [
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics",
      slug: "graphic-design",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics",
      slug: "graphic-design",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics",
      slug: "graphic-design",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics design",
      slug: "graphic-design",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics",
      slug: "graphic-design",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics",
      slug: "graphic-design",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics",
      slug: "graphic-design",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics design",
      slug: "graphic-design",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
  ];

  return (
    <section className="py-6 md:py-10 lg:py-20">
      <div className="container mx-auto px-5 flex flex-col gap-4 md:gap-7 lg:gap-10">
        <H2>{title}</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-3 md:gap-x-3 lg:grid-cols-4 xl:gap-x-10 lg:gap-y-0">
          {DATA.map((track, idx) => (
            <Card
              key={idx}
              image={track.image}
              title={track.title}
              slug={track.slug}
              status={track.status}
              discountValue={track.discountValue}
              numberOfLevels={track.numberOfLevels}
              duration={track.duration}
              skillLevel={track.skillLevel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageTracksSection;
