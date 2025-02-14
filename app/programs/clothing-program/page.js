import React from "react";

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";
import EventCard from "@/components/EventCard/EventCard";
import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";
import NoEvents from "@/components/NoEvents/NoEvents";

const communityPartners = [
  { id: "1", name: "NAMI Lane County", href: "https://namilane.org/" },
  { id: "2", name: "Riverview Center For Growth", href: "https://www.riverviewgrowth.org/" },
  { id: "3", name: "Looking Glass New Roads & Station 7", href: "https://www.lookingglass.us/new-roads" },
  { id: "4", name: "Neighborhood Anarchist Collective", href: "https://neighborhoodanarchists.org" },
  { id: "5", name: "Youth Era Eugene Drop", href: "https://www.youthera.org/eugene-drop" },
  { id: "6", name: "HIV Alliance", href: "https://hivalliance.org" },
  { id: "7", name: "White Bird", href: "https://whitebirdclinic.org" },
  { id: "8", name: "Community Supported Shelters", href: "https://www.communitysupportedshelters.org/" },
  { id: "9", name: "Nightingale Hosted Shelters", href: "https://nightingaleshelters.org/" },
];

const ClothingProgram = async () => {
  const events = await getAllDocumentsFromCollection("events");
  const oneStopEvents = events.filter((e) => e.title.match(/one stop shop/gi));
  const clothingSwapEvents = events.filter((e) =>
    e.title.match(/clothing swap/gi)
  );

  return (
    <PageWrapper theme="purple">
      <PageTitle title="Clothing Program" theme="purple" />
      <section className="px-6 mb-12 mx-auto max-w-4xl">
        <p className="mb-3">
          Queer Eugene runs a clothing program to support our community.
          We accept clean clothing and accessories to share at our clothing swaps.
          We host our own permanent clothing closet at The Lavender Network (local queer community center).
          Additionally, we support local organizations’ clothing closets.
        </p>
        <p className="mb-3">
          We happily accept your clean clothing and accessories!
          If you want to take part in our clothing program, you are welcome to donate, host a donation barrel, 
          volunteer to sort clothes at our permanent closet, and volunteer to help us with our clothing swaps.
        </p>
      </section>
      <section className="px-6 mb-12 mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-3 drop-shadow-md">Ways to donate:</h2>
        <p className="mb-3">
          <a href="https://mnch.uoregon.edu/" className="font-bold underline">UO Museum of Natural and Cultural History</a><br/>
          Wednesday through Sunday 10am-5pm<br/>
          <a href="https://maps.app.goo.gl/sC4zcmriK3Z2Cn1GA" className="font-bold underline">1680 E 15th Ave Eugene, OR 97401</a>
        </p>
        <p className="mb-3">
          <a href="https://hivalliance.org/the-lavender-network/" className="font-bold underline">The Lavender Network</a><br/>
          Monday through Thursday 9am-5pm (12-1 lunch)<br/>
          Other times by appointment<br/>
          <a href="https://maps.app.goo.gl/t8XiYtuprwrsfQEJ8" className="font-bold underline">440 Maxwell Rd Eugene, OR 97404</a>
        </p>
      </section>
      <section className="px-6 mb-12 mx-auto max-w-3xl">
        <h3 className="text-2xl font-bold drop-shadow mb-3">Upcoming events</h3>
        {oneStopEvents.length ? (
          oneStopEvents.map(
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
          )
        ) : (
          <NoEvents />
        )}
      </section>
      <section className="px-6 mb-12 mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold drop-shadow mb-3">
          Pop-Up Clothing Events
        </h2>
        <p className="mb-3">
          Queer Eugene also does pop-up clothing events throughout the year.
        </p>
      </section>
      <section className="px-6 mb-12 mx-auto max-w-3xl">
        <h3 className="text-2xl font-bold mb-3">Upcoming Clothing Events</h3>
        {clothingSwapEvents.length ? (
          clothingSwapEvents.map(
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
          )
        ) : (
          <NoEvents />
        )}
      </section>
      <section className="px-6 mb-12 mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-3 drop-shadow-md">Community Partners</h2>
        <ul>
        {communityPartners.map((item) => (
          <li key={item.id}>
            <a href={item.href} className="font-bold underline">{item.name}</a>
          </li>
        ))}
        </ul>
      </section>
    </PageWrapper>
  );
};

export default ClothingProgram;
