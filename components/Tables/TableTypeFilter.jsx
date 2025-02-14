import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const selectOrganizations = (
  <SelectContent>
    <SelectItem value="all">All Types</SelectItem>
    <SelectItem value="national">National Org</SelectItem>
    <SelectItem value="state">State Org</SelectItem>
    <SelectItem value="local">Local Org</SelectItem>
    <SelectItem value="business">Business</SelectItem>
    <SelectItem value="group">Group</SelectItem>
  </SelectContent>
);

const selectIntersectional = (
  <SelectContent>
    <SelectItem value="all">All Types</SelectItem>
    <SelectItem value="indigenous">Indigenous Peoples</SelectItem>
    <SelectItem value="black & african-american">
      Black/African-American People
    </SelectItem>
    <SelectItem value="disability">People with Disabilities</SelectItem>
  </SelectContent>
);

const selectHealthcare = (
  <SelectContent>
    <SelectItem value="all">All Types</SelectItem>
    <SelectItem value="medical">Medical</SelectItem>
    <SelectItem value="mental heatlh">Mental Health</SelectItem>
    <SelectItem value="surgical">Surgical</SelectItem>
    <SelectItem value="bodywork">Bodywork</SelectItem>
  </SelectContent>
);

const selectLearning = (
  <SelectContent>
    <SelectItem value="all">All Types</SelectItem>
    <SelectItem value="qe">QE</SelectItem>
    <SelectItem value="activity">Activity</SelectItem>
    <SelectItem value="article">Article</SelectItem>
    <SelectItem value="film">Film</SelectItem>
    <SelectItem value="general">General</SelectItem>
    <SelectItem value="glossary">Glossary & Definitions</SelectItem>
    <SelectItem value="history">History</SelectItem>
    <SelectItem value="podcast">Podcast</SelectItem>
    <SelectItem value="reading">Reading</SelectItem>
    <SelectItem value="resource">Resource List</SelectItem>
    <SelectItem value="social">Social Media</SelectItem>
    <SelectItem value="video">Video</SelectItem>
    <SelectItem value="website">Website</SelectItem>
  </SelectContent>
);

const TableTypeFilter = ({ filterCategory, table }) => {
  let selectContent;
  switch (filterCategory) {
    case "organizations":
      selectContent = selectOrganizations;
      break;
    case "intersectional":
      selectContent = selectIntersectional;
      break;
    case "healthcare":
      selectContent = selectHealthcare;
      break;
    case "learning":
      selectContent = selectLearning;
      break;
    default:
      selectContent = selectOrganizations;
  }
  return (
    <Select
      value={table.getColumn("type")?.getFilterValue() ?? ""}
      onValueChange={(event) =>
        table.getColumn("type")?.setFilterValue(event === "all" ? "" : event)
      }
    >
      <SelectTrigger className="max-w-sm mb-3">
        <SelectValue placeholder="Filter by type" />
      </SelectTrigger>
      {selectContent}
    </Select>
  );
};

export default TableTypeFilter;
