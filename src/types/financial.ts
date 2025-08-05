export interface Company {
  ticker: string
  name: string
  industry: string
  marketCap: number
  isClient: boolean
  address?: string
  logo?: string
  employees?: number
  description?: string
  competitiveLandscape?: string
}

export interface FinancialMetrics {
  year: number
  quarter?: number
  // Basic Financials
  revenue: number
  revenueGrowthRate: number
  grossMargin: number
  operatingMargin: number
  netIncomeMargin: number
  ebitdaMargin: number
  eps: number
  
  // Capital Efficiency
  roe: number
  roa: number
  roic: number
  assetTurnoverRatio: number
  
  // Cost Structure
  cogsAsPercentOfRevenue: number
  sgaAsPercentOfRevenue: number
  rdAndCapexAsPercentOfRevenue: number
  
  // Growth Metrics
  revenueGrowthRateYoY: number
  revenueGrowthRate3YearCAGR: number
  netIncomeGrowth: number
  marketShareGrowth?: number
  
  // Liquidity & Solvency
  currentRatio: number
  quickRatio: number
  debtToEquity: number
  interestCoverageRatio: number
  
  // Valuation (for public companies)
  marketCap?: number
  peRatio?: number
  evEbitda?: number
  priceToSales?: number
}

export interface CompanyFinancialData {
  company: Company
  financialMetrics: FinancialMetrics[]
  lastUpdated: Date
}

export interface NewsEvent {
  id: string
  date: Date
  title: string
  description: string
  type: 'merger' | 'acquisition' | 'stock-split' | 'announcement' | 'partnership' | 'earnings' | 'other'
  companyTicker: string
  impact: 'positive' | 'negative' | 'neutral'
  source?: string
}

export interface IndustryKPI {
  name: string
  value: number
  unit: string
  industry: string
  percentile?: number
  year: number
}
