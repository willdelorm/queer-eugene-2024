import React from "react";

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";

const Questions = async () => {

  return (
    <PageWrapper theme="teal">
      <PageTitle title="Trivia Questions" theme="teal" />
      <section className="min-h-sceen">
        <div className="mb-8 mx-auto">
            <iframe className="trivia-questions mx-auto" src="https://docs.google.com/presentation/d/e/2PACX-1vSZjVnuW4w0lie0hwktdWxLSi8tCqlMoo1j5Q9pjtOR6zfUPlDJ55X1q-YM6FH_X9nNHM8SqEvoBrB-/embed?start=false&loop=false&delayms=60000" frameBorder="0"  allowFullScreen={true}></iframe>
        </div>
        </section>
    </PageWrapper>
  );
};

export default Questions;
