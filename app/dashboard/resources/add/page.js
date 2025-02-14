import AdminNav from "@/components/AdminNav/AdminNav";
import ResourceForm from "@/components/Forms/ResourceForm";
import DeleteBtn from "@/components/ui/delete-btn";
import {
  getDocumentFromCollection,
  getResourceTypes,
  getResourceTags,
} from "@/utils/firebase.utils";

const AddResource = async ({ searchParams }) => {
  const typesOrg = (await getResourceTypes("organization")).sort((a, b) => a.id > b.id);
  const typesLearn = (await getResourceTypes("learning")).sort((a, b) => a.id > b.id);
  const tags = await getResourceTags();
  let data;
  if (searchParams.id !== undefined) {
    data = await getDocumentFromCollection("organizations", searchParams.id);
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <AdminNav />
      <main className="bg-slate-100 text-md flex-1 flex flex-col p-6">
        <div className="flex justify-between">
          <h1 className="text-lg font-medium mb-3">Add / Edit Resource</h1>
          {data && (
            <div>
              <DeleteBtn collection="organizations" id={searchParams.id} />
            </div>
          )}
        </div>
        <hr className="border-gray-500 mb-6" />
        <ResourceForm data={data} typesOrg={typesOrg} typesLearn={typesLearn} tags={tags} />
      </main>
      <footer className="qe-bg-purple h-12"></footer>
    </div>
  );
};

export default AddResource;
