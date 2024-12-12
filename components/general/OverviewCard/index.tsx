import React from "react";
import Image from "next/image";
import Rating from "../Rating";
import Tag from "../Tag";

const OverviewCard: React.FC<{
  text: string;
  imgSrc: string;
  feedbackRating?: number;
  coursesNumber?: number;
  assessmentNumber?: number;
  partnersImgs?: { src: string; alt: string }[];
  variant?: "overview" | "partners";
}> = ({
  text,
  imgSrc,
  feedbackRating,
  coursesNumber,
  assessmentNumber,
  variant = "overview",
  partnersImgs = undefined,
}) => {
  if (variant === "partners") {
    return (
      <section className="lg:bg-gray-default rounded-3xl p-6 flex justify-between gap-7 flex-col-reverse lg:flex-row">
        <div className="basis-4/5 flex flex-col gap-2">
          <h2 className="font-bold text-xl text-purple-dark md:text-2xl xl:font-medium xl:text-3xl">
            Certification partners
          </h2>
          <p className="text-xl lg:text-2xl text-gray-dark">{text}</p>
          <div className="flex items-center justify-between flex-wrap md:justify-start xl:gap-8">
            {partnersImgs &&
              partnersImgs.map((image) => (
                <Image src={image.src} alt={image.alt} width={75} height={90} />
              ))}
          </div>
        </div>
        <div className="lg:self-center basis-1/5">
          <Image src={imgSrc} alt="Tracks Overview" width={315} height={270} />
        </div>
      </section>
    );
  } else {
    return (
      <section className="lg:bg-gray-default rounded-3xl p-6 flex justify-between gap-7 flex-col-reverse lg:flex-row">
        <div className="basis-4/5 flex flex-col gap-2">
          <h2 className="font-bold text-xl text-purple-dark md:text-2xl xl:font-medium xl:text-3xl">
            Overview
          </h2>
          <p className="text-xl lg:text-2xl text-gray-dark">{text}</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-8">
            {feedbackRating && <Rating feedbackRating={feedbackRating} />}
            {coursesNumber && (
              <Tag
                icon="/assets/images/icons/courses-icon.svg"
                text={`${coursesNumber} Lectures`}
                alt="Courses icon"
              />
            )}
            {assessmentNumber && (
              <Tag
                icon="/assets/images/icons/assessments-icon.svg"
                text={`${assessmentNumber} Assessment`}
                alt="Assessment icon"
              />
            )}
          </div>
        </div>
        <div className="self-center basis-1/5">
          <Image src={imgSrc} alt="Tracks Overview" width={315} height={270} />
        </div>
      </section>
    );
  }
};

export default OverviewCard;
