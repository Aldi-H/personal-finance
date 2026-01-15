import { Label, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface BudgetItem {
  id: string;
  name: string;
  value: number;
  color: string;
}

interface ChartDataItem {
  category: string;
  amount: number;
  fill: string;
}

interface PfBudgetsChartPieProps {
  chartData: ChartDataItem[];
  chartConfig: Record<string, { label: string; color: string }>;
  processedData: BudgetItem[];
  total: number;
  limit: number;
  innerRadius?: number;
  outerRadius?: number;
  secondaryInnerRadius?: number;
  secondaryOuterRadius?: number;
  maxHeight?: string;
  showLegend?: boolean;
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
  processedData,
  total,
  limit,
  innerRadius = 110,
  outerRadius = 160,
  secondaryInnerRadius = 90,
  secondaryOuterRadius = 110,
  maxHeight = "400px",
  showLegend = true,
  showTooltip = true,
  showCenterLabel = true,
  centerLabelFormatter,
}: PfBudgetsChartPieProps) => {
  const labelFormatter = centerLabelFormatter || defaultFormatter;
  const label = labelFormatter(total, limit);

  return (
    <div>
      <div>
        <ChartContainer
          className={`max-h-[${maxHeight}] aspect-square items-center justify-center`}
          config={chartConfig}
        >
          <PieChart>
            {showTooltip && (
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            )}
            {showLegend && <ChartLegend content={<ChartLegendContent />} />}

            {/* Outer Pie Chart */}
            <Pie
              key="outer-pie"
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
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
              innerRadius={secondaryInnerRadius}
              outerRadius={secondaryOuterRadius}
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
                          className="flex flex-col gap-y-2"
                        >
                          <tspan
                            className="text-preset-1"
                            x={viewBox.cx}
                            y={viewBox.cy}
                          >
                            {/* ${budgets().total} */}
                            {label.main}
                          </tspan>
                          <tspan
                            className="text-preset-5 fill-dim-grey"
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
      </div>
      <div className="grid grid-cols-2 gap-4">
        {processedData.map((item) => (
          <div key={item.id} className="flex items-start gap-4">
            <div
              style={{ backgroundColor: item.color }}
              className=" h-10 w-1 shrink-0 rounded-full"
            />

            <div className="flex flex-col gap-1">
              <span className="text-preset-5 text-dim-grey">{item.name}</span>
              <span className="text-preset-4-bold">
                {item.value.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PfBudgetsChartPie;
