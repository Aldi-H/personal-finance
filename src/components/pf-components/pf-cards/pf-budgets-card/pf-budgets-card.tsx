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
      <PfBudgetsChartPie
        total={budgets().total}
        limit={2000}
        chartData={budgets().chartData}
        chartConfig={budgets().chartConfig}
        processedData={budgets().processedData.map((item) => ({
          ...item,
          id: String(item.id),
        }))}
      />
    </PfCard>
  );
};

export default PfBudgetsCard;
