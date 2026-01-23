"use client";

import { CaretRightIcon } from "@phosphor-icons/react";

import PfCard from "../pf-card";
import PfCardAction from "../pf-card-action.";
import PfRecurringBillsItem from "./pf-recurring-bills-item";

const PfRecurringBillsCard = () => {
  return (
    <PfCard
      pfCardTitle="Recurring Bills"
      pfCardAction={
        <PfCardAction pfActionText="See Details" icon={CaretRightIcon} />
      }
    >
      <div className="flex flex-col gap-3">
        <PfRecurringBillsItem
          borderColor="border-pine-blue"
          billType="Paid Bills"
          amount="190.00"
        />
        <PfRecurringBillsItem
          borderColor="border-desert-sand"
          billType="Total Upcoming"
          amount="194.98"
        />
        <PfRecurringBillsItem
          borderColor="border-sky-blue-light"
          billType="Due Soon"
          amount="59.98"
        />
      </div>
    </PfCard>
  );
};

export default PfRecurringBillsCard;
