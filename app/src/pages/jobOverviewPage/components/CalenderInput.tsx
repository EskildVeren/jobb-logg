import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Control, Controller, UseFormWatch } from "react-hook-form";
import { JobFormInputs } from "./JobForm";
import { getFormattedDate } from "../lib/formatDate";

export default function CalenderInput(props: {
  control: Control<JobFormInputs, unknown, JobFormInputs>;
  watch: UseFormWatch<JobFormInputs>;
}) {
  return (
    <>
      <Label htmlFor="søknadsfrist">Søknadsfrist</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={"pl-3 text-left font-normal text-muted-foreground"}
          >
            <span>
              {props.watch("deadline")
                ? getFormattedDate(props.watch("deadline"))
                : "Pick a date"}
            </span>
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Controller
            name="deadline"
            control={props.control}
            render={({ field }) => (
              <Calendar
                mode="single"
                disabled={(date) =>
                  date < new Date() || date < new Date("1900-01-01")
                }
                selected={new Date(field.value)}
                onSelect={(date) => {
                  field.onChange(date);
                }}
                initialFocus
              />
            )}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
