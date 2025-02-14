import React from "react";

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";
import EventCard from "@/components/EventCard/EventCard";
import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";

const Trivia = async () => {
  const events = (await getAllDocumentsFromCollection("events")).filter((e) =>
    e.title.match(/trivia/gi)
  );

  return (
    <PageWrapper theme="purple">
      <PageTitle title="Trivia" theme="purple" />
      <section className="p-6 mx-auto max-w-4xl">
        <p className="mb-3">
          We host a free trivia night every second and fourth Thursday, 6:30pm
          at Starlight Lounge.
        </p>
        <p className="mb-3">
          HIV Alliance provides testing and HRT supplies every fourth Thursday,
          as well as prizes for 1st and 2nd place.
        </p>
        <p className="mb-3">
          We accept donations on behalf of Eugene Bleeds at trivia
        </p>
      </section>
      <section className="px-6 mb-6 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold drop-shadow mb-3 text-center md:text-left">
          Upcoming Trivia
        </h2>
        <div>
          {events.map(
            ({ id, title, description, location, schedule, next_date }) => (
              <EventCard
                key={id}
                title={title}
                description={description}
                location={location}
                schedule={schedule}
                next_date={next_date}
              />
            )
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Trivia;
