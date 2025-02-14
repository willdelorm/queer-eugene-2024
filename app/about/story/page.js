import React from "react";

import PageTitle from "@/components/PageTitle/PageTitle";

const Story = () => {
  return (
    <>
      <PageTitle title="About Us" theme="teal" />
      
      <section className="px-6 my-12 mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-3 drop-shadow-md">
          Our Story
        </h2>
        <p className="mb-3">
          Queer Eugene is a local organization started in June 2021 by Lake and Trystan Weeks to support queer folks in Oregon with access to resources and community. In June of 2022 we received our nonprofit 501(c)(3) status!
          Lake has stayed with Queer Eugene as the Acting Director and an Affinity Project Coordinator; Trystan has stayed with Queer Eugene as the Technology Administrator.
          We focus on building relationships and community.
        </p>
      </section>
      <section className="px-6 my-12 mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-3 drop-shadow-md">
          Mission Statement
        </h2>
        <p className="mb-3">
          Our mission is to organize support, resources, and community for queer
          folks in the state currently known as Oregon.
          Our motto is: <strong><em>For the Community, By the Community</em></strong>
        </p>
      </section>
      <section className="px-6 my-12 mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-3 drop-shadow-md">
          Method
        </h2>
        <p className="mb-3">
          Our Board of Directors oversees the paperwork, financial, and other required back-end non-profit requirements, and supports the “Affinity Project Coordinators”.
          Affinity Project Coordinators are community volunteers who lead certain events, clubs, groups, programs, and such that they like and want to participate with others in the community. These can take on a very wide range of ideas! Coordinators are supported by the Board to connect with community members and build up Eugene’s opportunities to build relationships and community.
        </p>
      </section>
      <section className="px-6 my-12 mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-3 drop-shadow-md">
          What We Do
        </h2>
        <p className="mb-3">
          We focus on 3 things:
        </p>
          <ol className="list-decimal list-inside">
            <li>
                <strong>Resources:</strong> Supplying information about services, resources, groups, events, and related that serve our queer community (and their various other identities)
            </li>
            <li>
                <strong>Education:</strong> Supporting our community through resourcing our education system, as well as offering trainings and supports to other sectors for build up knowledge of and supports to our queer community
            </li>
            <li>
                <strong>Community:</strong> offering up our own events and programs to build community; primarily support Coordinators who lead Affinity Programs (person/duo/group of people who coordinate a program/group/event/club/etc. to give community members a time to build relationships and possibly even skills)
            </li>
          </ol>
      </section>
    </>
  );
};

export default Story;
