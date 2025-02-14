import React from "react";
import PageTitle from "@/components/PageTitle/PageTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";

const BYLAWS_URL =
  "https://docs.google.com/document/u/1/d/e/2PACX-1vRkfschsSAPuBw6Yg_9WYw4bIbPNIcS_xs-jIXzsc-_VMQ7qLwheeDnehhoZR82gA/pub";

export const NUM_TO_MONTH = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};

const Transparency = async () => {
  const meetings = await getAllDocumentsFromCollection("meetings");
  const meetingYears = meetings
    .reduce((acc, val) => {
      if (!acc.includes(val.year)) {
        return [...acc, val.year];
      }
      return acc;
    }, [])
    .sort()
    .reverse();

  return (
    <main className="flex-1 mb-12">
      <PageTitle title="Transparency" theme="teal" />
      <section className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold drop-shadow-md uppercase mb-3">
          Bylaws
        </h2>
        <p className="mb-6">
          Please click the button below to read our organization&apos;s bylaws.
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            className={`w-1/2 qe-bg-purple hover:bg-purple-300 shadow-md`}
          >
            <Link href={`${BYLAWS_URL}`}>Bylaws</Link>
          </Button>
        </div>
      </section>
      <section className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold drop-shadow-md uppercase mb-3">
          Meeting Notes
        </h2>
        <Accordion type="single" collapsible>
          {meetingYears.map((year) => (
            <AccordionItem key={year} value={year}>
              <AccordionTrigger>{year}</AccordionTrigger>
              <AccordionContent>
                <ul className="px-6">
                  {meetings
                    .filter((mtg) => mtg.year == year)
                    .map((mtg) => (
                      <li key={mtg.month} className="py-3">
                        <Link href={mtg.url}>{NUM_TO_MONTH[mtg.month]}</Link>
                      </li>
                    ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold drop-shadow-md uppercase mb-3">
            Finances
        </h2>
        <div className="flex justify-center">
          <Button
            asChild
            className={`w-1/2 qe-bg-purple hover:bg-purple-300 shadow-md`}
          >
            <Link href={"/images/documents/QE 23-24 990-N Postcard.png" }>QE 23-24 990-N</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Transparency;
