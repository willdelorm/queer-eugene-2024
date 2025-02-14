import React from "react";

import PageTitle from "@/components/PageTitle/PageTitle";
import ContactForm from "@/components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <PageTitle title="Contact Us" theme="teal" />
      <section className="max-w-2xl mx-auto flex flex-col justify-center items-center p-6">
        <p className="mb-6">
          To add a resource to our website, or request a resource be removed,
          please fill out the corresponding form.
        </p>
        <p className="mb-6">
          For all other inquiries, fill out the Communication form and
          we&apos;ll do our best to respond promptly!
        </p>
      </section>
      <section className="px-6 mb-12">
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
