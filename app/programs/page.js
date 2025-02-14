import React from "react";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pageButtons = [
  {
    title: "Events",
    color: "orange",
    link: "/programs/events",
  },
  {
    title: "Trivia",
    color: "teal",
    link: "/programs/trivia",
  },
  {
    title: "One Stop Shop",
    color: "orange",
    link: "/programs/one-stop-shop",
  },
];

const Programs = () => {
  return (
    <PageWrapper theme="purple">
      <PageTitle title="Programs" theme="purple" />
      <section className="p-6 text-center">
        <div>
          <p>
            It’s our mission to connect queer folks with resources and
            community, and one of the ways we do this is through our events.
          </p>
        </div>
      </section>
      <section className="w-64 mx-auto py-6 flex flex-col justify-center items-center gap-6">
        {pageButtons.map(({ title, color, link }) => (
          <Button
            asChild
            key={title}
            className={`w-full qe-bg-${color} hover:bg-${color}-300 shadow-md`}
          >
            <Link href={link}>{title}</Link>
          </Button>
        ))}
      </section>
      <section className="p-6">
        <p className="text-center my-6">
          For questions about programs, please{" "}
          <a className="underline" href="about/contact">
            contact us
          </a>
          .
        </p>
      </section>
    </PageWrapper>
  );
};

export default Programs;
