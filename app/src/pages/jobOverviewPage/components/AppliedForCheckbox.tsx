import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { setAppliedFor } from "../lib/apiCalls";
import { JobAdvert } from "@/lib/jobData";

function AppliedForCheckbox(props: { jobAdvert: JobAdvert }) {
  const [checked, setChecked] = useState(props.jobAdvert.appliedFor);
  const mutation = useMutation({
    mutationFn: (bol: boolean) =>
      setAppliedFor(Number(props.jobAdvert.advertId), bol),
  });
  const handleAppliedFor = () => {
    mutation.mutate(!checked);
    setChecked(!checked);
  };

  return (
    <Checkbox onClick={handleAppliedFor} checked={checked}>
      AppliedForCheckbox
    </Checkbox>
  );
}

export default AppliedForCheckbox;
