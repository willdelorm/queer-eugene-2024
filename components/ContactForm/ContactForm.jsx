"use client";

import React, { useState } from "react";
import FormTemplates from "./FormTemplates";

export const forms = [
  { name: "Communication", id: "communication" },
  { name: "Event", id: "add-event" },
  { name: "Add a Resource", id: "add-resource" },
  { name: "Remove a Resource", id: "remove-resource" },
];

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [formType, setFormType] = useState("communication");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "903bec05-92b6-4fc4-9aa7-eff10d2e66ed");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const handleSelection = (event) => {
    setFormType(event.target.value);
  };

  return (
    <div className="w-full max-w-lg mx-auto text-black">
      <select
        className="w-full mb-5 text-black rounded"
        defaultValue="communicaton"
        onChange={handleSelection}
      >
        {forms.map((item) => (
          <option key={item.name} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <form
        className="bg-white px-8 pt-6 pb-8 mb-4 rounded"
        onSubmit={onSubmit}
      >
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          styles={{ display: "none" }}
        />
        <FormTemplates formType={formType} />
      </form>
      <span>{result}</span>
    </div>
  );
};

export default ContactForm;
