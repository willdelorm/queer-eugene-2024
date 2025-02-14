import { useMemo } from "react";
import { ArrowUpDown, ExternalLink, ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

const columnName = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      let sortStateIcon;
      switch (column.getIsSorted()) {
        case "asc":
          sortStateIcon = <ArrowDown className="ml-2 h-4 w-4" />;
          break;
        case "desc":
          sortStateIcon = <ArrowUp className="ml-2 h-4 w-4" />;
          break;
        default:
          sortStateIcon = <ArrowUpDown className="ml-2 h-4 w-4" />;
      }
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting()}>
          Name
          {sortStateIcon}
        </Button>
      );
    },
  },
];

const columnURL = [
  {
    accessorKey: "url",
    header: "URL",
    cell: ({ row }) => (
      <a href={row.getValue("url")}>{row.getValue("url").slice(0, 30)}...</a>
    ),
  },
];

const columnType = [
  {
    accessorKey: "type",
    header: "Type",
  },
];

const columnTypeOrganizations = [
  {
    accessorKey: "type",
    header: "Type",
    filterFn: (row, columnId, filterValue) => {
      let value = row.getValue(columnId).toString().toLowerCase().trim();
      let filter = filterValue.toString().toLowerCase().trim();
      if (filter === "all") {
        if (
          value.startsWith("national") ||
          value.startsWith("state") ||
          value.startsWith("local") ||
          value.startsWith("business") ||
          value.startsWith("group")
        ) {
          return true;
        }
        return false;
      } else {
        return value.startsWith(filterValue) ? true : false;
      }
    },
    enableColumnFilter: true,
  },
];

const columnTypeIntersectional = [
  {
    accessorKey: "type",
    header: "Type",
    filterFn: (row, columnId, filterValue) => {
      let value = row.getValue(columnId).toString().toLowerCase().trim();
      let filter = filterValue.toString().toLowerCase().trim();
      if (filter === "all") {
        if (
          value.startsWith("indigenous") ||
          value.startsWith("black & african-american") ||
          value.startsWith("disablilty")
        ) {
          return true;
        }
        return false;
      } else {
        return value.startsWith(filterValue) ? true : false;
      }
    },
    enableColumnFilter: true,
  },
];

const columnLocale = [
  {
    accessorKey: "locale",

    header: ({ column }) => {
      let sortStateIcon;
      switch (column.getIsSorted()) {
        case "asc":
          sortStateIcon = <ArrowDown className="ml-2 h-4 w-4" />;
          break;
        case "desc":
          sortStateIcon = <ArrowUp className="ml-2 h-4 w-4" />;
          break;
        default:
          sortStateIcon = <ArrowUpDown className="ml-2 h-4 w-4" />;
      }
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting()}>
          Locale
          {sortStateIcon}
        </Button>
      );
    },
    sortUndefined: "last",
  },
];

const columnTags = [
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) =>
      row.getValue("tags").map((tag, index) => <p key={index}>{tag}</p>),
    filterFn: "includesString",
  },
];

const columnLink = [
  {
    header: "Link",
    id: "link",
    cell: ({ row }) => {
      return (
        <Button variant="ghost" size="icon">
          <a href={row.original.url} target="_blank" rel="noreferrer noopener">
            <ExternalLink className="ml-0 h4 w-4" />
          </a>
        </Button>
      );
    },
  },
];

export const templateDefault = [
  columnName[0],
  columnType[0],
  columnLocale[0],
  columnTags[0],
  columnLink[0],
];
export const templateOrganizations = [
  columnName[0],
  columnTypeOrganizations[0],
  columnLocale[0],
  columnTags[0],
  columnLink[0],
];
export const templateHealthcare = [
  columnName[0],
  columnType[0],
  columnLocale[0],
  columnTags[0],
  columnLink[0],
];
export const templateIntersectional = [
  columnName[0],
  columnTypeIntersectional[0],
  columnLocale[0],
  columnTags[0],
  columnLink[0],
];
export const templateLearning = [
  columnName[0],
  columnType[0],
  columnLocale[0],
  columnTags[0],
  columnLink[0],
];

export function getTableColumnTemplates(tableType) {
  let template;
  switch (tableType) {
    case "organizations":
      template = templateOrganizations;
      break;
    case "healthcare":
      template = templateHealthcare;
      break;
    case "intersectional":
      template = templateIntersectional;
      break;
    case "learning":
      template = templateLearning;
      break;
    default:
      template = templateDefault;
  }
  return template;
}
