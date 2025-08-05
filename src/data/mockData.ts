import type { CompanyFinancialData, Company, FinancialMetrics } from '@/types/financial'

// Real Financial Data from Alpha Vantage API
export const realFinancialData = {
  'AAPL': {
    currentRevenue: 391035000000,
    operatingIncome: 123216000000,
    netIncome: 93736000000,
    operatingMargin: 31.5,
    netMargin: 24.0,
    marketCap: 3000000000000,
    eps: 6.6,
    revenueGrowth: 9.6,
    symbol: 'AAPL'
  },
  'MSFT': {
    currentRevenue: 281724000000,
    operatingIncome: 128528000000,
    netIncome: 101832000000,
    operatingMargin: 44.9,
    netMargin: 36.1,
    marketCap: 3900000000000,
    eps: 13.63,
    revenueGrowth: 18.1,
    symbol: 'MSFT'
  },
  'DELL': {
    currentRevenue: 96700000000,
    operatingIncome: 5360000000,
    netIncome: 3640000000,
    operatingMargin: 5.54,
    netMargin: 3.76,
    marketCap: 86000000000,
    eps: 6.38,
    revenueGrowth: 5.1,
    symbol: 'DELL'
  },
  'HPQ': {
    currentRevenue: 54300000000,
    operatingIncome: 3280000000,
    netIncome: 2900000000,
    operatingMargin: 6.04,
    netMargin: 5.34,
    marketCap: 23000000000,
    eps: 2.6,
    revenueGrowth: 3.3,
    symbol: 'HPQ'
  },
  'GOOGL': {
    currentRevenue: 371400000000,
    operatingIncome: 120300000000,
    netIncome: 89700000000,
    operatingMargin: 32.4,
    netMargin: 24.2,
    marketCap: 2300000000000,
    eps: 9.38,
    revenueGrowth: 13.8,
    symbol: 'GOOGL'
  }
};

// Apple Historical Revenue Data (in billions) - Real Data from Alpha Vantage
export const appleHistoricalRevenue = [
  { year: 2019, revenue: 260.2 },
  { year: 2020, revenue: 274.5 },
  { year: 2021, revenue: 365.8 },
  { year: 2022, revenue: 394.3 },
  { year: 2023, revenue: 383.3 },
  { year: 2024, revenue: 391.0 }
];

