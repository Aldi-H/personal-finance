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
      <div className="flex flex-col xl:grid xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PfBudgetsChartPie
            total={budgets().total}
            limit={2000}
            chartData={budgets().chartData}
            chartConfig={budgets().chartConfig}
          />
        </div>
        <div className="mt-8 grid grid-cols-2 items-center gap-4 xl:mt-0 xl:grid-cols-1 xl:gap-y-0">
          {budgets().processedData.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-center gap-4"
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
