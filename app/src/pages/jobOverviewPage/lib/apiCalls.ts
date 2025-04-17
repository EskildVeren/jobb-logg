import { JobAdvert } from "@/lib/jobData";
import { JobFormInputs } from "../components/JobForm";

const mode = import.meta.env.MODE;

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
  return res;
}
export async function deleteJobAdvert(jobAdvert: JobAdvert) {
  const id = jobAdvert.advert_id;
  const res = await fetch(`http://localhost:8080/jobAdverts/${id}`, {
    method: "DELETE",
  });
  return res;
}
