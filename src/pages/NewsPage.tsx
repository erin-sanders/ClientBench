import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RefreshCw, Plus, Newspaper, Clock, ExternalLink, TrendingUp, AlertTriangle, Info } from 'lucide-react'

export function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Company Reports Strong Q3 Earnings, Beats Analyst Expectations",
      source: "Financial Times",
      time: "2 hours ago",
      category: "earnings",
      impact: "positive",
      summary: "Revenue increased 22% YoY with improved margins across all business segments."
    },
    {
      id: 2,
      title: "New Product Launch Expected to Drive Growth in Enterprise Segment",
      source: "TechCrunch",
      time: "5 hours ago",
      category: "product",
      impact: "positive",
      summary: "Innovative AI-powered solution targets $15B enterprise market opportunity."
    },
    {
      id: 3,
      title: "Industry Regulatory Changes May Impact Profit Margins",
      source: "Reuters",
      time: "1 day ago",
      category: "regulatory",
      impact: "negative",
      summary: "New compliance requirements expected to increase operational costs by 3-5%."
    },
    {
      id: 4,
      title: "Competitor Announces Major Acquisition in Core Market",
      source: "Wall Street Journal",
      time: "2 days ago",
      category: "competitive",
      impact: "negative",
      summary: "Strategic acquisition strengthens competitor's position in key growth market."
    },
    {
      id: 5,
      title: "Market Research Firm Upgrades Industry Outlook",
      source: "Bloomberg",
      time: "3 days ago",
      category: "industry",
      impact: "positive",
      summary: "Sector expected to see 15-20% growth over next 18 months."
    }
  ]

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'positive':
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case 'negative':
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      default:
        return <Info className="h-4 w-4 text-blue-600" />
    }
  }

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'positive':
        return <Badge variant="success">Positive</Badge>
      case 'negative':
        return <Badge variant="destructive">Negative</Badge>
      default:
        return <Badge variant="secondary">Neutral</Badge>
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'earnings':
        return 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20'
      case 'product':
        return 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20'
      case 'regulatory':
        return 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20'
      case 'competitive':
        return 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20'
      case 'industry':
        return 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20'
      default:
        return 'from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20'
    }
  }

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            News & Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Stay informed with the latest company and industry developments
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="shadow-sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh News
          </Button>
          <Button className="shadow-sm bg-purple-600 hover:bg-purple-700">
            <Plus className="mr-2 h-4 w-4" />
            Add News Source
          </Button>
        </div>
      </div>

      {/* News Categories Filter */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
          <CardTitle className="flex items-center gap-2">
            📰 News Categories
          </CardTitle>
          <CardDescription>Filter news by category and impact</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="px-4 py-2 text-sm">All News</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">Earnings</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">Product Updates</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">Regulatory</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">Competitive</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">Industry</Badge>
          </div>
        </CardContent>
      </Card>

      {/* News Feed */}
      <div className="space-y-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className={`bg-gradient-to-r ${getCategoryColor(item.category)}`}>
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <Newspaper className="h-5 w-5" />
                    <Badge variant="outline" className="capitalize">{item.category}</Badge>
                    {getImpactBadge(item.impact)}
                  </div>
                  <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium">{item.source}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.time}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  {getImpactIcon(item.impact)}
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">{item.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Events Calendar */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
          <CardTitle className="text-xl flex items-center gap-2">
            📅 Upcoming Events
          </CardTitle>
          <CardDescription className="text-base">
            Important dates and market events to watch
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
              <div className="space-y-2">
                <Badge variant="info">Earnings</Badge>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Q4 Earnings Call</h4>
                <p className="text-sm text-blue-600 dark:text-blue-400">January 25, 2024</p>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
              <div className="space-y-2">
                <Badge variant="success">Conference</Badge>
                <h4 className="font-semibold text-green-700 dark:text-green-300">Tech Innovation Summit</h4>
                <p className="text-sm text-green-600 dark:text-green-400">February 8-10, 2024</p>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg">
              <div className="space-y-2">
                <Badge variant="outline">Regulatory</Badge>
                <h4 className="font-semibold text-orange-700 dark:text-orange-300">Compliance Deadline</h4>
                <p className="text-sm text-orange-600 dark:text-orange-400">March 15, 2024</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
