import React from "react";
import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";
import ClientTable from "@/components/Tables/ClientTable";

const Healthcare = async () => {
  const VALID_TYPES = [
    "Medical Org.",
    "Bodywork",
    "Mental Health Org.",
    "Surgical Org"
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
      <PageTitle title="Healthcare" theme="orange" />
      <section className="px-6 mb-3 text-center">
        <p>
          Here you can find inclusive and/or queer medical practitioners and
          healthcare locations.
        </p>
      </section>
      <section className="px-6 mb-3">
        <ClientTable data={filteredData} tags={tags} tableType="healthcare" />
      </section>
      <section className="px-6 mb-6 md:mb-24 text-center">
        <p>
          To add a resource to this list, please contact us{" "}
          <a className="underline" href="/about/contact">
            here
          </a>
        </p>
      </section>
    </>
  );
};

export default Healthcare;
