import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";

import AdminNav from "@/components/AdminNav/AdminNav";
import Link from "next/link";
import PreviewTable from "@/components/Tables/PreviewTable";

const Events = async () => {
  const eventsData = await getAllDocumentsFromCollection("events");

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <AdminNav />
      <main className="bg-slate-100 text-md flex-1 flex flex-col p-6 gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-medium">Events</h1>
          <Link href="/dashboard/events/add">
            <button className="qe-bg-teal px-6 py-2 rounded-lg">New</button>
          </Link>
        </div>
        <hr className="border-gray-500" />
        <section className="bg-white flex flex-col px-4 py-3 gap-3 rounded-xl">
          <PreviewTable category="events" data={eventsData} />
        </section>
      </main>
      <footer className="qe-bg-purple h-12"></footer>
    </div>
  );
};

export default Events;
