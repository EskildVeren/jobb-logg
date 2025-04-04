import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";

import { useForm, SubmitHandler } from "react-hook-form";

export type JobFormInputs = {
  companyName: string;
  positionName: string;
  deadline: string;
  priority: string;
  hyperlink: string;
  advertSite: string;
  city: string;
};

export default function JobForm(props: {
  handleSubmit: SubmitHandler<JobFormInputs>;
}) {
  const { register, handleSubmit } = useForm<JobFormInputs>();
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
        <Label htmlFor="søknadsfrist">Søknadsfrist</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={"pl-3 text-left font-normal text-muted-foreground"}
            >
              <span>Pick a date</span>
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
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
        <Input id="annonsenettsted" {...register("advertSite")} />
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
