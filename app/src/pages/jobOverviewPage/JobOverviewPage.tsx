import { Link } from "react-router-dom";
import JobForm, { JobFormInputs } from "./components/JobForm";
import { SubmitHandler } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import JobAdvertTable from "./components/JobAdvertTable";
import { createJobAdvert, fetchJobAdverts } from "./lib/apiCalls";

function JobOverviewPage() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchJobAdverts,
  });

  const mutation = useMutation({
    mutationFn: createJobAdvert,
  });

  const handleSubmit: SubmitHandler<JobFormInputs> = (formInput) =>
    mutation.mutate(formInput);

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
