import React from "react";
import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";

import PageTitle from "@/components/PageTitle/PageTitle";
import ClientTable from "@/components/Tables/ClientTable";

const Learning = async () => {
  const VALID_TYPES = [
    "QE",
    "Activity",
    "Article",
    "Film",
    "General",
    "Glossary & Definitions",
    "History",
    "Podcast",
    "Reading",
    "Resource",
    "Social Media",
    "Video",
    "Website",
  ];
  const data = await getAllDocumentsFromCollection("organizations");
  const filteredData = data.filter((resource) =>
    VALID_TYPES.includes(resource.type)
  );
  const categories = await getAllDocumentsFromCollection("categories");
  const tags = categories.filter((tag) =>
    "tag"==tag.type
  );

  return (
    <>
      <PageTitle title="Learning" theme="orange" />
      <section className="px-6 mb-3 text-center">
        <p>
          Here you can find resources and media geared towards educating others
          on queer and queer topics.
        </p>
      </section>
      <section className="px-6 mb-3">
        <ClientTable data={filteredData} tags={tags} tableType="learning" />
      </section>
      <section className="px-6 mb-6 md:mb-24 text-center">
        <p>
          To add a resource to this list, please contact us{" "}
          <a className="underline" href="/about/contact">
            here
          </a>
          .
        </p>
      </section>
    </>
  );
};

export default Learning;
