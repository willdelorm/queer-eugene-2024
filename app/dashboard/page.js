import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";
import AdminNav from "@/components/AdminNav/AdminNav";
import PreviewTable from "@/components/Tables/PreviewTable";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ExportButton from "@/components/ExportButton/ExportButton";
import RevalidateButton from "@/components/RevalidateButton/RevalidateButton";

const Dashboard = async () => {
  const organizations = (
    await getAllDocumentsFromCollection("organizations")
  ).slice(0, 5);
  const announcements = (await getAllDocumentsFromCollection("announcements"))
    .slice(0, 5)
    .sort((a, b) => b.created - a.created);
  const events = (await getAllDocumentsFromCollection("events")).slice(0, 5);
  const meetings = (await getAllDocumentsFromCollection("meetings"))
    .sort((a, b) => b.year - a.year || b.month - a.month)
    .slice(0, 5);

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <AdminNav />
      <main className="bg-slate-100 text-md flex-1 flex flex-col p-6 gap-6">
        <div className="flex justify-between items-center">
          <h1 className="sr-only">Admin Dashboard</h1>
          <p className="text-lg font-medium">Hello, Queer Eugene!</p>
          <ExportButton />
          <RevalidateButton />
        </div>
        <hr className="border-gray-500" />
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <PreviewTable category="resources" data={organizations} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <a href="/dashboard/resources/add">
              <Button>New</Button>
            </a>
            <a href={"/dashboard/resources"}>View All</a>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Announcements</CardTitle>
          </CardHeader>
          <CardContent>
            <PreviewTable category="announcements" data={announcements} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <a href="/dashboard/announcements/add">
              <Button>New</Button>
            </a>
            <a href={"/dashboard/announcements"}>View All</a>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
          </CardHeader>
          <CardContent>
            <PreviewTable category="events" data={events} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <a href="/dashboard/events/add">
              <Button>New</Button>
            </a>
            <a href={"/dashboard/events"}>View All</a>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Meetings</CardTitle>
          </CardHeader>
          <CardContent>
            <PreviewTable category="meetings" data={meetings} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <a href="/dashboard/meetings/add">
              <Button>New</Button>
            </a>
            <a href={"/dashboard/meetings"}>View All</a>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
