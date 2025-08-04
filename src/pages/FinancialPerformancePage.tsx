import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RefreshCw, Plus, Calendar, TrendingUp } from 'lucide-react'
import { RevenuePerformanceChart } from '@/components/charts/RevenuePerformanceChart'
import { MarginAnalysisChart } from '@/components/charts/MarginAnalysisChart'
import { CashFlowChart } from '@/components/charts/CashFlowChart'
import { cashFlowData } from '@/data/mockData'

// Mock margin data for 5 years
const marginData = [
  { 
    year: '2020', 
    grossMargin: 38.2, 
    operatingMargin: 12.8, 
    netMargin: 8.1, 
    ebitdaMargin: 16.5,
    grossYoY: -1.2,
    operatingYoY: -2.8,
    netYoY: -3.1,
    ebitdaYoY: -1.9
  },
  { 
    year: '2021', 
    grossMargin: 40.1, 
    operatingMargin: 13.5, 
    netMargin: 9.2, 
    ebitdaMargin: 17.8,
    grossYoY: 1.9,
    operatingYoY: 0.7,
    netYoY: 1.1,
    ebitdaYoY: 1.3
  },
  { 
    year: '2022', 
    grossMargin: 41.6, 
    operatingMargin: 14.1, 
    netMargin: 9.8, 
    ebitdaMargin: 18.9,
    grossYoY: 1.5,
    operatingYoY: 0.6,
    netYoY: 0.6,
    ebitdaYoY: 1.1
  },
  { 
    year: '2023', 
    grossMargin: 41.8, 
    operatingMargin: 13.1, 
    netMargin: 8.9, 
    ebitdaMargin: 17.2,
    grossYoY: 0.2,
    operatingYoY: -1.0,
    netYoY: -0.9,
    ebitdaYoY: -1.7
  },
  { 
    year: '2024', 
    grossMargin: 42.8, 
    operatingMargin: 15.3, 
    netMargin: 11.2, 
    ebitdaMargin: 19.8,
    grossYoY: 1.0,
    operatingYoY: 2.2,
    netYoY: 2.3,
    ebitdaYoY: 2.6
  },
]

// Competitive revenue data for 5 years (Client + 5 Competitors)
const competitiveRevenueData = [
  { 
    year: '2020', 
    client: 32.1, 
    clientYoY: -2.3,
    competitor1: 28.5, 
    competitor1YoY: -1.8,
    competitor2: 41.2, 
    competitor2YoY: 1.2,
    competitor3: 38.7, 
    competitor3YoY: -3.1,
    competitor4: 24.3, 
    competitor4YoY: -0.5,
    competitor5: 19.8, 
    competitor5YoY: -4.2
  },
  { 
    year: '2021', 
    client: 35.8, 
    clientYoY: 11.5,
    competitor1: 30.2, 
    competitor1YoY: 6.0,
    competitor2: 43.1, 
    competitor2YoY: 4.6,
    competitor3: 40.1, 
    competitor3YoY: 3.6,
    competitor4: 25.8, 
    competitor4YoY: 6.2,
    competitor5: 21.2, 
    competitor5YoY: 7.1
  },
  { 
    year: '2022', 
    client: 37.2, 
    clientYoY: 3.9,
    competitor1: 32.1, 
    competitor1YoY: 6.3,
    competitor2: 44.8, 
    competitor2YoY: 3.9,
    competitor3: 41.5, 
    competitor3YoY: 3.5,
    competitor4: 27.2, 
    competitor4YoY: 5.4,
    competitor5: 22.8, 
    competitor5YoY: 7.5
  },
  { 
    year: '2023', 
    client: 37.6, 
    clientYoY: 1.1,
    competitor1: 33.8, 
    competitor1YoY: 5.3,
    competitor2: 46.2, 
    competitor2YoY: 3.1,
    competitor3: 42.1, 
    competitor3YoY: 1.4,
    competitor4: 28.9, 
    competitor4YoY: 6.3,
    competitor5: 24.1, 
    competitor5YoY: 5.7
  },
  { 
    year: '2024', 
    client: 45.2, 
    clientYoY: 20.1,
    competitor1: 35.1, 
    competitor1YoY: 3.8,
    competitor2: 47.8, 
    competitor2YoY: 3.5,
    competitor3: 43.2, 
    competitor3YoY: 2.6,
    competitor4: 30.5, 
    competitor4YoY: 5.5,
    competitor5: 25.8, 
    competitor5YoY: 7.1
  },
]

