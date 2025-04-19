import { Checkbox } from "@/components/ui/checkbox";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { setAppliedFor } from "../lib/apiCalls";
import { JobAdvert } from "@/lib/jobData";

function AppliedForCheckbox(props: {
  jobAdvert: JobAdvert;
  queryClient: QueryClient;
}) {
  //const [checked, setChecked] = useState(props.jobAdvert.appliedFor);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: setAppliedFor,
    onSuccess: (data) => queryClient.setQueryData(["repoData"], data),
  });
  const handleAppliedFor = () => {
    mutation.mutate({
      jobAdvertId: Number(props.jobAdvert.advertId),
      appliedFor: !props.jobAdvert.appliedFor,
    });
  };

  return (
    <Checkbox onClick={handleAppliedFor} checked={props.jobAdvert.appliedFor}>
      AppliedForCheckbox
    </Checkbox>
  );
}

export default AppliedForCheckbox;
