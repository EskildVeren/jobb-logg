import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

function AppliedForCheckbox(props: { appliedFor: boolean }) {
  const [appliedFor, setAppliedFor] = useState(props.appliedFor);
  const handleAppliedFor = () => {
    setAppliedFor(!appliedFor);
  };
  return (
    <Checkbox onClick={handleAppliedFor} checked={appliedFor}>
      AppliedForCheckbox
    </Checkbox>
  );
}

export default AppliedForCheckbox;