const competitorNames = {
  client: "Our Company",
  competitor1: "TechCorp Inc",
  competitor2: "InnovateCo",
  competitor3: "Global Solutions",
  competitor4: "DataSystems Ltd",
  competitor5: "NextGen Tech"
}

const competitorColors = {
  client: "#059669",
  competitor1: "#3b82f6", 
  competitor2: "#8b5cf6",
  competitor3: "#f59e0b",
  competitor4: "#ef4444",
  competitor5: "#06b6d4"
}

export function FinancialPerformancePage() {
  const [lastRefresh, setLastRefresh] = useState(new Date())

  const handleRefresh = () => {
    setLastRefresh(new Date())
    // TODO: Implement data refresh logic
  }

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Financial Performance
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive financial analysis and competitive benchmarking
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-white dark:text-gray-200 bg-blue-600 dark:bg-blue-800 px-3 py-2 rounded-lg border border-blue-700 dark:border-blue-600 shadow-sm">
            <Calendar className="h-4 w-4 text-blue-100 dark:text-blue-300" />
            <span className="font-medium">Last updated: {lastRefresh.toLocaleDateString()}</span>
          </div>
          <Button onClick={handleRefresh} variant="outline" size="sm" className="shadow-sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
          <Button className="shadow-sm bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Financial Data
          </Button>
        </div>
      </div>

      {/* Revenue Trend Analysis */}
      <RevenuePerformanceChart 
        data={competitiveRevenueData} 
        competitorNames={competitorNames}
        competitorColors={competitorColors}
      />

      {/* Margin Analysis */}
      <MarginAnalysisChart data={marginData} />

      {/* Cash Flow Analysis */}
      <CashFlowChart data={cashFlowData} />

      {/* Metrics Categories */}
      <div className="grid gap-8">
        {/* Basic Financials */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <CardTitle className="text-xl flex items-center gap-2">
              💰 Basic Financials
            </CardTitle>
            <CardDescription className="text-base">
              Revenue, margins, and core financial metrics performance
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-1 max-w-md">
              <div className="space-y-3 p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">EPS</h4>
                  <Badge variant="success">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Growing
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">$12.45</div>
                <div className="text-sm text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +15.2% growth
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Capital Efficiency */}
        <Card>
          <CardHeader>
            <CardTitle>Capital Efficiency</CardTitle>
            <CardDescription>
              Return metrics and asset utilization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <h4 className="font-medium">ROE</h4>
                <div className="text-2xl font-bold">18.9%</div>
                <div className="text-sm text-green-600">↗ 1.2%</div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">ROA</h4>
                <div className="text-2xl font-bold">8.7%</div>
                <div className="text-sm text-green-600">↗ 0.8%</div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">ROIC</h4>
                <div className="text-2xl font-bold">14.3%</div>
                <div className="text-sm text-green-600">↗ 1.5%</div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Asset Turnover</h4>
                <div className="text-2xl font-bold">0.68x</div>
                <div className="text-sm text-red-600">↘ 0.02x</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cost Structure */}
        <Card>
          <CardHeader>
            <CardTitle>Cost Structure</CardTitle>
            <CardDescription>
              Cost breakdown as percentage of revenue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-medium">COGS</h4>
                <div className="text-2xl font-bold">57.2%</div>
                <div className="text-sm text-green-600">↘ 1.2%</div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">SG&A</h4>
                <div className="text-2xl font-bold">18.4%</div>
                <div className="text-sm text-red-600">↗ 0.5%</div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">R&D + CapEx</h4>
                <div className="text-2xl font-bold">8.9%</div>
                <div className="text-sm text-green-600">↗ 0.3%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Growth & Valuation */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Growth Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Revenue Growth (YoY)</h4>
                  <div className="text-2xl font-bold">20.1%</div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Revenue CAGR (3yr)</h4>
                  <div className="text-2xl font-bold">18.7%</div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Net Income Growth</h4>
                  <div className="text-2xl font-bold">25.3%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Valuation Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Market Cap</h4>
                  <div className="text-2xl font-bold">$452B</div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">P/E Ratio</h4>
                  <div className="text-2xl font-bold">28.7x</div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">EV/EBITDA</h4>
                  <div className="text-2xl font-bold">22.1x</div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">P/S Ratio</h4>
                  <div className="text-2xl font-bold">10.2x</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend Analysis</CardTitle>
            <CardDescription>
              5-year historical revenue comparison with competitors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center space-y-2">
                <div className="text-muted-foreground">Interactive Chart Placeholder</div>
                <div className="text-sm text-muted-foreground">
                  Revenue trends, competitor analysis, and custom visualizations will be implemented here
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chart Sections */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Revenue Trend Chart */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardTitle className="flex items-center gap-2">
                📈 Revenue Trend
              </CardTitle>
              <CardDescription>5-year revenue performance comparison</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-80 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Interactive Revenue Chart</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Client vs 5 Competitors</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Margin Analysis Chart */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardTitle className="flex items-center gap-2">
                📊 Margin Analysis
              </CardTitle>
              <CardDescription>Profitability margins comparison</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-80 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-4">📈</div>
                  <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Margin Comparison Chart</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Gross, Operating, Net Margins</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Metrics Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Capital Efficiency */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
              <CardTitle className="text-xl flex items-center gap-2">
                🏭 Capital Efficiency
              </CardTitle>
              <CardDescription className="text-base">
                Return on assets, equity, and capital management
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300">ROA</h4>
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">8.2%</div>
                  </div>
                  <Badge variant="success">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Above Avg
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">ROE</h4>
                    <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">15.7%</div>
                  </div>
                  <Badge variant="success">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Excellent
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-pink-700 dark:text-pink-300">ROIC</h4>
                    <div className="text-2xl font-bold text-pink-700 dark:text-pink-300">12.4%</div>
                  </div>
                  <Badge variant="success">Strong</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Growth Metrics */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20">
              <CardTitle className="text-xl flex items-center gap-2">
                🚀 Growth Metrics
              </CardTitle>
              <CardDescription className="text-base">
                Revenue, earnings, and business expansion indicators
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">Revenue Growth</h4>
                    <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">20.1%</div>
                  </div>
                  <Badge variant="success">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Strong
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-300">EPS Growth</h4>
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">15.2%</div>
                  </div>
                  <Badge variant="success">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Excellent
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-lime-50 to-lime-100 dark:from-lime-900/20 dark:to-lime-800/20 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-lime-700 dark:text-lime-300">Book Value Growth</h4>
                    <div className="text-2xl font-bold text-lime-700 dark:text-lime-300">12.8%</div>
                  </div>
                  <Badge variant="success">Growing</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Competitive Positioning Chart */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
            <CardTitle className="text-xl flex items-center gap-2">
              🎯 Competitive Positioning
            </CardTitle>
            <CardDescription className="text-base">
              Performance benchmarking against industry competitors
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-96 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
              <div className="text-center space-y-3">
                <div className="text-5xl mb-4">🏆</div>
                <p className="text-xl font-medium text-gray-600 dark:text-gray-300">Competitive Analysis Dashboard</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                  Interactive scatter plot showing market cap vs ROE positioning relative to key competitors
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <Badge variant="outline">Client</Badge>
                  <Badge variant="secondary">Competitor 1</Badge>
                  <Badge variant="secondary">Competitor 2</Badge>
                  <Badge variant="secondary">Competitor 3</Badge>
                  <Badge variant="secondary">Competitor 4</Badge>
                  <Badge variant="secondary">Competitor 5</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
