import React from "react";
import Logo from "../../../general/Logo";
import Image from "next/image";
import ninjaSpaceGuy from "@/public/assets/images/space-ninja-guy.png";
import Button from "../../../general/Button";

function HomepageHero() {
  return (
    <header className="bg-[url('/assets/images/hero-bg.png')] h-[calc(100vh-81px)] bg-no-repeat bg-cover bg-bottom bg-purple-light text-white">
      <div className="container mx-auto px-5 flex h-full items-center justify-between">
        <div className="flex flex-col max-w-2xl gap-16">
          <div>
            <Logo width={450} height={120} />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-protestRiot lg:text-4xl">
              <span className="text-rose">Empower</span> Your Creativity and
              Curiosity
            </h1>
            <p className="lg:text-2xl">
              Dive into Graphics, Data Science, and More with Courses Tailored
              for Future Innovators!
            </p>
            <Button variant="primary" href="/">
              Get started
            </Button>
          </div>
        </div>
        <div>
          <Image src={ninjaSpaceGuy} alt="Ninja space guy" />
        </div>
      </div>
    </header>
  );
}

export default HomepageHero;
