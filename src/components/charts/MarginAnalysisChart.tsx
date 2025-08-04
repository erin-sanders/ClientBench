import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Percent } from 'lucide-react'
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, ComposedChart } from 'recharts'

interface MarginData {
  year: string
  grossMargin: number
  operatingMargin: number
  netMargin: number
  ebitdaMargin: number
  grossYoY: number
  operatingYoY: number
  netYoY: number
  ebitdaYoY: number
}

interface MarginAnalysisChartProps {
  data: MarginData[]
  currentMargins?: {
    gross: number
    operating: number
    net: number
    ebitda: number
  }
}

export function MarginAnalysisChart({ 
  data, 
  currentMargins = {
    gross: 42.8,
    operating: 15.3,
    net: 11.2,
    ebitda: 19.8
  }
}: MarginAnalysisChartProps) {
  const currentYear = data[data.length - 1]
  
  // Calculate ranges
  const grossRange = Math.max(...data.map(d => d.grossMargin)) - Math.min(...data.map(d => d.grossMargin))
  const netRange = Math.max(...data.map(d => d.netMargin)) - Math.min(...data.map(d => d.netMargin))

  return (
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
              <div className="text-lg font-bold text-blue-800">{currentMargins.gross}%</div>
              <div className="text-blue-600 text-xs">Gross Margin</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-800">{currentMargins.operating}%</div>
              <div className="text-blue-600 text-xs">Operating Margin</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-800">{currentMargins.net}%</div>
              <div className="text-blue-600 text-xs">Net Margin</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-800">{currentMargins.ebitda}%</div>
              <div className="text-blue-600 text-xs">EBITDA Margin</div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
                <div className="text-sm text-green-600">+{currentYear.grossYoY}% YoY</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/60 rounded-lg p-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div>
                <div className="font-semibold text-blue-700">Operating Margin</div>
                <div className="text-sm text-blue-600">+{currentYear.operatingYoY}% YoY</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/60 rounded-lg p-3">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div>
                <div className="font-semibold text-purple-700">Net Margin</div>
                <div className="text-sm text-purple-600">+{currentYear.netYoY}% YoY</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/60 rounded-lg p-3">
              <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
              <div>
                <div className="font-semibold text-amber-700">EBITDA Margin</div>
                <div className="text-sm text-amber-600">+{currentYear.ebitdaYoY}% YoY</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/60 rounded-lg p-3">
              <div className="text-blue-800 font-bold text-lg">{grossRange.toFixed(1)}%</div>
              <div className="text-blue-600 text-sm">Gross Margin Range</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <div className="text-blue-800 font-bold text-lg">{currentMargins.operating}%</div>
              <div className="text-blue-600 text-sm">Op. Margin Peak</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <div className="text-blue-800 font-bold text-lg">{netRange.toFixed(1)}%</div>
              <div className="text-blue-600 text-sm">Net Margin Range</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <div className="text-blue-800 font-bold text-lg">{currentMargins.ebitda}%</div>
              <div className="text-blue-600 text-sm">EBITDA Peak</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
