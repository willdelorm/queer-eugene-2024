import React from "react";
import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";

import PageTitle from "@/components/PageTitle/PageTitle";
import ClientTable from "@/components/Tables/ClientTable";

const Organizations = async () => {
  const VALID_TYPES = [
    "National Org.",
    "State Org.",
    "Local Org.",
    "Business",
    "Group",
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
      <PageTitle title="Organizations" theme="orange" />
      <section className="px-6 mb-3 text-center">
        <p>
          Here you can find local, state, and national organizations that support or serve queer folks. This includes cultural organizations like Pride groups, as well as performers!
        </p>
      </section>
      <section className="px-6 mb-3">
        <ClientTable data={filteredData} tags={tags} tableType="organizations" />
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

export default Organizations;
