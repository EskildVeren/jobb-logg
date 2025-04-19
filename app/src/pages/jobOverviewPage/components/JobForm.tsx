import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";

import { useForm, SubmitHandler } from "react-hook-form";
import CalenderInput from "./CalenderInput";

export type JobFormInputs = {
  companyName: string;
  positionName: string;
  deadline: string;
  priority: string;
  hyperlink: string;
  advertisementSite: string;
  city: string;
};

export default function JobForm(props: {
  handleSubmit: SubmitHandler<JobFormInputs>;
}) {
  const { control, register, handleSubmit, watch } = useForm<JobFormInputs>();

  const onSubmit: SubmitHandler<JobFormInputs> = props.handleSubmit;
  const inputClassName = "flex flex-col gap-y-1";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-2/5 grid grid-cols-2 auto-rows-max gap-x-4 gap-y-8"
    >
      <span className={`${inputClassName}`}>
        <Label htmlFor="selskap">Selskapsnavn</Label>
        <Input id="selskap" {...register("companyName")} />
      </span>
      <span className={`${inputClassName}`}>
        <Label htmlFor="stillingsnavn">Stillingsnavn</Label>
        <Input id="stillingsnavn" {...register("positionName")} />
      </span>
      <span className={`${inputClassName}`}>
        <CalenderInput control={control} watch={watch} />
      </span>
      <span className={`${inputClassName}`}>
        <Label htmlFor="søknadsprioritet">Søknadsprioritet</Label>
        <Select {...register("priority")}>
          <SelectTrigger>
            <SelectValue placeholder="Velg prioritet" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Søknadsprioritet</SelectLabel>
              <SelectItem value={"Høy"}>Høy</SelectItem>
              <SelectItem value={"Medium"}>Medium</SelectItem>
              <SelectItem value={"Lav"}>Lav</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </span>
      <span className={`${inputClassName}`}>
        <Label htmlFor="annonselenke">Annonselenke</Label>
        <Input id="annonselenke" {...register("hyperlink")} />
      </span>
      <span className={`${inputClassName}`}>
        <Label htmlFor="annonsenettsted">Annonsenettsted</Label>
        <Input id="annonsenettsted" {...register("advertisementSite")} />
      </span>
      <span className={`${inputClassName}`}>
        <Label htmlFor="by">By</Label>
        <Input id="by" {...register("city")} />
      </span>
      <span className={`${inputClassName} justify-end`}>
        <Button type="submit" className="cursor-pointer">
          Legg til
        </Button>
      </span>
    </form>
  );
}
