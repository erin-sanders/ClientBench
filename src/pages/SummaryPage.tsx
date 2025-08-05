import { Button } from '@/components/ui/button'
import { Target, BarChart3, Users, Bot, Building, MapPin, Loader2 } from 'lucide-react'
import { companies, realFinancialData } from '@/data/mockData'
import { useState } from 'react'

export function SummaryPage() {
  // Get the client company (first company marked as client)
  const clientCompany = companies.find(company => company.isClient)
  
  // Get Apple's real financial data
  const appleData = realFinancialData['AAPL']
  
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false)
  const [isGeneratingLandscape, setIsGeneratingLandscape] = useState(false)

  const handleGenerateDescription = async () => {
    setIsGeneratingDescription(true)
    // Simulate AI generation delay
    setTimeout(() => {
      setIsGeneratingDescription(false)
      console.log('AI description generated!')
      // In a real app, this would call an AI service and update the description
    }, 2000)
  }

  const handleGenerateCompetitiveLandscape = async () => {
    setIsGeneratingLandscape(true)
    // Simulate AI generation delay
    setTimeout(() => {
      setIsGeneratingLandscape(false)
      console.log('AI competitive landscape generated!')
      // In a real app, this would call an AI service and update the competitive landscape
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      {/* Company Header Section - Compact */}
      {clientCompany && (
        <div className="mb-6">
          <div className="bg-white rounded-lg shadow-md p-6 border">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Company Logo and Basic Info */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                <div className="flex-shrink-0">
                  {clientCompany.logo ? (
                    <img 
                      src={clientCompany.logo} 
                      alt={`${clientCompany.name} logo`}
                      className="w-16 h-16 object-contain rounded-lg border border-gray-200 p-2 bg-white"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <Building className="h-8 w-8 text-blue-600" />
                    </div>
                  )}
                </div>
                
                <div className="flex-grow">
                  <h1 className="text-2xl font-bold text-slate-800 mb-1">
                    {clientCompany.name}
                  </h1>
                  <div className="flex flex-col gap-1 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>{clientCompany.address || 'Address not available'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-3 w-3" />
                      <span>{clientCompany.industry}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Employees Box - Compact */}
              <div className="lg:w-32">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 border rounded-lg p-3">
                  <div className="text-xs font-semibold text-blue-700 flex items-center gap-1 mb-1">
                    <Users className="h-3 w-3" />
                    Employees
                  </div>
                  <div className="text-lg font-bold text-blue-800">
                    {clientCompany.employees?.toLocaleString() || 'N/A'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Company Description and Competitive Landscape - Compact */}
      <div className="grid gap-4 lg:grid-cols-2 mb-6">
        {/* Company Description */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border border-emerald-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-emerald-700">Company Description</h3>
            <Button 
              onClick={handleGenerateDescription}
              size="sm"
              disabled={isGeneratingDescription}
              className="bg-emerald-600 hover:bg-emerald-700 text-white h-6 px-2 text-xs"
            >
              {isGeneratingDescription ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <Bot className="h-3 w-3" />
              )}
              AI
            </Button>
          </div>
          <div className="text-xs text-slate-700 leading-relaxed">
            {clientCompany?.description || 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets.'}
          </div>
        </div>

        {/* Competitive Landscape */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-orange-700">Competitive Landscape</h3>
            <Button 
              onClick={handleGenerateCompetitiveLandscape}
              size="sm"
              disabled={isGeneratingLandscape}
              className="bg-orange-600 hover:bg-orange-700 text-white h-6 px-2 text-xs"
            >
              {isGeneratingLandscape ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <Bot className="h-3 w-3" />
              )}
              AI
            </Button>
          </div>
          <div className="text-xs text-slate-700 leading-relaxed">
            {clientCompany?.competitiveLandscape || 'Apple competes in multiple markets including smartphones (Samsung, Google), personal computers (Microsoft, HP, Dell), tablets (Samsung, Microsoft), wearables (Samsung, Fitbit), and digital services (Google, Amazon, Microsoft). The company differentiates through premium pricing, integrated ecosystem, and design innovation.'}
          </div>
        </div>
      </div>

      {/* Header - Compact */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-1">
          Apple Inc. - Executive Dashboard
        </h2>
        <p className="text-slate-600 text-sm">
          Real-time financial performance vs. Microsoft, Alphabet, Dell, and HP
        </p>
      </div>

      {/* Compact KPI Metrics */}
      <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-8 mb-6">
        {/* Primary Metrics */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-emerald-800">${(appleData.currentRevenue / 1000000000).toFixed(1)}B</div>
          <div className="text-xs text-emerald-600">Revenue</div>
          <div className="text-xs text-emerald-500">+{appleData.revenueGrowth}%</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-blue-800">{appleData.operatingMargin}%</div>
          <div className="text-xs text-blue-600">Op. Margin</div>
          <div className="text-xs text-blue-500">+1.7%</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-purple-800">${(appleData.marketCap / 1000000000000).toFixed(1)}T</div>
          <div className="text-xs text-purple-600">Market Cap</div>
          <div className="text-xs text-purple-500">+15.2%</div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-orange-800">147.4%</div>
          <div className="text-xs text-orange-600">ROE</div>
          <div className="text-xs text-orange-500">+12.8%</div>
        </div>
        
        {/* Additional Metrics */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-green-800">${(appleData.netIncome / 1000000000).toFixed(1)}B</div>
          <div className="text-xs text-green-600">Net Income</div>
          <div className="text-xs text-green-500">{appleData.netMargin}%</div>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-indigo-800">${appleData.eps}</div>
          <div className="text-xs text-indigo-600">EPS</div>
          <div className="text-xs text-indigo-500">Per share</div>
        </div>
        
        <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-rose-800">#1</div>
          <div className="text-xs text-rose-600">Industry Rank</div>
          <div className="text-xs text-rose-500">Leader</div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-amber-800">Superior</div>
          <div className="text-xs text-amber-600">Edge</div>
          <div className="text-xs text-amber-500">vs Peers</div>
        </div>
      </div>

      {/* Compact Analysis Cards */}
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <h3 className="text-sm font-semibold text-blue-700">Apple vs Tech Giants</h3>
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Competitive analysis vs Microsoft, Google, Dell & HP
          </p>
          <div className="text-xs text-blue-600 font-medium">
            Apple leads in profitability and market valuation
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border border-emerald-200">
          <div className="flex items-center gap-3 mb-2">
            <Target className="h-5 w-5 text-emerald-600" />
            <h3 className="text-sm font-semibold text-emerald-700">Strategic Advantages</h3>
          </div>
          <p className="text-xs text-slate-600 mb-2">
            Premium ecosystem & innovation leadership
          </p>
          <div className="text-xs text-emerald-600 font-medium">
            31.5% operating margin beats all major competitors
          </div>
        </div>
      </div>
    </div>
  )
}
