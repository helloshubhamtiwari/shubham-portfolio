import { Card, CardContent } from "./ui/card";
import { TrendingUp, TrendingDown, DollarSign, Activity, Percent } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

function MetricCard({ title, value, change, isPositive, icon }: MetricCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-slate-600">{title}</p>
            <p className="text-slate-900" aria-label={`${title}: ${value}`}>
              {value}
            </p>
            <div className="flex items-center gap-1">
              {isPositive ? (
                <TrendingUp className="size-4 text-emerald-600" aria-hidden="true" />
              ) : (
                <TrendingDown className="size-4 text-red-600" aria-hidden="true" />
              )}
              <span
                className={isPositive ? "text-emerald-600" : "text-red-600"}
                aria-label={`Change: ${change}`}
              >
                {change}
              </span>
            </div>
          </div>
          <div
            className={`p-3 rounded-lg ${
              isPositive ? "bg-emerald-100" : "bg-slate-100"
            }`}
            aria-hidden="true"
          >
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PortfolioOverview() {
  const metrics = [
    {
      title: "Total Portfolio Value",
      value: "$547,238.50",
      change: "+$12,458.32 (2.33%)",
      isPositive: true,
      icon: <DollarSign className="size-6 text-emerald-600" />,
    },
    {
      title: "Today's Change",
      value: "+$3,842.15",
      change: "+0.71%",
      isPositive: true,
      icon: <Activity className="size-6 text-slate-600" />,
    },
    {
      title: "Total Return",
      value: "+$87,238.50",
      change: "+18.97%",
      isPositive: true,
      icon: <TrendingUp className="size-6 text-emerald-600" />,
    },
    {
      title: "Annual Yield",
      value: "4.25%",
      change: "+0.15%",
      isPositive: true,
      icon: <Percent className="size-6 text-slate-600" />,
    },
  ];

  return (
    <section aria-label="Portfolio overview metrics">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </section>
  );
}
