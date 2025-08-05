import { useState } from 'react'
import { CompanySelector } from '@/components/CompanySelector'

interface Company {
  ticker: string
  name?: string
  type: 'client' | 'competitor'
}

export function CompanyManagementPage() {
  const [selectedCompanies, setSelectedCompanies] = useState<Company[]>([])

  const handleCompaniesChange = (companies: Company[]) => {
    setSelectedCompanies(companies)
    console.log('Selected companies:', companies)
    // Here you would typically save to your state management system or API
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">
          Client Settings
        </h1>
        <p className="text-slate-600 text-lg">
          Configure your client company and competitors for ClientBench analysis
        </p>
      </div>

      {/* Company Selector */}
      <div className="max-w-4xl">
        <CompanySelector 
          onCompaniesChange={handleCompaniesChange}
          initialCompanies={[
            { ticker: 'AAPL', name: 'Apple Inc.', type: 'client' },
            { ticker: 'SSNLF', name: 'Samsung Electronics Co., Ltd.', type: 'competitor' },
            { ticker: 'GOOGL', name: 'Alphabet Inc.', type: 'competitor' },
            { ticker: 'MSFT', name: 'Microsoft Corporation', type: 'competitor' },
            { ticker: 'DELL', name: 'Dell Technologies Inc.', type: 'competitor' },
            { ticker: 'HPQ', name: 'HP Inc.', type: 'competitor' }
          ]}
        />
      </div>

      {/* Selected Companies Preview */}
      {selectedCompanies.length > 0 && (
        <div className="max-w-4xl mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Current Selection
            </h3>
            <div className="space-y-2">
              {selectedCompanies.map((company, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-blue-600">
                      {company.ticker}
                    </span>
                    {company.name && (
                      <span className="text-slate-600">{company.name}</span>
                    )}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    company.type === 'client' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {company.type === 'client' ? 'Primary Client' : 'Competitor'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
