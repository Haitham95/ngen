import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  variant?: "image-left" | "image-right" | undefined;
};

function FeatureCard({
  image,
  title,
  description,
  variant = "image-left",
}: Props) {
  return (
    <div
      className={`bg-purple-darker lg:min-h-[350px] text-white flex gap-10 rounded-3xl ${
        variant === "image-left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="lg:basis-1/3">
        <Image
          src={image}
          alt="space"
          width={400}
          height={400}
          className="w-full h-full scale-105"
        />
      </div>
      <div
        className={`lg:basis-2/3 lg:flex-col justify-center flex gap-4  ${
          variant === "image-left" ? "max-w-screen-md" : "max-w-4xl"
        }`}
      >
        <h3 className="lg:text-5xl font-protestRiot text-rose">{title}</h3>
        <p className="lg:text-2xl">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
