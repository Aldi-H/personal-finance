"use client";

import { CaretRightIcon, TipJarIcon } from "@phosphor-icons/react";

import PfCard from "../pf-card";
import PfCardAction from "../pf-card-action.";
import PfPotsItem from "./pf-pots-item";

const PfPotsCard = () => {
  return (
    <PfCard
      pfCardTitle="Pots"
      pfCardAction={
        <PfCardAction pfActionText="See Details" icon={CaretRightIcon} />
      }
    >
      <div className="grid gap-x-5 lg:grid-cols-2">
        <div className="flex items-center gap-x-4 rounded-xl bg-parchment p-4">
          <TipJarIcon className="h-10 w-10 text-pine-blue" />
          <div className="flex flex-col gap-y-3">
            <div className="text-preset-4 text-dim-grey">Total Saved</div>
            <div className="text-preset-1 text-wrap wrap-anywhere text-shadow-grey">
              $1,250.00
            </div>
          </div>
        </div>
        <div className="my-5 grid grid-cols-2 gap-4 lg:my-0">
          <PfPotsItem
            color="oklch(0.4966 0.0253 291.18)"
            itemTitle="Savings"
            itemAmount="$159"
          />
          <PfPotsItem
            color="oklch(0.5841 0.1005 242.37)"
            itemTitle="Gift"
            itemAmount="$159"
          />
          <PfPotsItem
            color="oklch(0.5356 0.0794 190.54)"
            itemTitle="Concert Ticket"
            itemAmount="$159"
          />
          <PfPotsItem
            color="oklch(0.794 0.0737 211.41)"
            itemTitle="New Laptop"
            itemAmount="$159"
          />
        </div>
      </div>
    </PfCard>
  );
};

export default PfPotsCard;
