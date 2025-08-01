import type { CompanyFinancialData, Company, FinancialMetrics } from '@/types/financial'

// Sample companies
export const companies: Company[] = [
  // Client 1 and competitors
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    industry: 'Technology',
    marketCap: 3000000000000,
    isClient: true,
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft Corporation',
    industry: 'Technology',
    marketCap: 2800000000000,
    isClient: false,
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet Inc.',
    industry: 'Technology',
    marketCap: 1700000000000,
    isClient: false,
  },
  {
    ticker: 'AMZN',
    name: 'Amazon.com Inc.',
    industry: 'Technology',
    marketCap: 1500000000000,
    isClient: false,
  },
  {
    ticker: 'META',
    name: 'Meta Platforms Inc.',
    industry: 'Technology',
    marketCap: 800000000000,
    isClient: false,
  },
  {
    ticker: 'TSLA',
    name: 'Tesla Inc.',
    industry: 'Automotive',
    marketCap: 800000000000,
    isClient: false,
  },
  
  // Client 2 and competitors
  {
    ticker: 'JPM',
    name: 'JPMorgan Chase & Co.',
    industry: 'Financial Services',
    marketCap: 450000000000,
    isClient: true,
  },
  {
    ticker: 'BAC',
    name: 'Bank of America Corp.',
    industry: 'Financial Services',
    marketCap: 300000000000,
    isClient: false,
  },
  {
    ticker: 'WFC',
    name: 'Wells Fargo & Company',
    industry: 'Financial Services',
    marketCap: 200000000000,
    isClient: false,
  },
  {
    ticker: 'GS',
    name: 'Goldman Sachs Group Inc.',
    industry: 'Financial Services',
    marketCap: 120000000000,
    isClient: false,
  },
  {
    ticker: 'MS',
    name: 'Morgan Stanley',
    industry: 'Financial Services',
    marketCap: 150000000000,
    isClient: false,
  },
]

// Sample financial data for Apple (Client 1)
const appleFinancials: FinancialMetrics[] = [
  {
    year: 2024,
    revenue: 383285000000,
    revenueGrowthRate: 2.8,
    grossMargin: 45.6,
    operatingMargin: 30.1,
    netIncomeMargin: 25.3,
    ebitdaMargin: 33.2,
    eps: 6.13,
    roe: 147.4,
    roa: 22.6,
    roic: 29.2,
    assetTurnoverRatio: 1.12,
    cogsAsPercentOfRevenue: 54.4,
    sgaAsPercentOfRevenue: 15.5,
    rdAndCapexAsPercentOfRevenue: 8.1,
    revenueGrowthRateYoY: 2.8,
    revenueGrowthRate3YearCAGR: 8.9,
    netIncomeGrowth: 3.6,
    currentRatio: 0.95,
    quickRatio: 0.83,
    debtToEquity: 1.73,
    interestCoverageRatio: 28.5,
    marketCap: 3000000000000,
    peRatio: 29.2,
    evEbitda: 22.8,
    priceToSales: 7.8,
  },
  {
    year: 2023,
    revenue: 383285000000,
    revenueGrowthRate: -2.8,
    grossMargin: 44.1,
    operatingMargin: 29.8,
    netIncomeMargin: 24.4,
    ebitdaMargin: 32.9,
    eps: 5.89,
    roe: 172.9,
    roa: 22.4,
    roic: 30.1,
    assetTurnoverRatio: 1.08,
    cogsAsPercentOfRevenue: 55.9,
    sgaAsPercentOfRevenue: 14.3,
    rdAndCapexAsPercentOfRevenue: 7.8,
    revenueGrowthRateYoY: -2.8,
    revenueGrowthRate3YearCAGR: 7.8,
    netIncomeGrowth: -2.8,
    currentRatio: 1.04,
    quickRatio: 0.91,
    debtToEquity: 1.83,
    interestCoverageRatio: 31.2,
    marketCap: 2800000000000,
    peRatio: 28.9,
    evEbitda: 21.5,
    priceToSales: 7.3,
  },
  // Add more years as needed...
]

// Sample financial data for Microsoft
const microsoftFinancials: FinancialMetrics[] = [
  {
    year: 2024,
    revenue: 245122000000,
    revenueGrowthRate: 15.7,
    grossMargin: 69.4,
    operatingMargin: 42.0,
    netIncomeMargin: 35.1,
    ebitdaMargin: 46.8,
    eps: 11.05,
    roe: 36.2,
    roa: 14.7,
    roic: 19.8,
    assetTurnoverRatio: 0.41,
    cogsAsPercentOfRevenue: 30.6,
    sgaAsPercentOfRevenue: 27.4,
    rdAndCapexAsPercentOfRevenue: 15.2,
    revenueGrowthRateYoY: 15.7,
    revenueGrowthRate3YearCAGR: 16.8,
    netIncomeGrowth: 20.1,
    currentRatio: 1.27,
    quickRatio: 1.21,
    debtToEquity: 0.47,
    interestCoverageRatio: 52.3,
    marketCap: 2800000000000,
    peRatio: 28.7,
    evEbitda: 19.2,
    priceToSales: 11.4,
  },
]

// Combine into CompanyFinancialData array
export const financialData: CompanyFinancialData[] = [
  {
    company: companies.find(c => c.ticker === 'AAPL')!,
    financialMetrics: appleFinancials,
    lastUpdated: new Date('2024-07-31'),
  },
  {
    company: companies.find(c => c.ticker === 'MSFT')!,
    financialMetrics: microsoftFinancials,
    lastUpdated: new Date('2024-07-31'),
  },
  // Add more companies as needed...
]

// Helper functions
export const getClientCompanies = () => companies.filter(c => c.isClient)
export const getCompetitorCompanies = () => companies.filter(c => !c.isClient)
export const getCompanyByTicker = (ticker: string) => companies.find(c => c.ticker === ticker)
export const getFinancialDataByTicker = (ticker: string) => financialData.find(d => d.company.ticker === ticker)
