import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, DollarSign, Percent, Target, BarChart3 } from 'lucide-react'

export function SummaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">
          Executive Dashboard
        </h1>
        <p className="text-slate-600 text-lg">
          Real-time financial performance overview and competitive benchmarking
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100 hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-emerald-700">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-6 w-6 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-emerald-800">$45.2B</div>
            <p className="text-sm text-emerald-600 flex items-center gap-1 mt-2">
              <TrendingUp className="h-4 w-4" />
              +20.1% from last year
            </p>
          </CardContent>
        </Card>
        
        <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-blue-700">
              Operating Margin
            </CardTitle>
            <Percent className="h-6 w-6 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-800">15.3%</div>
            <p className="text-sm text-blue-600 flex items-center gap-1 mt-2">
              <TrendingUp className="h-4 w-4" />
              +2.1% from last year
            </p>
          </CardContent>
        </Card>
        
        <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-purple-700">
              Market Cap
            </CardTitle>
            <Target className="h-6 w-6 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-800">$452B</div>
            <p className="text-sm text-purple-600 flex items-center gap-1 mt-2">
              <TrendingUp className="h-4 w-4" />
              +12.5% from last year
            </p>
          </CardContent>
        </Card>
        
        <Card className="relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-orange-700">
              Return on Equity
            </CardTitle>
            <BarChart3 className="h-6 w-6 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-800">18.9%</div>
            <p className="text-sm text-orange-600 flex items-center gap-1 mt-2">
              <TrendingUp className="h-4 w-4" />
              +1.2% from last year
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
          <CardHeader className="pb-4 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-xl font-semibold flex items-center gap-2 text-blue-700">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              Client vs Competitors
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-48 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-blue-200 hover:border-blue-300 transition-colors">
              <div className="text-center space-y-3">
                <BarChart3 className="h-12 w-12 text-blue-500 mx-auto" />
                <div className="text-lg font-medium text-slate-700">
                  Interactive Competitive Analysis
                </div>
                <div className="text-sm text-slate-500">
                  Benchmark performance against industry leaders
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
          <CardHeader className="pb-4 bg-gradient-to-r from-emerald-50 to-green-50">
            <CardTitle className="text-xl font-semibold flex items-center gap-2 text-emerald-700">
              <Target className="h-6 w-6 text-emerald-600" />
              Key Performance Indicators
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-48 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-xl border-2 border-dashed border-emerald-200 hover:border-emerald-300 transition-colors">
              <div className="text-center space-y-3">
                <Target className="h-12 w-12 text-emerald-500 mx-auto" />
                <div className="text-lg font-medium text-slate-700">
                  KPI Performance Dashboard
                </div>
                <div className="text-sm text-slate-500">
                  Track key metrics and trends over time
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
