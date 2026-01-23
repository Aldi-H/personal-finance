"use client";

import { useEffect, useState } from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartDataItem {
  category: string;
  amount: number;
  fill: string;
}

interface PfBudgetsChartPieProps {
  chartData: ChartDataItem[];
  chartConfig: Record<string, { label: string; color: string }>;
  total: number;
  limit: number;
  innerRadius?: number;
  outerRadius?: number;
  secondaryInnerRadius?: number;
  secondaryOuterRadius?: number;
  maxHeight?: string;
  showTooltip?: boolean;
  showCenterLabel?: boolean;
  centerLabelFormatter?: (
    // eslint-disable-next-line no-unused-vars
    total: number,
    // eslint-disable-next-line no-unused-vars
    limit: number,
  ) => {
    main: string;
    secondary: string;
  };
}

const defaultFormatter = (total: number, limit: number) => ({
  main: `$${total}`,
  secondary: `of $${limit} limit`,
});

const PfBudgetsChartPie = ({
  chartData,
  chartConfig,
  total,
  limit,
  innerRadius = 110,
  outerRadius = 160,
  secondaryInnerRadius = 90,
  secondaryOuterRadius = 110,
  maxHeight = "400px",
  showTooltip = true,
  showCenterLabel = true,
  centerLabelFormatter,
}: PfBudgetsChartPieProps) => {
  const labelFormatter = centerLabelFormatter || defaultFormatter;
  const label = labelFormatter(total, limit);

  const [radiusValues, setRadiusValues] = useState({
    inner: innerRadius,
    outer: outerRadius,
    secondaryInner: secondaryInnerRadius,
    secondaryOuter: secondaryOuterRadius,
  });

  useEffect(() => {
    const updateRadiusValues = () => {
      if (globalThis.matchMedia("(max-width: 760px)").matches) {
        setRadiusValues({
          inner: innerRadius * 0.6,
          outer: outerRadius * 0.6,
          secondaryInner: secondaryInnerRadius * 0.6,
          secondaryOuter: secondaryOuterRadius * 0.6,
        });
      } else if (globalThis.matchMedia("(max-width: 1024px)").matches) {
        setRadiusValues({
          inner: innerRadius * 0.9,
          outer: outerRadius * 0.9,
          secondaryInner: secondaryInnerRadius * 0.9,
          secondaryOuter: secondaryOuterRadius * 0.9,
        });
      } else {
        setRadiusValues({
          inner: innerRadius,
          outer: outerRadius,
          secondaryInner: secondaryInnerRadius,
          secondaryOuter: secondaryOuterRadius,
        });
      }
    };

    updateRadiusValues();
    globalThis.addEventListener("resize", updateRadiusValues);

    return () => {
      globalThis.removeEventListener("resize", updateRadiusValues);
    };
  }, [innerRadius, outerRadius, secondaryInnerRadius, secondaryOuterRadius]);

  return (
    <ChartContainer
      className={`max-h-[${maxHeight}] aspect-square md:aspect-square lg:aspect-[3/2.5] xl:aspect-square`}
      config={chartConfig}
    >
      <PieChart>
        {showTooltip && (
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        )}

        {/* Outer Pie Chart */}
        <Pie
          key="outer-pie"
          data={chartData}
          dataKey="amount"
          nameKey="category"
          innerRadius={radiusValues.inner}
          outerRadius={radiusValues.outer}
          startAngle={90}
          endAngle={450}
          stroke="none"
        />

        {/* Inner Pie Chart for center hole effect */}
        <Pie
          key="inner-pie"
          data={chartData}
          dataKey="amount"
          nameKey="category"
          innerRadius={radiusValues.secondaryInner}
          outerRadius={radiusValues.secondaryOuter}
          startAngle={90}
          endAngle={450}
          stroke="none"
          fillOpacity={0.7}
          legendType="none"
        >
          {showCenterLabel && (
            <Label
              // eslint-disable-next-line consistent-return
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className=""
                    >
                      <tspan
                        className="text-preset-2 md:text-4xl! md:font-bold"
                        x={viewBox.cx}
                        y={viewBox.cy}
                      >
                        {label.main}
                      </tspan>
                      <tspan
                        className="fill-dim-grey text-[9px] md:text-xs"
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                      >
                        {label.secondary}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          )}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

export default PfBudgetsChartPie;