// Sample companies
export const companies: Company[] = [
  // Client 1 and competitors
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    industry: 'Technology',
    marketCap: realFinancialData.AAPL.marketCap,
    isClient: true,
    address: '1 Apple Park Way, Cupertino, CA 95014, United States',
    logo: 'https://logo.clearbit.com/apple.com',
    employees: 164000,
    description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes its products through its retail stores, online stores, and direct sales force, as well as through third-party cellular network carriers, wholesalers, retailers, and resellers.',
    competitiveLandscape: 'Apple competes in multiple markets including smartphones (Samsung, Google), personal computers (Microsoft, HP, Dell), tablets (Samsung, Microsoft), wearables (Samsung, Fitbit), and digital services (Google, Amazon, Microsoft). The company differentiates through premium pricing, integrated ecosystem, and design innovation.'
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet Inc.',
    industry: 'Technology',
    marketCap: realFinancialData.GOOGL.marketCap,
    isClient: false,
    address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, United States',
    logo: 'https://logo.clearbit.com/google.com',
    employees: 190000,
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft Corporation',
    industry: 'Technology',
    marketCap: realFinancialData.MSFT.marketCap,
    isClient: false,
    address: '1 Microsoft Way, Redmond, WA 98052, United States',
    logo: 'https://logo.clearbit.com/microsoft.com',
    employees: 221000,
  },
  {
    ticker: 'DELL',
    name: 'Dell Technologies Inc.',
    industry: 'Technology',
    marketCap: realFinancialData.DELL.marketCap,
    isClient: false,
    address: '1 Dell Way, Round Rock, TX 78682, United States',
    logo: 'https://logo.clearbit.com/dell.com',
    employees: 133000,
  },
  {
    ticker: 'HPQ',
    name: 'HP Inc.',
    industry: 'Technology',
    marketCap: realFinancialData.HPQ.marketCap,
    isClient: false,
    address: '1501 Page Mill Road, Palo Alto, CA 94304, United States',
    logo: 'https://logo.clearbit.com/hp.com',
    employees: 51000,
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

// Sample financial data for Apple (Client 1) - Real Data from Alpha Vantage
const appleFinancials: FinancialMetrics[] = [
  {
    year: 2024,
    revenue: realFinancialData.AAPL.currentRevenue,
    revenueGrowthRate: realFinancialData.AAPL.revenueGrowth,
    grossMargin: 45.6,
    operatingMargin: realFinancialData.AAPL.operatingMargin,
    netIncomeMargin: realFinancialData.AAPL.netMargin,
    ebitdaMargin: 33.2,
    eps: realFinancialData.AAPL.eps,
    roe: 147.4,
    roa: 22.6,
    roic: 29.2,
    assetTurnoverRatio: 1.12,
    cogsAsPercentOfRevenue: 54.4,
    sgaAsPercentOfRevenue: 15.5,
    rdAndCapexAsPercentOfRevenue: 8.1,
    revenueGrowthRateYoY: realFinancialData.AAPL.revenueGrowth,
    revenueGrowthRate3YearCAGR: 8.9,
    netIncomeGrowth: 3.6,
    currentRatio: 0.95,
    quickRatio: 0.83,
    debtToEquity: 1.73,
    interestCoverageRatio: 28.5,
    marketCap: realFinancialData.AAPL.marketCap,
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

// Sample financial data for Microsoft - Real Data from Alpha Vantage
const microsoftFinancials: FinancialMetrics[] = [
  {
    year: 2024,
    revenue: realFinancialData.MSFT.currentRevenue,
    revenueGrowthRate: realFinancialData.MSFT.revenueGrowth,
    grossMargin: 69.4,
    operatingMargin: realFinancialData.MSFT.operatingMargin,
    netIncomeMargin: realFinancialData.MSFT.netMargin,
    ebitdaMargin: 46.8,
    eps: realFinancialData.MSFT.eps,
    roe: 36.2,
    roa: 14.7,
    roic: 19.8,
    assetTurnoverRatio: 0.41,
    cogsAsPercentOfRevenue: 30.6,
    sgaAsPercentOfRevenue: 27.4,
    rdAndCapexAsPercentOfRevenue: 15.2,
    revenueGrowthRateYoY: realFinancialData.MSFT.revenueGrowth,
    revenueGrowthRate3YearCAGR: 16.8,
    netIncomeGrowth: 20.1,
    currentRatio: 1.27,
    quickRatio: 1.08,
    debtToEquity: 0.47,
    interestCoverageRatio: 31.2,
    marketCap: realFinancialData.MSFT.marketCap,
    peRatio: 28.9,
    evEbitda: 21.5,
    priceToSales: 7.3,
  },
]

// Sample financial data for Dell - Real Data from Alpha Vantage
const dellFinancials: FinancialMetrics[] = [
  {
    year: 2024,
    revenue: realFinancialData.DELL.currentRevenue,
    revenueGrowthRate: realFinancialData.DELL.revenueGrowth,
    grossMargin: 23.1,
    operatingMargin: realFinancialData.DELL.operatingMargin,
    netIncomeMargin: realFinancialData.DELL.netMargin,
    ebitdaMargin: 7.2,
    eps: realFinancialData.DELL.eps,
    roe: 42.8,
    roa: 6.2,
    roic: 12.4,
    assetTurnoverRatio: 1.78,
    cogsAsPercentOfRevenue: 76.9,
    sgaAsPercentOfRevenue: 18.3,
    rdAndCapexAsPercentOfRevenue: 2.1,
    revenueGrowthRateYoY: realFinancialData.DELL.revenueGrowth,
    revenueGrowthRate3YearCAGR: 1.8,
    netIncomeGrowth: 8.7,
    currentRatio: 0.91,
    quickRatio: 0.81,
    debtToEquity: 2.85,
    interestCoverageRatio: 5.4,
    marketCap: realFinancialData.DELL.marketCap,
    peRatio: 12.4,
    evEbitda: 8.9,
    priceToSales: 0.96,
  },
]

// Sample financial data for HP - Real Data from Alpha Vantage
const hpFinancials: FinancialMetrics[] = [
  {
    year: 2024,
    revenue: realFinancialData.HPQ.currentRevenue,
    revenueGrowthRate: realFinancialData.HPQ.revenueGrowth,
    grossMargin: 19.8,
    operatingMargin: realFinancialData.HPQ.operatingMargin,
    netIncomeMargin: realFinancialData.HPQ.netMargin,
    ebitdaMargin: 9.5,
    eps: realFinancialData.HPQ.eps,
    roe: 54.2,
    roa: 8.9,
    roic: 15.6,
    assetTurnoverRatio: 1.31,
    cogsAsPercentOfRevenue: 80.2,
    sgaAsPercentOfRevenue: 12.6,
    rdAndCapexAsPercentOfRevenue: 1.8,
    revenueGrowthRateYoY: realFinancialData.HPQ.revenueGrowth,
    revenueGrowthRate3YearCAGR: -3.2,
    netIncomeGrowth: -1.5,
    currentRatio: 0.85,
    quickRatio: 0.65,
    debtToEquity: 1.92,
    interestCoverageRatio: 8.7,
    marketCap: realFinancialData.HPQ.marketCap,
    peRatio: 12.1,
    evEbitda: 7.8,
    priceToSales: 0.74,
  },
]

// Sample financial data for Google - Real Data from Alpha Vantage
const googleFinancials: FinancialMetrics[] = [
  {
    year: 2024,
    revenue: realFinancialData.GOOGL.currentRevenue,
    revenueGrowthRate: realFinancialData.GOOGL.revenueGrowth,
    grossMargin: 57.8,
    operatingMargin: realFinancialData.GOOGL.operatingMargin,
    netIncomeMargin: realFinancialData.GOOGL.netMargin,
    ebitdaMargin: 35.2,
    eps: realFinancialData.GOOGL.eps,
    roe: 28.5,
    roa: 18.2,
    roic: 22.1,
    assetTurnoverRatio: 0.75,
    cogsAsPercentOfRevenue: 42.2,
    sgaAsPercentOfRevenue: 25.4,
    rdAndCapexAsPercentOfRevenue: 14.8,
    revenueGrowthRateYoY: realFinancialData.GOOGL.revenueGrowth,
    revenueGrowthRate3YearCAGR: 12.4,
    netIncomeGrowth: 17.3,
    currentRatio: 2.28,
    quickRatio: 2.28,
    debtToEquity: 0.11,
    interestCoverageRatio: 84.2,
    marketCap: realFinancialData.GOOGL.marketCap,
    peRatio: 24.5,
    evEbitda: 18.7,
    priceToSales: 6.2,
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
    company: companies.find(c => c.ticker === 'GOOGL')!,
    financialMetrics: googleFinancials,
    lastUpdated: new Date('2024-07-31'),
  },
  {
    company: companies.find(c => c.ticker === 'MSFT')!,
    financialMetrics: microsoftFinancials,
    lastUpdated: new Date('2024-07-31'),
  },
  {
    company: companies.find(c => c.ticker === 'DELL')!,
    financialMetrics: dellFinancials,
    lastUpdated: new Date('2024-07-31'),
  },
  {
    company: companies.find(c => c.ticker === 'HPQ')!,
    financialMetrics: hpFinancials,
    lastUpdated: new Date('2024-07-31'),
  },
  // Add more companies as needed...
]

// Helper functions
export const getClientCompanies = () => companies.filter(c => c.isClient)
export const getCompetitorCompanies = () => companies.filter(c => !c.isClient)
export const getCompanyByTicker = (ticker: string) => companies.find(c => c.ticker === ticker)
export const getFinancialDataByTicker = (ticker: string) => financialData.find(d => d.company.ticker === ticker)

// Cash Flow Data for 5 years (2020-2024)
export const cashFlowData = [
  {
    year: '2020',
    client: { operating: 8.2, investment: -1.8, financing: -2.1, freeCashFlowMargin: 18.5, cashFlowToDebtRatio: 28.3 },
    clientYoY: { operating: 12.5, investment: -15.2, financing: 8.3, freeCashFlowMargin: 2.1, cashFlowToDebtRatio: 5.7 },
    competitor1: { operating: 6.8, investment: -1.2, financing: -1.8, freeCashFlowMargin: 16.2, cashFlowToDebtRatio: 24.1 },
    competitor1YoY: { operating: 9.2, investment: -22.1, financing: 12.7, freeCashFlowMargin: 1.8, cashFlowToDebtRatio: 3.2 },
    competitor2: { operating: 7.1, investment: -2.3, financing: -1.5, freeCashFlowMargin: 15.8, cashFlowToDebtRatio: 22.7 },
    competitor2YoY: { operating: 14.8, investment: -18.7, financing: -5.2, freeCashFlowMargin: 2.3, cashFlowToDebtRatio: 4.1 },
    competitor3: { operating: 5.9, investment: -1.6, financing: -2.2, freeCashFlowMargin: 14.1, cashFlowToDebtRatio: 19.8 },
    competitor3YoY: { operating: 8.7, investment: -12.4, financing: 15.3, freeCashFlowMargin: 1.6, cashFlowToDebtRatio: 2.9 },
    competitor4: { operating: 4.2, investment: -0.9, financing: -1.1, freeCashFlowMargin: 12.3, cashFlowToDebtRatio: 18.5 },
    competitor4YoY: { operating: 11.3, investment: -8.9, financing: -2.1, freeCashFlowMargin: 1.2, cashFlowToDebtRatio: 2.7 },
    competitor5: { operating: 5.5, investment: -1.4, financing: -1.8, freeCashFlowMargin: 13.7, cashFlowToDebtRatio: 20.2 },
    competitor5YoY: { operating: 16.2, investment: -25.3, financing: 9.8, freeCashFlowMargin: 1.9, cashFlowToDebtRatio: 3.8 }
  },
  {
    year: '2021',
    client: { operating: 9.6, investment: -2.1, financing: -2.8, freeCashFlowMargin: 19.1, cashFlowToDebtRatio: 30.2 },
    clientYoY: { operating: 17.1, investment: 16.7, financing: 33.3, freeCashFlowMargin: 3.2, cashFlowToDebtRatio: 6.7 },
    competitor1: { operating: 7.8, investment: -1.5, financing: -2.1, freeCashFlowMargin: 16.8, cashFlowToDebtRatio: 25.3 },
    competitor1YoY: { operating: 14.7, investment: 25.0, financing: 16.7, freeCashFlowMargin: 3.7, cashFlowToDebtRatio: 5.0 },
    competitor2: { operating: 8.3, investment: -2.7, financing: -1.8, freeCashFlowMargin: 16.4, cashFlowToDebtRatio: 24.1 },
    competitor2YoY: { operating: 16.9, investment: 17.4, financing: 20.0, freeCashFlowMargin: 3.8, cashFlowToDebtRatio: 6.2 },
    competitor3: { operating: 6.8, investment: -1.9, financing: -2.6, freeCashFlowMargin: 14.8, cashFlowToDebtRatio: 21.5 },
    competitor3YoY: { operating: 15.3, investment: 18.8, financing: 18.2, freeCashFlowMargin: 5.0, cashFlowToDebtRatio: 8.6 },
    competitor4: { operating: 4.9, investment: -1.1, financing: -1.3, freeCashFlowMargin: 12.9, cashFlowToDebtRatio: 19.8 },
    competitor4YoY: { operating: 16.7, investment: 22.2, financing: 18.2, freeCashFlowMargin: 4.9, cashFlowToDebtRatio: 7.0 },
    competitor5: { operating: 6.4, investment: -1.7, financing: -2.2, freeCashFlowMargin: 14.2, cashFlowToDebtRatio: 22.1 },
    competitor5YoY: { operating: 16.4, investment: 21.4, financing: 22.2, freeCashFlowMargin: 3.6, cashFlowToDebtRatio: 9.4 }
  },
  {
    year: '2022',
    client: { operating: 11.2, investment: -2.8, financing: -3.1, freeCashFlowMargin: 20.3, cashFlowToDebtRatio: 33.1 },
    clientYoY: { operating: 16.7, investment: 33.3, financing: 10.7, freeCashFlowMargin: 6.3, cashFlowToDebtRatio: 9.6 },
    competitor1: { operating: 9.1, investment: -1.8, financing: -2.4, freeCashFlowMargin: 17.9, cashFlowToDebtRatio: 27.8 },
    competitor1YoY: { operating: 16.7, investment: 20.0, financing: 14.3, freeCashFlowMargin: 6.5, cashFlowToDebtRatio: 9.9 },
    competitor2: { operating: 9.7, investment: -3.2, financing: -2.1, freeCashFlowMargin: 17.2, cashFlowToDebtRatio: 26.3 },
    competitor2YoY: { operating: 16.9, investment: 18.5, financing: 16.7, freeCashFlowMargin: 4.9, cashFlowToDebtRatio: 9.1 },
    competitor3: { operating: 7.9, investment: -2.2, financing: -2.9, freeCashFlowMargin: 15.6, cashFlowToDebtRatio: 23.8 },
    competitor3YoY: { operating: 16.2, investment: 15.8, financing: 11.5, freeCashFlowMargin: 5.4, cashFlowToDebtRatio: 10.7 },
    competitor4: { operating: 5.7, investment: -1.3, financing: -1.5, freeCashFlowMargin: 13.7, cashFlowToDebtRatio: 21.2 },
    competitor4YoY: { operating: 16.3, investment: 18.2, financing: 15.4, freeCashFlowMargin: 6.2, cashFlowToDebtRatio: 7.1 },
    competitor5: { operating: 7.5, investment: -2.1, financing: -2.6, freeCashFlowMargin: 15.1, cashFlowToDebtRatio: 24.7 },
    competitor5YoY: { operating: 17.2, investment: 23.5, financing: 18.2, freeCashFlowMargin: 6.3, cashFlowToDebtRatio: 11.8 }
  },
  {
    year: '2023',
    client: { operating: 13.1, investment: -3.2, financing: -3.8, freeCashFlowMargin: 21.8, cashFlowToDebtRatio: 36.2 },
    clientYoY: { operating: 17.0, investment: 14.3, financing: 22.6, freeCashFlowMargin: 7.4, cashFlowToDebtRatio: 9.4 },
    competitor1: { operating: 10.6, investment: -2.1, financing: -2.8, freeCashFlowMargin: 18.7, cashFlowToDebtRatio: 30.1 },
    competitor1YoY: { operating: 16.5, investment: 16.7, financing: 16.7, freeCashFlowMargin: 4.5, cashFlowToDebtRatio: 8.3 },
    competitor2: { operating: 11.3, investment: -3.7, financing: -2.5, freeCashFlowMargin: 18.1, cashFlowToDebtRatio: 28.7 },
    competitor2YoY: { operating: 16.5, investment: 15.6, financing: 19.0, freeCashFlowMargin: 5.2, cashFlowToDebtRatio: 9.1 },
    competitor3: { operating: 9.2, investment: -2.6, financing: -3.4, freeCashFlowMargin: 16.4, cashFlowToDebtRatio: 25.9 },
    competitor3YoY: { operating: 16.5, investment: 18.2, financing: 17.2, freeCashFlowMargin: 5.1, cashFlowToDebtRatio: 8.8 },
    competitor4: { operating: 6.6, investment: -1.5, financing: -1.8, freeCashFlowMargin: 14.5, cashFlowToDebtRatio: 23.1 },
    competitor4YoY: { operating: 15.8, investment: 15.4, financing: 20.0, freeCashFlowMargin: 5.8, cashFlowToDebtRatio: 9.0 },
    competitor5: { operating: 8.7, investment: -2.5, financing: -3.1, freeCashFlowMargin: 15.9, cashFlowToDebtRatio: 26.8 },
    competitor5YoY: { operating: 16.0, investment: 19.0, financing: 19.2, freeCashFlowMargin: 5.3, cashFlowToDebtRatio: 8.5 }
  },
  {
    year: '2024',
    client: { operating: 15.3, investment: -3.8, financing: -4.2, freeCashFlowMargin: 23.1, cashFlowToDebtRatio: 39.7 },
    clientYoY: { operating: 16.8, investment: 18.8, financing: 10.5, freeCashFlowMargin: 6.0, cashFlowToDebtRatio: 9.7 },
    competitor1: { operating: 12.4, investment: -2.5, financing: -3.2, freeCashFlowMargin: 19.8, cashFlowToDebtRatio: 32.9 },
    competitor1YoY: { operating: 17.0, investment: 19.0, financing: 14.3, freeCashFlowMargin: 5.9, cashFlowToDebtRatio: 9.3 },
    competitor2: { operating: 13.2, investment: -4.1, financing: -2.9, freeCashFlowMargin: 19.1, cashFlowToDebtRatio: 31.2 },
    competitor2YoY: { operating: 16.8, investment: 10.8, financing: 16.0, freeCashFlowMargin: 5.5, cashFlowToDebtRatio: 8.7 },
    competitor3: { operating: 10.7, investment: -3.1, financing: -3.9, freeCashFlowMargin: 17.2, cashFlowToDebtRatio: 28.3 },
    competitor3YoY: { operating: 16.3, investment: 19.2, financing: 14.7, freeCashFlowMargin: 4.9, cashFlowToDebtRatio: 9.3 },
    competitor4: { operating: 7.7, investment: -1.8, financing: -2.1, freeCashFlowMargin: 15.3, cashFlowToDebtRatio: 25.1 },
    competitor4YoY: { operating: 16.7, investment: 20.0, financing: 16.7, freeCashFlowMargin: 5.5, cashFlowToDebtRatio: 8.7 },
    competitor5: { operating: 10.1, investment: -2.9, financing: -3.6, freeCashFlowMargin: 16.7, cashFlowToDebtRatio: 29.1 },
    competitor5YoY: { operating: 16.1, investment: 16.0, financing: 16.1, freeCashFlowMargin: 5.0, cashFlowToDebtRatio: 8.6 }
  }
]
