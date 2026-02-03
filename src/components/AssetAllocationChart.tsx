import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "US Stocks", value: 245000, percentage: 44.8 },
  { name: "International Stocks", value: 109500, percentage: 20.0 },
  { name: "Bonds", value: 82000, percentage: 15.0 },
  { name: "Real Estate", value: 54700, percentage: 10.0 },
  { name: "Commodities", value: 32900, percentage: 6.0 },
  { name: "Cash", value: 23138, percentage: 4.2 },
];

// High contrast, accessible colors with distinct hues
const COLORS = [
  "#2563eb", // Blue
  "#10b981", // Green
  "#f59e0b", // Orange
  "#8b5cf6", // Purple
  "#ef4444", // Red
  "#64748b", // Slate
];

// Custom label to show percentage
const renderLabel = (entry: any) => {
  return `${entry.percentage}%`;
};

export function AssetAllocationChart() {
  return (
    <div role="img" aria-label="Donut chart showing asset allocation. US Stocks 44.8%, International Stocks 20%, Bonds 15%, Real Estate 10%, Commodities 6%, Cash 4.2%">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderLabel}
            outerRadius={120}
            innerRadius={70}
            fill="#8884d8"
            dataKey="value"
            aria-label="Asset allocation donut chart"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                aria-label={`${entry.name}: ${entry.percentage}%`}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
            }}
            formatter={(value: number, name: string, props: any) => [
              `$${value.toLocaleString()} (${props.payload.percentage}%)`,
              name,
            ]}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{ paddingTop: "20px" }}
          />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Accessible table alternative */}
      <details className="mt-6">
        <summary className="text-slate-600 cursor-pointer hover:text-slate-900">
          View allocation data table
        </summary>
        <table className="w-full mt-4 text-slate-900" role="table" aria-label="Asset allocation data table">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-2">Asset Class</th>
              <th className="text-right py-2">Value</th>
              <th className="text-right py-2">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-slate-100">
                <td className="py-2">
                  <span
                    className="inline-block w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index] }}
                    aria-hidden="true"
                  />
                  {item.name}
                </td>
                <td className="text-right">${item.value.toLocaleString()}</td>
                <td className="text-right">{item.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  );
}
