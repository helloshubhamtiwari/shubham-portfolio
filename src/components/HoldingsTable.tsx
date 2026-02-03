import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

interface Holding {
  symbol: string;
  name: string;
  shares: number;
  price: number;
  value: number;
  dayChange: number;
  totalReturn: number;
  allocation: number;
}

const holdings: Holding[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    shares: 850,
    price: 182.45,
    value: 155082.50,
    dayChange: 2.34,
    totalReturn: 18.42,
    allocation: 28.35,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    shares: 425,
    price: 378.91,
    value: 161036.75,
    dayChange: 1.87,
    totalReturn: 24.56,
    allocation: 29.43,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    shares: 550,
    price: 141.80,
    value: 77990.00,
    dayChange: -0.92,
    totalReturn: 15.23,
    allocation: 14.25,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    shares: 320,
    price: 151.94,
    value: 48620.80,
    dayChange: 1.45,
    totalReturn: 12.89,
    allocation: 8.89,
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    shares: 180,
    price: 495.22,
    value: 89139.60,
    dayChange: 3.78,
    totalReturn: 42.15,
    allocation: 16.29,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    shares: 95,
    price: 242.84,
    value: 23069.80,
    dayChange: -2.14,
    totalReturn: -8.34,
    allocation: 4.22,
  },
];

export function HoldingsTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHoldings = holdings.filter(
    (holding) =>
      holding.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      holding.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Input
          type="search"
          placeholder="Search by symbol or name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
          aria-label="Search holdings"
        />
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Symbol</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Shares</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Value</TableHead>
              <TableHead className="text-right">Day Change</TableHead>
              <TableHead className="text-right">Total Return</TableHead>
              <TableHead className="text-right">Allocation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredHoldings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-slate-500">
                  No holdings found
                </TableCell>
              </TableRow>
            ) : (
              filteredHoldings.map((holding) => (
                <TableRow key={holding.symbol}>
                  <TableCell>
                    <Badge variant="outline">{holding.symbol}</Badge>
                  </TableCell>
                  <TableCell>{holding.name}</TableCell>
                  <TableCell className="text-right">
                    {holding.shares.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ${holding.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    ${holding.value.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`flex items-center justify-end gap-1 ${
                        holding.dayChange >= 0
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    >
                      {holding.dayChange >= 0 ? (
                        <TrendingUp className="size-4" aria-hidden="true" />
                      ) : (
                        <TrendingDown className="size-4" aria-hidden="true" />
                      )}
                      {holding.dayChange >= 0 ? "+" : ""}
                      {holding.dayChange.toFixed(2)}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        holding.totalReturn >= 0
                          ? "text-emerald-600"
                          : "text-red-600"
                      }
                    >
                      {holding.totalReturn >= 0 ? "+" : ""}
                      {holding.totalReturn.toFixed(2)}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    {holding.allocation.toFixed(2)}%
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="text-slate-600">
        <p>
          Showing {filteredHoldings.length} of {holdings.length} holdings
        </p>
      </div>
    </div>
  );
}
