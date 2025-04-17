import {
  Table,
  TableCaption,
  TableCell,
  TableRow,
  TableBody,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { JobAdvert } from "@/lib/jobData";
import AppliedForCheckbox from "./AppliedForCheckbox";
import { Trash2Icon } from "lucide-react";
import { deleteJobAdvert } from "../lib/apiCalls";

function JobAdvertTable(props: { jobAdverts: JobAdvert[] }) {
  return (
    <Table>
      <TableCaption>Jobbliste</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Selskap</TableHead>
          <TableHead>Stilling</TableHead>
          <TableHead>Søknadsfrist</TableHead>
          <TableHead>Prioritet</TableHead>
          <TableHead>Annonselenke</TableHead>
          <TableHead>By</TableHead>
          <TableHead>Søkt</TableHead>
          <TableHead>Slett</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.jobAdverts.map((j) => (
          <TableRow key={j.advertId}>
            <TableCell>{j.companyName}</TableCell>
            <TableCell>{j.positionName}</TableCell>
            <TableCell>{getFormattedDate(j.deadline)}</TableCell>
            <TableCell>{j.priority}</TableCell>
            <TableCell>
              <a href={j.hyperlink} target="_blank">
                {j.advertisementSite}
              </a>
            </TableCell>
            <TableCell>{j.city}</TableCell>
            <TableCell>
              {j.appliedFor}
              <AppliedForCheckbox appliedFor={j.appliedFor} />
            </TableCell>
            <TableCell>
              <Trash2Icon
                onClick={() => deleteJobAdvert(j)}
                className="cursor-pointer"
                color="tomato"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function getFormattedDate(dateString: string) {
  const date = new Date(dateString);
  const year = new Intl.DateTimeFormat("no", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("no", { month: "short" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date); // Use en, no is bugged
  return `${day}-${month}-${year}`;
}

export default JobAdvertTable;
