import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";

const Education = () => {
  return (
    <PageWrapper theme="purple">
      <PageTitle title="Services" theme="purple"/>
      <section className="p-6 text-center mx-auto max-w-4xl">
        <div>
            <p>Here you can find information on various education services QE provides:</p>
        </div>
      </section>
      <section className="p-6 m-6 mx-auto max-w-3xl">
        <article className="mb-12">
          <h2 className="text-2xl font-bold drop-shadow-md">Affinity Group Support</h2>
          <ul className="list-disc list-inside">
            <li>Create/maintain/support affinity groups for staff/adults and students/youth</li>
            <li>Help affinity groups with direction of meetings and activities</li>
            <li>Provide resources for participants of the affinity groups</li>
            <li>Provide leadership training/advocacy training to affinity group members</li>
          </ul>
        </article>
        <article className="mb-12">
          <h2 className="text-2xl font-bold drop-shadow-md">Community Connections</h2>
          <ul className="list-disc list-inside">
            <li>Build relationships between organizations to help create more support within the county/cities that will mutually benefit the participants</li>
            <li>Develop programs/events between/with organizations that will allow for more support of chosen focal groups</li>
          </ul>
        </article>
        <article className="mb-12">
          <h2 className="text-2xl font-bold drop-shadow-md">Events</h2>
          <ul className="list-disc list-inside">
            <li>Support with planning and executing events to support marginalized groups in an organization (could be focused on a single group or joining multiple groups together)</li>
            <li>Providing suggestions to previously established events to offer perspectives/ideas to better incorporate equity & inclusion</li>
          </ul>
        </article>
        <article className="mb-12">
          <h2 className="text-2xl font-bold drop-shadow-md">Policy Analysis</h2>
          <ul className="list-disc list-inside">
            <li>Analysis of policies/rules/guidelines that organizations use to direct decision making</li>
            <li>Analysis of documents (hiring paperwork, job applications, job duties, etc) to look at equitable and inclusive language and framing in the documents</li>
            <li>Policy template designing and draft writing for topics/ideas that the organization wants to implement but doesn’t know where to start</li>
          </ul>
        </article>
        <article className="mb-12">
          <h2 className="text-2xl font-bold drop-shadow-md">Professional Learning</h2>
          <ul className="list-disc list-inside">
            <li>Learning sessions to support equity & inclusion generally, as well as sessions to focus support for the queer community and disabled community</li>
            <li>Learning sessions supporting small groups with a more focused setting</li>
            <li>Learning sessions with 1:1 focus to help staff with repeated issues that could use more support prior to punitive or corrective action</li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
};

export default Education;
