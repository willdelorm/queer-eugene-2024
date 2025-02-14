"use client";

import { deleteEntry } from "@/utils/actions.utils";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteBtn = ({ collection, id }) => {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        const response = await deleteEntry(collection, id);
        if (response.status === 204) router.push("/dashboard");
      }}
    >
      <Trash2 className="text-red-500" />
    </button>
  );
};

export default DeleteBtn;
