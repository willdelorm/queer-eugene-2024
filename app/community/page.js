import PageTitle from "@/components/PageTitle/PageTitle";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

const Community = () => {
  return (
    <PageWrapper theme="purple">
      <PageTitle title="Community Events" theme="purple" />
      <section className="flex flex-col justify-center items-center p-6">
        <p className="mx-3 mb-3">
          This calendar combines queer events happening all over the state currently known as Oregon. Select an event below to see details.
        </p>
        <div className="max-w-3xl w-full py-6">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&src=Y185YzRmYzIxNGM3MTgxYjExMmM2ZWJkOGI0YWI5NzU4ODM3YjQyMzlhMTczMjIzODZlNGJkZmZmM2ZjOTRkYmJiQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23009688"
            width="100%"
            height="600"
          ></iframe>
        </div>
        <p className="text-center my-6">
          If something is missing, {" "}
          <a className="underline" href="/about/contact">
            let us know!
          </a>
          
        </p>
      </section>
    </PageWrapper>
  );
};

export default Community;
