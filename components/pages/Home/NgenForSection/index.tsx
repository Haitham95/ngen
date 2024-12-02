import { H2 } from "@/components/general/Heading";
import React from "react";
import NgenForCard from "./NgenForCard";
import { NgenForCardType } from "./types";

function HomepageNgenForSection() {
  const DATA: NgenForCardType[] = [
    {
      image: "/assets/images/NgenFor/kid-on-laptop.png",
      alt: "kid on laptop",
      title: "For Individual",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, distinctio vitae. Fugiat in sed eos id! Consequuntur labore officiis commodi.",
      href: "#",
    },
    {
      variation: "logo",
    },
    {
      image: "/assets/images/NgenFor/school-grad.png",
      alt: "school graduation cermoney",
      title: "For Schools",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, distinctio vitae. Fugiat in sed eos id! Consequuntur labore officiis commodi.",
      href: "#",
    },
    {
      title: "Empower",
      description: "Your Creativity and Curiosity",
      variation: "text",
    },

    {
      image: "/assets/images/NgenFor/corperate-kid.png",
      alt: "corperate kids image",
      title: "For Corperates",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, distinctio vitae. Fugiat in sed eos id! Consequuntur labore officiis commodi.",
      href: "#",
    },
    {
      image: "/assets/images/NgenFor/parent-with-kid.png",
      alt: "parent with kid",
      title: "For Parents",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, distinctio vitae. Fugiat in sed eos id! Consequuntur labore officiis commodi.",
      href: "#",
    },
  ];

  return (
    <section className="bg-purple-light py-20">
      <div className="container mx-auto px-5 flex flex-col gap-10">
        <H2>Ngen For</H2>
        <div className="grid grid-cols-[minmax(345px,1fr)_minmax(335px,1fr)_minmax(515px,1fr)] grid-rows-[115px_310px_225px] gap-6 [&>*:nth-child(1)]:row-span-2 [&>*:nth-child(3)]:row-span-2 [&>*:nth-child(5)]:col-span-2">
          {DATA.map((el, idx) => (
            <NgenForCard
              key={idx}
              image={el.image}
              variation={el.variation}
              title={el.title}
              description={el.description}
              href={el.href}
              alt={el.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageNgenForSection;
