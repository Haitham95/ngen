import Button from "@/components/general/Button";
import Logo from "@/components/general/Logo";
import React from "react";

function HomepageBannerSection() {
  return (
    <section className="py-6 md:py-10 lg:py-20 bg-gradient-to-r from-rose to-purple-darker text-white">
      <div className="container mx-auto px-5 flex flex-col justify-center items-center gap-7">
        <h2 className="font-protestRiot text-3xl md:text-5xl lg:text-6xl">
          Work smart not hard
        </h2>
        <div className="max-w-[200px] md:max-w-max">
          <Logo width={350} height={100} />
        </div>
        <div className="w-48">
          <Button href="#" variant="primary" takeFullWidth>
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HomepageBannerSection;
