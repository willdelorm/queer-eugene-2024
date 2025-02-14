import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";
import AdminNav from "@/components/AdminNav/AdminNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OrganizationsTable from "@/components/Tables/OrganizationsTable";

const Resources = async () => {
  const organizations = await getAllDocumentsFromCollection("organizations");

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <AdminNav />
      <main className="bg-slate-100 text-md flex-1 flex flex-col p-6 gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-medium">Resources</h1>
          <a href="/dashboard/resources/add">
            <Button>New</Button>
          </a>
        </div>
        <hr className="border-gray-500" />
        <Card className="py-6">
          <CardContent>
            <OrganizationsTable data={organizations} />
          </CardContent>
        </Card>
      </main>
      <footer className="qe-bg-purple h-12"></footer>
    </div>
  );
};

export default Resources;
