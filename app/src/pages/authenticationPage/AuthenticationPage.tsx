import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function AuthenticationPage() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:8080/greeting").then((res) => res.json()),
  });
  return (
    <>
      {isLoading && "Loading..."}
      {error && error.message}
      {data && data.id}
      <Link to={"jobs"}>To job page</Link>
      <div className="">AuthenticationPage</div>
      <p>You will authenticate!</p>
      <div>
        <p>Yes.</p>
      </div>
    </>
  );
}

export default AuthenticationPage;
