"use client";

import { CaretRightIcon } from "@phosphor-icons/react";

import PfBudgetsChartPie from "../../pf-charts/pf-budgets-chart.ts/pf-budgets-chart-pie";
import { budgets } from "../../pf-charts/pf-budgets-chart.ts/pf-budgets-datas";
import PfCard from "../pf-card";
import PfCardAction from "../pf-card-action.";

const PfBudgetsCard = () => {
  return (
    <PfCard
      pfCardTitle="Budgets"
      pfCardAction={
        <PfCardAction pfActionText="See Details" icon={CaretRightIcon} />
      }
    >
      <div className="flex flex-col items-center gap-x-4 md:grid md:grid-cols-3">
        <div className="md:col-span-2">
          <PfBudgetsChartPie
            total={budgets().total}
            limit={2000}
            chartData={budgets().chartData}
            chartConfig={budgets().chartConfig}
          />
        </div>
        <div className="mt-8 grid auto-rows-min grid-cols-2 gap-4 md:mt-0 md:grid-cols-1 md:gap-y-6">
          {budgets().processedData.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 xl:justify-center"
            >
              <div
                style={{ backgroundColor: item.color }}
                className=" h-12 w-1 shrink-0 rounded-full"
              />

              <div className="flex flex-col gap-1 align-middle">
                <span className="text-preset-5 text-dim-grey">{item.name}</span>
                <span className="text-preset-4-bold">
                  ${item.value.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PfCard>
  );
};

export default PfBudgetsCard;
