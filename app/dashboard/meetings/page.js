import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";

import AdminNav from "@/components/AdminNav/AdminNav";
import PreviewTable from "@/components/Tables/PreviewTable";
import Link from "next/link";

const Meetings = async () => {
  const meetingsData = await getAllDocumentsFromCollection("meetings");

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <AdminNav />
      <main className="bg-slate-100 text-md flex-1 flex flex-col p-6 gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-medium">Meeting Notes</h1>
          <Link href="/dashboard/meetings/add">
            <button className="qe-bg-teal px-6 py-2 rounded-lg">New</button>
          </Link>
        </div>
        <hr className="border-gray-500" />
        <section className="bg-white flex flex-col px-4 py-3 gap-3 rounded-xl">
          <PreviewTable category="meetings" data={meetingsData} />
        </section>
      </main>
      <footer className="qe-bg-purple h-12"></footer>
    </div>
  );
};

export default Meetings;
