import React from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import PeopleBio from "@/components/PeopleBio/PeopleBio";

const peopleProfiles = [
  {
    name: "Devyn Thurman",
    pronouns: "They/He",
    team: "leadership",
    position: "President of the Board",
    description:
      "Devyn is a 30 year old queer who has been living in Eugene for 5 years with their partner and 2 cats. Currently working as a social worker, Devyn has had the opportunity to work with many different communities in lane county and strives to support connections throughout it. Devyn has worked as a group leader in numerous Rotary conferences, as well as has coordinated volunteer events and fundraisers throughout college. They are excited for more opportunities to help build up our community. An Oregon native, they enjoy spending time at the beach, planning camping trips and having every window open to smell the rain. When they’re not at work you will find Devyn playing board games with friends, arguing with their cats, cooking needlessly complicated meals and napping.",
    photo: "/images/people/Devyn-T.jpg",
  },

  {
    name: "Lulu",
    pronouns: "She/Her",
    team: "leadership",
    position: "Vice President",
    description:
      "My name is Lulu and my pronouns are she/her. I am a mother of two, partner, and involved with all things ASD. My passion is found in serving/supporting my community on a micro-level that inspires others to believe that life has no ceiling to their dreams. I received my undergrad in family psychology and headed to UO for a master’s in school psychology. Neuro-spicy life is fun and I encourage all to be their authentic selves! I’m here to listen and help anyway I am able.",
    photo: "/images/people/Lulu.jpg",
  },

  {
    name: "Skye",
    pronouns: "She/They",
    team: "leadership",
    position: "Secretary",
    description: "My name is Skye, and my pronouns are she/they. I am a local drag queen here in Eugene and a full-time uber driver! I'm biracial, neurodivergent, and queer, which has given me a drive to help build and support my community around me. I am one of the newest members of the board and the new secretary board member.",
    photo: "/images/people/Skye-W-M.jpg",
  },

  {
    name: "Kevin",
    pronouns: "He/They",
    team: "board",
    position: "Board Member",
    description: 
      "My name is Kevin and I am a transmasc, genderfluid mess who uses he/they pronouns. I am a drag artist, professional crier, autistic weirdo, and I have a deep passion for connecting to others through art, self expression, and a celebration of life. have lived in Eugene for almost six years and am happy to call it my home. I graduated from University of Oregon with a degree in planning, public policy, and management, but since then, I have become mystified by bureaucracy. So I host improv jams and the weekly queer writing group instead. ",
    photo: "/images/people/Kevin-S.jpg",
  },

  {
    name: "Andy",
    pronouns: "He/Him",
    team: "board",
    position: "Board Member",
    description:
      "Andy is a Community Health Worker in the Eugene area. He was born in South Korea and adopted by an American family as an infant. After spending his childhood in the suburbs of Chicago, he moved to the Bay Area, which helped to shape the person that he is today. As someone who struggled with addiction in his early adulthood, he strongly values harm reduction and education, and he is always willing to have a conversation about those topics. He hopes to bring his lived experience and a diverse opinion to the QE board. He is excited to find more opportunities to serve Eugene's queer community, which has always accepted him just the way he is.",
    photo: "/images/people/Andy.jpg",
  },

  {
    name: "Lake",
    pronouns: "They/She",
    team: "volunteer",
    position: "Co-Founder, Director",
    description:
      "Lake is an Independent DEI Contractor and educator in Oregon who supports the education system with equity and inclusion practices- and joy! With their lenses of neurodivergence, disability, and queerness, they started Queer Eugene to help build intersectional community for everyone. They are happy to personally have a great little family here in Oregon and want to help change systems to better support people, and help others find meaningful connections in their community.",
    photo: "/images/people/Lake-C.jpg",
  },
  {
    name: "Trystan Weeks",
    pronouns: "He/Him",
    team: "volunteer",
    position: "Co-Founder, Technology Administrator",
    description:
      "Trystan is a local queer artist and tech aficionado. Trystan currently manages the QE website and our technology needs. Between projects, he is working on web development and exploring the intersection of art, science, and technology. Trystan is excited to help foster online communities and to connect people with resources. From Salem originally, he's been living in Eugene for five years with his partner and two cats.",
    photo: "/images/people/Trystan-W.jpg",
  },
  {
    name: "Blake Slama",
    pronouns: "They/Them",
    team: "leadership",
    position: "Treasurer",
    description:
      "Blake serves as the Treasurer for Queer Eugene and attends community outreach events as much as possible. Blake is the contact for several of QE’s own community events and the dedicated clothing donation picker-upper for QE’s One-Stop-Shops. Originally from the upper midwest, Blake moved to Eugene in hopes of warmer weather and a queer community to call their own. Through various friends and community events they stumbled upon Lake/Queer Eugene where they found the opportunity to engage and help support a wonderful and vibrant group of folks! Along with their position at QE, they recently began working in the social services field. In their free time, Blake enjoys walks by the river, video/board games, and being a couch potato with their chihuahua, Paws!",
    photo: "/images/people/Blake-S.jpg",
  },
  {
    name: "Kayla Eckloff",
    pronouns: "She/Her",
    team: "volunteer",
    position: "Event Coordinator",
    description:
      "Kayla is a queer special education teacher in Eugene with a passion for universal design and inclusivity. Kayla helps coordinate events for Queer Eugene such as the Annual Fundraiser and is the host of our trivia events!",
    photo: "/images/people/Kayla.jpg",
  },
];

const People = () => {
  return (
    <>
      <PageTitle title="People" theme="teal" />
      <section className="px-6 my-12 mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8 drop-shadow-md">
          Board Leadership
        </h2>
        {peopleProfiles
          .filter((profile) => profile.team === "leadership")
          .map((profile, index) => (
            <PeopleBio key={index} profile={profile} />
          ))}
      </section>
      <section className="px-6 my-12 mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8 drop-shadow-md">
          Board Members
        </h2>
        {peopleProfiles
          .filter((profile) => profile.team === "board")
          .map((profile, index) => (
            <PeopleBio key={index} profile={profile} />
          ))}
      </section>
      <section className="px-6 my-12 mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8 drop-shadow-md">
          Lead Volunteers
        </h2>
        {peopleProfiles
          .filter((profile) => profile.team === "volunteer")
          .map((profile, index) => (
            <PeopleBio key={index} profile={profile} />
          ))}
      </section>
      <section className="px-6 my-12 mx-auto max-w-4xl">
        <p className="text-center my-6">
          If you would like to get involved with Queer Eugene,{" "}
          <a href="/about/contact" className="underline">
            contact us
          </a>
          .
        </p>
      </section>
    </>
  );
};

export default People;
