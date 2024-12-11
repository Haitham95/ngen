import React from "react";
import { LevelCardProps } from "../types";
import Rating from "@/components/general/Rating";
import Tag from "@/components/general/Tag";

function LevelCard({
  name,
  description,
  duration,
  assessmentsNumber,
  lecturesNumber,
  mainImage,
  rating,
}: LevelCardProps) {
  return (
    <div className="rounded-3xl p-6 border-2 border-gray-default flex gap-6">
      <div className="basis-1/5 border h-[175px] rounded-2xl self-center">
        Image
      </div>
      <div className="basis-4/5 flex flex-col gap-2">
        <h3 className=" lg:text-3xl text-purple-dark">{name}</h3>
        <p className="lg:text-2xl text-gray-dark">{description}</p>
        <div className="flex items-center gap-8">
          <Rating feedbackRating={rating} />
          <Tag
            icon="/assets/images/icons/duration-icon.svg"
            text={`${duration} Hours`}
            alt="duration icon"
          />
          <Tag
            icon="/assets/images/icons/courses-icon.svg"
            text={`${lecturesNumber} Lectures`}
            alt="Lectures icon"
          />
          <Tag
            icon="/assets/images/icons/assessments-icon.svg"
            text={`${assessmentsNumber} Assessment`}
            alt="assessment icon"
          />
        </div>
      </div>
    </div>
  );
}

export default LevelCard;
