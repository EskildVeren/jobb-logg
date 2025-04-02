import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getJobs } from "@/lib/jobData";
import { Link } from "react-router-dom";

function JobOverviewPage() {
  const jobs = getJobs();
  return (
    <>
      <Link to={"/"}>To authentication page</Link>
      <h1 className="dark">Dine jobber</h1>
      <div className="w-1/2">
        <Table>
          <TableCaption>Jobbliste</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Selskap</TableHead>
              <TableHead>Stilling</TableHead>
              <TableHead>Søknadsfrist</TableHead>
              <TableHead>Prioritet</TableHead>
              <TableHead>Annonselenke</TableHead>
              <TableHead className="">Søkt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((j) => (
              <TableRow>
                <TableCell>{j.companyName}</TableCell>
                <TableCell>{j.positionName}</TableCell>
                <TableCell>{j.deadline}</TableCell>
                <TableCell>{j.priority}</TableCell>
                <TableCell>
                  <a href={j.hyperlink} target="_blank">
                    {j.advertSite}
                  </a>
                </TableCell>
                <TableCell>
                  {j.appliedFor}
                  <Checkbox checked={j.appliedFor} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default JobOverviewPage;
