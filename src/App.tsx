import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { SummaryPage } from './pages/SummaryPage'
import { FinancialPerformancePage } from './pages/FinancialPerformancePage'
import { CompanyManagementPage } from './pages/CompanyManagementPage'
import { NewsPage } from './pages/NewsPage'
import { IndustryKPIsPage } from './pages/IndustryKPIsPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SummaryPage />} />
          <Route path="/financial-performance" element={<FinancialPerformancePage />} />
          <Route path="/company-management" element={<CompanyManagementPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/industry-kpis" element={<IndustryKPIsPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
