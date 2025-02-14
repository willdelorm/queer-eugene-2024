"use client";

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const programs = [
  { name: "Events", href: "/programs/events" },
  { name: "Trivia", href: "/programs/trivia" },
  { name: "One Stop Shop", href: "/programs/one-stop-shop" },
];

const resources = [
  { name: "Organizations", href: "/resources/organizations" },
  { name: "Intersectional", href: "/resources/intersectional" },
  { name: "Learning", href: "/resources/learning" },
  { name: "Healthcare", href: "/resources/healthcare" },
];

const abouts = [
  { name: "Story", href: "/about/story" },
  { name: "Staff", href: "/about/staff" },
  { name: "Bylaws & Minutes", href: "/about/bylaws-&-minutes" },
  { name: "Contact", href: "/about/contact" },
];

const AdminNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-2 lg:px-8 qe-bg-purple">
        <div className="flex lg:flex-1">
          <a href="/dashboard">
            <span className="text-white font-black text-2xl">Queer Eugene</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:items-center lg:gap-x-12">
          <a
            href="/dashboard/resources"
            className="text-sm font-semibold leading-6 text-white"
          >
            Resources
          </a>
          <a
            href="/dashboard/events"
            className="text-sm font-semibold leading-6 text-white"
          >
            Events
          </a>
          <a
            href="/dashboard/announcements"
            className="text-sm font-semibold leading-6 text-white"
          >
            Announcements
          </a>
          <a
            href="/dashboard/meetings"
            className="text-sm font-semibold leading-6 text-white"
          >
            Meetings
          </a>
          <span className="text-sm font-semibold text-white">|</span>
          <a href="/api/auth/logout" className="text-sm font-semibold leading-6 text-white">
            Log Out
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-3 qe-bg-purple sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/dashboard">
              <span className="text-white font-black text-2xl">
                Queer Eugene
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-9 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/dashboard/organizations"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-700"
                >
                  Organizations
                </a>
                <a
                  href="/dashboard/events"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-700"
                >
                  Events
                </a>
                <a
                  href="/dashboard/announcements"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-700"
                >
                  Announcements
                </a>
                <a
                  href="/dashboard/minutes"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-700"
                >
                  Minutes
                </a>
                <hr />
                <a
                  href="/api/auth/logout" 
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-purple-700"
                >
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default AdminNav;
