import React from "react";
import levels from "./data.json";
import { Level } from "@/types";
import PageWrapper from "@/components/general/PageWrapper";
import OverviewCard from "@/components/general/OverviewCard";

// If someone goes to a link not contaning the slug the system will redirect him to 404 page, for SSG not SSR
// for more info: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
// export const dynamicParams = false;

export async function generateStaticParams() {
  // const tracks = await fetch(data).then((res) => res.json())

  return levels.map((level: Level) => ({
    slug: level.slug,
  }));
}

async function SingleLevelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // TODO: Fetching data by slug from endpoint
  const [level] = levels.filter((level: Level) => level.slug === slug);

  return (
    <main>
      <PageWrapper classNames="container mx-auto px-5 flex flex-col py-6 gap-10">
        <h1 className="text-2xl lg:text-4xl text-pumpkin font-bold">
          {level.name}
        </h1>
        <OverviewCard
          text={level.description}
          imgSrc="/levels-overview.svg"
          feedbackRating={level.rating}
          assessmentNumber={level.assessments_number}
          lecturesNumber={level.lectures_number}
          duration={level.duration}
          ageGroup={level.age_group}
        />
        <section className="flex flex-col gap-6 sm:flex-row lg:bg-gray-default rounded-3xl p-6 justify-between ">
          <div className="flex flex-col gap-2 ">
            <h2 className="font-bold text-xl text-purple-dark md:text-2xl xl:font-medium xl:text-3xl">
              Pricing
            </h2>
            <ul className="flex flex-col list-disc list-inside text-gray-dark lg:text-2xl">
              <li>Placement test</li>
              <li>Placement test</li>
              <li>Placement test</li>
            </ul>
          </div>
          <div className="self-center">
            <h3 className="font-bold text-purple-dark text-5xl">
              {level.price} $
            </h3>
          </div>
        </section>
      </PageWrapper>
    </main>
  );
}

export default SingleLevelPage;
