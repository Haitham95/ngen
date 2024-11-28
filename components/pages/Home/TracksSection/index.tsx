import Card from "@/components/general/Cards";
import { H2 } from "@/components/general/Heading";
import React from "react";

function HomepageTracksSection() {
  const DATA = [
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics",
      slug: "graphics",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics",
      slug: "graphics",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics",
      slug: "graphics",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
    {
      image: "/assets/images/track-placeholder.png",
      title: "Graphics design",
      slug: "graphics",
      status: "Available",
      discountValue: "20%",
      numberOfLevels: "4",
      duration: "40",
      skillLevel: "Beginners",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-5 flex flex-col gap-10">
        <H2>Our Tracks</H2>
        <div className="grid grid-cols-4 gap-x-10">
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
