"use client";

import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Button from "@/components/Button/Button";

const SignIn = () => {
  return (
    <PageWrapper theme="purple">
      <div className="min-h-screen flex flex-col">
        <main className="bg-slate-100 text-black flex-1 flex flex-col p-6 gap-6">
          <div>
            <div className="flex flex-col">
              <h1 className="mx-auto text-4xl font-medium mb-1">
                Please sign in below:
              </h1>
              <p className="mx-auto mb-3">Please enter your details.</p>
            </div>
            <hr className="border-gray-500" />
          </div>
          <Button
            title={"Sign-in"}
            color={`qe-bg-teal`}
            link={"/api/auth/login"}
          >
            Log in
          </Button>
        </main>
      </div>
    </PageWrapper>
  );
};

export default SignIn;
