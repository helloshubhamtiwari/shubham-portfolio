import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { PortfolioOverview } from "./PortfolioOverview";
import { PerformanceChart } from "./PerformanceChart";
import { AssetAllocationChart } from "./AssetAllocationChart";
import { SectorDistributionChart } from "./SectorDistributionChart";
import { HoldingsTable } from "./HoldingsTable";
import { TrendingUp, PieChart, BarChart3, Table } from "lucide-react";

export function PortfolioDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="text-slate-900">Investment Portfolio Dashboard</h1>
          <p className="text-slate-600">
            Track your investments with comprehensive visualizations and analytics
          </p>
        </header>

        {/* Portfolio Overview Cards */}
        <PortfolioOverview />

        {/* Main Content Tabs */}
        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2">
            <TabsTrigger value="performance" className="gap-2">
              <TrendingUp className="size-4" aria-hidden="true" />
              <span>Performance</span>
            </TabsTrigger>
            <TabsTrigger value="allocation" className="gap-2">
              <PieChart className="size-4" aria-hidden="true" />
              <span>Allocation</span>
            </TabsTrigger>
            <TabsTrigger value="sectors" className="gap-2">
              <BarChart3 className="size-4" aria-hidden="true" />
              <span>Sectors</span>
            </TabsTrigger>
            <TabsTrigger value="holdings" className="gap-2">
              <Table className="size-4" aria-hidden="true" />
              <span>Holdings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
                <CardDescription>
                  Historical performance over the last 12 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PerformanceChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allocation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>
                  Distribution of your investments across asset classes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AssetAllocationChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sectors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sector Distribution</CardTitle>
                <CardDescription>
                  Exposure across different market sectors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SectorDistributionChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="holdings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Individual Holdings</CardTitle>
                <CardDescription>
                  Detailed breakdown of all portfolio positions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HoldingsTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
