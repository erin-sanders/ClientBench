from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional
import json

app = FastAPI(title="ClientBench API", version="1.0.0")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for API
class Company(BaseModel):
    ticker: str
    name: str
    industry: str
    market_cap: float
    is_client: bool

class FinancialMetrics(BaseModel):
    year: int
    quarter: Optional[int] = None
    # Basic Financials
    revenue: float
    revenue_growth_rate: float
    gross_margin: float
    operating_margin: float
    net_income_margin: float
    ebitda_margin: float
    eps: float
    # Capital Efficiency
    roe: float
    roa: float
    roic: float
    asset_turnover_ratio: float
    # Cost Structure
    cogs_as_percent_of_revenue: float
    sga_as_percent_of_revenue: float
    rd_and_capex_as_percent_of_revenue: float
    # Growth Metrics
    revenue_growth_rate_yoy: float
    revenue_growth_rate_3year_cagr: float
    net_income_growth: float
    market_share_growth: Optional[float] = None
    # Liquidity & Solvency
    current_ratio: float
    quick_ratio: float
    debt_to_equity: float
    interest_coverage_ratio: float
    # Valuation
    market_cap: Optional[float] = None
    pe_ratio: Optional[float] = None
    ev_ebitda: Optional[float] = None
    price_to_sales: Optional[float] = None

class CompanyFinancialData(BaseModel):
    company: Company
    financial_metrics: List[FinancialMetrics]
    last_updated: datetime

# Sample data (hard-coded for now)
SAMPLE_DATA = [
    {
        "company": {
            "ticker": "AAPL",
            "name": "Apple Inc.",
            "industry": "Technology",
            "market_cap": 3000000000000,
            "is_client": True
        },
        "financial_metrics": [
            {
                "year": 2024,
                "revenue": 383285000000,
                "revenue_growth_rate": 2.8,
                "gross_margin": 45.6,
                "operating_margin": 30.1,
                "net_income_margin": 25.3,
                "ebitda_margin": 33.2,
                "eps": 6.13,
                "roe": 147.4,
                "roa": 22.6,
                "roic": 29.2,
                "asset_turnover_ratio": 1.12,
                "cogs_as_percent_of_revenue": 54.4,
                "sga_as_percent_of_revenue": 15.5,
                "rd_and_capex_as_percent_of_revenue": 8.1,
                "revenue_growth_rate_yoy": 2.8,
                "revenue_growth_rate_3year_cagr": 8.9,
                "net_income_growth": 3.6,
                "current_ratio": 0.95,
                "quick_ratio": 0.83,
                "debt_to_equity": 1.73,
                "interest_coverage_ratio": 28.5,
                "market_cap": 3000000000000,
                "pe_ratio": 29.2,
                "ev_ebitda": 22.8,
                "price_to_sales": 7.8
            }
        ],
        "last_updated": "2024-07-31T00:00:00"
    }
]

@app.get("/")
async def root():
    return {"message": "ClientBench API"}

@app.get("/api/companies", response_model=List[Company])
async def get_companies():
    """Get all companies"""
    companies = [data["company"] for data in SAMPLE_DATA]
    return companies

@app.get("/api/companies/clients", response_model=List[Company])
async def get_client_companies():
    """Get only client companies"""
    companies = [data["company"] for data in SAMPLE_DATA if data["company"]["is_client"]]
    return companies

@app.get("/api/companies/competitors", response_model=List[Company])
async def get_competitor_companies():
    """Get only competitor companies"""
    companies = [data["company"] for data in SAMPLE_DATA if not data["company"]["is_client"]]
    return companies

@app.get("/api/financial-data", response_model=List[CompanyFinancialData])
async def get_all_financial_data():
    """Get financial data for all companies"""
    return SAMPLE_DATA

@app.get("/api/financial-data/{ticker}", response_model=CompanyFinancialData)
async def get_financial_data_by_ticker(ticker: str):
    """Get financial data for specific company"""
    for data in SAMPLE_DATA:
        if data["company"]["ticker"] == ticker.upper():
            return data
    return {"error": "Company not found"}, 404

@app.post("/api/financial-data/{ticker}")
async def update_financial_data(ticker: str, metrics: FinancialMetrics):
    """Update financial data for a company"""
    # This would normally update the database
    # For now, just return success
    return {"message": f"Financial data updated for {ticker}", "data": metrics}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
