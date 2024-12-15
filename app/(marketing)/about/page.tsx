"use client";
import { ContactUs, PageWrapper } from "@/components/general";
import { H2 } from "@/components/general/Heading";
import SocialProofCard from "@/components/pages/Home/SocialProofSection/SocialProofCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

const TESTIOMONIALS = [
  {
    fullName: "Mona Elmohandes",
    avatarImg: "/assets/images/avatar-man-placeholder.png",
    feedbackMessage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    feedbackRating: 5,
  },
  {
    variation: "testimonial",
    fullName: "Mona Elmohandes",
    avatarImg: "/assets/images/avatar-man-placeholder.png",
    feedbackMessage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    feedbackRating: 3,
  },
  {
    variation: "testimonial",
    fullName: "Mona Elmohandes",
    avatarImg: "/assets/images/avatar-man-placeholder.png",
    feedbackMessage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    feedbackRating: 1,
  },
];

function AboutPage() {
  return (
    <main className="py-20">
      <PageWrapper classNames="container mx-auto px-5 text-purple-dark">
        <div className="flex">
          <div className="basis-4/6 grid grid-cols-2 gap-10">
            <div className="col-span-2 flex flex-col gap-4">
              <h1 className="font-protestRiot lg:text-5xl text-2xl text-purple-dark">
                Who we are
              </h1>
              <p>
                Our mission is simple: to make modern, industry-relevant skills
                accessible and enjoyable for teenagers. We combine live,
                expert-led courses with interactive tools to help students
                discover new interests, connect with mentors, and develop
                practical skills they can apply both in school and in the real
                world.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <H2>Our mission</H2>
              <p>
                Our mission is simple: to make modern, industry-relevant skills
                accessible and enjoyable for teenagers. We combine live,
                expert-led courses with interactive tools to help students
                discover new interests, connect with mentors, and develop
                practical .
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <H2>Our vision</H2>
              <p>
                We envision a world where every teenager has the resources to
                pursue their passions and reach their full potential. NGen
                empowers young learners to take charge of their futures and
                embrace lifelong learning in a supportive community.
              </p>
            </div>
          </div>
          <div className="basis-2/6 flex justify-center">
            <Image
              src="/assets/images/about-img.png"
              alt="About NGen schools"
              width={355}
              height={355}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-10 py-10">
          <h3 className="text-xl md:text-2xl lg:text-4xl font-protestRiot text-[#BD256D]">
            What Parents Say about us ?
          </h3>
          <Carousel
            opts={{ loop: true, align: "start", duration: 200 }}
            plugins={[
              Autoplay({
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              {TESTIOMONIALS.map((testimonial, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 ">
                  <SocialProofCard
                    variation="testimonial"
                    fullName={testimonial.fullName}
                    avatarImg={testimonial.avatarImg}
                    feedbackMessage={testimonial.feedbackMessage}
                    feedbackRating={testimonial.feedbackRating}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <ContactUs />
      </PageWrapper>
    </main>
  );
}

export default AboutPage;
