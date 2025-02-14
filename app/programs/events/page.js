import React from "react";

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";
import EventCard from "@/components/EventCard/EventCard";
import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";

const Events = async () => {
  const events = await getAllDocumentsFromCollection("events");
  return (
    <PageWrapper theme="purple">
      <PageTitle title="Events" theme="purple" />
      <section className="max-w-2xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold drop-shadow mb-6 text-center md:text-left">
          Regular
        </h2>
        {events
          .filter(({ frequency }) => frequency === "monthly")
          .map(({ title, description, location, schedule, next_date }) => (
            <EventCard
              key={title}
              title={title}
              description={description}
              location={location}
              schedule={schedule}
              next_date={next_date}
            />
          ))}
      </section>
      <section className="max-w-2xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold drop-shadow mb-6 text-center md:text-left">
          Quarterly & One Offs
        </h2>
        {events
          .filter(({ frequency }) => frequency === "quarterly")
          .map(({ title, description, location, schedule, next_date }) => (
            <EventCard
              key={title}
              title={title}
              description={description}
              location={location}
              schedule={schedule}
              next_date={next_date}
            />
          ))}
      </section>
      <section className="max-w-2xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold drop-shadow mb-6 text-center md:text-left">
          Annual
        </h2>
        {events
          .filter(({ frequency }) => frequency === "annually")
          .map(({ title, description, location, schedule, next_date }) => (
            <EventCard
              key={title}
              title={title}
              description={description}
              location={location}
              schedule={schedule}
              next_date={next_date}
            />
          ))}
      </section>
    </PageWrapper>
  );
};

export default Events;
