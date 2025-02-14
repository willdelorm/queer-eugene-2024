"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil } from "lucide-react";

export default function PreviewTable({ category, data }) {
  let primaryColumnName;
  switch (category) {
    case "resources":
      primaryColumnName = "name";
      break;
    case "announcements":
      primaryColumnName = "title";
      break;
    case "events":
      primaryColumnName = "title";
      break;
    case "meetings":
      primaryColumnName = "month";
      break;
    default:
      primaryColumnName = "id";
  }
  const columns = [
    {
      accessorKey: primaryColumnName,
      header: primaryColumnName[0].toUpperCase() + primaryColumnName.slice(1),
      cell: ({ row }) => row.getValue(primaryColumnName),
    },

    {
      id: "actions",
      header: "Edit",
      cell: ({ row }) => {
        const id = row.original.id;
        return (
          <a href={`/dashboard/${category}/add?id=${id}`}>
            <span className="sr-only">Open menu</span>
            <Pencil className="h-4 w-4" />
          </a>
        );
      },
    },
  ];

  if (primaryColumnName === "month") {
    const monthColumn = columns.shift();
    const yearColumn = {
      accessorKey: "year",
      header: "Year",
      cell: ({ row }) => row.getValue("year"),
    };
    columns.unshift(yearColumn);
    columns.unshift(monthColumn);
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
