import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", portfolio: 460000, benchmark: 458000 },
  { month: "Feb", portfolio: 472000, benchmark: 465000 },
  { month: "Mar", portfolio: 468000, benchmark: 470000 },
  { month: "Apr", portfolio: 485000, benchmark: 478000 },
  { month: "May", portfolio: 492000, benchmark: 485000 },
  { month: "Jun", portfolio: 505000, benchmark: 495000 },
  { month: "Jul", portfolio: 518000, benchmark: 508000 },
  { month: "Aug", portfolio: 512000, benchmark: 505000 },
  { month: "Sep", portfolio: 528000, benchmark: 518000 },
  { month: "Oct", portfolio: 535000, benchmark: 525000 },
  { month: "Nov", portfolio: 542000, benchmark: 532000 },
  { month: "Dec", portfolio: 547238, benchmark: 538000 },
];

export function PerformanceChart() {
  return (
    <div role="img" aria-label="Line chart showing portfolio performance compared to S&P 500 benchmark over 12 months. Portfolio increased from $460,000 to $547,238, outperforming the benchmark.">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="month"
            stroke="#64748b"
            tick={{ fill: "#64748b" }}
            label={{ value: "Month", position: "insideBottom", offset: -5 }}
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
            formatter={(value: number) =>
              `$${value.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            }
          />
          <Legend
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="line"
          />
          <Line
            type="monotone"
            dataKey="portfolio"
            name="Your Portfolio"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ fill: "#10b981", r: 4 }}
            activeDot={{ r: 6 }}
            aria-label="Your portfolio performance line"
          />
          <Line
            type="monotone"
            dataKey="benchmark"
            name="S&P 500 Benchmark"
            stroke="#6366f1"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: "#6366f1", r: 3 }}
            aria-label="S&P 500 benchmark line"
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-slate-600 text-center mt-4">
        <span className="sr-only">Chart shows </span>
        Your portfolio has outperformed the S&P 500 benchmark by 1.7% over the past year
      </p>
    </div>
  );
}
