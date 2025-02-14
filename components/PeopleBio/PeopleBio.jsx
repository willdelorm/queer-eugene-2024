import React from "react";

const PeopleBio = ({ profile }) => {
  const { name, pronouns, position, description, photo } = profile;
  return (
    <div className="flex flex-col mb-12 p-2 gap-6 md:flex-row bg-black bg-opacity-50">
      <img src={photo} alt={name} className="w-100 md:max-w-xs mx-auto object-cover" />
      <div className="px-2 py-5 ">
        <h3 className="font-semibold text-lg">
          {name} <span className="font-normal italic">{pronouns}</span>
        </h3>
        <p className="mb-3">{position}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PeopleBio;
