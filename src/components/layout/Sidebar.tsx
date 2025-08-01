import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { 
  BarChart3, 
  TrendingUp, 
  Newspaper, 
  Target,
  Building2,
  Settings
} from 'lucide-react'

const navigationItems = [
  {
    name: 'Summary',
    href: '/',
    icon: BarChart3,
  },
  {
    name: 'Financial Performance',
    href: '/financial-performance',
    icon: TrendingUp,
  },
  {
    name: 'Company Management',
    href: '/company-management',
    icon: Settings,
  },
  {
    name: 'News & Events',
    href: '/news',
    icon: Newspaper,
  },
  {
    name: 'Industry KPIs',
    href: '/industry-kpis',
    icon: Target,
  },
]

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700 shadow-xl">
      {/* Logo/Header */}
      <div className="flex h-16 items-center border-b border-slate-700 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="flex items-center gap-2 font-bold text-white">
          <Building2 className="h-6 w-6" />
          <span className="text-lg">ClientBench</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-auto py-6">
        <nav className="grid items-start px-4 gap-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-slate-700 hover:text-white",
                    isActive 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" 
                      : "text-slate-300"
                  )
                }
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            )
          })}
        </nav>
      </div>
      
      {/* Footer */}
      <div className="border-t border-slate-700 p-4">
        <div className="text-xs text-slate-400 text-center">
          ClientBench Platform
        </div>
      </div>
    </div>
  )
}
