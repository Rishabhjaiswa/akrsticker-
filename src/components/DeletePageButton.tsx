"use client";

import { deleteAuthPage } from "@/app/actions/pages";

export default function DeletePageButton({ id }: { id: string }) {
  return (
    <button
      onClick={async () => {
        if (confirm("Are you sure you want to delete this page?")) {
          await deleteAuthPage(id);
        }
      }}
      className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors"
    >
      Delete
    </button>
  );
}
