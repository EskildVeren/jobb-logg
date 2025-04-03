import { Link } from "react-router-dom";

function AuthenticationPage() {
  return (
    <>
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
