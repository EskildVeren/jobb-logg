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
          <TableHead>Søkt</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody id="Frode">
        {props.jobAdverts.map((j) => (
          <TableRow id={j.advert_id}>
            <TableCell>{j.companyName}</TableCell>
            <TableCell>{j.positionName}</TableCell>
            <TableCell>{j.deadline}</TableCell>
            <TableCell>{j.priority}</TableCell>
            <TableCell>
              <a href={j.hyperlink} target="_blank">
                {j.advertisementSite}
              </a>
            </TableCell>
            <TableCell>
              {j.appliedFor}
              <AppliedForCheckbox appliedFor={j.appliedFor} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default JobAdvertTable;
