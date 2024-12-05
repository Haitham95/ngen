import React from "react";
import { SocialProofCardProps } from "../types";
import Image from "next/image";

function SocialProofCard({
  variation,
  image,
  feedbackMessage,
  feedbackRating,
  avatarImg,
  fullName,
}: SocialProofCardProps) {
  let clampedRating: number;

  // Validate the feedback rating is between 1 to 5
  if (typeof feedbackRating === "number")
    clampedRating = Math.max(1, Math.min(feedbackRating, 5));

  // Rendering the card
  if (variation === "images" && !!image) {
    return (
      <div>
        <Image
          src={image}
          width={500}
          height={250}
          alt="video placeholder"
          className="w-full h-full"
        />
      </div>
    );
  } else {
    return (
      <div className="bg-[#F4F4F4] px-6 py-4 rounded-2xl flex items-center gap-4">
        <div className="basis-1/4 self-start md:basis-auto md:self-center">
          {avatarImg && (
            <Image
              src={avatarImg}
              width={100}
              height={100}
              alt="video placeholder"
              className="w-full h-full"
            />
          )}
        </div>
        <div className="flex flex-col basis-3/4">
          <h4 className="text-purple-dark">{fullName}</h4>
          <p className="text-xs">{feedbackMessage}</p>
          <div className="flex gap-1 pt-1">
            {typeof feedbackRating === "number" &&
              Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={index < clampedRating ? "#FFD700" : "none"}
                  stroke="#FFD700"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SocialProofCard;
