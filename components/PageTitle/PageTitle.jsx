import React from "react";

const PageTitle = ({ title, theme }) => {
  return (
    <section className="flex justify-center items-center py-12">
      <h1
        className={`text-4xl font-black uppercase text-center qe-title-${theme} filter`}
      >
        {title}
      </h1>
    </section>
  );
};

export default PageTitle;
