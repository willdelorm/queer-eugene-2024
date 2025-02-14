import AdminNav from "@/components/AdminNav/AdminNav";
import MeetingForm from "@/components/Forms/MeetingForm";
import DeleteBtn from "@/components/ui/delete-btn";
import { getDocumentFromCollection } from "@/utils/firebase.utils";

const AddMeeting = async ({ searchParams }) => {
  let data;
  if (searchParams.id !== undefined) {
    data = await getDocumentFromCollection("meetings", searchParams.id);
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <AdminNav />
      <main className="bg-slate-100 text-md flex-1 flex flex-col p-6">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium mb-3">Add / Edit Meeting</h1>
          {data && (
            <div>
              <DeleteBtn collection="meetings" id={searchParams.id} />
            </div>
          )}
        </div>
        <hr className="border-gray-500 mb-6" />
        <MeetingForm data={data} />
      </main>
      <footer className="qe-bg-purple h-12"></footer>
    </div>
  );
};

export default AddMeeting;
