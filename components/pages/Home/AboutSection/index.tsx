import React from "react";
import Image from "next/image";
import kidsOnLaptop from "@/public/assets/images/kids-on-laptop.png";
import Button from "../../../general/Button";

function HomepageAboutSection() {
  return (
    <section className="bg-purple-light py-20">
      <div className="container mx-auto px-5 flex items-center gap-20">
        <div className="basis-1/3">
          <Image src={kidsOnLaptop} alt="kids on laptop" />
        </div>
        <div className="basis-2/3 flex flex-col gap-4 text-purple-dark">
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-protestRiot">About us</h2>
            <Button href="/about" variant="secondary">
              See more
            </Button>
          </div>
          <div>
            <p className="lg:text-2xl">
              NGen is an interactive online learning platform designed to
              inspire and educate the next generation of tech-savvy teenagers.
              The platform offers live, expert-led courses in high-demand areas
              such as graphic design, data science, and the latest digital
              tools. NGen’s mission is to empower teenagers to develop
              real-world skills in creative and technical fields, providing them
              with engaging, hands-on learning experiences that are both
              relevant and future-focused.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageAboutSection;
