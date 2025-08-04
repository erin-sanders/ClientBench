import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, Banknote } from 'lucide-react'
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Line, ComposedChart } from 'recharts'

interface CashFlowData {
  year: string
  client: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
  clientYoY: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
  competitor1: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
  competitor1YoY: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
  competitor2: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
  competitor2YoY: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
  competitor3: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
  competitor3YoY: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
  competitor4: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
  competitor4YoY: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
  competitor5: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
  competitor5YoY: { operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number }
}

interface CashFlowChartProps {
  data: CashFlowData[]
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

export function CashFlowChart({ 
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
}: CashFlowChartProps) {
  const [selectedCompany, setSelectedCompany] = useState<keyof typeof competitorNames | 'all'>('client')
  const [selectedCashFlowType, setSelectedCashFlowType] = useState<'operating' | 'investment' | 'financing' | 'all'>('operating')
  
  // Transform data for the selected company and cash flow type
  const selectedData = selectedCompany === 'all' 
    ? // For comparison view, transform data to show all companies for selected cash flow type
      selectedCashFlowType === 'all'
        ? // Show operating cash flow for all companies (default comparison)
          data.map(yearData => ({
            year: yearData.year,
            ...Object.entries(competitorNames).reduce((acc, [key]) => {
              const companyData = yearData[key as keyof CashFlowData] as { operating: number; investment: number; financing: number }
              acc[`${key}_operating`] = companyData.operating
              return acc
            }, {} as Record<string, number>)
          }))
        : // Show selected cash flow type for all companies
          data.map(yearData => ({
            year: yearData.year,
            ...Object.entries(competitorNames).reduce((acc, [key]) => {
              const companyData = yearData[key as keyof CashFlowData] as { operating: number; investment: number; financing: number }
              acc[key] = companyData[selectedCashFlowType]
              return acc
            }, {} as Record<string, number>)
          }))
    : // Single company view - show all cash flow types for selected company
      data.map(yearData => {
        const companyData = yearData[selectedCompany as keyof CashFlowData] as { 
          operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number 
        }
        const yoyData = yearData[`${selectedCompany}YoY` as keyof CashFlowData] as { 
          operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number 
        }
        return {
          year: yearData.year,
          operating: companyData.operating,
          investment: companyData.investment,
          financing: companyData.financing,
          freeCashFlowMargin: companyData.freeCashFlowMargin,
          cashFlowToDebtRatio: companyData.cashFlowToDebtRatio,
          operatingYoY: yoyData.operating,
          investmentYoY: yoyData.investment,
          financingYoY: yoyData.financing,
          freeCashFlowMarginYoY: yoyData.freeCashFlowMargin,
          cashFlowToDebtRatioYoY: yoyData.cashFlowToDebtRatio
        }
      })
  
  // Calculate metrics from selected company data
  const currentCompanyData = selectedCompany !== 'all' ? selectedCompany : 'client'
  const latestYear = data[data.length - 1]
  const currentData = latestYear[currentCompanyData as keyof CashFlowData] as { 
    operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number 
  }
  const currentYoY = latestYear[`${currentCompanyData}YoY` as keyof CashFlowData] as { 
    operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number 
  }
  
  const currentOperating = currentData.operating
  const currentOperatingGrowth = currentYoY.operating
  const currentFreeCashFlowMargin = currentData.freeCashFlowMargin
  const currentCashFlowToDebtRatio = currentData.cashFlowToDebtRatio

  const cashFlowTypeNames = {
    operating: "Operating Activities",
    investment: "Investment Activities", 
    financing: "Financing Activities",
    all: "Operating Comparison"
  }

  return (
    <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-blue-800 flex items-center gap-3">
              <Banknote className="h-8 w-8 text-blue-600" />
              Cash Flow Analysis
            </CardTitle>
            <CardDescription className="text-blue-700 mt-2 text-base">
              {selectedCompany === 'all' 
                ? `5-year ${cashFlowTypeNames[selectedCashFlowType].toLowerCase()} comparison across all companies`
                : `5-year cash flow analysis for ${competitorNames[selectedCompany as keyof typeof competitorNames]}`
              }
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-blue-800">${currentOperating}B</div>
            <p className="text-blue-600 flex items-center gap-1 mt-1">
              <TrendingUp className="h-4 w-4" />
              {selectedCompany === 'all' ? 'Operating CF Leader' : `${currentOperatingGrowth >= 0 ? '+' : ''}${currentOperatingGrowth}% operating growth`}
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
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'text-blue-700 border-blue-300 hover:bg-blue-50'
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
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'text-blue-700 border-blue-300 hover:bg-blue-50'
              }
            `}
          >
            Compare All
          </Button>
        </div>

        {/* Cash Flow Type Selection (only shown in comparison mode) */}
        {selectedCompany === 'all' && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {Object.entries(cashFlowTypeNames).map(([key, name]) => (
              <Button
                key={key}
                variant={selectedCashFlowType === key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCashFlowType(key as 'operating' | 'investment' | 'financing' | 'all')}
                className={`
                  px-2 py-1 h-6 text-xs
                  ${selectedCashFlowType === key 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'text-blue-600 border-blue-200 hover:bg-blue-25'
                  }
                `}
              >
                {name}
              </Button>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="h-80 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            {selectedCompany === 'all' ? (
              <BarChart data={selectedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#dbeafe" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#1e40af', fontSize: 14, fontWeight: 500 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#1e40af', fontSize: 14 }}
                  tickFormatter={(value) => `$${value}B`}
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
                    if (selectedCashFlowType === 'all') {
                      // Parse company and type from dataKey like "client_operating"
                      const [companyKey, type] = (name as string).split('_')
                      const companyName = competitorNames[companyKey as keyof typeof competitorNames] || companyKey
                      const typeName = type === 'operating' ? 'Operating' : type === 'investment' ? 'Investment' : 'Financing'
                      return [`$${value}B`, `${companyName} - ${typeName}`]
                    } else {
                      const companyName = competitorNames[name as keyof typeof competitorNames] || name
                      return [`$${value}B`, companyName]
                    }
                  }}
                />
                
                {selectedCashFlowType === 'all' ? (
                  // Show operating cash flow for all companies (simplified view)
                  <>
                    {Object.entries(competitorColors).map(([key, color]) => (
                      <Bar 
                        key={key}
                        dataKey={`${key}_operating`}
                        fill={color} 
                        opacity={key === 'client' ? 1 : 0.8}
                        name={competitorNames[key as keyof typeof competitorNames]}
                      />
                    ))}
                  </>
                ) : (
                  // Show selected cash flow type for all companies
                  <>
                    {Object.entries(competitorColors).map(([key, color]) => (
                      <Bar 
                        key={key}
                        dataKey={key}
                        fill={color} 
                        opacity={key === 'client' ? 1 : 0.8}
                        name={competitorNames[key as keyof typeof competitorNames]}
                      />
                    ))}
                  </>
                )}
              </BarChart>
            ) : (
              <ComposedChart data={selectedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#dbeafe" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#1e40af', fontSize: 14, fontWeight: 500 }}
                />
                <YAxis 
                  yAxisId="cashflow"
                  orientation="left"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#1e40af', fontSize: 14 }}
                  tickFormatter={(value) => `$${value}B`}
                />
                <YAxis 
                  yAxisId="percentage"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#1e40af', fontSize: 14 }}
                  tickFormatter={(value) => `${value}%`}
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
                    if (name === 'freeCashFlowMargin') return [`${value}%`, 'Free Cash Flow Margin']
                    if (name === 'cashFlowToDebtRatio') return [`${value}%`, 'Cash Flow to Debt Ratio']
                    const typeName = name === 'operating' ? 'Operating' : name === 'investment' ? 'Investment' : 'Financing'
                    return [`$${value}B`, `${typeName} Cash Flow`]
                  }}
                />
                
                {/* Cash Flow Bars */}
                <Bar yAxisId="cashflow" dataKey="operating" fill="#10b981" name="operating" />
                <Bar yAxisId="cashflow" dataKey="investment" fill="#f59e0b" name="investment" />
                <Bar yAxisId="cashflow" dataKey="financing" fill="#ef4444" name="financing" />
                
                {/* Percentage Lines */}
                <Line 
                  yAxisId="percentage"
                  type="monotone" 
                  dataKey="freeCashFlowMargin" 
                  stroke="#6366f1" 
                  strokeWidth={3}
                  dot={{ fill: '#6366f1', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: '#6366f1', strokeWidth: 2 }}
                  name="freeCashFlowMargin"
                />
                <Line 
                  yAxisId="percentage"
                  type="monotone" 
                  dataKey="cashFlowToDebtRatio" 
                  stroke="#ec4899" 
                  strokeWidth={3}
                  dot={{ fill: '#ec4899', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, fill: '#ec4899', strokeWidth: 2 }}
                  name="cashFlowToDebtRatio"
                />
              </ComposedChart>
            )}
          </ResponsiveContainer>
        </div>
        
        {selectedCompany === 'all' ? (
          // Multi-company comparison metrics
          <div className="space-y-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(competitorNames).map(([key, name]) => {
                const companyData = data[data.length - 1][key as keyof CashFlowData] as { 
                  operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number 
                }
                const yoyData = data[data.length - 1][`${key}YoY` as keyof CashFlowData] as { 
                  operating: number; investment: number; financing: number; freeCashFlowMargin: number; cashFlowToDebtRatio: number 
                }
                const color = competitorColors[key as keyof typeof competitorColors]
                
                return (
                  <div key={key} className="flex items-center gap-2.5 bg-white/60 rounded-lg p-3 border border-blue-200">
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: color }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-blue-700 truncate text-sm">
                        {name} {key === 'client' && '(Us)'}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-blue-800">${companyData.operating}B</span>
                        <span className={`text-xs ${yoyData.operating >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {yoyData.operating >= 0 ? '+' : ''}{yoyData.operating}%
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Summary metrics for comparison view */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
              <div className="bg-white/60 rounded-lg p-2.5">
                <div className="text-blue-800 font-bold text-base">${currentOperating}B</div>
                <div className="text-blue-600 text-xs">Our Operating CF</div>
              </div>
              <div className="bg-white/60 rounded-lg p-2.5">
                <div className="text-blue-800 font-bold text-base">{currentOperatingGrowth >= 0 ? '+' : ''}{currentOperatingGrowth}%</div>
                <div className="text-blue-600 text-xs">Operating Growth</div>
              </div>
              <div className="bg-white/60 rounded-lg p-2.5">
                <div className="text-blue-800 font-bold text-base">1st</div>
                <div className="text-blue-600 text-xs">CF Generation Rank</div>
              </div>
              <div className="bg-white/60 rounded-lg p-2.5">
                <div className="text-blue-800 font-bold text-base">${(currentData.operating + currentData.investment + currentData.financing).toFixed(1)}B</div>
                <div className="text-blue-600 text-xs">Net Cash Flow</div>
              </div>
              <div className="bg-white/60 rounded-lg p-2.5">
                <div className="text-blue-800 font-bold text-base">{currentFreeCashFlowMargin}%</div>
                <div className="text-blue-600 text-xs">Free CF Margin</div>
              </div>
            </div>
          </div>
        ) : (
          // Single company metrics
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
            <div className="bg-white/60 rounded-lg p-2.5">
              <div className="text-blue-800 font-bold text-base">${currentData.operating}B</div>
              <div className="text-blue-600 text-xs">Operating CF</div>
            </div>
            <div className="bg-white/60 rounded-lg p-2.5">
              <div className="text-blue-800 font-bold text-base">${Math.abs(currentData.investment)}B</div>
              <div className="text-blue-600 text-xs">Investment CF</div>
            </div>
            <div className="bg-white/60 rounded-lg p-2.5">
              <div className="text-blue-800 font-bold text-base">${Math.abs(currentData.financing)}B</div>
              <div className="text-blue-600 text-xs">Financing CF</div>
            </div>
            <div className="bg-white/60 rounded-lg p-2.5">
              <div className="text-blue-800 font-bold text-base">${(currentData.operating + currentData.investment + currentData.financing).toFixed(1)}B</div>
              <div className="text-blue-600 text-xs">Net Cash Flow</div>
            </div>
            <div className="bg-white/60 rounded-lg p-2.5">
              <div className="text-blue-800 font-bold text-base">{currentFreeCashFlowMargin}%</div>
              <div className="text-blue-600 text-xs">Free CF Margin</div>
            </div>
            <div className="bg-white/60 rounded-lg p-2.5">
              <div className="text-blue-800 font-bold text-base">{currentCashFlowToDebtRatio}%</div>
              <div className="text-blue-600 text-xs">CF to Debt Ratio</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
