import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";

const Education = () => {
  return (
    <PageWrapper theme="purple">
      <PageTitle title="Education Documents" theme="purple"/>
      <section className="p-6 text-center mx-auto ma-w-4xl">
        <div>
            <p>Here you can find various documents relating to education: </p>
        </div>
      </section>
      <section className="p-6 m-6 mx-auto max-w-3xl">
        <article className="mb-12">
          <h2 className="text-2xl font-bold drop-shadow-md">Templates</h2>
        </article>
        <article className="mb-12">
          <h2 className="text-2xl font-bold drop-shadow-md">Drafts</h2>
        </article>
        <article className="mb-12">
          <h2 className="text-2xl font-bold drop-shadow-md">Policies</h2>
        </article>
        <article className="mb-12">
          <h2 className="text-2xl font-bold drop-shadow-md">Resources & websites</h2>
        </article>
      </section>
    </PageWrapper>
  );
};

export default Education;
