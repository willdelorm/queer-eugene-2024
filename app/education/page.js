import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pageButtons = [
  {
    title: "Services",
    color: "teal",
    link: "/education/services",
  },
  /*
  {
    title: "Documents",
    color: "orange",
    link: "/education/documents",
  },
  */
];

const Education = () => {
  return (
    <PageWrapper theme="purple">
      <PageTitle title="Education" theme="purple" />
      <section className="p-6 text-center mx-auto max-w-4xl">
        <div>
          <p>QE supports education through services:</p>
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
          If you would like to contribute, please{" "}
          <a className="underline" href="about/contact">
            contact us
          </a>
          .
        </p>
      </section>
    </PageWrapper>
  );
};

export default Education;
