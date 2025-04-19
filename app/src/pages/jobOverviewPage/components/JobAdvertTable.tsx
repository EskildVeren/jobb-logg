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
import { getFormattedDate } from "../lib/formatDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function JobAdvertTable(props: { jobAdverts: JobAdvert[] }) {
  const queryClient = useQueryClient();

  const deleteJobAdvertMutation = useMutation({
    mutationFn: deleteJobAdvert,
    onSuccess: (data) => queryClient.setQueryData(["repoData"], data),
  });

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
              <AppliedForCheckbox jobAdvert={j} queryClient={queryClient} />
            </TableCell>
            <TableCell>
              <Trash2Icon
                onClick={() => deleteJobAdvertMutation.mutate(j)}
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

export default JobAdvertTable;
