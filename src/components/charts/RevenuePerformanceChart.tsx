import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, DollarSign } from 'lucide-react'
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, ComposedChart } from 'recharts'

interface CompetitiveRevenueData {
  year: string
  client: number
  clientYoY: number
  competitor1: number
  competitor1YoY: number
  competitor2: number
  competitor2YoY: number
  competitor3: number
  competitor3YoY: number
  competitor4: number
  competitor4YoY: number
  competitor5: number
  competitor5YoY: number
}

interface RevenuePerformanceChartProps {
  data: CompetitiveRevenueData[]
  competitorNames?: {
    client: string
    competitor1: string
    competitor2: string
    competitor3: string
    competitor4: string
    competitor5: string
  }
  competitorColors?: {
    client: string
    competitor1: string
    competitor2: string
    competitor3: string
    competitor4: string
    competitor5: string
  }
}

export function RevenuePerformanceChart({ 
  data, 
  competitorNames = {
    client: "Our Company",
    competitor1: "TechCorp Inc",
    competitor2: "InnovateCo", 
    competitor3: "Global Solutions",
    competitor4: "DataSystems Ltd",
    competitor5: "NextGen Tech"
  },
  competitorColors = {
    client: "#059669",
    competitor1: "#3b82f6", 
    competitor2: "#8b5cf6",
    competitor3: "#f59e0b",
    competitor4: "#ef4444",
    competitor5: "#06b6d4"
  }
}: RevenuePerformanceChartProps) {
  const [selectedCompany, setSelectedCompany] = useState<keyof typeof competitorNames | 'all'>('client')
  
  // Transform data for the selected company or all companies
  const selectedData = selectedCompany === 'all' 
    ? data // Use all data for comparison view
    : data.map(yearData => ({
        year: yearData.year,
        revenue: yearData[selectedCompany] as number,
        yoyChange: yearData[`${selectedCompany}YoY` as keyof typeof yearData] as number
      }))
  
  // Calculate metrics from selected company data (only for single company view)
  let currentRevenue, currentGrowth, totalGrowthPercent, totalIncrease, cagr;
  
  if (selectedCompany !== 'all') {
    const singleCompanyData = data.map(yearData => ({
      year: yearData.year,
      revenue: yearData[selectedCompany as keyof typeof competitorNames] as number,
      yoyChange: yearData[`${selectedCompany}YoY` as keyof typeof yearData] as number
    }))
    
    const firstYear = singleCompanyData[0]
    const lastYear = singleCompanyData[singleCompanyData.length - 1]
    totalGrowthPercent = ((lastYear.revenue - firstYear.revenue) / firstYear.revenue) * 100
    totalIncrease = lastYear.revenue - firstYear.revenue
    const years = singleCompanyData.length
    cagr = (Math.pow(lastYear.revenue / firstYear.revenue, 1 / (years - 1)) - 1) * 100
    currentRevenue = lastYear.revenue
    currentGrowth = lastYear.yoyChange
  } else {
    // For "all" view, show client company metrics as primary
    const clientData = data.map(yearData => ({
      year: yearData.year,
      revenue: yearData.client,
      yoyChange: yearData.clientYoY
    }))
    
    const firstYear = clientData[0]
    const lastYear = clientData[clientData.length - 1]
    totalGrowthPercent = ((lastYear.revenue - firstYear.revenue) / firstYear.revenue) * 100
    totalIncrease = lastYear.revenue - firstYear.revenue
    const years = clientData.length
    cagr = (Math.pow(lastYear.revenue / firstYear.revenue, 1 / (years - 1)) - 1) * 100
    currentRevenue = lastYear.revenue
    currentGrowth = lastYear.yoyChange
  }
  
  const selectedColor = selectedCompany !== 'all' ? competitorColors[selectedCompany as keyof typeof competitorColors] : competitorColors.client

  return (
    <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-emerald-800 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-emerald-600" />
              Revenue Performance Analysis
            </CardTitle>
            <CardDescription className="text-emerald-700 mt-2 text-base">
              {selectedCompany === 'all' 
                ? '5-year revenue comparison across all companies'
                : `5-year revenue trend with year-over-year growth analysis for ${competitorNames[selectedCompany as keyof typeof competitorNames]}`
              }
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-emerald-800">${currentRevenue}B</div>
            <p className="text-emerald-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-4 w-4" />
              {selectedCompany === 'all' ? 'Growth Rank: 1st' : `${currentGrowth >= 0 ? '+' : ''}${currentGrowth}% from last year`}
            </p>
          </div>
        </div>
        
        {/* Company Selection Buttons */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {Object.entries(competitorNames).map(([key, name]) => (
            <Button
              key={key}
              variant={selectedCompany === key ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCompany(key as keyof typeof competitorNames)}
              className={`
                px-2 py-1 h-7 text-xs
                ${selectedCompany === key 
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                  : 'text-emerald-700 border-emerald-300 hover:bg-emerald-50'
                }
              `}
            >
              {name}
              {key === 'client' && ' (Us)'}
            </Button>
          ))}
          
          {/* Compare All Button */}
          <Button
            variant={selectedCompany === 'all' ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCompany('all')}
            className={`
              px-2 py-1 h-7 text-xs
              ${selectedCompany === 'all' 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                : 'text-emerald-700 border-emerald-300 hover:bg-emerald-50'
              }
            `}
          >
            Compare All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={selectedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
              {selectedCompany !== 'all' && (
                <YAxis 
                  yAxisId="change"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#065f46', fontSize: 14 }}
                  tickFormatter={(value) => `${value}%`}
                />
              )}
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#f0fdf4', 
                  border: '1px solid #bbf7d0',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  fontSize: '14px'
                }}
                formatter={(value, name) => {
                  if (selectedCompany === 'all') {
                    const companyName = competitorNames[name as keyof typeof competitorNames] || name;
                    return [`$${value}B`, companyName];
                  }
                  return [
                    name === 'revenue' ? `$${value}B` : `${value}%`,
                    name === 'revenue' ? 'Revenue' : 'YoY Change'
                  ];
                }}
              />
              
              {selectedCompany === 'all' ? (
                // Multi-company comparison view
                <>
                  {Object.entries(competitorColors).map(([key, color]) => (
                    <Line 
                      key={key}
                      yAxisId="revenue"
                      type="monotone" 
                      dataKey={key}
                      stroke={color} 
                      strokeWidth={key === 'client' ? 4 : 3}
                      dot={{ fill: color, strokeWidth: 2, r: key === 'client' ? 6 : 5 }}
                      activeDot={{ r: key === 'client' ? 8 : 7, fill: color, strokeWidth: 2 }}
                    />
                  ))}
                </>
              ) : (
                // Single company view
                <>
                  <Bar 
                    yAxisId="change"
                    dataKey="yoyChange" 
                    fill={selectedColor} 
                    opacity={0.3}
                    radius={[4, 4, 0, 0]}
                  />
                  <Line 
                    yAxisId="revenue"
                    type="monotone" 
                    dataKey="revenue" 
                    stroke={selectedColor} 
                    strokeWidth={4}
                    dot={{ fill: selectedColor, strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, fill: selectedColor, strokeWidth: 2 }}
                  />
                </>
              )}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        {selectedCompany === 'all' ? (
          // Multi-company comparison metrics
          <div className="space-y-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(competitorNames).map(([key, name]) => {
                const companyData = data.map(yearData => ({
                  revenue: yearData[key as keyof CompetitiveRevenueData] as number,
                  yoyChange: yearData[`${key}YoY` as keyof CompetitiveRevenueData] as number
                }))
                const latestRevenue = companyData[companyData.length - 1].revenue
                const latestGrowth = companyData[companyData.length - 1].yoyChange
                const color = competitorColors[key as keyof typeof competitorColors]
                
                return (
                  <div key={key} className="flex items-center gap-2.5 bg-white/60 rounded-lg p-3 border border-emerald-200">
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-emerald-700 truncate text-sm">
                        {name} {key === 'client' && '(Us)'}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-emerald-800">${latestRevenue}B</span>
                        <span className={`text-xs ${latestGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {latestGrowth >= 0 ? '+' : ''}{latestGrowth}%
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Summary metrics for comparison view */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              <div className="bg-white/60 rounded-lg p-2.5">
                <div className="text-emerald-800 font-bold text-base">{currentGrowth >= 0 ? '+' : ''}{currentGrowth}%</div>
                <div className="text-emerald-600 text-xs">Our Growth (2024)</div>
              </div>
              <div className="bg-white/60 rounded-lg p-2.5">
                <div className="text-emerald-800 font-bold text-base">${currentRevenue}B</div>
                <div className="text-emerald-600 text-xs">Our Revenue (2024)</div>
              </div>
              <div className="bg-white/60 rounded-lg p-2.5">
                <div className="text-emerald-800 font-bold text-base">1st</div>
                <div className="text-emerald-600 text-xs">Growth Rank</div>
              </div>
              <div className="bg-white/60 rounded-lg p-2.5">
                <div className="text-emerald-800 font-bold text-base">2nd</div>
                <div className="text-emerald-600 text-xs">Market Position</div>
              </div>
            </div>
          </div>
        ) : (
          // Single company metrics
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div className="bg-white/60 rounded-lg p-2.5">
              <div className="text-emerald-800 font-bold text-base">{cagr.toFixed(1)}%</div>
              <div className="text-emerald-600 text-xs">5-Year CAGR</div>
            </div>
            <div className="bg-white/60 rounded-lg p-2.5">
              <div className="text-emerald-800 font-bold text-base">${currentRevenue}B</div>
              <div className="text-emerald-600 text-xs">2024 Revenue</div>
            </div>
            <div className="bg-white/60 rounded-lg p-2.5">
              <div className="text-emerald-800 font-bold text-base">{totalGrowthPercent.toFixed(1)}%</div>
              <div className="text-emerald-600 text-xs">Total Growth</div>
            </div>
            <div className="bg-white/60 rounded-lg p-2.5">
              <div className="text-emerald-800 font-bold text-base">${Math.abs(totalIncrease).toFixed(1)}B</div>
              <div className="text-emerald-600 text-xs">5-Year {totalIncrease >= 0 ? 'Increase' : 'Decrease'}</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
