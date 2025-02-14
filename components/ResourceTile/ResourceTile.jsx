"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ResourceTile = ({ children, title, url }) => {
  const router = useRouter();

  return (
    <section className="bg-white text-black rounded-xl shadow-md p-3 flex flex-col gap-3 text-xs">
      <header className="flex justify-between items-center">
        <h2 className="text-base font-medium">{title}</h2>
        <button
          className="qe-bg-teal rounded-lg px-6 py-2"
          onClick={() => {
            router.push(`/dashboard/${url}/add`);
          }}
        >
          New
        </button>
      </header>
      {children}
      <footer className="flex justify-end">
        <a href={`/dashboard/${url}`}>View All</a>
      </footer>
    </section>
  );
};

export default ResourceTile;
