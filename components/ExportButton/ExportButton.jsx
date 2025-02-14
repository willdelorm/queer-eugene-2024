"use client";

import React from "react";
import { Button } from "../ui/button";
import { getAllDocumentsFromCollection } from "@/utils/firebase.utils";

const ExportButton = () => {
  async function downloadDatabase() {
    const COLLECTIONS = [
      "organizations",
      "announcements",
      "events",
      "meetings",
    ];
    const data = {};
    for (let collection of COLLECTIONS) {
      const response = await getAllDocumentsFromCollection(collection);
      data[collection] = {
        name: collection,
        response,
      };
    }

    const fileData = JSON.stringify(data);
    const blob = new Blob([fileData], {
      type: "application/json",
    });
    const fileUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "qe-database.txt"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blob);
  }

  return <Button onClick={downloadDatabase}>Export Database</Button>;
};

export default ExportButton;
