import { JobAdvert } from "@/lib/jobData";
import { JobFormInputs } from "../components/JobForm";

export async function fetchJobAdverts() {
  const res = await fetch("http://localhost:8080/jobAdverts");
  return await res.json();
}

export async function createJobAdvert(newJobAdvert: JobFormInputs) {
  const res = await fetch("http://localhost:8080/jobAdverts", {
    method: "POST",
    body: JSON.stringify(newJobAdvert),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export async function deleteJobAdvert(jobAdvert: JobAdvert) {
  const id = jobAdvert.advertId;
  const res = await fetch(`http://localhost:8080/jobAdverts/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function setAppliedFor(input: {
  jobAdvertId: number;
  appliedFor: boolean;
}) {
  const res = await fetch(
    `http://localhost:8080/jobAdverts/${input.jobAdvertId}/appliedFor`,
    {
      method: "PUT",
      body: JSON.stringify(input.appliedFor),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
}
