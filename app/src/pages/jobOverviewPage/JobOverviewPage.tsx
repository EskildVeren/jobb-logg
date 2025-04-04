import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getJobs, Job } from "@/lib/jobData";
import { Link } from "react-router-dom";
import AppliedForCheckbox from "./components/AppliedForCheckbox";
import JobForm, { JobFormInputs } from "./components/JobForm";
import { SubmitHandler } from "react-hook-form";
import { useState } from "react";

function JobOverviewPage() {
  const [jobs, setJobs] = useState(getJobs);
  const handleSubmit: SubmitHandler<JobFormInputs> = (data) => {
    const job: Job = {
      id: String(Math.floor(Math.random() * 1000000)),
      companyName: data.companyName,
      positionName: data.positionName,
      deadline: data.deadline,
      priority: data.priority,
      hyperlink: data.hyperlink,
      advertSite: data.advertSite,
      appliedFor: false,
    };
    setJobs([...jobs, job]);
  };
  return (
    <>
      <Link to={"/"}>To authentication page</Link>
      <h1 className="dark">Dine jobber</h1>
      <JobForm handleSubmit={handleSubmit} />
      <div className="w-1/2">
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
                  <AppliedForCheckbox appliedFor={j.appliedFor} />
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
