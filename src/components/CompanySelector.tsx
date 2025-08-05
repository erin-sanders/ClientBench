import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Building2, Plus, X, Save, AlertCircle } from 'lucide-react'

interface Company {
  ticker: string
  name?: string
  type: 'client' | 'competitor'
}

interface CompanySelectorProps {
  onCompaniesChange: (companies: Company[]) => void
  initialCompanies?: Company[]
}

export function CompanySelector({ onCompaniesChange, initialCompanies = [] }: CompanySelectorProps) {
  const [companies, setCompanies] = useState<Company[]>(initialCompanies.length > 0 ? initialCompanies : [
    { ticker: '', name: '', type: 'client' }
  ])
  const [newCompetitorTicker, setNewCompetitorTicker] = useState('')

  const updateCompany = (index: number, updates: Partial<Company>) => {
    const updatedCompanies = companies.map((company, i) => 
      i === index ? { ...company, ...updates } : company
    )
    setCompanies(updatedCompanies)
  }

  const addCompetitor = () => {
    if (newCompetitorTicker.trim() && companies.filter(c => c.type === 'competitor').length < 5) {
      const newCompetitor: Company = {
        ticker: newCompetitorTicker.trim().toUpperCase(),
        name: '',
        type: 'competitor'
      }
      const updatedCompanies = [...companies, newCompetitor]
      setCompanies(updatedCompanies)
      setNewCompetitorTicker('')
    }
  }

  const removeCompetitor = (index: number) => {
    const updatedCompanies = companies.filter((_, i) => i !== index)
    setCompanies(updatedCompanies)
  }

  const saveCompanies = () => {
    const validCompanies = companies.filter(company => company.ticker.trim() !== '')
    onCompaniesChange(validCompanies)
  }

  const clientCompany = companies.find(c => c.type === 'client')
  const competitors = companies.filter(c => c.type === 'competitor')
  const canAddMore = competitors.length < 5

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardTitle className="text-xl flex items-center gap-2 text-blue-700">
          <Building2 className="h-6 w-6 text-blue-600" />
          Company Selection
        </CardTitle>
        <p className="text-blue-600 text-sm mt-2">
          Specify your primary client and up to 5 competitors using stock ticker symbols
        </p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Primary Client */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Label className="text-base font-semibold text-slate-700">Primary Client</Label>
            <Badge variant="default" className="bg-emerald-100 text-emerald-700 border-emerald-200">
              Required
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="client-ticker" className="text-sm text-slate-600">Stock Ticker Symbol</Label>
              <Input
                id="client-ticker"
                placeholder="e.g., AAPL, SSNLF, MSFT, DELL, HPQ, GOOGL"
                value={clientCompany?.ticker || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCompany(0, { ticker: e.target.value.toUpperCase() })}
                className="font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="client-name" className="text-sm text-slate-600">Company Name (Optional)</Label>
              <Input
                id="client-name"
                placeholder="e.g., Apple Inc."
                value={clientCompany?.name || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCompany(0, { name: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Competitors */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Label className="text-base font-semibold text-slate-700">Competitors</Label>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                {competitors.length}/5
              </Badge>
            </div>
            {competitors.length === 0 && (
              <div className="flex items-center gap-1 text-amber-600 text-xs">
                <AlertCircle className="h-3 w-3" />
                Add at least one competitor for comparison
              </div>
            )}
          </div>

          {/* Existing Competitors */}
          <div className="space-y-3">
            {competitors.map((competitor) => {
              const actualIndex = companies.findIndex(c => c === competitor)
              return (
                <div key={actualIndex} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                    <Input
                      placeholder="Ticker Symbol"
                      value={competitor.ticker}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCompany(actualIndex, { ticker: e.target.value.toUpperCase() })}
                      className="font-mono text-sm"
                    />
                    <Input
                      placeholder="Company Name (Optional)"
                      value={competitor.name || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCompany(actualIndex, { name: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeCompetitor(actualIndex)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )
            })}
          </div>

          {/* Add New Competitor */}
          {canAddMore && (
            <div className="flex items-center gap-3 p-3 border-2 border-dashed border-slate-200 rounded-lg">
              <Input
                placeholder="Enter ticker symbol (e.g., MSFT, DELL, HPQ)"
                value={newCompetitorTicker}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewCompetitorTicker(e.target.value.toUpperCase())}
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addCompetitor()}
                className="font-mono"
              />
              <Button
                onClick={addCompetitor}
                disabled={!newCompetitorTicker.trim()}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add
              </Button>
            </div>
          )}

          {!canAddMore && (
            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-700 text-sm">
                Maximum of 5 competitors reached. Remove a competitor to add a new one.
              </p>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-600">
              <span className="font-medium">Selected Companies:</span> {companies.filter(c => c.ticker.trim()).length} 
              ({clientCompany?.ticker ? 1 : 0} client + {competitors.filter(c => c.ticker.trim()).length} competitors)
            </div>
            <Button 
              onClick={saveCompanies}
              disabled={!clientCompany?.ticker.trim()}
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Selection
            </Button>
          </div>
        </div>

        {/* Validation Messages */}
        {!clientCompany?.ticker.trim() && (
          <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">Please enter a ticker symbol for your primary client.</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
