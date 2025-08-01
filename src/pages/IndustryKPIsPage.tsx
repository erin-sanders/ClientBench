import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RefreshCw, Plus, BarChart3, TrendingUp, Target, Award, Users } from 'lucide-react'

export function IndustryKPIsPage() {
  const industryMetrics = [
    {
      category: "Market Performance",
      icon: "📊",
      color: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      textColor: "text-blue-700 dark:text-blue-300",
      metrics: [
        { name: "Market Cap", value: "$2.8T", benchmark: "$2.1T", performance: "above", change: "+33%" },
        { name: "P/E Ratio", value: "28.5x", benchmark: "24.2x", performance: "above", change: "+18%" },
        { name: "Price-to-Book", value: "4.2x", benchmark: "3.8x", performance: "above", change: "+11%" },
        { name: "Dividend Yield", value: "1.8%", benchmark: "2.4%", performance: "below", change: "-25%" }
      ]
    },
    {
      category: "Operational Excellence",
      icon: "⚙️",
      color: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
      textColor: "text-green-700 dark:text-green-300",
      metrics: [
        { name: "Revenue per Employee", value: "$890K", benchmark: "$720K", performance: "above", change: "+24%" },
        { name: "Asset Turnover", value: "1.2x", benchmark: "1.0x", performance: "above", change: "+20%" },
        { name: "Inventory Turnover", value: "8.5x", benchmark: "7.2x", performance: "above", change: "+18%" },
        { name: "Operating Efficiency", value: "94%", benchmark: "89%", performance: "above", change: "+6%" }
      ]
    },
    {
      category: "Customer Metrics",
      icon: "👥",
      color: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
      textColor: "text-purple-700 dark:text-purple-300",
      metrics: [
        { name: "Customer Satisfaction", value: "4.7/5", benchmark: "4.3/5", performance: "above", change: "+9%" },
        { name: "Net Promoter Score", value: "72", benchmark: "58", performance: "above", change: "+24%" },
        { name: "Customer Retention", value: "91%", benchmark: "85%", performance: "above", change: "+7%" },
        { name: "Acquisition Cost", value: "$125", benchmark: "$165", performance: "above", change: "-24%" }
      ]
    },
    {
      category: "Innovation & Growth",
      icon: "🚀",
      color: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
      textColor: "text-orange-700 dark:text-orange-300",
      metrics: [
        { name: "R&D Investment", value: "12.8%", benchmark: "8.5%", performance: "above", change: "+51%" },
        { name: "New Product Revenue", value: "28%", benchmark: "22%", performance: "above", change: "+27%" },
        { name: "Patent Applications", value: "2,450", benchmark: "1,680", performance: "above", change: "+46%" },
        { name: "Time to Market", value: "8.2 months", benchmark: "11.5 months", performance: "above", change: "-29%" }
      ]
    }
  ]

  const getPerformanceBadge = (performance: string) => {
    return performance === "above" 
      ? <Badge variant="success"><TrendingUp className="h-3 w-3 mr-1" />Above Industry</Badge>
      : <Badge variant="destructive">Below Industry</Badge>
  }

  const getPerformanceIcon = (performance: string) => {
    return performance === "above" 
      ? <TrendingUp className="h-4 w-4 text-green-600" />
      : <TrendingUp className="h-4 w-4 text-red-600 rotate-180" />
  }

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
            Industry KPIs & Benchmarks
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Performance analysis against industry standards and peer companies
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="shadow-sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Update Benchmarks
          </Button>
          <Button className="shadow-sm bg-indigo-600 hover:bg-indigo-700">
            <Plus className="mr-2 h-4 w-4" />
            Add KPI Category
          </Button>
        </div>
      </div>

      {/* Industry Overview */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
          <CardTitle className="text-xl flex items-center gap-2">
            🏭 Industry Overview
          </CardTitle>
          <CardDescription className="text-base">
            Technology sector performance and positioning
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">8th</div>
              <div className="text-sm text-blue-600 dark:text-blue-400">Industry Ranking</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
              <Target className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">78%</div>
              <div className="text-sm text-green-600 dark:text-green-400">Benchmark Score</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
              <Award className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">12/20</div>
              <div className="text-sm text-purple-600 dark:text-purple-400">KPIs Above Avg</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg">
              <Users className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">45</div>
              <div className="text-sm text-orange-600 dark:text-orange-400">Peer Companies</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPI Categories */}
      <div className="space-y-8">
        {industryMetrics.map((category, index) => (
          <Card key={index} className="border-0 shadow-lg">
            <CardHeader className={`bg-gradient-to-r ${category.color}`}>
              <CardTitle className={`text-xl flex items-center gap-2 ${category.textColor}`}>
                <span className="text-2xl">{category.icon}</span>
                {category.category}
              </CardTitle>
              <CardDescription className="text-base">
                Benchmarking against industry standards and top performers
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {category.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="space-y-1">
                      <h4 className="font-semibold">{metric.name}</h4>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">
                          vs {metric.benchmark}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getPerformanceBadge(metric.performance)}
                        <span className={`text-sm font-medium ${
                          metric.performance === 'above' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      {getPerformanceIcon(metric.performance)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Competitive Analysis Chart */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20">
          <CardTitle className="text-xl flex items-center gap-2">
            📈 Industry Performance Radar
          </CardTitle>
          <CardDescription className="text-base">
            Multi-dimensional performance comparison across key industry metrics
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-96 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
            <div className="text-center space-y-3">
              <div className="text-5xl mb-4">🎯</div>
              <p className="text-xl font-medium text-gray-600 dark:text-gray-300">Industry KPI Radar Chart</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Interactive radar visualization showing performance across all key industry metrics compared to benchmarks
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
