import AdminNav from "@/components/AdminNav/AdminNav";
import EventForm from "@/components/Forms/EventForm";
import DeleteBtn from "@/components/ui/delete-btn";
import { getDocumentFromCollection } from "@/utils/firebase.utils";

const AddEvent = async ({ searchParams }) => {
  let data;
  if (searchParams.id !== undefined) {
    data = await getDocumentFromCollection("events", searchParams.id);
    console.log("from server", data);
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <AdminNav />
      <main className="bg-slate-100 text-md flex-1 flex flex-col p-6">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium mb-3">Add / Edit Event</h1>
          {data && (
            <div>
              <DeleteBtn collection="events" id={searchParams.id} />
            </div>
          )}
        </div>
        <hr className="border-gray-500 mb-6" />
        <EventForm data={data} />
      </main>
      <footer className="qe-bg-purple h-12"></footer>
    </div>
  );
};

export default AddEvent;
