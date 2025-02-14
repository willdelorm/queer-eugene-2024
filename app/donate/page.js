"use client";

import React from "react";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Donate = () => {
  return (
    <PageWrapper theme="purple">
      <PageTitle title="Donate" theme="purple" />
      <section className="px-6 pb-12">
        <h2 className="sr-only">Donation Options</h2>
        <p className="text-center mb-6">
          Queer Eugene is currently run entirely by volunteers. Want to support
          us? We accept donations online through PayPal, Venmo, and in cash at
          any of our events. You can also suppport us for as little as $1 on
          Ko-fi.
        </p>
        <div className="flex justify-center items-center gap-3 px-6">
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_top"
            className="px-2"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="U7RMQ6SEQSMMN"
            />
            <Button className="paypal rounded-3xl min-w-32" type="submit">
              PayPal
            </Button>
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            />
          </form>
          <Button className="venmo rounded-3xl min-w-32">
            <Link href="https://venmo.com/queereugene">Venmo</Link>
          </Button>
          <Button className="kofi rounded-3xl min-w-32">
            <Link href="https://ko-fi.com/V7V0L9RSP">Ko-fi</Link>
          </Button>
        </div>
      </section>
      <section className="px-6 py-12 text-center bg-black bg-opacity-50">
        <h2 className="text-3xl font-bold mb-6">Clothing Donations</h2>
        <p>
          If you would like to donate clothes for one of our clothing swaps, you have these options:
        </p>
          <div className="flex flex-row text-left justify-around mb-3">
            <p className="my-3">
              <a href="https://mnch.uoregon.edu/" className="font-bold underline">UO Museum of Natural and Cultural History</a><br/>
              Wednesday through Sunday 10am-5pm<br/>
              <a href="https://maps.app.goo.gl/sC4zcmriK3Z2Cn1GA" className="font-bold underline">1680 E 15th Ave Eugene, OR 97401</a>
            </p>
            <p className="my-3">
              <a href="https://hivalliance.org/the-lavender-network/" className="font-bold underline">The Lavender Network</a><br/>
              Monday through Thursday 9am-5pm (12-1 lunch)<br/>
              Other times by appointment<br/>
              <a href="https://maps.app.goo.gl/t8XiYtuprwrsfQEJ8" className="font-bold underline">440 Maxwell Rd Eugene, OR 97404</a>
            </p>
          </div>
          <p>
          You can also fill out our{" "}
          <a className="underline" href="/about/contact">
            contact form
          </a>{" "}
          if the above options do not work for you!
        </p>
      </section>
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Annual Fundraiser</h2>
        <p>
          We host an annual fundraiser, you can find more information about that{" "}
          <a className="underline" href="/programs/events">
            here
          </a>
          .
        </p>
      </section>
    </PageWrapper>
  );
};

export default Donate;
