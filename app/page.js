import PageWrapper from "@/components/PageWrapper/PageWrapper";
import { Button } from "@/components/ui/button";
import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";
import Link from "next/link";

const pageButtons = [
  {
    title: "Programs",
    color: "purple",
    link: "/programs/",
  },
  {
    title: "Education",
    color: "teal",
    link: "/education",
  },
  {
    title: "Resources",
    color: "orange",
    link: "/resources",
  },
  {
    title: "About",
    color: "purple",
    link: "/about/story",
  },
];

const Page = async () => {
  const announcements = (
    await getAllDocumentsFromCollection("announcements")
  ).sort((a, b) => b.created - a.created);

  return (
    <PageWrapper theme="purple">
      <section className="h-96 py-72 flex justify-center items-center relative">
        <h1 className="text-7xl text-center font-bold uppercase qe-title filter drop-shadow z-10">
          Queer Eugene
        </h1>
        <img
          src="/images/eugene-1-optimized.webp"
          alt="aerial photo of Eugene pride festival"
          className="absolute w-full h-full object-cover"
        />
      </section>
      <section className="mx-auto p-6">
        <p className="text-center text-lg max-w-screen-md mx-auto">
          Queer Eugene is a community-based organization started in 2021. Our mission is organizing support, resources, and community for queer folks in the state currently known as Oregon.
          The 3 areas we focus on are Resources, Education, and Community. We do our work through community partnership- Queer Eugene is run for the community by the community!
        </p>
      </section>
      <section className="dark-bg p-12 md:py-24">
        <div className="w-64 mx-auto flex flex-col justify-center items-center gap-6 z-10">
          {pageButtons.map(({ title, color, link }) => (
            <Button
              asChild
              key={title}
              className={`w-full qe-bg-${color} hover:bg-${color}-300 shadow-md`}
            >
              <Link href={link}>{title}</Link>
            </Button>
          ))}
        </div>
      </section>
      <section className="flex flex-col max-w-4xl mx-auto px-6 py-6 md:py-24">
        <h2 className="text-3xl font-bold text-center uppercase mb-6">
          Latest News
        </h2>
        {announcements.map((item) => (
          <article key={item.id} className="mb-6">
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            {item.description.split("\n").map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            <hr className="border-gray-200 w-1/2 mx-auto mt-6" />
          </article>
        ))}
      </section>
      <section className="py-6 bg-white bg-opacity-80 text-black">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <h2 className="text-3xl font-regular w-3/5">Support us!</h2>

          <Button asChild className="w-32 qe-bg-teal hover:bg-teal-300">
            <Link href="/donate">DONATE</Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Page;
