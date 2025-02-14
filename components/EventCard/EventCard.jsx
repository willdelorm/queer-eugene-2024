import React from "react";
// title, description, location, schedule, next_date
const EventCard = ({ title, description, location, schedule, next_date }) => {
  const formattedDescription = description.split("\n");

  return (
    <div className="bg-gray-100 rounded-2xl p-3 mb-6 flex flex-col justify-between">
      <div className="text-black pb-3">
        <h3 className="font-semibold">{title}</h3>
        <p>Where: {location}</p>
        {schedule && <p>When: {schedule}</p>}
        <p>Next: {next_date}</p>
      </div>
      <hr className="border-purple-400" />
      <div className="text-black pt-3">
        {formattedDescription.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
