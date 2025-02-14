import PageTitle from "@/components/PageTitle/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pageButtons = [
  {
    title: "Story",
    color: "purple",
    link: "/about/story",
  },
  {
    title: "People",
    color: "orange",
    link: "/about/people",
  },
  {
    title: "Transparency",
    color: "purple",
    link: "/about/transparency",
  },
  {
    title: "Contact",
    color: "orange",
    link: "/about/contact",
  },
];

const About = () => {
  return (
    <>
      <PageTitle title="About" theme="teal" />
      <section className="p-6 text-center">
        <div>
          <p>
            It’s our mission to connect queer folks with resources and
            community, and one of the ways we do this is through our events.
          </p>
        </div>
      </section>
      <section className="w-64 mx-auto mb-12 py-6 flex flex-col justify-center items-center gap-6">
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
    </>
  );
};

export default About;
