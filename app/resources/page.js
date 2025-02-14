import React from "react";

import PageTitle from "@/components/PageTitle/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const subpages = [
  {
    title: "Organizations",
    color: "purple",
    link: "/resources/organizations",
    description:
      "Local, state, and national organizations that support or serve queer folks. This includes cultural organizations like Pride groups, as well as performers!",
  },
  {
    title: "Intersectional",
    color: "teal",
    link: "/resources/intersectional",
    description:
      "Resources relating to different intersections of identities.",
  },
  {
    title: "Learning",
    color: "purple",
    link: "/resources/learning",
    description:
      "Information and media geared towards educating others on various queer topics",
  },
  {
    title: "Healthcare",
    color: "teal",
    link: "/resources/healthcare",
    description:
      "List of inclusive and/or queer medical practitioners and locations",
  },
];

const Resources = () => {
  return (
    <>
      <PageTitle title="Organizations" theme="orange" />
      <section className="p-6 mb-12 text-center">
        <p>
          We maintain a database of resources for queer and marginalized folks
          across four categories:
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-6 mb-24">
        {subpages.map((page, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-6 mb-12 md:flex-row"
          >
            <Button
              asChild
              className={`min-w-48 qe-bg-${page.color} hover:bg-${page.color}-300 shadow-md`}
            >
              <Link href={page.link}>{page.title}</Link>
            </Button>

            <p className="">
              <b>{page.title}</b>: {page.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Resources;
