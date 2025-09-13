import { Form, type MetaFunction } from "react-router";
import { Hero } from "../../../common/components/hero";
import SelectPair from "~/common/components/select-pair";
import { Label } from "~/common/components/ui/label";
import { Calendar } from "~/common/components/ui/calendar";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product | Had A Good Day" },
    { name: "description", content: "Promote your product" },
  ];
};

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();

  const totalDays =
    promotionPeriod?.from && promotionPeriod?.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          DateTime.fromJSDate(promotionPeriod.from),
          "days"
        ).days
      : 0;
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero
        title="Promote Product"
        description="Promote your product to the world"
      />
      <Form className="max-w-sm mx-auto flex flex-col gap-10 items-center">
        <SelectPair
          name="promote"
          label="Promote"
          required
          description="Promote your product"
          placeholder="Select a product"
          options={[
            { value: "1", label: "Product 1" },
            { value: "2", label: "Product 2" },
            { value: "3", label: "Product 3" },
          ]}
        />
        <div className="flex flex-col gap-2 items-center w-full">
          <Label className="flex flex-col gap-1">
            Select a range of dates for promotion{" "}
            <small className="text-muted-foreground text-center ">
              Minimum duration is 3 days.
            </small>
          </Label>
          <Calendar
            mode="range"
            selected={promotionPeriod}
            onSelect={setPromotionPeriod}
            min={3}
            disabled={{ before: new Date() }}
            footer={
              promotionPeriod?.from && promotionPeriod?.to
                ? `You picked ${promotionPeriod.from?.toLocaleDateString()} to ${promotionPeriod.to?.toLocaleDateString()}.`
                : "Please pick a date."
            }
          />
          <Button disabled={totalDays === 0}>
            Pay {(totalDays + 1) * 20} USD
          </Button>
        </div>
      </Form>
    </div>
  );
}
