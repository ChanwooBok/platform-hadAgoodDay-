import type { SelectHTMLAttributes } from "react";
import { useState } from "react";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { Select } from "./ui/select";
import { Label } from "./ui/label";

export default function SelectPair({
  name,
  label,
  required,
  description,
  placeholder,
  options,
}: {
  name: string;
  label: string;
  required: boolean;
  description: string;
  placeholder: string;
  options: { value: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  // trying to open the select when the label is clicked, got this information from API docs in shadcn
  // basically, we are using the label as a trigger to open the select. just like htmlFor.
  return (
    <div className="space-y-2 flex flex-col">
      <Label className="flex flex-col" onClick={() => setOpen(!open)}>
        {label}
        <small className="text-muted-foreground">{description}</small>
      </Label>
      <Select
        name={name}
        required={required}
        open={open}
        onOpenChange={setOpen}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
