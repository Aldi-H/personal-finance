export const budgetDatas = [
  { id: 1, name: "Entertainment", value: 50, color: "#277C78" },
  { id: 2, name: "Bills", value: 750, color: "#F2CDAC" },
  { id: 3, name: "Dining Out", value: 75, color: "#82C9D7" },
  { id: 4, name: "Personal Care", value: 100, color: "#597C7C" },
  { id: 5, name: "Groceries", value: 300, color: "#7F9161" },
  { id: 6, name: "Transportation", value: 150, color: "#826CB0" },
  { id: 7, name: "Shopping", value: 200, color: "#626070" },
  { id: 8, name: "Healthcare", value: 120, color: "#BE6C49" },
];

export const budgets = () => {
  const sortedData = [...budgetDatas].sort((a, b) => b.value - a.value);

  const topCategories = sortedData.slice(0, 3);
  const otherCategories = sortedData.slice(3);

  const otherTotal = otherCategories.reduce(
    (total, category) => total + category.value,
    0,
  );

  const processedData =
    otherTotal > 0
      ? [
          ...topCategories,
          { id: 0, name: "Others", value: otherTotal, color: "#97A0AC" },
        ]
      : topCategories;

  const chartConfig: Record<string, { label: string; color: string }> = {};

  for (const item of processedData) {
    const key = item.name.toLowerCase().replaceAll(/\s+/g, "_");

    chartConfig[key] = {
      label: item.name,
      color: item.color,
    };
  }

  const chartData = processedData.map((item) => ({
    id: item.id,
    category: item.name,
    amount: item.value,
    fill: item.color,
  }));

  const total = processedData.reduce((sum, item) => sum + item.value, 0);
  const limit = budgetDatas.reduce((sum, item) => sum + item.value, 0);

  return { chartData, chartConfig, total, limit, processedData };
};
