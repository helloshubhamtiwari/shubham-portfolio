import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { sector: "Technology", value: 142000, percentage: 25.95 },
  { sector: "Healthcare", value: 87000, percentage: 15.90 },
  { sector: "Financials", value: 76500, percentage: 13.98 },
  { sector: "Consumer", value: 65400, percentage: 11.95 },
  { sector: "Industrials", value: 54700, percentage: 10.00 },
  { sector: "Energy", value: 43800, percentage: 8.00 },
  { sector: "Utilities", value: 38200, percentage: 6.98 },
  { sector: "Materials", value: 27300, percentage: 4.99 },
  { sector: "Real Estate", value: 12338, percentage: 2.25 },
];

// Accessible color palette with good contrast
const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#ef4444",
  "#06b6d4",
  "#84cc16",
  "#f97316",
  "#ec4899",
];

export function SectorDistributionChart() {
  return (
    <div role="img" aria-label="Bar chart showing sector distribution. Technology leads at 25.95%, followed by Healthcare at 15.90%, and Financials at 13.98%">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="sector"
            stroke="#64748b"
            tick={{ fill: "#64748b" }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis
            stroke="#64748b"
            tick={{ fill: "#64748b" }}
            label={{
              value: "Value ($)",
              angle: -90,
              position: "insideLeft",
            }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
            }}
            formatter={(value: number, _name: string, props: any) => [
              `$${value.toLocaleString()} (${props.payload.percentage}%)`,
              "Value",
            ]}
          />
          <Legend
            wrapperStyle={{ paddingTop: "10px" }}
            payload={[{ value: "Sector Value", type: "rect", color: "#2563eb" }]}
          />
          <Bar
            dataKey="value"
            name="Sector Value"
            radius={[8, 8, 0, 0]}
            aria-label="Sector distribution bars"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                aria-label={`${entry.sector}: $${entry.value.toLocaleString()}, ${entry.percentage}%`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <p className="text-slate-600 text-center mt-4">
        <span className="sr-only">Chart shows </span>
        Technology sector has the highest allocation at 26% of the portfolio
      </p>
    </div>
  );
}
