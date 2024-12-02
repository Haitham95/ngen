import React from "react";
import FeatureCard from "../../../general/Cards/FeatureCard";
import { H2 } from "@/components/general/Heading";

function HomepageNgenWhySection() {
  const DATA = [
    {
      title: "1. Our journey starting point",
      description:
        "First course  with parent -savvy teenagers. The platform offers live, expert-led courses in high-demand areas such as graphic design, data science, and the latest digital tools.",
      image: "/assets/images/placeholder.png",
      variants: undefined,
    },
    {
      title: "2. Feel safe",
      description:
        "Second course with student -savvy teenagers. The platform offers live, expert-led courses in high-demand areas such as graphic design, data science, and the latest digital tools.",
      image: "/assets/images/placeholder.png",
      variant: "image-right",
    },
  ];

  return (
    <section className="bg-purple-lighter py-20">
      <div className="container mx-auto px-5 flex flex-col gap-12">
        <div>
          <H2>Why NGen</H2>
        </div>
        {DATA.map((element, idx) => (
          <FeatureCard
            key={idx}
            title={element.title}
            description={element.description}
            image={element.image}
            variant={
              element.variant && element.variant === "image-right"
                ? "image-right"
                : undefined
            }
          />
        ))}
      </div>
    </section>
  );
}

export default HomepageNgenWhySection;
