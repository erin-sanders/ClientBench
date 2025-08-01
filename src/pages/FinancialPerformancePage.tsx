import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RefreshCw, Plus, Calendar, TrendingUp, DollarSign, Percent, Users } from 'lucide-react'
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, ComposedChart } from 'recharts'

// Mock revenue data for 5 years
const revenueData = [
  { year: '2020', revenue: 32.1, yoyChange: -2.3 },
  { year: '2021', revenue: 35.8, yoyChange: 11.5 },
  { year: '2022', revenue: 37.2, yoyChange: 3.9 },
  { year: '2023', revenue: 37.6, yoyChange: 1.1 },
  { year: '2024', revenue: 45.2, yoyChange: 20.1 },
]

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
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border shadow-sm">
            <Calendar className="h-4 w-4" />
            Last updated: {lastRefresh.toLocaleDateString()}
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
      <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-emerald-800 flex items-center gap-3">
                <DollarSign className="h-8 w-8 text-emerald-600" />
                Revenue Performance Analysis
              </CardTitle>
              <CardDescription className="text-emerald-700 mt-2 text-base">
                5-year revenue trend with year-over-year growth analysis
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-emerald-800">$45.2B</div>
              <p className="text-emerald-600 flex items-center gap-1 mt-1">
                <TrendingUp className="h-4 w-4" />
                +20.1% from last year
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1fae5" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#065f46', fontSize: 14, fontWeight: 500 }}
                />
                <YAxis 
                  yAxisId="revenue"
                  orientation="left"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#065f46', fontSize: 14 }}
                  tickFormatter={(value) => `$${value}B`}
                />
                <YAxis 
                  yAxisId="change"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#065f46', fontSize: 14 }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f0fdf4', 
                    border: '1px solid #bbf7d0',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    fontSize: '14px'
                  }}
                  formatter={(value, name) => [
                    name === 'revenue' ? `$${value}B` : `${value}%`,
                    name === 'revenue' ? 'Revenue' : 'YoY Change'
                  ]}
                />
                <Bar 
                  yAxisId="change"
                  dataKey="yoyChange" 
                  fill="#10b981" 
                  opacity={0.3}
                  radius={[4, 4, 0, 0]}
                />
                <Line 
                  yAxisId="revenue"
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#059669" 
                  strokeWidth={4}
                  dot={{ fill: '#059669', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: '#047857', stroke: '#065f46', strokeWidth: 2 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/60 rounded-lg p-3">
              <div className="text-emerald-800 font-bold text-lg">8.9%</div>
              <div className="text-emerald-600 text-sm">5-Year CAGR</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <div className="text-emerald-800 font-bold text-lg">$45.2B</div>
              <div className="text-emerald-600 text-sm">2024 Peak</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <div className="text-emerald-800 font-bold text-lg">40.8%</div>
              <div className="text-emerald-600 text-sm">Total Growth</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <div className="text-emerald-800 font-bold text-lg">$13.1B</div>
              <div className="text-emerald-600 text-sm">5-Year Increase</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Margin Analysis */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-blue-800 flex items-center gap-3">
                <Percent className="h-8 w-8 text-blue-600" />
                Margin Analysis
              </CardTitle>
              <CardDescription className="text-blue-700 mt-2 text-base">
                Comprehensive profitability trends across all margin types
              </CardDescription>
            </div>
            <div className="grid grid-cols-2 gap-3 text-right">
              <div>
                <div className="text-lg font-bold text-blue-800">42.8%</div>
                <div className="text-blue-600 text-xs">Gross Margin</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-800">15.3%</div>
                <div className="text-blue-600 text-xs">Operating Margin</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-800">11.2%</div>
                <div className="text-blue-600 text-xs">Net Margin</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-800">19.8%</div>
                <div className="text-blue-600 text-xs">EBITDA Margin</div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={marginData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#dbeafe" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#1e40af', fontSize: 14, fontWeight: 500 }}
                />
                <YAxis 
                  yAxisId="margin"
                  orientation="left"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#1e40af', fontSize: 14 }}
                  tickFormatter={(value) => `${value}%`}
                  domain={[0, 50]}
                />
                <YAxis 
                  yAxisId="yoy"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#1e40af', fontSize: 12 }}
                  tickFormatter={(value) => `${value}%`}
                  domain={[-4, 4]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#eff6ff', 
                    border: '1px solid #bfdbfe',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    fontSize: '14px'
                  }}
                  formatter={(value, name) => {
                    const formatValue = typeof value === 'number' ? `${value}%` : value;
                    const formatName = name.toString().replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    return [formatValue, formatName];
                  }}
                />
                
                {/* YoY Change Bars */}
                <Bar yAxisId="yoy" dataKey="grossYoY" fill="#22c55e" opacity={0.2} radius={[2, 2, 0, 0]} />
                <Bar yAxisId="yoy" dataKey="operatingYoY" fill="#3b82f6" opacity={0.2} radius={[2, 2, 0, 0]} />
                <Bar yAxisId="yoy" dataKey="netYoY" fill="#8b5cf6" opacity={0.2} radius={[2, 2, 0, 0]} />
                <Bar yAxisId="yoy" dataKey="ebitdaYoY" fill="#f59e0b" opacity={0.2} radius={[2, 2, 0, 0]} />
                
                {/* Margin Lines */}
                <Line 
                  yAxisId="margin"
                  type="monotone" 
                  dataKey="grossMargin" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  dot={{ fill: '#22c55e', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: '#16a34a' }}
                />
                <Line 
                  yAxisId="margin"
                  type="monotone" 
                  dataKey="operatingMargin" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: '#2563eb' }}
                />
                <Line 
                  yAxisId="margin"
                  type="monotone" 
                  dataKey="netMargin" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: '#7c3aed' }}
                />
                <Line 
                  yAxisId="margin"
                  type="monotone" 
                  dataKey="ebitdaMargin" 
                  stroke="#f59e0b" 
                  strokeWidth={3}
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: '#d97706' }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          {/* Legend and Key Metrics */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 bg-white/60 rounded-lg p-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-green-700">Gross Margin</div>
                  <div className="text-sm text-green-600">+1.0% YoY</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/60 rounded-lg p-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-blue-700">Operating Margin</div>
                  <div className="text-sm text-blue-600">+2.2% YoY</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/60 rounded-lg p-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-purple-700">Net Margin</div>
                  <div className="text-sm text-purple-600">+2.3% YoY</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/60 rounded-lg p-3">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-amber-700">EBITDA Margin</div>
                  <div className="text-sm text-amber-600">+2.6% YoY</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/60 rounded-lg p-3">
                <div className="text-blue-800 font-bold text-lg">4.6%</div>
                <div className="text-blue-600 text-sm">Gross Margin Range</div>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <div className="text-blue-800 font-bold text-lg">15.3%</div>
                <div className="text-blue-600 text-sm">Op. Margin Peak</div>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <div className="text-blue-800 font-bold text-lg">3.1%</div>
                <div className="text-blue-600 text-sm">Net Margin Range</div>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <div className="text-blue-800 font-bold text-lg">19.8%</div>
                <div className="text-blue-600 text-sm">EBITDA Peak</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Competitive Revenue Analysis */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Users className="h-8 w-8 text-slate-600" />
                Competitive Revenue Analysis
              </CardTitle>
              <CardDescription className="text-slate-700 mt-2 text-base">
                5-year revenue comparison with key industry competitors
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-emerald-800">1st</div>
              <p className="text-slate-600 text-sm">Growth Rank 2024</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-96 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={competitiveRevenueData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#475569', fontSize: 14, fontWeight: 500 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#475569', fontSize: 14 }}
                  tickFormatter={(value) => `$${value}B`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    fontSize: '14px'
                  }}
                  formatter={(value, name) => {
                    const companyName = competitorNames[name as keyof typeof competitorNames] || name;
                    return [`$${value}B`, companyName];
                  }}
                />
                
                {/* Revenue Lines for each company */}
                <Line 
                  type="monotone" 
                  dataKey="client" 
                  stroke={competitorColors.client}
                  strokeWidth={4}
                  dot={{ fill: competitorColors.client, strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: competitorColors.client, stroke: '#065f46', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="competitor1" 
                  stroke={competitorColors.competitor1}
                  strokeWidth={3}
                  dot={{ fill: competitorColors.competitor1, strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: competitorColors.competitor1 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="competitor2" 
                  stroke={competitorColors.competitor2}
                  strokeWidth={3}
                  dot={{ fill: competitorColors.competitor2, strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: competitorColors.competitor2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="competitor3" 
                  stroke={competitorColors.competitor3}
                  strokeWidth={3}
                  dot={{ fill: competitorColors.competitor3, strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: competitorColors.competitor3 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="competitor4" 
                  stroke={competitorColors.competitor4}
                  strokeWidth={3}
                  dot={{ fill: competitorColors.competitor4, strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: competitorColors.competitor4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="competitor5" 
                  stroke={competitorColors.competitor5}
                  strokeWidth={3}
                  dot={{ fill: competitorColors.competitor5, strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: competitorColors.competitor5 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          {/* Company Legend and 2024 Performance */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(competitorNames).map(([key, name]) => {
                const currentData = competitiveRevenueData[4]; // 2024 data
                const revenue = currentData[key as keyof typeof currentData] as number;
                const yoyKey = `${key}YoY` as keyof typeof currentData;
                const yoyChange = currentData[yoyKey] as number;
                const color = competitorColors[key as keyof typeof competitorColors];
                
                return (
                  <div key={key} className="flex items-center gap-3 bg-white/60 rounded-lg p-4 border border-slate-200">
                    <div 
                      className="w-4 h-4 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-700 truncate">
                        {name} {key === 'client' && '(Us)'}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-slate-800">${revenue}B</span>
                        <span className={`text-sm ${yoyChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {yoyChange >= 0 ? '+' : ''}{yoyChange}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Competitive Insights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/60 rounded-lg p-4 border border-slate-200">
                <div className="text-emerald-800 font-bold text-xl">20.1%</div>
                <div className="text-slate-600 text-sm">Our 2024 Growth</div>
                <div className="text-xs text-emerald-600 mt-1">Highest in sector</div>
              </div>
              <div className="bg-white/60 rounded-lg p-4 border border-slate-200">
                <div className="text-slate-800 font-bold text-xl">2nd</div>
                <div className="text-slate-600 text-sm">Market Position</div>
                <div className="text-xs text-blue-600 mt-1">vs InnovateCo</div>
              </div>
              <div className="bg-white/60 rounded-lg p-4 border border-slate-200">
                <div className="text-slate-800 font-bold text-xl">40.8%</div>
                <div className="text-slate-600 text-sm">5-Year Growth</div>
                <div className="text-xs text-emerald-600 mt-1">vs avg 28.3%</div>
              </div>
              <div className="bg-white/60 rounded-lg p-4 border border-slate-200">
                <div className="text-slate-800 font-bold text-xl">$2.6B</div>
                <div className="text-slate-600 text-sm">Gap to #1</div>
                <div className="text-xs text-slate-500 mt-1">Closing fast</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

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
