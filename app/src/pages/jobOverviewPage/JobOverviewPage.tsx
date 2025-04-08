import { getJobs, JobAdvert } from "@/lib/jobData";
import { Link } from "react-router-dom";
import JobForm, { JobFormInputs } from "./components/JobForm";
import { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import JobAdvertTable from "./components/JobAdvertTable";

function JobOverviewPage() {
  const [jobs, setJobs] = useState(getJobs);
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:8080/jobAdverts").then((res) => res.json()),
  });
  const handleSubmit: SubmitHandler<JobFormInputs> = (data) => {
    const job: JobAdvert = {
      advert_id: String(Math.floor(Math.random() * 1000000)),
      companyName: data.companyName,
      positionName: data.positionName,
      deadline: data.deadline,
      priority: data.priority,
      hyperlink: data.hyperlink,
      advertisementSite: data.advertSite,
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
        {isLoading && "Loading jobs..."}
        {error && error.message}
        {data && <JobAdvertTable jobAdverts={data} />}
        {data && console.log(data)}
      </div>
    </>
  );
}

export default JobOverviewPage;
